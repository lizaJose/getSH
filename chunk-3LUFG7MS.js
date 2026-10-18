import{a as M,b as w,c as T,e as k,f as O,g as I,h as D}from"./chunk-4Y2KKK2F.js";import"./chunk-BSVWT34Q.js";import{A as h,B as g,Da as i,F as v,T as a,Ta as C,Ua as E,Xa as b,Za as P,_ as S,ca as y,ja as r,ka as t,la as e,ma as s,qa as d,ra as u,sa as _,ta as f,ua as l,y as x}from"./chunk-VZSFBBH7.js";function F(o,m){if(o&1){let n=_();d(0),t(1,"h2"),i(2,"SSH"),e(),t(3,"p",11),i(4," SSH provides remote shell access. Focus on identifying the version, authentication methods, credentials and exposed keys before attempting access. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Enumeration"),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel",13),f("opened",function(){h(n);let c=l();return g(c.sshAuthenticationExpanded=!0)})("closed",function(){h(n);let c=l();return g(c.sshAuthenticationExpanded=!1)}),t(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"Authentication"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"SSH Keys"),e()(),s(19,"app-terminal",12),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),i(23,"Tunneling & Pivoting"),e()(),s(24,"app-terminal",12),e(),u()}if(o&2){let n=l();a(9),r("command",n.sshEnumeration),a(),r("expanded",n.sshAuthenticationExpanded),a(4),r("command",n.sshAuthentication),a(5),r("command",n.sshKeys),a(5),r("command",n.sshTunneling)}}function H(o,m){if(o&1){let n=_();d(0),t(1,"h2"),i(2,"FTP"),e(),t(3,"p",11),i(4," FTP is primarily a file transfer service. Check for anonymous access, readable or writable directories and files that may expose credentials or other services. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Enumeration"),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel",13),f("opened",function(){h(n);let c=l();return g(c.ftpAuthenticationExpanded=!0)})("closed",function(){h(n);let c=l();return g(c.ftpAuthenticationExpanded=!1)}),t(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"Authentication"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"File Discovery"),e()(),s(19,"app-terminal",12),e(),u()}if(o&2){let n=l();a(9),r("command",n.ftpEnumeration),a(),r("expanded",n.ftpAuthenticationExpanded),a(4),r("command",n.ftpAuthentication),a(5),r("command",n.ftpFiles)}}function L(o,m){if(o&1&&(d(0),t(1,"h2"),i(2,"SMB"),e(),t(3,"p",11),i(4," SMB exposes network shares and Windows resources. Look for anonymous access, readable or writable shares, sensitive files and credentials. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Enumeration"),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"Share Access"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"Credential Hunting"),e()(),s(19,"app-terminal",12),e(),u()),o&2){let n=l();a(9),r("command",n.smbEnumeration),a(5),r("command",n.smbShares),a(5),r("command",n.smbCredentials)}}function V(o,m){if(o&1&&(d(0),t(1,"h2"),i(2,"HTTP / HTTPS"),e(),t(3,"p",11),i(4," Web services expose applications, APIs and administrative interfaces. Start with technology identification, directories, virtual hosts and authentication points. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Initial Enumeration"),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"Directory Discovery"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"Virtual Hosts"),e()(),s(19,"app-terminal",12),e(),u()),o&2){let n=l();a(9),r("command",n.httpEnumeration),a(5),r("command",n.httpDirectories),a(5),r("command",n.httpVhosts)}}function N(o,m){if(o&1&&(d(0),t(1,"h2"),i(2,"SMTP"),e(),t(3,"p",11),i(4," SMTP can reveal mail infrastructure, domains and valid users. Check supported commands and whether user enumeration is possible. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Enumeration"),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"User Enumeration"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"Relay Testing"),e()(),s(19,"app-terminal",12),e(),u()),o&2){let n=l();a(9),r("command",n.smtpEnumeration),a(5),r("command",n.smtpUsers),a(5),r("command",n.smtpRelay)}}function U(o,m){if(o&1&&(d(0),t(1,"h2"),i(2,"SNMP"),e(),t(3,"p",11),i(4," SNMP is mainly used for information gathering. Check for exposed community strings such as "),t(5,"code"),i(6,"public"),e(),i(7,", which may reveal users, processes, interfaces and other system information. "),e(),t(8,"mat-expansion-panel")(9,"mat-expansion-panel-header")(10,"mat-panel-title"),i(11,"Enumeration"),e()(),s(12,"app-terminal",12),e(),t(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),i(16,"Community Strings"),e()(),s(17,"app-terminal",12),e(),t(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),i(21,"Information Gathering"),e()(),s(22,"app-terminal",12),e(),u()),o&2){let n=l();a(12),r("command",n.snmpEnumeration),a(5),r("command",n.snmpCommunity),a(5),r("command",n.snmpInformation)}}function q(o,m){if(o&1&&(d(0),t(1,"h2"),i(2,"LDAP"),e(),t(3,"p",11),i(4," LDAP provides structured directory information. Enumerate the naming context, users, groups and other objects that may help map the domain. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Base Discovery"),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"User Enumeration"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"Authenticated Enumeration"),e()(),s(19,"app-terminal",12),e(),u()),o&2){let n=l();a(9),r("command",n.ldapBase),a(5),r("command",n.ldapUsers),a(5),r("command",n.ldapAuthenticated)}}function B(o,m){if(o&1&&(d(0),t(1,"h2"),i(2,"RDP"),e(),t(3,"p",11),i(4," RDP provides remote graphical access to Windows systems. Identify the service, security configuration and available authentication paths. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Enumeration"),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"Connection"),e()(),s(14,"app-terminal",12),e(),u()),o&2){let n=l();a(9),r("command",n.rdpEnumeration),a(5),r("command",n.rdpConnection)}}function Q(o,m){if(o&1&&(d(0),t(1,"h2"),i(2,"Databases"),e(),t(3,"p",11),i(4," Exposed databases can provide application data, credentials and sometimes direct access to the underlying system. Identify the database and authentication first. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"MySQL"),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"MSSQL"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"PostgreSQL"),e()(),s(19,"app-terminal",12),e(),u()),o&2){let n=l();a(9),r("command",n.mysqlEnumeration),a(5),r("command",n.mssqlEnumeration),a(5),r("command",n.postgresEnumeration)}}var A=class o{selectedService="ssh";services=[{id:"ssh",label:"SSH"},{id:"ftp",label:"FTP"},{id:"smb",label:"SMB"},{id:"http",label:"HTTP / HTTPS"},{id:"smtp",label:"SMTP"},{id:"snmp",label:"SNMP"},{id:"ldap",label:"LDAP"},{id:"rdp",label:"RDP"},{id:"databases",label:"Databases"}];sshAuthenticationExpanded=!1;ftpAuthenticationExpanded=!1;route=x(b);router=x(P);destroyRef=x(v);ngOnInit(){this.route.queryParamMap.pipe(O(this.destroyRef)).subscribe(m=>{let n=m.get("service"),p=m.get("panel");n&&this.services.some(c=>c.id===n)&&(this.selectedService=n,this.sshAuthenticationExpanded=p==="ssh-authentication",this.ftpAuthenticationExpanded=p==="ftp-authentication")})}selectService(m){this.selectedService=m,this.sshAuthenticationExpanded=!1,this.ftpAuthenticationExpanded=!1,this.router.navigate([],{relativeTo:this.route,queryParams:{service:m},replaceUrl:!0})}clearService(){this.selectedService="ssh",this.sshAuthenticationExpanded=!1,this.ftpAuthenticationExpanded=!1,this.router.navigate([],{relativeTo:this.route,queryParams:{},replaceUrl:!0})}sshEnumeration=`
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
# List the top-level contents of an SMB share anonymously
smbclient //target_ip/share -N -c "ls"

# Download files recursively into a local directory
mkdir -p share-downloads
smbclient //target_ip/share -N -c "lcd share-downloads; recurse ON; prompt OFF; mget *"
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
# Replace example.com with the target's discovered DNS domain
ffuf -u http://target_ip/ \\
-H "Host: FUZZ.example.com" \\
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
`;snmpCommunity=`
# Test a list of possible community strings
onesixtyone -c community.txt target_ip

# Query the target using a discovered community string
community="public"  # replace with the community string discovered above
snmpwalk -v2c -c "$community" target_ip
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
`;static \u0275fac=function(n){return new(n||o)};static \u0275cmp=S({type:o,selectors:[["app-common-services"]],decls:23,vars:11,consts:[[1,"common-services-page"],[1,"page-header"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[1,"section-workspace"],[1,"section-workspace__index",3,"sectionChange","items","activeId"],[1,"section-workspace__content"],[1,"detail"],[4,"ngIf"],[1,"section-description"],[3,"command"],[3,"opened","closed","expanded"]],template:function(n,p){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),i(4,"~/get.sh/"),e(),i(5,"common-services "),e(),t(6,"h1",4),i(7,"Common Services"),e(),t(8,"p",5),i(9," Enumeration, authentication and attack techniques for commonly exposed network services. "),e()(),t(10,"div",6)(11,"app-section-index",7),f("sectionChange",function(R){return p.selectService(R)}),e(),t(12,"div",8)(13,"div",9),y(14,F,25,5,"ng-container",10)(15,H,20,4,"ng-container",10)(16,L,20,3,"ng-container",10)(17,V,20,3,"ng-container",10)(18,N,20,3,"ng-container",10)(19,U,23,3,"ng-container",10)(20,q,20,3,"ng-container",10)(21,B,15,2,"ng-container",10)(22,Q,20,3,"ng-container",10),e()()()()),n&2&&(a(11),r("items",p.services)("activeId",p.selectedService??""),a(3),r("ngIf",p.selectedService==="ssh"),a(),r("ngIf",p.selectedService==="ftp"),a(),r("ngIf",p.selectedService==="smb"),a(),r("ngIf",p.selectedService==="http"),a(),r("ngIf",p.selectedService==="smtp"),a(),r("ngIf",p.selectedService==="snmp"),a(),r("ngIf",p.selectedService==="ldap"),a(),r("ngIf",p.selectedService==="rdp"),a(),r("ngIf",p.selectedService==="databases"))},dependencies:[E,C,k,M,w,T,I,D],styles:[".common-services-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto}.page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.page-description[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:14px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.card[_ngcontent-%COMP%]{appearance:none;display:flex;align-items:flex-start;gap:1rem;width:100%;min-height:130px;padding:1.25rem;color:inherit;font:inherit;text-align:left;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:16px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.card-content[_ngcontent-%COMP%]{min-width:0}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.5}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;color:#f8fafc}.section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px;line-height:1.6}.section-description[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace}.back[_ngcontent-%COMP%]{background:transparent;border:1px solid #334155;color:#e2e8f0;padding:8px 12px;border-radius:8px;cursor:pointer;width:fit-content;transition:background .2s ease,border-color .2s ease,color .2s ease}.back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important}mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px}mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-weight:600}pre[_ngcontent-%COMP%]{position:relative;background:#080d14;color:#38bdf8;padding:16px 18px 16px 38px;border-radius:8px;border:1px solid #1e293b;overflow-x:auto;margin:1rem 0 0;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;line-height:1.6;box-shadow:inset 0 0 20px #00000040}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:inherit}  .terminal-comment{color:#aebdc2!important;opacity:1!important;font-style:normal;font-weight:500}@media(max-width:768px){.common-services-page[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{font-size:24px}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}}.card[_ngcontent-%COMP%]:focus-visible{outline:2px solid #38bdf8;outline-offset:3px}"]})};export{A as CommonServicesComponent};
