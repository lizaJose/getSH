import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Terminal } from '../../shared/terminal/terminal';
import { SectionIndexComponent, SectionIndexItem } from '../../shared/components/section-index/section-index';

function createGoogleSearchUrl(query: string): string {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

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
    { id: 'nikto', label: 'Nikto' },
    { id: 'google-dorks', label: 'Google Dorks', important: true }
  ];
  public readonly googleDorkGroups = [
    {
      title: '1. Basic operators and scope',
      description: 'Start by limiting each query to the test domain. example.org is reserved for documentation: replace it only with a domain you own or that is explicitly included in your authorization.',
      examples: [
        { title: 'All indexed content on a domain', query: 'site:example.org' },
        { title: 'Pages on the main website', query: 'site:www.example.org' },
        { title: 'Documentation portal', query: 'site:docs.example.org' },
        { title: 'Support subdomain', query: 'site:support.example.org' },
        { title: 'Include multiple authorized sites', query: 'site:example.org OR site:docs.example.org' },
        { title: 'Exclude a specific public section', query: 'site:example.org -inurl:blog' }
      ]
    },
    {
      title: '2. Searching for phrases and terms',
      description: 'Quotation marks search for an exact phrase. Combine relevant terms to find public pages by topic; do not search for credentials, personal information, or private content.',
      examples: [
        { title: 'Exact phrase anywhere on the page', query: 'site:example.org "press contact"' },
        { title: 'Two related concepts', query: 'site:example.org "help center" support' },
        { title: 'Either one term or another', query: 'site:example.org (university OR research)' },
        { title: 'Exclude an ambiguous term', query: 'site:example.org "climate change" -careers' },
        { title: 'Search for a phrase in documentation', query: 'site:docs.example.org "getting started"' },
        { title: 'Find a frequently asked questions page', query: 'site:example.org ("frequently asked questions" OR FAQ)' }
      ]
    },
    {
      title: '3. Public titles and URL paths',
      description: 'intitle: searches for terms in a page title; inurl: searches for text in a URL. Use them to map published editorial content, documentation, and service pages.',
      examples: [
        { title: 'Pages with documentation in the title', query: 'site:example.org intitle:documentation' },
        { title: 'Website news', query: 'site:example.org intitle:news' },
        { title: 'Articles under a blog path', query: 'site:example.org inurl:blog' },
        { title: 'Help center pages', query: 'site:example.org inurl:help OR inurl:support' },
        { title: 'Contact pages', query: 'site:example.org inurl:contact' },
        { title: 'Event calendar', query: 'site:example.org inurl:events intitle:calendar' }
      ]
    },
    {
      title: '4. Published documents',
      description: 'filetype: filters indexed formats. Limit searches to material intended for public release, such as reports, manuals, and press releases. An indexed file is not automatically licensed for redistribution.',
      examples: [
        { title: 'Annual reports in PDF format', query: 'site:example.org filetype:pdf "annual report"' },
        { title: 'Public manuals and guides', query: 'site:example.org filetype:pdf (manual OR guide)' },
        { title: 'Press releases in PDF format', query: 'site:example.org filetype:pdf "press release"' },
        { title: 'Published presentations', query: 'site:example.org filetype:pptx (conference OR presentation)' },
        { title: 'Published technical documentation', query: 'site:docs.example.org filetype:pdf (API OR reference)' },
        { title: 'Public training material', query: 'site:example.org filetype:pdf "training material"' }
      ]
    },
    {
      title: '5. Content by topic and page type',
      description: 'Combine the domain with relevant terminology to map public pages by topic. Review each result in context before recording it.',
      examples: [
        { title: 'Product pages', query: 'site:example.org (product OR catalog) -inurl:blog' },
        { title: 'Public information for customers', query: 'site:example.org (customers OR services) "learn more"' },
        { title: 'Public policies', query: 'site:example.org (privacy OR accessibility OR cookies)' },
        { title: 'Developer resources', query: 'site:example.org (developers OR development) (API OR SDK)' },
        { title: 'Careers and job opportunities', query: 'site:example.org (careers OR jobs OR "join our team")' },
        { title: 'Pages that mention a language option', query: 'site:example.org (language OR English) -inurl:es' }
      ]
    },
    {
      title: '6. Public technology references and footprint',
      description: 'These examples search for references displayed by the site on public pages. Results are clues, not technical confirmation; verify them against an authorized inventory before drawing conclusions.',
      examples: [
        { title: 'Visible WordPress references', query: 'site:example.org "Powered by WordPress"' },
        { title: 'Public pages mentioning Drupal', query: 'site:example.org "Drupal" (theme OR module)' },
        { title: 'Public API documentation', query: 'site:docs.example.org (OpenAPI OR Swagger) -inurl:api-key' },
        { title: 'Resources mentioning a published version', query: 'site:example.org "version" (release OR changelog)' },
        { title: 'Public release notes', query: 'site:example.org (changelog OR "release notes")' },
        { title: 'Public brand resources', query: 'site:example.org (branding OR "brand guidelines" OR logo)' }
      ]
    },
    {
      title: '7. Recent content, dates, and changes',
      description: 'after: and before: can narrow results by date when Google has that information. Dates and index coverage may be approximate.',
      examples: [
        { title: 'Pages published after a date', query: 'site:example.org after:2025-01-01 news' },
        { title: 'Publications within a date range', query: 'site:example.org after:2025-01-01 before:2026-01-01 (report OR review)' },
        { title: 'Recent product updates', query: 'site:example.org after:2025-06-01 (product OR launch)' },
        { title: 'Events during a specific period', query: 'site:example.org after:2025-01-01 before:2025-12-31 events' },
        { title: 'Documentation updates', query: 'site:docs.example.org after:2025-01-01 (updated OR changes)' }
      ]
    },
    {
      title: '8. Combined queries: example workflows',
      description: 'Build queries incrementally: domain, topic, operator, and exclusions. Google is not a complete inventory; compare results with approved sources and document the limitations of this method.',
      examples: [
        { title: 'Initial map of editorial pages', query: 'site:example.org (blog OR news OR press)' },
        { title: 'Recent public reports', query: 'site:example.org filetype:pdf after:2024-01-01 (report OR review)' },
        { title: 'Integration documentation', query: 'site:docs.example.org (integration OR webhook OR API)' },
        { title: 'Help pages mentioning a feature', query: 'site:example.org inurl:help "notifications"' },
        { title: 'Public materials for an event', query: 'site:example.org (event OR conference) (filetype:pdf OR filetype:pptx)' },
        { title: 'Search for a phrase while excluding a section', query: 'site:example.org "customer service" -inurl:blog -inurl:tag' }
      ]
    }
  ].map(group => ({
    ...group,
    examples: group.examples.map(example => ({
      ...example,
      searchUrl: createGoogleSearchUrl(example.query)
    }))
  }));
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
