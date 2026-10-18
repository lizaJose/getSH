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
  { type: 'section', title: 'FTP', keywords: ['ftp', 'file transfer', 'anonymous', 'port 21'], route: '/common-services', queryParams: { service: 'ftp' }, section: 'Common Services', summary: 'Anonymous access and file discovery.' },
  { type: 'section', title: 'SMB', keywords: ['smb', 'samba', 'shares', 'smbclient', 'port 445'], route: '/common-services', queryParams: { service: 'smb' }, section: 'Common Services', summary: 'Share enumeration, permissions and files.' },
  { type: 'section', title: 'HTTP / HTTPS', keywords: ['http', 'https', 'web', 'ffuf', 'gobuster', 'vhosts'], route: '/common-services', queryParams: { service: 'http' }, section: 'Common Services', summary: 'Technology discovery, directories and virtual hosts.' },
  { type: 'section', title: 'SMTP', keywords: ['smtp', 'mail', 'email', 'vrfy', 'relay'], route: '/common-services', queryParams: { service: 'smtp' }, section: 'Common Services', summary: 'Mail commands, user enumeration and relay checks.' },
  { type: 'section', title: 'SNMP', keywords: ['snmp', 'community', 'snmpwalk', 'onesixtyone', 'udp 161'], route: '/common-services', queryParams: { service: 'snmp' }, section: 'Common Services', summary: 'Community strings and system information.' },
  { type: 'section', title: 'LDAP', keywords: ['ldap', 'active directory', 'directory', 'users', 'groups'], route: '/common-services', queryParams: { service: 'ldap' }, section: 'Common Services', summary: 'Naming context and directory object enumeration.' },
  { type: 'section', title: 'RDP', keywords: ['rdp', 'remote desktop', 'xfreerdp', '3389'], route: '/common-services', queryParams: { service: 'rdp' }, section: 'Common Services', summary: 'RDP configuration and connection.' },
  { type: 'section', title: 'Databases', keywords: ['database', 'mysql', 'mssql', 'postgresql', 'sql'], route: '/common-services', queryParams: { service: 'databases' }, section: 'Common Services', summary: 'Database service identification and access.' },
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

  // Privilege escalation
  { type: 'section', title: 'Linux Privilege Escalation', keywords: ['linux', 'privesc', 'sudo', 'suid', 'capabilities', 'cron', 'docker'], route: '/privesc', queryParams: { system: 'linux' }, section: 'Privilege Escalation', summary: 'Linux host enumeration and privilege checks.' },
  { type: 'section', title: 'Windows Privilege Escalation', keywords: ['windows', 'privesc', 'services', 'scheduled tasks', 'seimpersonate'], route: '/privesc', queryParams: { system: 'windows' }, section: 'Privilege Escalation', summary: 'Windows services, tasks and local privilege checks.' },

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
];