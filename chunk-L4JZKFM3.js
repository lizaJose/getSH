import{a as k,b as M,c as T,d as O,e as w,f as N,g as I,h as L}from"./chunk-JS7EHLTA.js";import"./chunk-PVCOTGOC.js";import{A as h,B as f,Da as t,F as _,T as i,Ua as v,Va as P,Ya as C,_ as S,_a as y,ca as b,ja as p,ka as n,la as e,ma as r,qa as d,ra as x,sa as E,ta as g,ua as c,y as u}from"./chunk-G2ZLQXRG.js";function V(o,m){if(o&1){let a=E();d(0),n(1,"div",9)(2,"h2"),t(3,"Nmap"),e(),n(4,"p",10),t(5,"Network discovery, port scanning and service enumeration."),e(),n(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),t(10," 1. Initial Scanning "),e()(),n(11,"mat-accordion",11)(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),t(15," Quick Scan "),e()(),n(16,"p")(17,"strong"),t(18,"Objective:"),e(),t(19," Identify the full attack surface and all open ports. "),e(),r(20,"app-terminal",12),e(),n(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),t(24," Service Enumeration "),e()(),r(25,"app-terminal",12),e(),n(26,"mat-expansion-panel")(27,"mat-expansion-panel-header")(28,"mat-panel-title"),t(29," Banner Grabbing "),e()(),r(30,"app-terminal",12),e(),n(31,"mat-expansion-panel")(32,"mat-expansion-panel-header")(33,"mat-panel-title"),t(34," Unknown / Rare Ports "),e()(),n(35,"p")(36,"strong"),t(37,"Do not search for exploits yet."),e(),t(38," First identify the protocol and service. "),e(),r(39,"app-terminal",12),n(40,"button",13),g("click",function(){h(a);let s=c();return f(s.copy(s.unknownPorts))}),t(41,"Copy"),e()()()(),n(42,"mat-expansion-panel")(43,"mat-expansion-panel-header")(44,"mat-panel-title"),t(45," 2. Common Services "),e()(),n(46,"mat-accordion",11)(47,"mat-expansion-panel")(48,"mat-expansion-panel-header")(49,"mat-panel-title"),t(50,"SSH"),e()(),r(51,"app-terminal",12),n(52,"button",13),g("click",function(){h(a);let s=c();return f(s.copy(s.nmapSSH))}),t(53,"Copy"),e()(),n(54,"mat-expansion-panel")(55,"mat-expansion-panel-header")(56,"mat-panel-title"),t(57,"FTP"),e()(),r(58,"app-terminal",12),n(59,"button",13),g("click",function(){h(a);let s=c();return f(s.copy(s.nmapFTP))}),t(60,"Copy"),e()(),n(61,"mat-expansion-panel")(62,"mat-expansion-panel-header")(63,"mat-panel-title"),t(64,"SMB"),e()(),r(65,"app-terminal",12),e(),n(66,"mat-expansion-panel")(67,"mat-expansion-panel-header")(68,"mat-panel-title"),t(69,"HTTP / Web"),e()(),r(70,"app-terminal",12),e(),n(71,"mat-expansion-panel")(72,"mat-expansion-panel-header")(73,"mat-panel-title"),t(74,"Telnet"),e()(),r(75,"app-terminal",12),e(),n(76,"mat-expansion-panel")(77,"mat-expansion-panel-header")(78,"mat-panel-title"),t(79,"RDP"),e()(),r(80,"app-terminal",12),e(),n(81,"mat-expansion-panel")(82,"mat-expansion-panel-header")(83,"mat-panel-title"),t(84,"VNC"),e()(),r(85,"app-terminal",12),e(),n(86,"mat-expansion-panel")(87,"mat-expansion-panel-header")(88,"mat-panel-title"),t(89,"SMTP"),e()(),r(90,"app-terminal",12),e(),n(91,"mat-expansion-panel")(92,"mat-expansion-panel-header")(93,"mat-panel-title"),t(94,"POP3 / IMAP"),e()(),r(95,"app-terminal",12),e(),n(96,"mat-expansion-panel")(97,"mat-expansion-panel-header")(98,"mat-panel-title"),t(99,"SNMP"),e()(),r(100,"app-terminal",12),e(),n(101,"mat-expansion-panel")(102,"mat-expansion-panel-header")(103,"mat-panel-title"),t(104,"LDAP"),e()(),r(105,"app-terminal",12),e(),n(106,"mat-expansion-panel")(107,"mat-expansion-panel-header")(108,"mat-panel-title"),t(109,"SIP"),e()(),r(110,"app-terminal",12),e(),n(111,"mat-expansion-panel")(112,"mat-expansion-panel-header")(113,"mat-panel-title"),t(114,"IRC"),e()(),r(115,"app-terminal",12),e()()(),n(116,"mat-expansion-panel")(117,"mat-expansion-panel-header")(118,"mat-panel-title"),t(119," 3. Database Services "),e()(),n(120,"mat-accordion",11)(121,"mat-expansion-panel")(122,"mat-expansion-panel-header")(123,"mat-panel-title"),t(124,"MSSQL"),e()(),r(125,"app-terminal",12),e(),n(126,"mat-expansion-panel")(127,"mat-expansion-panel-header")(128,"mat-panel-title"),t(129,"MySQL"),e()(),r(130,"app-terminal",12),e(),n(131,"mat-expansion-panel")(132,"mat-expansion-panel-header")(133,"mat-panel-title"),t(134,"PostgreSQL"),e()(),r(135,"app-terminal",12),e(),n(136,"mat-expansion-panel")(137,"mat-expansion-panel-header")(138,"mat-panel-title"),t(139,"Redis"),e()(),r(140,"app-terminal",12),e(),n(141,"mat-expansion-panel")(142,"mat-expansion-panel-header")(143,"mat-panel-title"),t(144,"Oracle"),e()(),r(145,"app-terminal",12),e()()(),n(146,"mat-expansion-panel")(147,"mat-expansion-panel-header")(148,"mat-panel-title"),t(149," 4. NSE & Authentication "),e()(),n(150,"mat-accordion",11)(151,"mat-expansion-panel")(152,"mat-expansion-panel-header")(153,"mat-panel-title"),t(154," Credential Attacks "),e()(),n(155,"p"),t(156," Use authentication testing only after identifying the service and its authentication mechanism. "),e(),n(157,"p")(158,"strong"),t(159,"Recommended workflow:"),e()(),n(160,"ul")(161,"li"),t(162,"Confirm the service is real and reachable."),e(),n(163,"li"),t(164,"Identify the authentication mechanism."),e(),n(165,"li"),t(166,"Check for default or weak credentials."),e(),n(167,"li"),t(168,"Perform normal enumeration first."),e()()(),n(169,"mat-expansion-panel")(170,"mat-expansion-panel-header")(171,"mat-panel-title"),t(172," General NSE Discovery "),e()(),r(173,"app-terminal",12),e()()()()(),x()}if(o&2){let a=c();i(20),p("command",a.nmapQuick),i(5),p("command",a.nmapEnum),i(5),p("command",a.bannerGrab),i(9),p("command",a.unknownPorts),i(12),p("command",a.nmapSSH),i(7),p("command",a.nmapFTP),i(7),p("command",a.nmapSMB),i(5),p("command",a.nmapHTTP),i(5),p("command",a.nmapTelnet),i(5),p("command",a.nmapRDP),i(5),p("command",a.nmapVNC),i(5),p("command",a.nmapSMTP),i(5),p("command",a.nmapMail),i(5),p("command",a.nmapSNMP),i(5),p("command",a.nmapLDAP),i(5),p("command",a.nmapSIP),i(5),p("command",a.nmapIRC),i(10),p("command",a.nmapMSSQL),i(5),p("command",a.nmapMySQL),i(5),p("command",a.nmapPostgreSQL),i(5),p("command",a.nmapRedis),i(5),p("command",a.nmapOracle),i(28),p("command",a.nmapNSE)}}function H(o,m){if(o&1&&(d(0),n(1,"div",9)(2,"h2"),t(3,"RustScan"),e(),n(4,"p",10),t(5," Fast TCP port discovery with Nmap service detection for the ports found. RustScan does not replace UDP enumeration or careful service analysis. Scan only systems included in your authorized scope. "),e(),n(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),t(10,"Quick TCP Scan"),e()(),n(11,"p"),t(12,"Check the first 1,000 TCP ports, then run Nmap scripts and version detection on open ports."),e(),r(13,"app-terminal",12),e(),n(14,"mat-expansion-panel")(15,"mat-expansion-panel-header")(16,"mat-panel-title"),t(17,"Full TCP & UDP Follow-up"),e()(),n(18,"p"),t(19,"Use the full TCP range when the quick scan is insufficient; UDP is a separate Nmap scan."),e(),r(20,"app-terminal",12),e()()(),x()),o&2){let a=c();i(13),p("command",a.rustscanQuick),i(7),p("command",a.rustscanFull)}}function F(o,m){if(o&1&&(d(0),n(1,"div",9)(2,"h2"),t(3,"Masscan"),e(),n(4,"p",10),t(5," High-speed TCP port discovery. Masscan does not identify services, so follow its results with Nmap. Keep the rate low for a single lab host; use subnet ranges only when explicitly authorized. "),e(),n(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),t(10,"Discover Ports & Enumerate Services"),e()(),n(11,"p"),t(12,"Save open ports in list format, extract the TCP port numbers and pass them to Nmap."),e(),r(13,"app-terminal",12),e()()(),x()),o&2){let a=c();i(13),p("command",a.masscanDiscovery)}}function U(o,m){if(o&1&&(d(0),n(1,"div",9)(2,"h2"),t(3,"Nikto"),e(),n(4,"p",10),t(5," Web server scanning, misconfiguration detection and vulnerability discovery. "),e(),n(6,"mat-accordion",11)(7,"mat-expansion-panel")(8,"mat-expansion-panel-header")(9,"mat-panel-title"),t(10," 1. Basic Scanning "),e()(),n(11,"mat-accordion",11)(12,"mat-expansion-panel")(13,"mat-expansion-panel-header")(14,"mat-panel-title"),t(15," Basic HTTP Scan "),e()(),n(16,"p")(17,"strong"),t(18,"Objective:"),e(),t(19," Perform an initial scan of a web server and identify common security issues, dangerous files and misconfigurations. "),e(),r(20,"app-terminal",12),e(),n(21,"mat-expansion-panel")(22,"mat-expansion-panel-header")(23,"mat-panel-title"),t(24," HTTPS Scan "),e()(),n(25,"p"),t(26,"Scan a web server running over HTTPS."),e(),r(27,"app-terminal",12),e(),n(28,"mat-expansion-panel")(29,"mat-expansion-panel-header")(30,"mat-panel-title"),t(31," Custom Port "),e()(),n(32,"p"),t(33,"Useful when HTTP or HTTPS is running on a non-standard port."),e(),r(34,"app-terminal",12),e()()(),n(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title"),t(38," 2. Web Server Enumeration "),e()(),n(39,"mat-accordion",11)(40,"mat-expansion-panel")(41,"mat-expansion-panel-header")(42,"mat-panel-title"),t(43," Server Information "),e()(),n(44,"p"),t(45,"Identify the web server and inspect the information exposed by its responses."),e(),r(46,"app-terminal",12),e(),n(47,"mat-expansion-panel")(48,"mat-expansion-panel-header")(49,"mat-panel-title"),t(50," CGI / Common Files "),e()(),n(51,"p"),t(52,"Look for common CGI paths, files and potentially interesting resources."),e(),r(53,"app-terminal",12),e(),n(54,"mat-expansion-panel")(55,"mat-expansion-panel-header")(56,"mat-panel-title"),t(57," Plugins and Components "),e()(),n(58,"p"),t(59," Identify potentially vulnerable web applications, plugins and server components. "),e(),r(60,"app-terminal",12),e()()(),n(61,"mat-expansion-panel")(62,"mat-expansion-panel-header")(63,"mat-panel-title"),t(64," 3. Authentication & Misconfiguration "),e()(),n(65,"mat-accordion",11)(66,"mat-expansion-panel")(67,"mat-expansion-panel-header")(68,"mat-panel-title"),t(69," Authentication "),e()(),n(70,"p"),t(71,"Identify authentication-related information and potentially exposed resources."),e(),r(72,"app-terminal",12),e(),n(73,"mat-expansion-panel")(74,"mat-expansion-panel-header")(75,"mat-panel-title"),t(76," Misconfiguration Detection "),e()(),n(77,"p"),t(78," Look for common web server misconfigurations, outdated components and insecure configurations. "),e(),r(79,"app-terminal",12),e()()(),n(80,"mat-expansion-panel")(81,"mat-expansion-panel-header")(82,"mat-panel-title"),t(83," 4. SSL / TLS "),e()(),n(84,"mat-accordion",11)(85,"mat-expansion-panel")(86,"mat-expansion-panel-header")(87,"mat-panel-title"),t(88," SSL Scanning "),e()(),n(89,"p"),t(90,"Scan HTTPS services and check for common SSL/TLS configuration issues."),e(),r(91,"app-terminal",12),e(),n(92,"mat-expansion-panel")(93,"mat-expansion-panel-header")(94,"mat-panel-title"),t(95," HTTPS on Custom Port "),e()(),r(96,"app-terminal",12),e()()(),n(97,"mat-expansion-panel")(98,"mat-expansion-panel-header")(99,"mat-panel-title"),t(100," 5. Tuning & Output "),e()(),n(101,"mat-accordion",11)(102,"mat-expansion-panel")(103,"mat-expansion-panel-header")(104,"mat-panel-title"),t(105," Scan Tuning "),e()(),n(106,"p"),t(107," Restrict the types of tests performed during the scan when you need a more focused assessment. "),e(),r(108,"app-terminal",12),e(),n(109,"mat-expansion-panel")(110,"mat-expansion-panel-header")(111,"mat-panel-title"),t(112," Output "),e()(),n(113,"p"),t(114,"Save the results of a Nikto scan for later analysis or documentation."),e(),r(115,"app-terminal",12),e()()()()(),x()),o&2){let a=c();i(20),p("command",a.niktoBasic),i(7),p("command",a.niktoHTTPS),i(7),p("command",a.niktoPort),i(12),p("command",a.niktoServerInfo),i(7),p("command",a.niktoCGI),i(7),p("command",a.niktoPlugins),i(12),p("command",a.niktoAuth),i(7),p("command",a.niktoMisconfig),i(12),p("command",a.niktoSSL),i(5),p("command",a.niktoSSLPort),i(12),p("command",a.niktoTuning),i(7),p("command",a.niktoOutput)}}var D=class o{selected="nmap";tools=[{id:"nmap",label:"Nmap",important:!0},{id:"rustscan",label:"RustScan"},{id:"masscan",label:"Masscan"},{id:"nikto",label:"Nikto"}];route=u(C);router=u(y);destroyRef=u(_);ngOnInit(){this.route.queryParamMap.pipe(N(this.destroyRef)).subscribe(m=>{let a=m.get("tool");a&&this.tools.some(l=>l.id===a)&&(this.selected=a)})}nmapQuick=`
sudo nmap -p- --open --min-rate 1000 -sS -n -Pn <target_ip> -oN openPorts

nmap -sCV -p \\$(grep "^[0-9]" openPorts | awk '{print $1}' | cut -d'/' -f1 | paste -sd,) target_ip -oN services

nmap -sV --script vuln -p \\$(grep "^[0-9]" openPorts | awk '{print $1}' | cut -d'/' -f1 | paste -sd,) -Pn target_ip -oN vuln
`;nmapSSH=`
nmap -p 22 --script ssh-brute target_ip

nmap --script ssh-auth-methods -p 22 target_ip
`;nmapFTP=`
nmap --script ftp-anon -p 21 target_ip
nmap --script ftp-brute -p 21 target_ip
`;nmapSMB=`
nmap --script smb-enum-users -p 445 target_ip
nmap --script smb-os-discovery -p 445 target_ip
nmap --script smb-brute -p 445 target_ip
`;nmapHTTP=`
nmap --script http-auth-finder target_ip
nmap --script http-brute target_ip
nmap --script http-wordpress-brute target_ip
nmap --script http-default-accounts target_ip
`;nmapMSSQL=`
nmap --script ms-sql-info -p 1433 target_ip
nmap --script ms-sql-brute -p 1433 target_ip
nmap --script ms-sql-empty-password -p 1433 target_ip
`;nmapMySQL=`
nmap --script mysql-info -p 3306 target_ip
nmap --script mysql-empty-password -p 3306 target_ip
nmap --script mysql-brute -p 3306 target_ip
`;nmapPostgreSQL=`
nmap --script pgsql-brute -p 5432 target_ip
`;nmapVNC=`
nmap --script realvnc-auth-bypass -p 5900 target_ip
nmap --script vnc-brute -p 5900 target_ip
`;nmapTelnet=`
nmap --script telnet-brute -p 23 target_ip
`;nmapRDP=`
nmap --script rdp-ntlm-info -p 3389 target_ip
nmap --script rdp-enum-encryption -p 3389 target_ip
`;nmapSNMP=`
nmap --script snmp-interfaces -sU -p 161 target_ip
nmap --script snmp-processes -sU -p 161 target_ip
nmap --script snmp-brute -sU -p 161 target_ip
`;nmapLDAP=`
nmap --script ldap-rootdse -p 389 target_ip
nmap --script ldap-search -p 389 target_ip
nmap --script ldap-brute -p 389 target_ip
`;nmapSIP=`
nmap --script sip-methods -sU -p 5060 target_ip
nmap --script sip-brute -sU -p 5060 target_ip
`;nmapIRC=`
nmap --script irc-info -p 6667 target_ip
nmap --script irc-brute -p 6667 target_ip
`;nmapRedis=`
nmap --script redis-info -p 6379 target_ip
nmap --script redis-brute -p 6379 target_ip
`;nmapOracle=`
nmap --script oracle-sid-brute -p 1521 target_ip
`;nmapSMTP=`
nmap --script smtp-commands -p 25 target_ip
nmap --script smtp-open-relay -p 25 target_ip
nmap --script smtp-enum-users -p 25 target_ip
`;nmapMail=`
nmap --script pop3-brute -p 110 target_ip
nmap --script imap-brute -p 143 target_ip
`;nmapNSE=`
ls /usr/share/nmap/scripts/*brute*

grep "brute" /usr/share/nmap/scripts/script.db

nmap --script-help brute
`;nmapEnum=`
nmap -sC -sV -p- target_ip -oN services
nmap -sC -sV -p port1,port2,port3 target_ip -oN focused
nmap -sV --version-all -p port target_ip
nmap -A -p port target_ip
nmap -sV --version-all --version-trace -p port target_ip
`;bannerGrab=`
nc -nv target_ip port
curl -v http://target_ip:port
curl -v https://target_ip:port
openssl s_client -connect target_ip:port
printf "GET / HTTP/1.1\\r\\nHost: target_ip" | nc target_ip port
`;unknownPorts=`
echo "help" | nc target_ip port
echo "version" | nc target_ip port
echo "status" | nc target_ip port
echo "test" | nc target_ip port

nmap --script=banner -p port target_ip
nmap -sV --version-all -p port target_ip
nmap -sV --version-trace -p port target_ip
`;niktoBasic=`
nikto -h http://target_ip
`;niktoHTTPS=`
nikto -h https://target_ip
`;niktoPort=`
nikto -h http://target_ip -p 8080
nikto -h http://target_ip -p 8000
nikto -h http://target_ip -p 8443
`;niktoServerInfo=`
nikto -h http://target_ip
`;niktoCGI=`
nikto -h http://target_ip -C all
`;niktoPlugins=`
nikto -h http://target_ip
`;niktoAuth=`
nikto -h http://target_ip
`;niktoMisconfig=`
nikto -h http://target_ip
`;niktoSSL=`
nikto -h https://target_ip
`;niktoSSLPort=`
nikto -h https://target_ip -p 8443
`;niktoTuning=`
nikto -h http://target_ip -Tuning 123b
`;niktoOutput=`
nikto -h http://target_ip -o nikto.txt
nikto -h http://target_ip -o nikto.html -Format htm
`;selectTech(m){this.selected=m,this.router.navigate([],{relativeTo:this.route,queryParams:{tool:m},replaceUrl:!0})}back(){this.selected="nmap"}copy(m){navigator.clipboard.writeText(m)}rustscanQuick=`# Scan the first 1,000 TCP ports, then identify discovered services with Nmap
rustscan -a target_ip -r 1-1000 --ulimit 5000 -- -Pn -sV -sC -oN rustscan-services.txt
`;rustscanFull=`# Scan all TCP ports and pass discovered ports to Nmap for service enumeration
rustscan -a target_ip -r 1-65535 --ulimit 5000 -- -Pn -sV -sC -oN rustscan-full-services.txt

# RustScan only checks TCP; check common UDP ports separately when in scope
sudo nmap -sU --top-ports 100 -Pn target_ip -oN rustscan-udp.txt
`;masscanDiscovery=`# Masscan requires raw-packet privileges; keep the rate conservative in a lab
sudo masscan target_ip -p1-65535 --rate 500 -oL masscan-open-ports.txt

# Extract discovered TCP ports and identify services with Nmap
ports=$(awk '$1 == "open" && $2 == "tcp" {print $3}' masscan-open-ports.txt | sort -nu | paste -sd,)
if [ -n "$ports" ]; then
  sudo nmap -sC -sV -Pn -p "$ports" target_ip -oN masscan-services.txt
else
  echo "No open TCP ports found"
fi
`;static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["app-scan"]],decls:17,vars:6,consts:[[1,"scan-page"],[1,"terminal-path"],[1,"prompt"],[1,"title"],[1,"page-description"],[1,"section-workspace"],[1,"section-workspace__index",3,"sectionChange","items","activeId"],[1,"section-workspace__content"],[4,"ngIf"],[1,"detail"],[1,"section-description"],["multi",""],[3,"command"],[3,"click"]],template:function(a,l){a&1&&(n(0,"div",0)(1,"div",1)(2,"span",2),t(3,"~"),e(),t(4,"/get.sh/scan"),e(),r(5,"br"),n(6,"h1",3),t(7,"Scan"),e(),n(8,"p",4),t(9,"Network discovery, enumeration and scanning techniques."),e(),n(10,"div",5)(11,"app-section-index",6),g("sectionChange",function(R){return l.selectTech(R)}),e(),n(12,"div",7),b(13,V,174,23,"ng-container",8)(14,H,21,2,"ng-container",8)(15,F,14,1,"ng-container",8)(16,U,116,12,"ng-container",8),e()()()),a&2&&(i(11),p("items",l.tools)("activeId",l.selected??""),i(2),p("ngIf",l.selected==="nmap"),i(),p("ngIf",l.selected==="rustscan"),i(),p("ngIf",l.selected==="masscan"),i(),p("ngIf",l.selected==="nikto"))},dependencies:[P,v,w,O,k,M,T,I,L],styles:['.scan-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.page-description[_ngcontent-%COMP%]{margin:0 0 2rem;color:#64748b;font-size:14px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.card[_ngcontent-%COMP%]{position:relative;display:flex;align-items:flex-start;gap:1rem;min-height:130px;padding:1.25rem;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:18px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.card-content[_ngcontent-%COMP%]{min-width:0}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.5}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;color:#f8fafc}.section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px}.back[_ngcontent-%COMP%]{background:transparent;border:1px solid #334155;color:#e2e8f0;padding:8px 12px;border-radius:8px;cursor:pointer;width:fit-content;transition:background .2s ease,border-color .2s ease,color .2s ease}.back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important}mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px}mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-weight:600}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{background:#172033!important;border-color:#2c3b50}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{background:#111827!important}.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#cbd5e1;line-height:1.6}.detail[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#f8fafc}.detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#cbd5e1;line-height:1.8;padding-left:1.5rem}pre[_ngcontent-%COMP%]{position:relative;background:#080d14;color:#38bdf8;padding:16px 18px 16px 38px;border-radius:8px;border:1px solid #1e293b;overflow-x:auto;margin:1rem 0 0;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;line-height:1.6;box-shadow:inset 0 0 20px #00000040}pre[_ngcontent-%COMP%]:before{content:"$";position:absolute;left:16px;top:16px;color:#22c55e;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-weight:700}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:inherit}.copy-button[_ngcontent-%COMP%]{margin-top:8px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;font-size:12px;padding:6px 10px;border-radius:6px;cursor:pointer;transition:background .2s ease,border-color .2s ease,color .2s ease}.terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.copy-button[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}.copy-button[_ngcontent-%COMP%]:active{transform:translateY(1px)}@media(max-width:768px){.scan-page[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{font-size:24px}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}pre[_ngcontent-%COMP%]{font-size:12px;padding:12px}}']})};export{D as ScanComponent};
