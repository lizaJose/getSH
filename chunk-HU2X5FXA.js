import{a as C,b as v,c as k,d as P,e as y,f as M}from"./chunk-VFOKBMI4.js";import{e as b,f as E}from"./chunk-7BWD45GD.js";import{$a as _,Ha as S,La as f,Ua as p,Va as t,W as c,Wa as e,X as d,Xa as r,ab as u,bb as h,cb as x,db as l,mb as n,va as i}from"./chunk-ETCZ6OUV.js";function w(s,g){if(s&1){let a=h();_(0),t(1,"h1",4),n(2,"Scan"),e(),t(3,"p",5),n(4,"Network discovery, enumeration and scanning techniques."),e(),t(5,"p",5),n(6,"Network discovery, enumeration and scanning techniques."),e(),t(7,"div",6)(8,"div",7),x("click",function(){c(a);let o=l();return d(o.selectTech("nmap"))}),t(9,"div",8)(10,"span"),n(11,">_"),e()(),t(12,"div",9)(13,"h2"),n(14,"Nmap"),e(),t(15,"p"),n(16,"Network discovery, port scanning and service enumeration."),e()()(),t(17,"div",7),x("click",function(){c(a);let o=l();return d(o.selectTech("rustscan"))}),t(18,"div",8)(19,"span"),n(20,"\u26A1"),e()(),t(21,"div",9)(22,"h2"),n(23,"Rustscan"),e(),t(24,"p"),n(25,"Fast port discovery and initial enumeration."),e()()(),t(26,"div",7),x("click",function(){c(a);let o=l();return d(o.selectTech("masscan"))}),t(27,"div",8)(28,"span"),n(29,"\u25C9"),e()(),t(30,"div",9)(31,"h2"),n(32,"Masscan"),e(),t(33,"p"),n(34,"High-speed network and port scanning."),e()()(),t(35,"div",7),x("click",function(){c(a);let o=l();return d(o.selectTech("nikto"))}),t(36,"div",8)(37,"span"),n(38,"\u2315"),e()(),t(39,"div",9)(40,"h2"),n(41,"Nikto"),e(),t(42,"p"),n(43,"Web server scanning and vulnerability discovery."),e()()()(),u()}}function O(s,g){if(s&1){let a=h();_(0),t(1,"div",10)(2,"button",11),x("click",function(){c(a);let o=l();return d(o.back())}),n(3,"\u2190 Back to Scan"),e(),t(4,"h2"),n(5,"Nmap"),e(),t(6,"p",12),n(7,"Network discovery, port scanning and service enumeration."),e(),t(8,"mat-accordion",13)(9,"mat-expansion-panel")(10,"mat-expansion-panel-header")(11,"mat-panel-title"),n(12," 1. Initial Scanning "),e()(),t(13,"mat-accordion",13)(14,"mat-expansion-panel")(15,"mat-expansion-panel-header")(16,"mat-panel-title"),n(17," Quick Scan "),e()(),t(18,"p")(19,"strong"),n(20,"Objective:"),e(),n(21," Identify the full attack surface and all open ports. "),e(),r(22,"app-terminal",14),e(),t(23,"mat-expansion-panel")(24,"mat-expansion-panel-header")(25,"mat-panel-title"),n(26," Service Enumeration "),e()(),r(27,"app-terminal",14),e(),t(28,"mat-expansion-panel")(29,"mat-expansion-panel-header")(30,"mat-panel-title"),n(31," Banner Grabbing "),e()(),r(32,"app-terminal",14),e(),t(33,"mat-expansion-panel")(34,"mat-expansion-panel-header")(35,"mat-panel-title"),n(36," Unknown / Rare Ports "),e()(),t(37,"p")(38,"strong"),n(39,"Do not search for exploits yet."),e(),n(40," First identify the protocol and service. "),e(),r(41,"app-terminal",14),t(42,"button",15),x("click",function(){c(a);let o=l();return d(o.copy(o.unknownPorts))}),n(43,"Copy"),e()()()(),t(44,"mat-expansion-panel")(45,"mat-expansion-panel-header")(46,"mat-panel-title"),n(47," 2. Common Services "),e()(),t(48,"mat-accordion",13)(49,"mat-expansion-panel")(50,"mat-expansion-panel-header")(51,"mat-panel-title"),n(52,"SSH"),e()(),r(53,"app-terminal",14),t(54,"button",15),x("click",function(){c(a);let o=l();return d(o.copy(o.nmapSSH))}),n(55,"Copy"),e()(),t(56,"mat-expansion-panel")(57,"mat-expansion-panel-header")(58,"mat-panel-title"),n(59,"FTP"),e()(),r(60,"app-terminal",14),t(61,"button",15),x("click",function(){c(a);let o=l();return d(o.copy(o.nmapFTP))}),n(62,"Copy"),e()(),t(63,"mat-expansion-panel")(64,"mat-expansion-panel-header")(65,"mat-panel-title"),n(66,"SMB"),e()(),r(67,"app-terminal",14),e(),t(68,"mat-expansion-panel")(69,"mat-expansion-panel-header")(70,"mat-panel-title"),n(71,"HTTP / Web"),e()(),r(72,"app-terminal",14),e(),t(73,"mat-expansion-panel")(74,"mat-expansion-panel-header")(75,"mat-panel-title"),n(76,"Telnet"),e()(),r(77,"app-terminal",14),e(),t(78,"mat-expansion-panel")(79,"mat-expansion-panel-header")(80,"mat-panel-title"),n(81,"RDP"),e()(),r(82,"app-terminal",14),e(),t(83,"mat-expansion-panel")(84,"mat-expansion-panel-header")(85,"mat-panel-title"),n(86,"VNC"),e()(),r(87,"app-terminal",14),e(),t(88,"mat-expansion-panel")(89,"mat-expansion-panel-header")(90,"mat-panel-title"),n(91,"SMTP"),e()(),r(92,"app-terminal",14),e(),t(93,"mat-expansion-panel")(94,"mat-expansion-panel-header")(95,"mat-panel-title"),n(96,"POP3 / IMAP"),e()(),r(97,"app-terminal",14),e(),t(98,"mat-expansion-panel")(99,"mat-expansion-panel-header")(100,"mat-panel-title"),n(101,"SNMP"),e()(),r(102,"app-terminal",14),e(),t(103,"mat-expansion-panel")(104,"mat-expansion-panel-header")(105,"mat-panel-title"),n(106,"LDAP"),e()(),r(107,"app-terminal",14),e(),t(108,"mat-expansion-panel")(109,"mat-expansion-panel-header")(110,"mat-panel-title"),n(111,"SIP"),e()(),r(112,"app-terminal",14),e(),t(113,"mat-expansion-panel")(114,"mat-expansion-panel-header")(115,"mat-panel-title"),n(116,"IRC"),e()(),r(117,"app-terminal",14),e()()(),t(118,"mat-expansion-panel")(119,"mat-expansion-panel-header")(120,"mat-panel-title"),n(121," 3. Database Services "),e()(),t(122,"mat-accordion",13)(123,"mat-expansion-panel")(124,"mat-expansion-panel-header")(125,"mat-panel-title"),n(126,"MSSQL"),e()(),r(127,"app-terminal",14),e(),t(128,"mat-expansion-panel")(129,"mat-expansion-panel-header")(130,"mat-panel-title"),n(131,"MySQL"),e()(),r(132,"app-terminal",14),e(),t(133,"mat-expansion-panel")(134,"mat-expansion-panel-header")(135,"mat-panel-title"),n(136,"PostgreSQL"),e()(),r(137,"app-terminal",14),e(),t(138,"mat-expansion-panel")(139,"mat-expansion-panel-header")(140,"mat-panel-title"),n(141,"Redis"),e()(),r(142,"app-terminal",14),e(),t(143,"mat-expansion-panel")(144,"mat-expansion-panel-header")(145,"mat-panel-title"),n(146,"Oracle"),e()(),r(147,"app-terminal",14),e()()(),t(148,"mat-expansion-panel")(149,"mat-expansion-panel-header")(150,"mat-panel-title"),n(151," 4. NSE & Authentication "),e()(),t(152,"mat-accordion",13)(153,"mat-expansion-panel")(154,"mat-expansion-panel-header")(155,"mat-panel-title"),n(156," Credential Attacks "),e()(),t(157,"p"),n(158," Use authentication testing only after identifying the service and its authentication mechanism. "),e(),t(159,"p")(160,"strong"),n(161,"Recommended workflow:"),e()(),t(162,"ul")(163,"li"),n(164,"Confirm the service is real and reachable."),e(),t(165,"li"),n(166,"Identify the authentication mechanism."),e(),t(167,"li"),n(168,"Check for default or weak credentials."),e(),t(169,"li"),n(170,"Perform normal enumeration first."),e()()(),t(171,"mat-expansion-panel")(172,"mat-expansion-panel-header")(173,"mat-panel-title"),n(174," General NSE Discovery "),e()(),r(175,"app-terminal",14),e()()()()(),u()}if(s&2){let a=l();i(22),p("command",a.nmapQuick),i(5),p("command",a.nmapEnum),i(5),p("command",a.bannerGrab),i(9),p("command",a.unknownPorts),i(12),p("command",a.nmapSSH),i(7),p("command",a.nmapFTP),i(7),p("command",a.nmapSMB),i(5),p("command",a.nmapHTTP),i(5),p("command",a.nmapTelnet),i(5),p("command",a.nmapRDP),i(5),p("command",a.nmapVNC),i(5),p("command",a.nmapSMTP),i(5),p("command",a.nmapMail),i(5),p("command",a.nmapSNMP),i(5),p("command",a.nmapLDAP),i(5),p("command",a.nmapSIP),i(5),p("command",a.nmapIRC),i(10),p("command",a.nmapMSSQL),i(5),p("command",a.nmapMySQL),i(5),p("command",a.nmapPostgreSQL),i(5),p("command",a.nmapRedis),i(5),p("command",a.nmapOracle),i(28),p("command",a.nmapNSE)}}function V(s,g){if(s&1){let a=h();_(0),t(1,"div",10)(2,"button",11),x("click",function(){c(a);let o=l();return d(o.back())}),n(3,"\u2190 Back to Scan"),e(),t(4,"h2"),n(5,"Nikto"),e(),t(6,"p",12),n(7," Web server scanning, misconfiguration detection and vulnerability discovery. "),e(),t(8,"mat-accordion",13)(9,"mat-expansion-panel")(10,"mat-expansion-panel-header")(11,"mat-panel-title"),n(12," 1. Basic Scanning "),e()(),t(13,"mat-accordion",13)(14,"mat-expansion-panel")(15,"mat-expansion-panel-header")(16,"mat-panel-title"),n(17," Basic HTTP Scan "),e()(),t(18,"p")(19,"strong"),n(20,"Objective:"),e(),n(21," Perform an initial scan of a web server and identify common security issues, dangerous files and misconfigurations. "),e(),r(22,"app-terminal",14),e(),t(23,"mat-expansion-panel")(24,"mat-expansion-panel-header")(25,"mat-panel-title"),n(26," HTTPS Scan "),e()(),t(27,"p"),n(28,"Scan a web server running over HTTPS."),e(),r(29,"app-terminal",14),e(),t(30,"mat-expansion-panel")(31,"mat-expansion-panel-header")(32,"mat-panel-title"),n(33," Custom Port "),e()(),t(34,"p"),n(35,"Useful when HTTP or HTTPS is running on a non-standard port."),e(),r(36,"app-terminal",14),e()()(),t(37,"mat-expansion-panel")(38,"mat-expansion-panel-header")(39,"mat-panel-title"),n(40," 2. Web Server Enumeration "),e()(),t(41,"mat-accordion",13)(42,"mat-expansion-panel")(43,"mat-expansion-panel-header")(44,"mat-panel-title"),n(45," Server Information "),e()(),t(46,"p"),n(47,"Identify the web server and inspect the information exposed by its responses."),e(),r(48,"app-terminal",14),e(),t(49,"mat-expansion-panel")(50,"mat-expansion-panel-header")(51,"mat-panel-title"),n(52," CGI / Common Files "),e()(),t(53,"p"),n(54,"Look for common CGI paths, files and potentially interesting resources."),e(),r(55,"app-terminal",14),e(),t(56,"mat-expansion-panel")(57,"mat-expansion-panel-header")(58,"mat-panel-title"),n(59," Plugins and Components "),e()(),t(60,"p"),n(61," Identify potentially vulnerable web applications, plugins and server components. "),e(),r(62,"app-terminal",14),e()()(),t(63,"mat-expansion-panel")(64,"mat-expansion-panel-header")(65,"mat-panel-title"),n(66," 3. Authentication & Misconfiguration "),e()(),t(67,"mat-accordion",13)(68,"mat-expansion-panel")(69,"mat-expansion-panel-header")(70,"mat-panel-title"),n(71," Authentication "),e()(),t(72,"p"),n(73,"Identify authentication-related information and potentially exposed resources."),e(),r(74,"app-terminal",14),e(),t(75,"mat-expansion-panel")(76,"mat-expansion-panel-header")(77,"mat-panel-title"),n(78," Misconfiguration Detection "),e()(),t(79,"p"),n(80," Look for common web server misconfigurations, outdated components and insecure configurations. "),e(),r(81,"app-terminal",14),e()()(),t(82,"mat-expansion-panel")(83,"mat-expansion-panel-header")(84,"mat-panel-title"),n(85," 4. SSL / TLS "),e()(),t(86,"mat-accordion",13)(87,"mat-expansion-panel")(88,"mat-expansion-panel-header")(89,"mat-panel-title"),n(90," SSL Scanning "),e()(),t(91,"p"),n(92,"Scan HTTPS services and check for common SSL/TLS configuration issues."),e(),r(93,"app-terminal",14),e(),t(94,"mat-expansion-panel")(95,"mat-expansion-panel-header")(96,"mat-panel-title"),n(97," HTTPS on Custom Port "),e()(),r(98,"app-terminal",14),e()()(),t(99,"mat-expansion-panel")(100,"mat-expansion-panel-header")(101,"mat-panel-title"),n(102," 5. Tuning & Output "),e()(),t(103,"mat-accordion",13)(104,"mat-expansion-panel")(105,"mat-expansion-panel-header")(106,"mat-panel-title"),n(107," Scan Tuning "),e()(),t(108,"p"),n(109," Restrict the types of tests performed during the scan when you need a more focused assessment. "),e(),r(110,"app-terminal",14),e(),t(111,"mat-expansion-panel")(112,"mat-expansion-panel-header")(113,"mat-panel-title"),n(114," Output "),e()(),t(115,"p"),n(116,"Save the results of a Nikto scan for later analysis or documentation."),e(),r(117,"app-terminal",14),e()()()()(),u()}if(s&2){let a=l();i(22),p("command",a.niktoBasic),i(7),p("command",a.niktoHTTPS),i(7),p("command",a.niktoPort),i(12),p("command",a.niktoServerInfo),i(7),p("command",a.niktoCGI),i(7),p("command",a.niktoPlugins),i(12),p("command",a.niktoAuth),i(7),p("command",a.niktoMisconfig),i(12),p("command",a.niktoSSL),i(5),p("command",a.niktoSSLPort),i(12),p("command",a.niktoTuning),i(7),p("command",a.niktoOutput)}}var T=class s{selected=null;nmapQuick=`
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
`;selectTech(g){this.selected=g}back(){this.selected=null}copy(g){navigator.clipboard.writeText(g)}static \u0275fac=function(a){return new(a||s)};static \u0275cmp=S({type:s,selectors:[["app-scan"]],decls:9,vars:3,consts:[[1,"scan-page"],[1,"terminal-path"],[1,"prompt"],[4,"ngIf"],[1,"title"],[1,"page-description"],[1,"grid"],[1,"card",3,"click"],[1,"card-icon"],[1,"card-content"],[1,"detail"],[1,"back",3,"click"],[1,"section-description"],["multi",""],[3,"command"],[3,"click"]],template:function(a,m){a&1&&(t(0,"div",0)(1,"div",1)(2,"span",2),n(3,"~"),e(),n(4,"/get.sh/scan"),e(),r(5,"br"),f(6,w,44,0,"ng-container",3)(7,O,176,23,"ng-container",3)(8,V,118,12,"ng-container",3),e()),a&2&&(i(6),p("ngIf",!m.selected),i(),p("ngIf",m.selected==="nmap"),i(),p("ngIf",m.selected==="nikto"))},dependencies:[E,b,y,P,C,v,k,M],styles:['.scan-page[_ngcontent-%COMP%]{padding:2rem;color:#e2e8f0;max-width:1200px;margin:0 auto}.title[_ngcontent-%COMP%]{font-size:30px;font-weight:700;margin:0 0 .5rem;color:#f8fafc}.page-description[_ngcontent-%COMP%]{margin:0 0 2rem;color:#64748b;font-size:14px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}.card[_ngcontent-%COMP%]{position:relative;display:flex;align-items:flex-start;gap:1rem;min-height:130px;padding:1.25rem;background:#111827;border:1px solid #1e293b;border-radius:12px;cursor:pointer;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:#2563eb;background:#172033;box-shadow:0 8px 25px #00000040,0 0 15px #2563eb14}.card-icon[_ngcontent-%COMP%]{flex-shrink:0;width:46px;height:46px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:#0b1220;border:1px solid #1e3a5f;color:#38bdf8;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:18px;font-weight:700;transition:border-color .2s ease,color .2s ease,background .2s ease}.card[_ngcontent-%COMP%]:hover   .card-icon[_ngcontent-%COMP%]{border-color:#2563eb;color:#60a5fa;background:#0f172a}.card-content[_ngcontent-%COMP%]{min-width:0}.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .45rem;color:#f8fafc;font-size:17px;font-weight:650}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#64748b;font-size:13px;line-height:1.5}.detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:30px;font-weight:700;color:#f8fafc}.section-description[_ngcontent-%COMP%]{margin:-.5rem 0 1rem;color:#94a3b8;font-size:14px}.back[_ngcontent-%COMP%]{background:transparent;border:1px solid #334155;color:#e2e8f0;padding:8px 12px;border-radius:8px;cursor:pointer;width:fit-content;transition:background .2s ease,border-color .2s ease,color .2s ease}.back[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}mat-expansion-panel[_ngcontent-%COMP%]{background:#1e293b!important;color:#e2e8f0!important;border-radius:10px!important;margin-bottom:10px;border:1px solid #334155;box-shadow:none!important}mat-expansion-panel-header[_ngcontent-%COMP%]{color:#e2e8f0!important;background:transparent!important;min-height:52px}mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#243449!important}mat-panel-title[_ngcontent-%COMP%]{color:#e2e8f0!important;font-weight:600}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{background:#172033!important;border-color:#2c3b50}mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{background:#111827!important}.detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#cbd5e1;line-height:1.6}.detail[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#f8fafc}.detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#cbd5e1;line-height:1.8;padding-left:1.5rem}pre[_ngcontent-%COMP%]{position:relative;background:#080d14;color:#38bdf8;padding:16px 18px 16px 38px;border-radius:8px;border:1px solid #1e293b;overflow-x:auto;margin:1rem 0 0;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;line-height:1.6;box-shadow:inset 0 0 20px #00000040}pre[_ngcontent-%COMP%]:before{content:"$";position:absolute;left:16px;top:16px;color:#22c55e;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-weight:700}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#38bdf8;font-family:inherit}.copy-button[_ngcontent-%COMP%]{margin-top:8px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;font-size:12px;padding:6px 10px;border-radius:6px;cursor:pointer;transition:background .2s ease,border-color .2s ease,color .2s ease}.terminal-path[_ngcontent-%COMP%]{margin-bottom:.5rem;font-family:JetBrains Mono,Fira Code,Consolas,monospace;font-size:13px;color:#64748b}.terminal-path[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#38bdf8}.copy-button[_ngcontent-%COMP%]:hover{background:#1e293b;border-color:#3b82f6;color:#60a5fa}.copy-button[_ngcontent-%COMP%]:active{transform:translateY(1px)}@media(max-width:768px){.scan-page[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{font-size:24px}.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:26px}mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 12px}pre[_ngcontent-%COMP%]{font-size:12px;padding:12px}}']})};export{T as ScanComponent};
