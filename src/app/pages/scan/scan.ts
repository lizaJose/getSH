import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Terminal } from '../../shared/terminal/terminal';
import { SectionIndexComponent, SectionIndexItem } from '../../shared/components/section-index/section-index';

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, Terminal, SectionIndexComponent],
  templateUrl: './scan.html',
  styleUrl: './scan.scss',
})
export class ScanComponent implements OnInit {
  selected: string | null = 'nmap';
  readonly tools: SectionIndexItem[] = [
    { id: 'nmap', label: 'Nmap', important: true },
    { id: 'rustscan', label: 'RustScan' },
    { id: 'masscan', label: 'Masscan' },
    { id: 'nikto', label: 'Nikto' }
  ];
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(params => {
        const tool = params.get('tool');
        if (tool && this.tools.some(item => item.id === tool)) this.selected = tool;
      });
  }

  // =========================================================
  // NMAP CONTENT
  // =========================================================

  nmapQuick = `
sudo nmap -p- --open --min-rate 1000 -sS -n -Pn <target_ip> -oN openPorts

nmap -sCV -p \\$(grep "^[0-9]" openPorts | awk '{print $1}' | cut -d'/' -f1 | paste -sd,) target_ip -oN services

nmap -sV --script vuln -p \\$(grep "^[0-9]" openPorts | awk '{print $1}' | cut -d'/' -f1 | paste -sd,) -Pn target_ip -oN vuln
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

  // =====================================================
  // NIKTO
  // =====================================================

  niktoBasic = `
nikto -h http://target_ip
`;

  niktoHTTPS = `
nikto -h https://target_ip
`;

  niktoPort = `
nikto -h http://target_ip -p 8080
nikto -h http://target_ip -p 8000
nikto -h http://target_ip -p 8443
`;

  niktoServerInfo = `
nikto -h http://target_ip
`;

  niktoCGI = `
nikto -h http://target_ip -C all
`;

  niktoPlugins = `
nikto -h http://target_ip
`;

  niktoAuth = `
nikto -h http://target_ip
`;

  niktoMisconfig = `
nikto -h http://target_ip
`;

  niktoSSL = `
nikto -h https://target_ip
`;

  niktoSSLPort = `
nikto -h https://target_ip -p 8443
`;

  niktoTuning = `
nikto -h http://target_ip -Tuning 123b
`;

  niktoOutput = `
nikto -h http://target_ip -o nikto.txt
nikto -h http://target_ip -o nikto.html -Format htm
`;

  // =========================================================
  // NAVIGATION
  // =========================================================

  selectTech(tech: string) {
    this.selected = tech;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tool: tech },
      replaceUrl: true
    });
  }

  back() {
    this.selected = 'nmap';
  }

  // =========================================================
  // COPY
  // =========================================================

  copy(text: string) {
    navigator.clipboard.writeText(text);
  }
  
  rustscanQuick = `# Scan the first 1,000 TCP ports, then identify discovered services with Nmap
rustscan -a target_ip -r 1-1000 --ulimit 5000 -- -Pn -sV -sC -oN rustscan-services.txt
`;
  
  rustscanFull = `# Scan all TCP ports and pass discovered ports to Nmap for service enumeration
rustscan -a target_ip -r 1-65535 --ulimit 5000 -- -Pn -sV -sC -oN rustscan-full-services.txt

# RustScan only checks TCP; check common UDP ports separately when in scope
sudo nmap -sU --top-ports 100 -Pn target_ip -oN rustscan-udp.txt
`;
  
  masscanDiscovery = `# Masscan requires raw-packet privileges; keep the rate conservative in a lab
sudo masscan target_ip -p1-65535 --rate 500 -oL masscan-open-ports.txt

# Extract discovered TCP ports and identify services with Nmap
ports=$(awk '$1 == "open" && $2 == "tcp" {print $3}' masscan-open-ports.txt | sort -nu | paste -sd,)
if [ -n "$ports" ]; then
  sudo nmap -sC -sV -Pn -p "$ports" target_ip -oN masscan-services.txt
else
  echo "No open TCP ports found"
fi
`;
}
