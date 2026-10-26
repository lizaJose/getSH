import{a as w,b as M,c as T,e as k,f as O,g as A,h as I}from"./chunk-SFRSLJCO.js";import"./chunk-GFLLK36M.js";import{$ as S,$a as P,A as h,B as x,Ea as i,F as y,U as a,Va as C,Wa as E,Za as b,da as v,ka as r,la as n,ma as e,na as o,ra as c,sa as u,ta as f,ua as g,va as l,y as _}from"./chunk-FQT5HG3D.js";function D(s,d){if(s&1){let t=f();c(0),n(1,"h2"),i(2,"SSH"),e(),n(3,"p",11),i(4," SSH provides remote shell access. Focus on identifying the version, authentication methods, credentials and exposed keys before attempting access. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Enumeration"),e()(),o(9,"app-terminal",12),e(),n(10,"mat-expansion-panel",13),g("opened",function(){h(t);let m=l();return x(m.sshAuthenticationExpanded=!0)})("closed",function(){h(t);let m=l();return x(m.sshAuthenticationExpanded=!1)}),n(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"Authentication"),e()(),o(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"SSH Keys"),e()(),o(19,"app-terminal",12),e(),n(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),i(23,"Tunneling & Pivoting"),e()(),o(24,"app-terminal",12),e(),u()}if(s&2){let t=l();a(9),r("command",t.sshEnumeration),a(),r("expanded",t.sshAuthenticationExpanded),a(4),r("command",t.sshAuthentication),a(5),r("command",t.sshKeys),a(5),r("command",t.sshTunneling)}}function V(s,d){if(s&1){let t=f();c(0),n(1,"h2"),i(2,"FTP"),e(),n(3,"p",11),i(4," FTP is primarily a file transfer service. Check for anonymous access, readable or writable directories and files that may expose credentials or other services. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Enumeration"),e()(),o(9,"app-terminal",12),e(),n(10,"mat-expansion-panel",13),g("opened",function(){h(t);let m=l();return x(m.ftpAuthenticationExpanded=!0)})("closed",function(){h(t);let m=l();return x(m.ftpAuthenticationExpanded=!1)}),n(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"Authentication"),e()(),o(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"File Discovery"),e()(),o(19,"app-terminal",12),e(),u()}if(s&2){let t=l();a(9),r("command",t.ftpEnumeration),a(),r("expanded",t.ftpAuthenticationExpanded),a(4),r("command",t.ftpAuthentication),a(5),r("command",t.ftpFiles)}}function L(s,d){if(s&1&&(c(0),n(1,"h2"),i(2,"SMB"),e(),n(3,"p",11),i(4," SMB exposes network shares and Windows resources. Look for anonymous access, readable or writable shares, sensitive files and credentials. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Enumeration"),e()(),o(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"Share Access"),e()(),o(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"Credential Hunting"),e()(),o(19,"app-terminal",12),e(),u()),s&2){let t=l();a(9),r("command",t.smbEnumeration),a(5),r("command",t.smbShares),a(5),r("command",t.smbCredentials)}}function H(s,d){if(s&1){let t=f();c(0),n(1,"h2"),i(2,"HTTP / HTTPS"),e(),n(3,"p",11),i(4," Web services expose applications, APIs and administrative interfaces. Start with technology identification, directories, virtual hosts and authentication points. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Initial Enumeration"),e()(),o(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"Directory Discovery"),e()(),o(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"Virtual Hosts"),e()(),o(19,"app-terminal",12),e(),n(20,"mat-expansion-panel",13),g("opened",function(){h(t);let m=l();return x(m.httpPostBruteForceExpanded=!0)})("closed",function(){h(t);let m=l();return x(m.httpPostBruteForceExpanded=!1)}),n(21,"mat-expansion-panel-header")(22,"mat-panel-title"),i(23,"HTTP POST Login Brute Force"),e()(),o(24,"app-terminal",12),e(),u()}if(s&2){let t=l();a(9),r("command",t.httpEnumeration),a(5),r("command",t.httpDirectories),a(5),r("command",t.httpVhosts),a(),r("expanded",t.httpPostBruteForceExpanded),a(4),r("command",t.httpPostBruteForce)}}function B(s,d){if(s&1&&(c(0),n(1,"h2"),i(2,"SMTP"),e(),n(3,"p",11),i(4," SMTP can reveal mail infrastructure, domains and valid users. Check supported commands and whether user enumeration is possible. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Enumeration"),e()(),o(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"User Enumeration"),e()(),o(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"Relay Testing"),e()(),o(19,"app-terminal",12),e(),u()),s&2){let t=l();a(9),r("command",t.smtpEnumeration),a(5),r("command",t.smtpUsers),a(5),r("command",t.smtpRelay)}}function U(s,d){if(s&1&&(c(0),n(1,"h2"),i(2,"SNMP"),e(),n(3,"p",11),i(4," SNMP is mainly used for information gathering. Check for exposed community strings such as "),n(5,"code"),i(6,"public"),e(),i(7,", which may reveal users, processes, interfaces and other system information. "),e(),n(8,"mat-expansion-panel")(9,"mat-expansion-panel-header")(10,"mat-panel-title"),i(11,"Enumeration"),e()(),o(12,"app-terminal",12),e(),n(13,"mat-expansion-panel")(14,"mat-expansion-panel-header")(15,"mat-panel-title"),i(16,"Community Strings"),e()(),o(17,"app-terminal",12),e(),n(18,"mat-expansion-panel")(19,"mat-expansion-panel-header")(20,"mat-panel-title"),i(21,"Information Gathering"),e()(),o(22,"app-terminal",12),e(),u()),s&2){let t=l();a(12),r("command",t.snmpEnumeration),a(5),r("command",t.snmpCommunity),a(5),r("command",t.snmpInformation)}}function N(s,d){if(s&1&&(c(0),n(1,"h2"),i(2,"LDAP"),e(),n(3,"p",11),i(4," LDAP provides structured directory information. Enumerate the naming context, users, groups and other objects that may help map the domain. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Base Discovery"),e()(),o(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"User Enumeration"),e()(),o(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"Authenticated Enumeration"),e()(),o(19,"app-terminal",12),e(),u()),s&2){let t=l();a(9),r("command",t.ldapBase),a(5),r("command",t.ldapUsers),a(5),r("command",t.ldapAuthenticated)}}function q(s,d){if(s&1){let t=f();c(0),n(1,"h2"),i(2,"RDP"),e(),n(3,"p",11),i(4," RDP provides remote graphical access to Windows systems. Identify the service, security configuration and available authentication paths. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"Enumeration"),e()(),o(9,"app-terminal",12),e(),n(10,"mat-expansion-panel",13),g("opened",function(){h(t);let m=l();return x(m.rdpAuthenticationExpanded=!0)})("closed",function(){h(t);let m=l();return x(m.rdpAuthenticationExpanded=!1)}),n(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"Credential Brute Force"),e()(),o(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"Connection"),e()(),o(19,"app-terminal",12),e(),u()}if(s&2){let t=l();a(9),r("command",t.rdpEnumeration),a(),r("expanded",t.rdpAuthenticationExpanded),a(4),r("command",t.rdpAuthentication),a(5),r("command",t.rdpConnection)}}function z(s,d){if(s&1&&(c(0),n(1,"h2"),i(2,"Databases"),e(),n(3,"p",11),i(4," Exposed databases can provide application data, credentials and sometimes direct access to the underlying system. Identify the database and authentication first. "),e(),n(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),i(8,"MySQL"),e()(),o(9,"app-terminal",12),e(),n(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),i(13,"MSSQL"),e()(),o(14,"app-terminal",12),e(),n(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18,"PostgreSQL"),e()(),o(19,"app-terminal",12),e(),u()),s&2){let t=l();a(9),r("command",t.mysqlEnumeration),a(5),r("command",t.mssqlEnumeration),a(5),r("command",t.postgresEnumeration)}}var F=class s{selectedService="ssh";services=[{id:"ssh",label:"SSH"},{id:"ftp",label:"FTP"},{id:"smb",label:"SMB",important:!0},{id:"http",label:"HTTP / HTTPS"},{id:"smtp",label:"SMTP"},{id:"snmp",label:"SNMP"},{id:"ldap",label:"LDAP",important:!0},{id:"rdp",label:"RDP"},{id:"databases",label:"Databases"}];sshAuthenticationExpanded=!1;ftpAuthenticationExpanded=!1;rdpAuthenticationExpanded=!1;httpPostBruteForceExpanded=!1;route=_(b);router=_(P);destroyRef=_(y);ngOnInit(){this.route.queryParamMap.pipe(O(this.destroyRef)).subscribe(d=>{let t=d.get("service"),p=d.get("panel");t&&this.services.some(m=>m.id===t)&&(this.selectedService=t,this.sshAuthenticationExpanded=p==="ssh-authentication",this.ftpAuthenticationExpanded=p==="ftp-authentication",this.rdpAuthenticationExpanded=p==="rdp-authentication",this.httpPostBruteForceExpanded=p==="http-post-brute-force")})}selectService(d){this.selectedService=d,this.sshAuthenticationExpanded=!1,this.ftpAuthenticationExpanded=!1,this.rdpAuthenticationExpanded=!1,this.httpPostBruteForceExpanded=!1,this.router.navigate([],{relativeTo:this.route,queryParams:{service:d},replaceUrl:!0})}clearService(){this.selectedService="ssh",this.sshAuthenticationExpanded=!1,this.ftpAuthenticationExpanded=!1,this.rdpAuthenticationExpanded=!1,this.httpPostBruteForceExpanded=!1,this.router.navigate([],{relativeTo:this.route,queryParams:{},replaceUrl:!0})}sshEnumeration=`
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

# Prepare rockyou if it is still compressed
cd /usr/share/wordlists/
ls
sudo gzip -d rockyou.txt.gz

# Target a non-default SSH port
hydra -l george -P /usr/share/wordlists/rockyou.txt -s 2222 ssh://target_ip

# Show each attempted login
hydra -l george -P /usr/share/wordlists/rockyou.txt -vV ssh://target_ip

# Limit concurrent tasks
hydra -l george -P /usr/share/wordlists/rockyou.txt -t 4 ssh://target_ip

# Stop after the first valid password
hydra -l george -P /usr/share/wordlists/rockyou.txt -f ssh://target_ip

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
`;httpPostBruteForce=`
# Capture a login request and identify its path, POST fields, and failed-login response in Burp or a browser
# Replace the failure text with a distinctive message returned by the application
hydra -l user -P /usr/share/wordlists/rockyou.txt target_ip http-post-form "/index.php:fm_usr=user&fm_pwd=^PASS^:Login failed. Invalid"

# Generic syntax
hydra -l <USER> -P <WORDLIST> target_ip http-post-form "<PATH>:<POST_DATA>:<FAIL_STRING>"

# Example using a non-default port and an explicit failure condition
hydra -l admin -P /usr/share/wordlists/rockyou.txt -s 8089 target_ip http-post-form "/login.php:user=^USER^&pass=^PASS^&submit=Login:F=Password incorrect."

# Show attempts, limit concurrency, or stop on the first success
hydra -l user -P /usr/share/wordlists/rockyou.txt -vV -t 4 -f target_ip http-post-form "/index.php:fm_usr=user&fm_pwd=^PASS^:Login failed"

# WAFs and rate limits can block attempts; web form testing is noisy
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
`;rdpAuthentication=`
# Create a smaller list containing only targeted users
printf "daniel\\njustin\\n" > users.txt

# Use one known password against a list of usernames (password spraying)
hydra -L /usr/share/wordlists/dirb/others/names.txt -p "KnownPassword" rdp://target_ip

# Reduce concurrency and show each attempt
hydra -L users.txt -p "KnownPassword" -t 4 -vV rdp://target_ip

# Stop after the first valid credential
hydra -L users.txt -p "KnownPassword" -f rdp://target_ip

# Generic password-spraying syntax
hydra -L <USER_LIST> -p "<PASSWORD>" rdp://target_ip

# Consider lockout policies and monitoring; large lists create more noise
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
`;static \u0275fac=function(t){return new(t||s)};static \u0275cmp=S({type:s,selectors:[["app-common-services"]],decls:23,vars:11,consts:[[1,"common-services-page"],[1,"page-header"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[1,"section-workspace"],[1,"section-workspace__index",3,"sectionChange","items","activeId"],[1,"section-workspace__content"],[1,"detail"],[4,"ngIf"],[1,"section-description"],[3,"command"],[3,"opened","closed","expanded"]],template:function(t,p){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),i(4,"~/get.sh/"),e(),i(5,"common-services "),e(),n(6,"h1",4),i(7,"Common Services"),e(),n(8,"p",5),i(9," Enumeration, authentication and attack techniques for commonly exposed network services. "),e()(),n(10,"div",6)(11,"app-section-index",7),g("sectionChange",function(R){return p.selectService(R)}),e(),n(12,"div",8)(13,"div",9),v(14,D,25,5,"ng-container",10)(15,V,20,4,"ng-container",10)(16,L,20,3,"ng-container",10)(17,H,25,5,"ng-container",10)(18,B,20,3,"ng-container",10)(19,U,23,3,"ng-container",10)(20,N,20,3,"ng-container",10)(21,q,20,4,"ng-container",10)(22,z,20,3,"ng-container",10),e()()()()),t&2&&(a(11),r("items",p.services)("activeId",p.selectedService??""),a(3),r("ngIf",p.selectedService==="ssh"),a(),r("ngIf",p.selectedService==="ftp"),a(),r("ngIf",p.selectedService==="smb"),a(),r("ngIf",p.selectedService==="http"),a(),r("ngIf",p.selectedService==="smtp"),a(),r("ngIf",p.selectedService==="snmp"),a(),r("ngIf",p.selectedService==="ldap"),a(),r("ngIf",p.selectedService==="rdp"),a(),r("ngIf",p.selectedService==="databases"))},dependencies:[E,C,k,w,M,T,A,I],styles:[".common-services-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto}.page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.page-description[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:14px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.card[_ngcontent-%COMP%]{appearance:none;display:flex;align-items:flex-start;gap:1rem;width:100%;min-height:130px;padding:1.25rem;color:inherit;font:inherit;text-align:left;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:16px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.card-content[_ngcontent-%COMP%]{min-width:0}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.5}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;color:#f8fafc}.section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px;line-height:1.6}.section-description[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace}.back[_ngcontent-%COMP%]{background:transparent;border:1px solid #334155;color:#e2e8f0;padding:8px 12px;border-radius:8px;cursor:pointer;width:fit-content;transition:background .2s ease,border-color .2s ease,color .2s ease}.back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important}mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px}mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-weight:600}pre[_ngcontent-%COMP%]{position:relative;background:#080d14;color:#38bdf8;padding:16px 18px 16px 38px;border-radius:8px;border:1px solid #1e293b;overflow-x:auto;margin:1rem 0 0;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;line-height:1.6;box-shadow:inset 0 0 20px #00000040}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:inherit}  .terminal-comment{color:#aebdc2!important;opacity:1!important;font-style:normal;font-weight:500}@media(max-width:768px){.common-services-page[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{font-size:24px}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}}.card[_ngcontent-%COMP%]:focus-visible{outline:2px solid #38bdf8;outline-offset:3px}"]})};export{F as CommonServicesComponent};
