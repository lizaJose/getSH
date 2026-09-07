import{a as y,b as E,c as b,e as P,f as M}from"./chunk-VFOKBMI4.js";import{e as S,f as C}from"./chunk-7BWD45GD.js";import{$a as d,Ha as v,La as _,Ua as r,Va as t,W as x,Wa as e,X as g,Xa as m,ab as u,bb as f,cb as h,db as s,mb as n,va as a}from"./chunk-ETCZ6OUV.js";function k(o,l){if(o&1){let i=f();t(0,"div",8)(1,"div",9),h("click",function(){x(i);let p=s();return g(p.selectService("ssh"))}),t(2,"div",10),n(3,">_"),e(),t(4,"div",11)(5,"h2"),n(6,"SSH"),e(),t(7,"p"),n(8,"Remote access, authentication, keys and tunneling."),e()()(),t(9,"div",9),h("click",function(){x(i);let p=s();return g(p.selectService("ftp"))}),t(10,"div",10),n(11,"\u25C9"),e(),t(12,"div",11)(13,"h2"),n(14,"FTP"),e(),t(15,"p"),n(16,"File transfer, anonymous access and credential discovery."),e()()(),t(17,"div",9),h("click",function(){x(i);let p=s();return g(p.selectService("smb"))}),t(18,"div",10),n(19,"\u25C8"),e(),t(20,"div",11)(21,"h2"),n(22,"SMB"),e(),t(23,"p"),n(24,"Shares, permissions, users and credential exposure."),e()()(),t(25,"div",9),h("click",function(){x(i);let p=s();return g(p.selectService("smtp"))}),t(26,"div",10),n(27,"@"),e(),t(28,"div",11)(29,"h2"),n(30,"SMTP"),e(),t(31,"p"),n(32,"Mail server enumeration and user discovery."),e()()(),t(33,"div",9),h("click",function(){x(i);let p=s();return g(p.selectService("snmp"))}),t(34,"div",10),n(35,"\u25C7"),e(),t(36,"div",11)(37,"h2"),n(38,"SNMP"),e(),t(39,"p"),n(40,"System information, community strings and network data."),e()()(),t(41,"div",9),h("click",function(){x(i);let p=s();return g(p.selectService("ldap"))}),t(42,"div",10),n(43,"\u25C6"),e(),t(44,"div",11)(45,"h2"),n(46,"LDAP"),e(),t(47,"p"),n(48,"Directory, users, groups and domain enumeration."),e()()(),t(49,"div",9),h("click",function(){x(i);let p=s();return g(p.selectService("rdp"))}),t(50,"div",10),n(51,"\u25A3"),e(),t(52,"div",11)(53,"h2"),n(54,"RDP"),e(),t(55,"p"),n(56,"Remote Desktop enumeration and authentication."),e()()()()}}function T(o,l){if(o&1&&(d(0),t(1,"h2"),n(2,"SSH"),e(),t(3,"p",15),n(4," SSH provides remote shell access. Focus on identifying the version, authentication methods, credentials and exposed keys before attempting access. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Enumeration"),e()(),m(9,"app-terminal",16),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Authentication"),e()(),m(14,"app-terminal",16),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"SSH Keys"),e()(),m(19,"app-terminal",16),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23,"Tunneling & Pivoting"),e()(),m(24,"app-terminal",16),e(),u()),o&2){let i=s(2);a(9),r("command",i.sshEnumeration),a(5),r("command",i.sshAuthentication),a(5),r("command",i.sshKeys),a(5),r("command",i.sshTunneling)}}function O(o,l){if(o&1&&(d(0),t(1,"h2"),n(2,"FTP"),e(),t(3,"p",15),n(4," FTP is primarily a file transfer service. Check for anonymous access, readable or writable directories and files that may expose credentials or other services. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Enumeration"),e()(),m(9,"app-terminal",16),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Authentication"),e()(),m(14,"app-terminal",16),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"File Discovery"),e()(),m(19,"app-terminal",16),e(),u()),o&2){let i=s(2);a(9),r("command",i.ftpEnumeration),a(5),r("command",i.ftpAuthentication),a(5),r("command",i.ftpFiles)}}function I(o,l){if(o&1&&(d(0),t(1,"h2"),n(2,"SMB"),e(),t(3,"p",15),n(4," SMB exposes network shares and Windows resources. Look for anonymous access, readable or writable shares, sensitive files and credentials. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Enumeration"),e()(),m(9,"app-terminal",16),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Share Access"),e()(),m(14,"app-terminal",16),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Credential Hunting"),e()(),m(19,"app-terminal",16),e(),u()),o&2){let i=s(2);a(9),r("command",i.smbEnumeration),a(5),r("command",i.smbShares),a(5),r("command",i.smbCredentials)}}function D(o,l){if(o&1&&(d(0),t(1,"h2"),n(2,"HTTP / HTTPS"),e(),t(3,"p",15),n(4," Web services expose applications, APIs and administrative interfaces. Start with technology identification, directories, virtual hosts and authentication points. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Initial Enumeration"),e()(),m(9,"app-terminal",16),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Directory Discovery"),e()(),m(14,"app-terminal",16),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Virtual Hosts"),e()(),m(19,"app-terminal",16),e(),u()),o&2){let i=s(2);a(9),r("command",i.httpEnumeration),a(5),r("command",i.httpDirectories),a(5),r("command",i.httpVhosts)}}function V(o,l){if(o&1&&(d(0),t(1,"h2"),n(2,"SMTP"),e(),t(3,"p",15),n(4," SMTP can reveal mail infrastructure, domains and valid users. Check supported commands and whether user enumeration is possible. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Enumeration"),e()(),m(9,"app-terminal",16),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"User Enumeration"),e()(),m(14,"app-terminal",16),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Relay Testing"),e()(),m(19,"app-terminal",16),e(),u()),o&2){let i=s(2);a(9),r("command",i.smtpEnumeration),a(5),r("command",i.smtpUsers),a(5),r("command",i.smtpRelay)}}function R(o,l){if(o&1&&(d(0),t(1,"h2"),n(2,"SNMP"),e(),t(3,"p",15),n(4," SNMP is mainly used for information gathering. Check for exposed community strings such as "),t(5,"code"),n(6,"public"),e(),n(7,", which may reveal users, processes, interfaces and other system information. "),e(),t(8,"mat-expansion-panel")(9,"mat-expansion-panel-header")(10,"mat-panel-title"),n(11,"Enumeration"),e()(),m(12,"app-terminal",16),e(),t(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),n(16,"Community Strings"),e()(),m(17,"app-terminal",16),e(),t(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),n(21,"Information Gathering"),e()(),m(22,"app-terminal",16),e(),u()),o&2){let i=s(2);a(12),r("command",i.snmpEnumeration),a(5),r("command",i.snmpCommunity),a(5),r("command",i.snmpInformation)}}function F(o,l){if(o&1&&(d(0),t(1,"h2"),n(2,"LDAP"),e(),t(3,"p",15),n(4," LDAP provides structured directory information. Enumerate the naming context, users, groups and other objects that may help map the domain. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Base Discovery"),e()(),m(9,"app-terminal",16),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"User Enumeration"),e()(),m(14,"app-terminal",16),e(),t(15,"mat-expansion-panel")(16,"mat-panel-title"),n(17,"Authenticated Enumeration"),e()(),m(18,"app-terminal",16),u()),o&2){let i=s(2);a(9),r("command",i.ldapBase),a(5),r("command",i.ldapUsers),a(4),r("command",i.ldapAuthenticated)}}function L(o,l){if(o&1&&(d(0),t(1,"h2"),n(2,"RDP"),e(),t(3,"p",15),n(4," RDP provides remote graphical access to Windows systems. Identify the service, security configuration and available authentication paths. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Enumeration"),e()(),m(9,"app-terminal",16),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Connection"),e()(),m(14,"app-terminal",16),e(),u()),o&2){let i=s(2);a(9),r("command",i.rdpEnumeration),a(5),r("command",i.rdpConnection)}}function H(o,l){if(o&1&&(d(0),t(1,"h2"),n(2,"Databases"),e(),t(3,"p",15),n(4," Exposed databases can provide application data, credentials and sometimes direct access to the underlying system. Identify the database and authentication first. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"MySQL"),e()(),m(9,"app-terminal",16),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"MSSQL"),e()(),m(14,"app-terminal",16),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"PostgreSQL"),e()(),m(19,"app-terminal",16),e(),u()),o&2){let i=s(2);a(9),r("command",i.mysqlEnumeration),a(5),r("command",i.mssqlEnumeration),a(5),r("command",i.postgresEnumeration)}}function A(o,l){if(o&1){let i=f();t(0,"div",12)(1,"button",13),h("click",function(){x(i);let p=s();return g(p.clearService())}),n(2," \u2190 Back to Common Services "),e(),_(3,T,25,4,"ng-container",14)(4,O,20,3,"ng-container",14)(5,I,20,3,"ng-container",14)(6,D,20,3,"ng-container",14)(7,V,20,3,"ng-container",14)(8,R,23,3,"ng-container",14)(9,F,19,3,"ng-container",14)(10,L,15,2,"ng-container",14)(11,H,20,3,"ng-container",14),e()}if(o&2){let i=s();a(3),r("ngIf",i.selectedService==="ssh"),a(),r("ngIf",i.selectedService==="ftp"),a(),r("ngIf",i.selectedService==="smb"),a(),r("ngIf",i.selectedService==="http"),a(),r("ngIf",i.selectedService==="smtp"),a(),r("ngIf",i.selectedService==="snmp"),a(),r("ngIf",i.selectedService==="ldap"),a(),r("ngIf",i.selectedService==="rdp"),a(),r("ngIf",i.selectedService==="databases")}}var w=class o{selectedService=null;selectService(l){this.selectedService=l}clearService(){this.selectedService=null}sshEnumeration=`
# Identify SSH version and supported methods
nmap -p 22 -sV -sC -Pn target_ip -oN ssh_scan

# Check available authentication methods
nmap --script ssh-auth-methods -p 22 target_ip

# Grab the SSH banner manually
nc target_ip 22
`;sshAuthentication=`
# Test a single username with a password list
hydra -l root -P rockyou.txt ssh://target_ip

# Test multiple usernames and passwords
hydra -L users.txt -P rockyou.txt ssh://target_ip

# Authenticate using discovered credentials
ssh user@target_ip
`;sshKeys=`
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
`;sshTunneling=`
# Forward remote port 80 to local port 8080
ssh -L 8080:127.0.0.1:80 user@target_ip

# Create a SOCKS proxy through the target
ssh -D 9050 user@target_ip

# Forward a local port through the remote host
ssh -R 4444:localhost:4444 user@target_ip
`;ftpEnumeration=`
# Identify FTP version and configuration
nmap -p 21 -sV -sC -Pn target_ip -oN ftp_scan

# Check for anonymous access
nmap --script ftp-anon -p 21 target_ip

# Connect to the FTP service
ftp target_ip
`;ftpAuthentication=`
# Connect using discovered credentials
ftp target_ip

# Test multiple usernames and passwords
hydra -L users.txt -P rockyou.txt ftp://target_ip
`;ftpFiles=`
# Download the entire anonymous FTP tree
wget -m ftp://anonymous:anonymous@target_ip

# List downloaded files
find . -type f

# Search for interesting backup and configuration files
find . -type f \\( -name "*.bak" -o -name "*.conf" -o -name "*.zip" \\)
`;smbEnumeration=`
# Identify SMB versions and basic information
nmap -p 139,445 -sV -sC target_ip

# Enumerate shares without credentials
smbclient -L //target_ip -N

# Check share permissions
smbmap -H target_ip
`;smbShares=`
# Connect to an SMB share anonymously
smbclient //target_ip/share -N

# Recursively list files inside the share
smbclient //target_ip/share -N \\
-c "recurse ON; prompt OFF; ls"
`;smbCredentials=`
# Find potentially interesting files
find . -type f \\( -name "*.txt" -o -name "*.conf" -o -name "*.ini" \\)

# Search for password references
grep -Rni "password" .

# Search for passwd references
grep -Rni "passwd" .

# Search for credential references
grep -Rni "credential" .
`;httpEnumeration=`
# Identify the web server and technologies
nmap -p 80,443 -sV -sC target_ip

# Inspect HTTP response headers
curl -I http://target_ip

# Identify technologies used by the application
whatweb http://target_ip
`;httpDirectories=`
# Discover hidden directories and files
ffuf -u http://target_ip/FUZZ \\
-w wordlist.txt

# Enumerate directories with Gobuster
gobuster dir \\
-u http://target_ip \\
-w wordlist.txt
`;httpVhosts=`
# Discover virtual hosts
ffuf -u http://target_ip/ \\
-H "Host: FUZZ.target_ip" \\
-w subdomains.txt
`;smtpEnumeration=`
# Identify SMTP software and configuration
nmap -p 25,465,587 -sV -sC target_ip

# Connect to the SMTP service manually
nc target_ip 25

# Enumerate supported SMTP commands
nmap --script smtp-commands -p 25 target_ip
`;smtpUsers=`
# Enumerate users using SMTP
nmap --script smtp-enum-users -p 25 target_ip

# Test usernames using VRFY
smtp-user-enum -M VRFY -U users.txt -t target_ip

# Test usernames using RCPT
smtp-user-enum -M RCPT -U users.txt -t target_ip
`;smtpRelay=`
# Check whether the server allows open relay
nmap --script smtp-open-relay -p 25 target_ip
`;snmpEnumeration=`
# Identify SNMP version and exposed information
nmap -sU -p 161 -sV -sC target_ip

# Query SNMP using the default public community
snmpwalk -v2c -c public target_ip

# Perform automated SNMP enumeration
snmp-check target_ip -c public

# Discover valid community strings
onesixtyone -c community.txt target_ip
`;snmpCommunity=`
# Test a list of possible community strings
onesixtyone -c community.txt target_ip

# Query the target using a discovered community string
snmpwalk -v2c -c public target_ip
`;snmpInformation=`
# Enumerate general system information
snmpwalk -v2c -c public target_ip 1.3.6.1.2.1.1

# Enumerate running processes
snmpwalk -v2c -c public target_ip \\
HOST-RESOURCES-MIB::hrSWRunName

# Enumerate installed software
snmpwalk -v2c -c public target_ip \\
HOST-RESOURCES-MIB::hrSWInstalledName
`;ldapBase=`
# Discover the LDAP naming context
ldapsearch -x -H ldap://target_ip -s base
`;ldapUsers=`
# Enumerate domain user objects
ldapsearch -x -H ldap://target_ip \\
-b "DC=domain,DC=local" \\
"(objectClass=user)"
`;ldapAuthenticated=`
# Perform authenticated LDAP enumeration
ldapsearch -x -H ldap://target_ip \\
-D "user@domain.local" \\
-w "password" \\
-b "DC=domain,DC=local"
`;rdpEnumeration=`
# Identify RDP version and configuration
nmap -p 3389 -sV -sC target_ip

# Retrieve NTLM information from RDP
nmap --script rdp-ntlm-info \\
-p 3389 target_ip

# Check RDP security and encryption settings
nmap --script rdp-enum-encryption \\
-p 3389 target_ip
`;rdpConnection=`
# Connect to the remote desktop
xfreerdp /u:user /p:password /v:target_ip
`;mysqlEnumeration=`
# Identify MySQL version and configuration
nmap -p 3306 -sV -sC target_ip

# Retrieve MySQL server information
nmap --script mysql-info \\
-p 3306 target_ip

# Connect using MySQL credentials
mysql -h target_ip -u root -p
`;mssqlEnumeration=`
# Identify MSSQL version and configuration
nmap -p 1433 -sV -sC target_ip

# Retrieve MSSQL server information
nmap --script ms-sql-info \\
-p 1433 target_ip

# Check for an empty MSSQL password
nmap --script ms-sql-empty-password \\
-p 1433 target_ip
`;postgresEnumeration=`
# Identify PostgreSQL version and configuration
nmap -p 5432 -sV -sC target_ip

# Connect to PostgreSQL
psql -h target_ip -U postgres

# Test PostgreSQL credentials
nmap --script pgsql-brute \\
-p 5432 target_ip
`;static \u0275fac=function(i){return new(i||o)};static \u0275cmp=v({type:o,selectors:[["app-common-services"]],decls:12,vars:2,consts:[[1,"common-services-page"],[1,"page-header"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],["class","grid",4,"ngIf"],["class","detail",4,"ngIf"],[1,"grid"],[1,"card",3,"click"],[1,"card-icon"],[1,"card-content"],[1,"detail"],[1,"back",3,"click"],[4,"ngIf"],[1,"section-description"],[3,"command"]],template:function(i,c){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),n(4,"~/get.sh/"),e(),n(5,"common-services "),e(),t(6,"h1",4),n(7,"Common Services"),e(),t(8,"p",5),n(9," Enumeration, authentication and attack techniques for commonly exposed network services. "),e()(),_(10,k,57,0,"div",6)(11,A,12,9,"div",7),e()),i&2&&(a(10),r("ngIf",!c.selectedService),a(),r("ngIf",c.selectedService))},dependencies:[C,S,P,y,E,b,M],styles:[".common-services-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto}.page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.page-description[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:14px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.card[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1rem;min-height:130px;padding:1.25rem;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:16px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.card-content[_ngcontent-%COMP%]{min-width:0}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.5}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;color:#f8fafc}.section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px;line-height:1.6}.section-description[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace}.back[_ngcontent-%COMP%]{background:transparent;border:1px solid #334155;color:#e2e8f0;padding:8px 12px;border-radius:8px;cursor:pointer;width:fit-content;transition:background .2s ease,border-color .2s ease,color .2s ease}.back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important}mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px}mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-weight:600}pre[_ngcontent-%COMP%]{position:relative;background:#080d14;color:#38bdf8;padding:16px 18px 16px 38px;border-radius:8px;border:1px solid #1e293b;overflow-x:auto;margin:1rem 0 0;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;line-height:1.6;box-shadow:inset 0 0 20px #00000040}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:inherit}  .terminal-comment{color:#cbd5e1!important;opacity:1!important;font-style:italic;font-weight:500}@media(max-width:768px){.common-services-page[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{font-size:24px}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}}"]})};export{w as CommonServicesComponent};
