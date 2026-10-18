import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Terminal } from '../../shared/terminal/terminal';
import { SectionIndexComponent, SectionIndexItem } from '../../shared/components/section-index/section-index';

@Component({
  selector: 'app-common-services',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, Terminal, SectionIndexComponent],
  templateUrl: './common-services.html',
  styleUrl: './common-services.scss',
})
export class CommonServicesComponent implements OnInit {

  selectedService: string | null = 'ssh';
  readonly services: SectionIndexItem[] = [
    { id: 'ssh', label: 'SSH' },
    { id: 'ftp', label: 'FTP' },
    { id: 'smb', label: 'SMB' },
    { id: 'http', label: 'HTTP / HTTPS' },
    { id: 'smtp', label: 'SMTP' },
    { id: 'snmp', label: 'SNMP' },
    { id: 'ldap', label: 'LDAP' },
    { id: 'rdp', label: 'RDP' },
    { id: 'databases', label: 'Databases' }
  ];
  sshAuthenticationExpanded = false;
  ftpAuthenticationExpanded = false;

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(params => {
        const service = params.get('service');
        const panel = params.get('panel');

        if (service && this.services.some(item => item.id === service)) {
          this.selectedService = service;
          this.sshAuthenticationExpanded = panel === 'ssh-authentication';
          this.ftpAuthenticationExpanded = panel === 'ftp-authentication';
        }
      });
  }


  // =========================================================
  // NAVIGATION
  // =========================================================

  selectService(service: string): void {
    this.selectedService = service;
    this.sshAuthenticationExpanded = false;
    this.ftpAuthenticationExpanded = false;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { service },
      replaceUrl: true
    });
  }

  clearService(): void {
    this.selectedService = 'ssh';
    this.sshAuthenticationExpanded = false;
    this.ftpAuthenticationExpanded = false;

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      replaceUrl: true
    });
  }


  // =========================================================
  // SSH
  // =========================================================

  sshEnumeration = `
# Identify SSH version and supported methods
nmap -p 22 -sV -sC -Pn target_ip -oN ssh_scan

# Check available authentication methods
nmap --script ssh-auth-methods -p 22 target_ip

# Grab the SSH banner manually
nc target_ip 22
`;

  sshAuthentication = `
# Test a single username with a password list
hydra -l root -P rockyou.txt ssh://target_ip

# Test multiple usernames and passwords
hydra -L users.txt -P rockyou.txt ssh://target_ip

# Authenticate using discovered credentials
ssh user@target_ip
`;

  sshKeys = `
# Search for exposed private SSH keys
find / -name "id_rsa" 2>/dev/null

# Check user SSH directories
ls -la /home/*/.ssh/

# Check root SSH directory
ls -la /root/.ssh/

# Fix private key permissions
chmod 600 id_rsa

# Authenticate using the discovered key
ssh -i id_rsa user@target_ip
`;

  sshTunneling = `
# Forward remote port 80 to local port 8080
ssh -L 8080:127.0.0.1:80 user@target_ip

# Create a SOCKS proxy through the target
ssh -D 9050 user@target_ip

# Forward a local port through the remote host
ssh -R 4444:localhost:4444 user@target_ip
`;


  // =========================================================
  // FTP
  // =========================================================

  ftpEnumeration = `
# Identify FTP version and configuration
nmap -p 21 -sV -sC -Pn target_ip -oN ftp_scan

# Check for anonymous access
nmap --script ftp-anon -p 21 target_ip

# Connect to the FTP service
ftp target_ip
`;

  ftpAuthentication = `
# Connect using discovered credentials
ftp target_ip

# Test multiple usernames and passwords
hydra -L users.txt -P rockyou.txt ftp://target_ip
`;

  ftpFiles = `
# Download the entire anonymous FTP tree
wget -m ftp://anonymous:anonymous@target_ip

# List downloaded files
find . -type f

# Search for interesting backup and configuration files
find . -type f \\( -name "*.bak" -o -name "*.conf" -o -name "*.zip" \\)
`;


  // =========================================================
  // SMB
  // =========================================================

  smbEnumeration = `
# Identify SMB versions and basic information
nmap -p 139,445 -sV -sC target_ip

# Enumerate shares without credentials
smbclient -L //target_ip -N

# Check share permissions
smbmap -H target_ip
`;

  smbShares = `
# List the top-level contents of an SMB share anonymously
smbclient //target_ip/share -N -c "ls"

# Download files recursively into a local directory
mkdir -p share-downloads
smbclient //target_ip/share -N -c "lcd share-downloads; recurse ON; prompt OFF; mget *"
`;

  smbCredentials = `
# Find potentially interesting files
find . -type f \\( -name "*.txt" -o -name "*.conf" -o -name "*.ini" \\)

# Search for password references
grep -Rni "password" .

# Search for passwd references
grep -Rni "passwd" .

# Search for credential references
grep -Rni "credential" .
`;


  // =========================================================
  // HTTP / HTTPS
  // =========================================================

  httpEnumeration = `
# Identify the web server and technologies
nmap -p 80,443 -sV -sC target_ip

# Inspect HTTP response headers
curl -I http://target_ip

# Identify technologies used by the application
whatweb http://target_ip
`;

  httpDirectories = `
# Discover hidden directories and files
ffuf -u http://target_ip/FUZZ \\
-w wordlist.txt

# Enumerate directories with Gobuster
gobuster dir \\
-u http://target_ip \\
-w wordlist.txt
`;

  httpVhosts = `
# Replace example.com with the target's discovered DNS domain
ffuf -u http://target_ip/ \\
-H "Host: FUZZ.example.com" \\
-w subdomains.txt
`;


  // =========================================================
  // SMTP
  // =========================================================

  smtpEnumeration = `
# Identify SMTP software and configuration
nmap -p 25,465,587 -sV -sC target_ip

# Connect to the SMTP service manually
nc target_ip 25

# Enumerate supported SMTP commands
nmap --script smtp-commands -p 25 target_ip
`;

  smtpUsers = `
# Enumerate users using SMTP
nmap --script smtp-enum-users -p 25 target_ip

# Test usernames using VRFY
smtp-user-enum -M VRFY -U users.txt -t target_ip

# Test usernames using RCPT
smtp-user-enum -M RCPT -U users.txt -t target_ip
`;

  smtpRelay = `
# Check whether the server allows open relay
nmap --script smtp-open-relay -p 25 target_ip
`;


  // =========================================================
  // SNMP
  // =========================================================

  snmpEnumeration = `
# Identify SNMP version and exposed information
nmap -sU -p 161 -sV -sC target_ip

# Query SNMP using the default public community
snmpwalk -v2c -c public target_ip

# Perform automated SNMP enumeration
snmp-check target_ip -c public
`;

  snmpCommunity = `
# Test a list of possible community strings
onesixtyone -c community.txt target_ip

# Query the target using a discovered community string
community="public"  # replace with the community string discovered above
snmpwalk -v2c -c "$community" target_ip
`;

  snmpInformation = `
# Enumerate general system information
snmpwalk -v2c -c public target_ip 1.3.6.1.2.1.1

# Enumerate running processes
snmpwalk -v2c -c public target_ip \\
HOST-RESOURCES-MIB::hrSWRunName

# Enumerate installed software
snmpwalk -v2c -c public target_ip \\
HOST-RESOURCES-MIB::hrSWInstalledName
`;


  // =========================================================
  // LDAP
  // =========================================================

  ldapBase = `
# Discover the LDAP naming context
ldapsearch -x -H ldap://target_ip -s base
`;

  ldapUsers = `
# Enumerate domain user objects
ldapsearch -x -H ldap://target_ip \\
-b "DC=domain,DC=local" \\
"(objectClass=user)"
`;

  ldapAuthenticated = `
# Perform authenticated LDAP enumeration
ldapsearch -x -H ldap://target_ip \\
-D "user@domain.local" \\
-w "password" \\
-b "DC=domain,DC=local"
`;


  // =========================================================
  // RDP
  // =========================================================

  rdpEnumeration = `
# Identify RDP version and configuration
nmap -p 3389 -sV -sC target_ip

# Retrieve NTLM information from RDP
nmap --script rdp-ntlm-info \\
-p 3389 target_ip

# Check RDP security and encryption settings
nmap --script rdp-enum-encryption \\
-p 3389 target_ip
`;

  rdpConnection = `
# Connect to the remote desktop
xfreerdp /u:user /p:password /v:target_ip
`;


  // =========================================================
  // DATABASES
  // =========================================================

  mysqlEnumeration = `
# Identify MySQL version and configuration
nmap -p 3306 -sV -sC target_ip

# Retrieve MySQL server information
nmap --script mysql-info \\
-p 3306 target_ip

# Connect using MySQL credentials
mysql -h target_ip -u root -p
`;

  mssqlEnumeration = `
# Identify MSSQL version and configuration
nmap -p 1433 -sV -sC target_ip

# Retrieve MSSQL server information
nmap --script ms-sql-info \\
-p 1433 target_ip

# Check for an empty MSSQL password
nmap --script ms-sql-empty-password \\
-p 1433 target_ip
`;

  postgresEnumeration = `
# Identify PostgreSQL version and configuration
nmap -p 5432 -sV -sC target_ip

# Connect to PostgreSQL
psql -h target_ip -U postgres

# Test PostgreSQL credentials
nmap --script pgsql-brute \\
-p 5432 target_ip
`;
}