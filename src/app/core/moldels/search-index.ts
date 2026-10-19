export type SearchResultType = 'section' | 'command';

export interface SearchEntry {
  type: SearchResultType;
  title: string;
  keywords: string[];
  route?: string;
  section?: string;
  command?: string;
  summary?: string;
  queryParams?: Record<string, string>;
}

export const SEARCH_INDEX: SearchEntry[] = [
  // Scan tools
  { type: 'section', title: 'Nmap', keywords: ['nmap', 'scan', 'tcp', 'ports', 'service detection', 'enumeration'], route: '/scan', queryParams: { tool: 'nmap' }, section: 'Scan', summary: 'Port discovery, service detection and Nmap scripts.' },
  { type: 'section', title: 'RustScan', keywords: ['rustscan', 'rust scan', 'fast scan', 'tcp ports'], route: '/scan', queryParams: { tool: 'rustscan' }, section: 'Scan', summary: 'Fast TCP discovery followed by Nmap enumeration.' },
  { type: 'section', title: 'Masscan', keywords: ['masscan', 'mass scan', 'fast ports', 'tcp scan'], route: '/scan', queryParams: { tool: 'masscan' }, section: 'Scan', summary: 'High-speed TCP port discovery.' },
  { type: 'section', title: 'Nikto', keywords: ['nikto', 'web scan', 'http scan', 'https'], route: '/scan', queryParams: { tool: 'nikto' }, section: 'Scan', summary: 'Web server checks and misconfiguration discovery.' },

  // Common services
  { type: 'section', title: 'SSH', keywords: ['ssh', 'secure shell', 'keys', 'tunnel'], route: '/common-services', queryParams: { service: 'ssh' }, section: 'Common Services', summary: 'Authentication, exposed keys and tunneling.' },
  { type: 'section', title: 'FTP', keywords: ['ftp', 'anonymous', 'port 21'], route: '/common-services', queryParams: { service: 'ftp' }, section: 'Common Services', summary: 'Anonymous access and file discovery.' },
  { type: 'section', title: 'SMB', keywords: ['smb', 'samba', 'shares', 'smbclient', 'port 445'], route: '/common-services', queryParams: { service: 'smb' }, section: 'Common Services', summary: 'Share enumeration, permissions and files.' },
  { type: 'section', title: 'HTTP / HTTPS', keywords: ['http', 'https', 'web', 'ffuf', 'gobuster', 'vhosts'], route: '/common-services', queryParams: { service: 'http' }, section: 'Common Services', summary: 'Technology discovery, directories and virtual hosts.' },
  { type: 'section', title: 'SMTP', keywords: ['smtp', 'mail', 'email', 'vrfy', 'relay'], route: '/common-services', queryParams: { service: 'smtp' }, section: 'Common Services', summary: 'Mail commands, user enumeration and relay checks.' },
  { type: 'section', title: 'SNMP', keywords: ['snmp', 'community', 'snmpwalk', 'onesixtyone', 'udp 161'], route: '/common-services', queryParams: { service: 'snmp' }, section: 'Common Services', summary: 'Community strings and system information.' },
  { type: 'section', title: 'LDAP', keywords: ['ldap', 'active directory', 'directory', 'users', 'groups'], route: '/common-services', queryParams: { service: 'ldap' }, section: 'Common Services', summary: 'Naming context and directory object enumeration.' },
  { type: 'section', title: 'RDP', keywords: ['rdp', 'remote desktop', 'xfreerdp', '3389'], route: '/common-services', queryParams: { service: 'rdp' }, section: 'Common Services', summary: 'RDP configuration and connection.' },
  { type: 'section', title: 'Databases', keywords: ['database', 'mysql', 'mssql', 'postgresql', 'sql'], route: '/common-services', queryParams: { service: 'databases' }, section: 'Common Services', summary: 'Database service identification and access.' },
  { type: 'section', title: 'File Transfer', keywords: ['transfer', 'file transfer', 'upload', 'download', 'scp', 'smbserver', 'netcat', 'base64', 'wget', 'curl'], route: '/useful-stuff', queryParams: { section: 'file-transfer' }, section: 'Useful Stuff', summary: 'Transfer files between Kali and Windows/Linux.' },
  { type: 'section', title: 'Git & File Hunting', keywords: ['git-dumper', 'exposed git', 'secret hunting', 'file hunting', 'configuration files'], route: '/useful-stuff', queryParams: { section: 'git-files' }, section: 'Useful Stuff / Recon', summary: 'Find exposed repository history and scoped secret files.' },
  { type: 'section', title: 'Database References', keywords: ['postgresql', 'mysql', 'mssql', 'database rce', 'xp_cmdshell', 'copy program'], route: '/useful-stuff', queryParams: { section: 'database-reference' }, section: 'Useful Stuff / Services', summary: 'Links to existing database enumeration and SQLi guides.' },
  { type: 'section', title: 'Tunneling & Port Forwarding', keywords: ['chisel', 'ssh tunnel', 'port forward', 'socks proxy', 'pivot'], route: '/useful-stuff', queryParams: { section: 'tunneling' }, section: 'Useful Stuff / Networking', summary: 'SSH and Chisel forwarding with a link to the Ligolo flow.' },
  { type: 'section', title: 'Payload Formats', keywords: ['msfvenom', 'exe payload', 'elf payload', 'php payload', 'listener'], route: '/useful-stuff', queryParams: { section: 'payload-formats' }, section: 'Useful Stuff / Tooling', summary: 'Payload format examples using the configured callback values.' },
  { type: 'section', title: 'Python Environments', keywords: ['venv', 'virtualenv', 'pep 668', 'impacket install'], route: '/useful-stuff', queryParams: { section: 'python-environments' }, section: 'Useful Stuff / Tooling', summary: 'Isolate Python tools and avoid changing system Python.' },
  { type: 'section', title: 'RDP Toolkit', keywords: ['xfreerdp', 'rdp', 'remote desktop', 'clipboard'], route: '/useful-stuff', queryParams: { section: 'rdp' }, section: 'Useful Stuff / Remote Access', summary: 'RDP connection options and troubleshooting.' },
  { type: 'section', title: 'Hydra SSH Authentication', keywords: ['hydra', 'ssh', 'password list', 'authentication'], route: '/common-services', section: 'Common Services / SSH / Authentication', summary: 'Open SSH authentication commands using Hydra.', queryParams: { service: 'ssh', panel: 'ssh-authentication' } },
  { type: 'section', title: 'Hydra FTP Authentication', keywords: ['hydra', 'ftp', 'password list', 'authentication'], route: '/common-services', section: 'Common Services / FTP / Authentication', summary: 'Open FTP authentication commands using Hydra.', queryParams: { service: 'ftp', panel: 'ftp-authentication' } },

  // Web
  { type: 'section', title: 'Web Reconnaissance', keywords: ['web', 'recon', 'whatweb', 'headers', 'technology'], route: '/web', queryParams: { section: 'recon' }, section: 'Web', summary: 'Identify technologies, headers and application surfaces.' },
  { type: 'section', title: 'Directory Discovery', keywords: ['directory', 'content discovery', 'gobuster', 'feroxbuster', 'ffuf', 'wordlist'], route: '/web', queryParams: { section: 'directories' }, section: 'Web', summary: 'Discover paths, files and virtual hosts.' },
  { type: 'section', title: 'SQL Injection', keywords: ['sqli', 'sql injection', 'sqlmap', 'union', 'blind'], route: '/web', queryParams: { section: 'sqli' }, section: 'Web', summary: 'Injection identification and database-specific testing.' },
  { type: 'section', title: 'Cross-Site Scripting', keywords: ['xss', 'javascript', 'reflected', 'stored', 'dom'], route: '/web', queryParams: { section: 'xss' }, section: 'Web', summary: 'Reflected, stored and DOM-based XSS.' },
  { type: 'section', title: 'File Inclusion', keywords: ['lfi', 'rfi', 'traversal', 'php wrapper', 'log poisoning'], route: '/web', queryParams: { section: 'fileInclusions' }, section: 'Web', summary: 'Local/remote file inclusion and path traversal.' },
  { type: 'section', title: 'SSRF & APIs', keywords: ['ssrf', 'api', 'graphql', 'swagger', 'idor'], route: '/web', queryParams: { section: 'ssrf' }, section: 'Web', summary: 'Server-side requests and API assessment.' },

  // Active Directory
  { type: 'section', title: 'Active Directory', keywords: ['active directory', 'ad', 'domain', 'windows domain', 'ldap'], route: '/ad', section: 'Active Directory', summary: 'Domain enumeration, relationships and attack paths.' },
  { type: 'section', title: 'BloodHound', keywords: ['bloodhound', 'sharphound', 'attack paths', 'graph'], route: '/ad', queryParams: { service: 'bloodhound' }, section: 'Active Directory', summary: 'Collect and analyze directory relationships.' },
  { type: 'section', title: 'Kerberos', keywords: ['kerberos', 'as-rep roasting', 'kerberoasting', 'tickets', 'rubeus'], route: '/ad', queryParams: { service: 'kerberos' }, section: 'Active Directory', summary: 'SPNs, roasting and ticket assessment.' },
  { type: 'section', title: 'AD Permissions & ACLs', keywords: ['acl', 'genericall', 'genericwrite', 'dacl', 'delegation'], route: '/ad', queryParams: { service: 'acl' }, section: 'Active Directory', summary: 'Inspect object permissions and delegated rights.' },
  { type: 'section', title: 'Domain Shares', keywords: ['sysvol', 'smb', 'shares', 'gpp', 'cpassword'], route: '/ad', queryParams: { service: 'shares' }, section: 'Active Directory', summary: 'Review accessible domain shares and policy files.' },
  { type: 'section', title: 'Three-Host AD Example', keywords: ['ad set', 'active directory example', 'sqli to dcsync', 'three host', 'domain chain'], route: '/ad', queryParams: { service: 'ad-example-three-host' }, section: 'Active Directory / Examples', summary: 'Fictional WEB01 → APP02 → DC assessment using existing guides.' },
  { type: 'section', title: 'AD Post-Exploitation', keywords: ['post-exploitation', 'post compromise', 'after system', 'lateral movement', 'credential recovery'], route: '/ad', queryParams: { service: 'ad-flow', phase: 'post-exploitation' }, section: 'Active Directory / Windows Pivot Flow', summary: 'Post-SYSTEM situational awareness, credential handling and lateral paths.' },

  // Privilege escalation
  { type: 'section', title: 'Linux Privilege Escalation', keywords: ['linux', 'privesc', 'sudo', 'suid', 'capabilities', 'cron', 'docker'], route: '/privesc', queryParams: { system: 'linux' }, section: 'Privilege Escalation', summary: 'Linux host enumeration and privilege checks.' },
  { type: 'section', title: 'Windows Privilege Escalation', keywords: ['windows', 'privesc', 'services', 'service permissions', 'alwaysinstallelevated', 'installer policy', 'scheduled tasks', 'seimpersonate'], route: '/privesc', queryParams: { system: 'windows' }, section: 'Privilege Escalation', summary: 'Windows services, installer policy, tasks and local privilege checks.' },
  { type: 'section', title: 'pspy Process Monitor', keywords: ['pspy', 'cron', 'scheduled jobs', 'linux processes'], route: '/privesc', queryParams: { system: 'linux' }, section: 'Privilege Escalation / Linux / Cron', summary: 'Observe short-lived processes and scheduled jobs.' },

  // Commands
  { type: 'command', title: 'Nmap full TCP port scan', keywords: ['nmap', 'full port scan', 'open ports', 'tcp'], command: 'sudo nmap -p- --open -sS -n -Pn {{TARGET_IP}} -oN open-ports.txt', section: 'Scan / Nmap', summary: 'Find open TCP ports on the target.' },
  { type: 'command', title: 'Nmap service enumeration', keywords: ['nmap', 'service version', 'scripts', 'enum'], command: 'nmap -sC -sV -p {{TARGET_PORT}} -Pn {{TARGET_IP}} -oN services.txt', section: 'Scan / Nmap', summary: 'Identify versions and run default scripts.' },
  { type: 'command', title: 'RustScan quick scan', keywords: ['rustscan', 'nmap', 'fast tcp'], command: 'rustscan -a {{TARGET_IP}} -r 1-1000 --ulimit 5000 -- -Pn -sV -sC', section: 'Scan / RustScan', summary: 'Discover common TCP ports and identify services.' },
  { type: 'command', title: 'Masscan port discovery', keywords: ['masscan', 'tcp', 'ports'], command: 'sudo masscan {{TARGET_IP}} -p1-65535 --rate 500 -oL masscan-open-ports.txt', section: 'Scan / Masscan', summary: 'Discover TCP ports at a controlled rate.' },
  { type: 'command', title: 'SSH service check', keywords: ['ssh', 'nmap', 'authentication methods'], command: 'nmap -p 22 -sV -sC -Pn {{TARGET_IP}}', section: 'Common Services / SSH', summary: 'Identify SSH version and configuration.' },
  { type: 'command', title: 'FTP anonymous access check', keywords: ['ftp', 'anonymous', 'nmap'], command: 'nmap --script ftp-anon -p 21 {{TARGET_IP}}', section: 'Common Services / FTP', summary: 'Check whether anonymous FTP access is available.' },
  { type: 'command', title: 'SMB share enumeration', keywords: ['smb', 'shares', 'smbclient'], command: 'smbclient -L //{{TARGET_IP}} -N', section: 'Common Services / SMB', summary: 'List shares without credentials.' },
  { type: 'command', title: 'Web directory discovery', keywords: ['http', 'ffuf', 'directory', 'fuzz'], command: 'ffuf -u http://{{TARGET_IP}}/FUZZ -w wordlist.txt', section: 'Common Services / HTTP', summary: 'Discover common web paths.' },
  { type: 'command', title: 'LDAP base discovery', keywords: ['ldap', 'base dn', 'naming context'], command: 'ldapsearch -x -H ldap://{{TARGET_IP}} -s base', section: 'Common Services / LDAP', summary: 'Query the directory naming context.' },
  { type: 'command', title: 'SNMP system information', keywords: ['snmp', 'snmpwalk', 'system'], command: 'snmpwalk -v2c -c public {{TARGET_IP}} 1.3.6.1.2.1.1', section: 'Common Services / SNMP', summary: 'Query basic system information with the public community.' },
  { type: 'command', title: 'Nmap AD ports scan', keywords: ['nmap', 'active directory', 'kerberos', 'ldap', 'smb'], command: 'nmap -sC -sV -p 53,88,135,139,389,445,464,636,3268,3389,5985 {{TARGET_IP}}', section: 'Active Directory', summary: 'Check common Active Directory services.' },
  { type: 'command', title: 'Linux sudo permissions', keywords: ['linux', 'sudo', 'privesc'], command: 'sudo -l', section: 'Privilege Escalation / Linux', summary: 'Review commands available through sudo.' },

  // Active Directory (additional)
  { type: 'section', title: 'AD Certificate Services (ADCS)', keywords: ['adcs', 'certificate services', 'esc1', 'esc8', 'certify', 'certipy'], route: '/ad', queryParams: { service: 'adcs' }, section: 'Active Directory', summary: 'Enumerate and abuse misconfigured certificate templates.' },
  { type: 'section', title: 'DCOM Lateral Movement', keywords: ['dcom', 'mmc20', 'shellwindows', 'lateral movement', 'com objects'], route: '/ad', queryParams: { service: 'dcom' }, section: 'Active Directory', summary: 'Execute commands remotely via DCOM application objects.' },
  { type: 'section', title: 'AD Post-Exploitation Checklist', keywords: ['checklist', 'post exploitation', 'post compromise', 'domain admin'], route: '/ad', queryParams: { service: 'post-exploitation-checklist' }, section: 'Active Directory', summary: 'Structured checklist to follow after compromising a domain host.' },

  // Web (additional)
  { type: 'section', title: 'OS Command Injection', keywords: ['os command injection', 'rce', 'command injection', 'shell metacharacters'], route: '/web', queryParams: { section: 'os-command' }, section: 'Web', summary: 'Detect and exploit operating system command injection.' },
  { type: 'section', title: 'WordPress Assessment', keywords: ['wordpress', 'wpscan', 'wp-login', 'plugin vulnerabilities', 'cms'], route: '/web', queryParams: { section: 'wordpress' }, section: 'Web', summary: 'Fingerprint and attack WordPress installations.' },

  // Common Services (additional)
  { type: 'section', title: 'RDP Credential Brute Force', keywords: ['rdp', 'brute force', 'crowbar', 'hydra', 'credential spraying'], route: '/common-services', queryParams: { service: 'rdp' }, section: 'Common Services', summary: 'Spray or brute-force RDP credentials.' },
  { type: 'section', title: 'HTTP POST Login Brute Force', keywords: ['http', 'login form', 'hydra', 'brute force', 'post request'], route: '/common-services', queryParams: { service: 'http' }, section: 'Common Services', summary: 'Brute-force HTTP POST login forms.' },

  // Useful Stuff (additional)
  { type: 'section', title: 'Password Cracking & Hashes', keywords: ['hashcat', 'john', 'ntlm', 'keepass', 'ssh2john', 'pass the hash', 'ntlmrelayx', 'responder', 'credential guard'], route: '/useful-stuff', queryParams: { section: 'password-cracking' }, section: 'Useful Stuff', summary: 'Offline hash cracking, wordlist mutation and NTLM capture/pass/relay workflows.' },
];