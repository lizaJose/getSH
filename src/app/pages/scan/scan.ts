import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './scan.html',
  styleUrl: './scan.scss',
})
export class ScanComponent {

  selected: string | null = null;

  // 🔥 NMAP CONTENT SAFE (NO rompe Angular)
  nmapQuick = `
sudo nmap -p- --open --min-rate 1000 -sS -n -Pn <target_ip> -oN openPorts

nmap -sCV -p \$(grep "^[0-9]" openPorts | awk '{print $1}' | cut -d'/' -f1 | paste -sd,) target_ip -oN services
  
nmap -sV --script vuln -p \$(grep "^[0-9]" openPorts | awk '{print $1}' | cut -d'/' -f1 | paste -sd,) -Pn target_ip -oN vuln

`;
  nmapSSH = `
nmap -p 22 --script ssh-brute target_ip

nmap --script ssh-auth-methods -p 22 target_ip
`;

  nmapFTP = `
nmap --script ftp-anon -p 21 target_ip
nmap --script ftp-brute -p 21 target_ip
`;

  nmapSMB = `
nmap --script smb-enum-users -p 445 target_ip
nmap --script smb-os-discovery -p 445 target_ip
nmap --script smb-brute -p 445 target_ip
`;

  nmapHTTP = `
nmap --script http-auth-finder target_ip
nmap --script http-brute target_ip
nmap --script http-wordpress-brute target_ip
nmap --script http-default-accounts target_ip
`;

  nmapMSSQL = `
nmap --script ms-sql-info -p 1433 target_ip
nmap --script ms-sql-brute -p 1433 target_ip
nmap --script ms-sql-empty-password -p 1433 target_ip
`;

  nmapMySQL = `
nmap --script mysql-info -p 3306 target_ip
nmap --script mysql-empty-password -p 3306 target_ip
nmap --script mysql-brute -p 3306 target_ip
`;

  nmapPostgreSQL = `
nmap --script pgsql-brute -p 5432 target_ip
`;

  nmapVNC = `
nmap --script realvnc-auth-bypass -p 5900 target_ip
nmap --script vnc-brute -p 5900 target_ip
`;

  nmapTelnet = `
nmap --script telnet-brute -p 23 target_ip
`;

  nmapRDP = `
nmap --script rdp-ntlm-info -p 3389 target_ip
nmap --script rdp-enum-encryption -p 3389 target_ip
`;

  nmapSNMP = `
nmap --script snmp-interfaces -sU -p 161 target_ip
nmap --script snmp-processes -sU -p 161 target_ip
nmap --script snmp-brute -sU -p 161 target_ip
`;

  nmapLDAP = `
nmap --script ldap-rootdse -p 389 target_ip
nmap --script ldap-search -p 389 target_ip
nmap --script ldap-brute -p 389 target_ip
`;

  nmapSIP = `
nmap --script sip-methods -sU -p 5060 target_ip
nmap --script sip-brute -sU -p 5060 target_ip
`;

  nmapIRC = `
nmap --script irc-info -p 6667 target_ip
nmap --script irc-brute -p 6667 target_ip
`;

  nmapRedis = `
nmap --script redis-info -p 6379 target_ip
nmap --script redis-brute -p 6379 target_ip
`;

  nmapOracle = `
nmap --script oracle-sid-brute -p 1521 target_ip
`;

  nmapSMTP = `
nmap --script smtp-commands -p 25 target_ip
nmap --script smtp-open-relay -p 25 target_ip
nmap --script smtp-enum-users -p 25 target_ip
`;

  nmapMail = `
nmap --script pop3-brute -p 110 target_ip
nmap --script imap-brute -p 143 target_ip
`;

  nmapNSE = `
ls /usr/share/nmap/scripts/*brute*

grep "brute" /usr/share/nmap/scripts/script.db

nmap --script-help brute
`;


  nmapEnum = `
nmap -sC -sV -p- target_ip -oN services
nmap -sC -sV -p port1,port2,port3 target_ip -oN focused
nmap -sV --version-all -p port target_ip
nmap -A -p port target_ip
nmap -sV --version-all --version-trace -p port target_ip
  `;

  bannerGrab = `
nc -nv target_ip port
curl -v http://target_ip:port
curl -v https://target_ip:port
openssl s_client -connect target_ip:port
printf "GET / HTTP/1.1\\r\\nHost: target_ip" | nc target_ip port
  `;

  unknownPorts = `
echo "help" | nc target_ip port
echo "version" | nc target_ip port
echo "status" | nc target_ip port
echo "test" | nc target_ip port

nmap --script=banner -p port target_ip
nmap -sV --version-all -p port target_ip
nmap -sV --version-trace -p port target_ip
  `;

  selectTech(tech: string) {
    this.selected = tech;
  }

  back() {
    this.selected = null;
  }

  copy(text: string) {
    navigator.clipboard.writeText(text);
  }
}