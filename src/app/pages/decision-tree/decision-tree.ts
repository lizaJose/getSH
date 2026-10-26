import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface DecisionChoice {
  label: string;
  nextId: string;
}

interface DecisionLink {
  label: string;
  route: string;
  queryParams?: Record<string, string>;
}

interface DecisionNode {
  stage: string;
  title: string;
  question: string;
  guidance: string;
  choices?: DecisionChoice[];
  links?: DecisionLink[];
  outcome?: string;
}

@Component({
  selector: 'app-decision-tree',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './decision-tree.html',
  styleUrl: './decision-tree.scss'
})
export class DecisionTreeComponent {
  readonly nodes: Record<string, DecisionNode> = {
    start: {
      stage: '01 / Starting point',
      title: 'What do you know so far?',
      question: 'Choose the closest match to your current lab notes.',
      guidance: 'Work only with the target and actions allowed by the lab rules. Start from observations, keep notes, and follow one lead at a time.',
      choices: [
        { label: 'I have no reliable service findings yet', nextId: 'no-findings' },
        { label: 'I found a web service', nextId: 'web-check' },
        { label: 'I found other network services', nextId: 'service-check' },
        { label: 'The host appears to be part of a domain', nextId: 'ad-check' },
        { label: 'I already have an authorized lab foothold', nextId: 'foothold-check' }
      ],
      links: [{ label: 'Open Nmap and scan references', route: '/scan', queryParams: { tool: 'nmap' } }]
    },
    'no-findings': {
      stage: '01 / Validate discovery',
      title: 'No useful services identified',
      question: 'Have you verified that the target and scan coverage are correct?',
      guidance: 'In a lab, first confirm the assigned address, connectivity, and scan results. If the lab permits it, consider whether UDP or less common ports are in scope. Avoid increasing scan intensity without a reason.',
      choices: [
        { label: 'I should verify the target and coverage', nextId: 'start' },
        { label: 'I have a service to investigate now', nextId: 'service-check' }
      ],
      links: [{ label: 'Review Nmap scan options', route: '/scan', queryParams: { tool: 'nmap' } }]
    },
    'web-check': {
      stage: '02 / Web reconnaissance',
      title: 'Can you identify the application and its public surface?',
      question: 'What best describes what you have observed?',
      guidance: 'Record the hostname, ports, redirects, TLS details, visible technologies, and pages intended for normal use. If the lab uses hostnames, map only the names supplied by the exercise or supported by your in-scope evidence.',
      choices: [
        { label: 'Yes — I can browse the application', nextId: 'web-surface' },
        { label: 'Not yet — I need more basic web recon', nextId: 'web-recon' }
      ],
      links: [{ label: 'Open web reconnaissance', route: '/web', queryParams: { section: 'recon' } }]
    },
    'web-recon': {
      stage: '02 / Web reconnaissance',
      title: 'Build a clearer picture of the web service',
      question: 'After checking the available evidence, can you reach a page on the intended host?',
      guidance: 'Compare HTTP and HTTPS behavior, check the response and redirect destination, and verify whether the lab provides a hostname that must resolve to the target. Keep discovery limited to the lab scope.',
      choices: [
        { label: 'Yes — continue with the application surface', nextId: 'web-surface' },
        { label: 'No — return to service discovery', nextId: 'no-findings' }
      ],
      links: [
        { label: 'Web reconnaissance guide', route: '/web', queryParams: { section: 'recon' } },
        { label: 'Nmap web service checks', route: '/scan', queryParams: { tool: 'nmap' } }
      ]
    },
    'web-surface': {
      stage: '03 / Web application',
      title: 'What kind of lead did the application give you?',
      question: 'Choose the strongest observable lead — not a guess.',
      guidance: 'Review normal user-facing pages, forms, links, and application behavior. A technology fingerprint alone is not proof of a vulnerability.',
      choices: [
        { label: 'Login, session, or role-dependent behavior', nextId: 'web-auth' },
        { label: 'More public pages or documented routes to map', nextId: 'web-content' },
        { label: 'An input or upload feature with unexpected behavior', nextId: 'web-input' },
        { label: 'No clear lead — review the application systematically', nextId: 'web-review' }
      ],
      links: [{ label: 'Browse web testing references', route: '/web', queryParams: { section: 'recon' } }]
    },
    'web-auth': {
      stage: '04 / Authentication',
      title: 'Is there an observable access-control difference?',
      question: 'What can you verify using accounts and actions explicitly provided by the lab?',
      guidance: 'Compare only the authorized lab roles and their intended permissions. Record the request, expected access, actual response, and a minimal proof. Do not test real accounts or reuse credentials outside the lab.',
      choices: [
        { label: 'A page or action behaves differently by role', nextId: 'web-authz' },
        { label: 'The login flow itself is the area to understand', nextId: 'web-login' },
        { label: 'I do not have enough evidence yet', nextId: 'web-review' }
      ],
      links: [{ label: 'Open web authentication references', route: '/web', queryParams: { section: 'authentication' } }]
    },
    'web-authz': {
      stage: '04 / Authentication',
      title: 'Validate the authorization boundary',
      question: 'Can you reproduce the difference safely with lab-provided roles?',
      guidance: 'Capture a minimal, non-destructive proof of the access-control behavior. Stop once the issue is demonstrated and document the affected role, resource, and expected versus actual access.',
      outcome: 'You have a testable finding or a specific access-control hypothesis. Record the evidence and follow the lab rules before moving on.',
      links: [{ label: 'Review authentication guidance', route: '/web', queryParams: { section: 'authentication' } }]
    },
    'web-login': {
      stage: '04 / Authentication',
      title: 'Understand the authentication flow',
      question: 'What does the normal login flow reveal?',
      guidance: 'Map the supported login and recovery flow, session handling, and error behavior. Use only lab-provided test accounts; avoid password guessing or account lockout behavior unless the exercise explicitly defines a safe test.',
      outcome: 'If the flow has no clear issue, return to the application map and investigate a different observable feature.',
      links: [{ label: 'Review authentication guidance', route: '/web', queryParams: { section: 'authentication' } }]
    },
    'web-content': {
      stage: '04 / Web application',
      title: 'Map the public application surface',
      question: 'What did reviewing pages and routes reveal?',
      guidance: 'Note public navigation, robots or sitemap references, API documentation, and paths linked by the application. Prefer routes revealed by the site or lab brief over indiscriminate discovery.',
      outcome: 'Add each confirmed page or endpoint to your notes, then return to the web surface and choose the most promising behavior to inspect.',
      links: [
        { label: 'Open directory and content discovery', route: '/web', queryParams: { section: 'directories' } },
        { label: 'Review Google Dorks for authorized domains', route: '/scan', queryParams: { tool: 'google-dorks' } }
      ]
    },
    'web-input': {
      stage: '04 / Web application',
      title: 'Inspect the input feature safely',
      question: 'Which behavior is relevant to the feature you observed?',
      guidance: 'Use benign, reversible test input in the authorized lab. Note where input goes, how it is rendered, and whether the feature handles files or references other resources. Avoid destructive actions or accessing data beyond the exercise.',
      choices: [
        { label: 'Input is reflected or changes application output', nextId: 'web-input-output' },
        { label: 'The feature accepts file uploads', nextId: 'web-upload' },
        { label: 'The feature retrieves a URL or remote resource', nextId: 'web-fetch' }
      ]
    },
    'web-input-output': {
      stage: '05 / Input handling',
      title: 'Does the input affect a query or rendered page?',
      question: 'Choose the behavior you can demonstrate in the lab.',
      guidance: 'Compare normal and benign test values, record the exact context where output changes, and consult the matching guide. Do not retrieve or modify unrelated records.',
      choices: [
        { label: 'The behavior appears related to database queries', nextId: 'web-sqli' },
        { label: 'The behavior appears related to browser-rendered output', nextId: 'web-xss' },
        { label: 'The behavior is unclear', nextId: 'web-review' }
      ]
    },
    'web-sqli': {
      stage: '05 / Input handling',
      title: 'Assess the database-related behavior',
      question: 'Can you confirm a consistent difference with harmless lab input?',
      guidance: 'Keep testing within the lab and use non-destructive evidence. A changed response by itself is not enough; establish that the behavior is repeatable and document only the minimum necessary proof.',
      outcome: 'If the behavior is reproducible, use the SQL injection guide to continue within the lab rules. Otherwise, return to the application map.',
      links: [{ label: 'Open SQL injection guide', route: '/web', queryParams: { section: 'sqli' } }]
    },
    'web-xss': {
      stage: '05 / Input handling',
      title: 'Assess browser-rendered output',
      question: 'Can you identify where and in what context the input is rendered?',
      guidance: 'Use a harmless proof in the authorized lab, identify whether output is encoded, and avoid actions that affect other users or sessions.',
      outcome: 'Record the input location, rendering context, and minimal reproducible evidence before following the relevant guide.',
      links: [{ label: 'Open XSS guide', route: '/web', queryParams: { section: 'xss' } }]
    },
    'web-upload': {
      stage: '05 / Input handling',
      title: 'Review the file upload behavior',
      question: 'Can you characterize the accepted file types and how the lab handles uploads?',
      guidance: 'Use only harmless test files and lab-provided accounts. Observe validation, storage location as exposed by the application, and access behavior. Do not upload executable content to systems outside the lab.',
      outcome: 'Document the validation and storage behavior, then follow the file upload guide for authorized lab testing.',
      links: [{ label: 'Open file upload guide', route: '/web', queryParams: { section: 'file-upload' } }]
    },
    'web-fetch': {
      stage: '05 / Input handling',
      title: 'Review server-side resource fetching',
      question: 'Does the feature retrieve a resource based on user input?',
      guidance: 'Use only lab-supplied test endpoints and non-sensitive resources. Verify behavior without probing internal networks or third-party hosts.',
      outcome: 'If the lab demonstrates server-side fetching, consult the SSRF guide and keep all validation targets inside the exercise.',
      links: [{ label: 'Open SSRF guide', route: '/web', queryParams: { section: 'ssrf' } }]
    },
    'web-review': {
      stage: '04 / Web application',
      title: 'Return to a structured application review',
      question: 'Have you checked the main pages, identity flows, inputs, and linked resources?',
      guidance: 'Avoid repeating the same test without a new hypothesis. Keep a short list of confirmed facts, unknowns, and the next low-impact check.',
      choices: [
        { label: 'Review the application map again', nextId: 'web-surface' },
        { label: 'Switch to another discovered service', nextId: 'service-check' }
      ],
      links: [{ label: 'Open web guide', route: '/web', queryParams: { section: 'recon' } }]
    },
    'service-check': {
      stage: '02 / Service enumeration',
      title: 'Which service is the best next lead?',
      question: 'Choose a confirmed service from the in-scope host.',
      guidance: 'Identify the service and version before choosing a path. Start with normal, low-impact enumeration and the service-specific lab guide; do not infer a vulnerability from a port number alone.',
      choices: [
        { label: 'SMB or Windows file sharing', nextId: 'service-smb' },
        { label: 'SSH or another remote login service', nextId: 'service-remote' },
        { label: 'FTP or another file service', nextId: 'service-file' },
        { label: 'A database service', nextId: 'service-database' },
        { label: 'An unfamiliar service or port', nextId: 'service-unknown' }
      ],
      links: [{ label: 'Open common service references', route: '/common-services' }]
    },
    'service-smb': {
      stage: '03 / Service enumeration',
      title: 'Review the SMB service',
      question: 'What did normal, authorized enumeration confirm?',
      guidance: 'Record the service version, host or domain hints, available shares, and access level shown by the lab. Do not access files outside the exercise scope.',
      choices: [
        { label: 'The host exposes domain or directory clues', nextId: 'ad-check' },
        { label: 'I need to review the host context', nextId: 'host-check' }
      ],
      links: [{ label: 'Open SMB service guide', route: '/common-services', queryParams: { service: 'smb' } }]
    },
    'service-remote': {
      stage: '03 / Service enumeration',
      title: 'Review the remote access service',
      question: 'Do you have lab-provided credentials or another explicit lead?',
      guidance: 'Identify the service, authentication method, and any information available without authentication. Use only credentials supplied or discovered within the lab; avoid password spraying or guessing.',
      choices: [
        { label: 'Yes — continue with the authorized host context', nextId: 'host-check' },
        { label: 'No — record the service and inspect other leads', nextId: 'service-check' }
      ],
      links: [{ label: 'Open SSH service guide', route: '/common-services', queryParams: { service: 'ssh' } }]
    },
    'service-file': {
      stage: '03 / Service enumeration',
      title: 'Review the file service',
      question: 'What does the service reveal through normal lab enumeration?',
      guidance: 'Note anonymous or explicitly provided access, service version, and any in-scope files that are clearly intended for the exercise. Do not collect personal or unrelated data.',
      choices: [
        { label: 'I found a relevant lab clue', nextId: 'host-check' },
        { label: 'I need to identify the service more precisely', nextId: 'service-unknown' }
      ],
      links: [{ label: 'Open FTP service guide', route: '/common-services', queryParams: { service: 'ftp' } }]
    },
    'service-database': {
      stage: '03 / Service enumeration',
      title: 'Review the database service',
      question: 'Is there an explicit, authorized access path in the lab?',
      guidance: 'Identify the database and version, document whether access is intended, and use only credentials provided for the exercise. Do not extract data beyond what is needed to validate the lab objective.',
      outcome: 'If you have an authorized lead, follow the database reference. If not, return to the service list and prioritize another confirmed clue.',
      links: [{ label: 'Open database service references', route: '/common-services', queryParams: { service: 'databases' } }]
    },
    'service-unknown': {
      stage: '03 / Service enumeration',
      title: 'Identify the unfamiliar service',
      question: 'Can you determine the protocol and version from its response?',
      guidance: 'Use a banner, protocol-aware client, or the lab documentation to identify the service. Do not run intrusive checks until you understand the protocol and confirm they are allowed.',
      choices: [
        { label: 'Yes — return to the service list with the identification', nextId: 'service-check' },
        { label: 'Not yet — review scan and banner techniques', nextId: 'no-findings' }
      ],
      links: [{ label: 'Open Nmap and banner references', route: '/scan', queryParams: { tool: 'nmap' } }]
    },
    'ad-check': {
      stage: '03 / Domain context',
      title: 'Does the lab indicate an Active Directory environment?',
      question: 'What evidence do you have?',
      guidance: 'Look for domain names, domain controller services, directory responses, and lab-provided credentials. A Windows host alone does not confirm a domain.',
      choices: [
        { label: 'Yes — there are domain indicators', nextId: 'ad-enumeration' },
        { label: 'No — it looks like a standalone host', nextId: 'host-check' },
        { label: 'I need to inspect Windows services first', nextId: 'service-check' }
      ],
      links: [{ label: 'Open Active Directory references', route: '/ad', queryParams: { service: 'manual' } }]
    },
    'ad-enumeration': {
      stage: '04 / Domain enumeration',
      title: 'Map the authorized domain context',
      question: 'Which domain information can you establish with the access provided by the lab?',
      guidance: 'Start with domain, host, user, group, and share relationships visible to your authorized account. Keep a relationship map and do not attempt actions outside the exercise scope.',
      choices: [
        { label: 'I have domain information to review', nextId: 'ad-leads' },
        { label: 'I need to establish the basics first', nextId: 'ad-check' }
      ],
      links: [{ label: 'Open Active Directory enumeration', route: '/ad', queryParams: { service: 'manual' } }]
    },
    'ad-leads': {
      stage: '05 / Domain enumeration',
      title: 'Choose a domain lead to validate',
      question: 'What does your relationship map suggest?',
      guidance: 'Prioritize a specific, evidence-backed relationship or misconfiguration in the lab. Validate the finding with the least-impacting method and record the affected object and expected permissions.',
      choices: [
        { label: 'Object permissions or relationships', nextId: 'ad-permissions' },
        { label: 'A lab-documented authentication or certificate clue', nextId: 'ad-special' },
        { label: 'I have an authorized host foothold', nextId: 'foothold-check' }
      ],
      links: [{ label: 'Review Active Directory paths', route: '/ad', queryParams: { service: 'manual' } }]
    },
    'ad-permissions': {
      stage: '05 / Domain enumeration',
      title: 'Validate the relationship safely',
      question: 'Can you explain the potential impact from the permissions you observed?',
      guidance: 'Use the lab graph and object details to document who can affect which resource and why that matters. Avoid changing domain objects unless the exercise explicitly requires and permits it.',
      outcome: 'Use the relevant AD guide to understand the path, then follow the lab rules for any further validation.',
      links: [{ label: 'Review object permissions and ACLs', route: '/ad', queryParams: { service: 'acl' } }]
    },
    'ad-special': {
      stage: '05 / Domain enumeration',
      title: 'Follow the specific lab clue',
      question: 'Which documented area matches the evidence?',
      guidance: 'Use the exact clue from the lab and first confirm the affected service or object. Avoid broad credential attacks or changes to domain infrastructure.',
      outcome: 'Open the matching reference and keep validation limited to the lab objective.',
      links: [
        { label: 'Kerberos references', route: '/ad', queryParams: { service: 'kerberos' } },
        { label: 'AD certificate services references', route: '/ad', queryParams: { service: 'adcs' } }
      ]
    },
    'host-check': {
      stage: '04 / Host context',
      title: 'What operating system context do you have?',
      question: 'Choose the host type supported by your lab evidence.',
      guidance: 'Use the OS, user identity, group membership, and service context to decide which local enumeration guide applies. If you do not have a host foothold, return to the confirmed network services.',
      choices: [
        { label: 'Linux or Unix foothold', nextId: 'linux-foothold' },
        { label: 'Windows foothold', nextId: 'windows-foothold' },
        { label: 'Domain context is more relevant', nextId: 'ad-check' },
        { label: 'I do not have a foothold yet', nextId: 'service-check' }
      ]
    },
    'foothold-check': {
      stage: '04 / Host context',
      title: 'Choose the local enumeration path',
      question: 'What environment did the lab foothold provide?',
      guidance: 'Keep the foothold within the lab, note the current identity and host, and focus on local configuration and relationships. Do not persist, disrupt services, or access unrelated systems.',
      choices: [
        { label: 'Linux or Unix host', nextId: 'linux-foothold' },
        { label: 'Windows host', nextId: 'windows-foothold' },
        { label: 'Windows host in a domain', nextId: 'ad-enumeration' }
      ]
    },
    'linux-foothold': {
      stage: '05 / Linux privilege review',
      title: 'Review the Linux host systematically',
      question: 'Which local lead is supported by your observations?',
      guidance: 'Start with identity, groups, OS and kernel, running services, scheduled tasks, and permissions. Verify a concrete misconfiguration before drawing conclusions; a version match alone is not proof.',
      choices: [
        { label: 'I have a specific local configuration lead', nextId: 'linux-lead' },
        { label: 'I need a structured baseline checklist', nextId: 'linux-baseline' },
        { label: 'The host may be domain-connected', nextId: 'ad-enumeration' }
      ],
      links: [{ label: 'Open Linux privilege escalation guide', route: '/privesc', queryParams: { system: 'linux' } }]
    },
    'linux-baseline': {
      stage: '05 / Linux privilege review',
      title: 'Build a Linux baseline',
      question: 'Have you checked identity, privileges, processes, services, and file permissions?',
      guidance: 'Work through one category at a time and note unusual ownership, writable paths, scheduled tasks, or service configurations. Treat discovered secrets as lab data: do not reuse them elsewhere.',
      choices: [
        { label: 'A concrete lead stands out', nextId: 'linux-lead' },
        { label: 'No lead yet — review another host or service', nextId: 'start' }
      ],
      links: [{ label: 'Open Linux privilege escalation checklist', route: '/privesc', queryParams: { system: 'linux' } }]
    },
    'linux-lead': {
      stage: '06 / Linux privilege review',
      title: 'Validate the Linux lead',
      question: 'Can you explain why the observed configuration changes the current user’s access?',
      guidance: 'Confirm the effective permissions and affected process or resource. Prefer a minimal, reversible lab proof; do not alter unrelated system files or services.',
      outcome: 'Record the evidence, impact, and the exact condition that made the path possible. Then follow the matching Linux reference.',
      links: [{ label: 'Review Linux privilege escalation references', route: '/privesc', queryParams: { system: 'linux' } }]
    },
    'windows-foothold': {
      stage: '05 / Windows privilege review',
      title: 'Review the Windows host systematically',
      question: 'Which local lead is supported by your observations?',
      guidance: 'Start with identity, group membership, privileges, services, scheduled tasks, installed software, and writable paths. Verify a concrete misconfiguration before drawing conclusions.',
      choices: [
        { label: 'I have a specific local configuration lead', nextId: 'windows-lead' },
        { label: 'I need a structured baseline checklist', nextId: 'windows-baseline' },
        { label: 'The host appears domain-joined', nextId: 'ad-enumeration' }
      ],
      links: [{ label: 'Open Windows privilege escalation guide', route: '/privesc', queryParams: { system: 'windows' } }]
    },
    'windows-baseline': {
      stage: '05 / Windows privilege review',
      title: 'Build a Windows baseline',
      question: 'Have you checked identity, privileges, services, tasks, and file permissions?',
      guidance: 'Review one category at a time. Record unusual service configuration, writable locations, or scheduled task permissions and verify how they affect the current identity.',
      choices: [
        { label: 'A concrete lead stands out', nextId: 'windows-lead' },
        { label: 'No lead yet — review another host or service', nextId: 'start' }
      ],
      links: [{ label: 'Open Windows privilege escalation checklist', route: '/privesc', queryParams: { system: 'windows' } }]
    },
    'windows-lead': {
      stage: '06 / Windows privilege review',
      title: 'Validate the Windows lead',
      question: 'Can you explain the permission boundary affected by this configuration?',
      guidance: 'Confirm the relevant identity, permission, and resource, then use a minimal and reversible lab proof. Avoid persistence or changes outside the exercise objective.',
      outcome: 'Document the evidence and impact, then follow the matching Windows reference.',
      links: [{ label: 'Review Windows privilege escalation references', route: '/privesc', queryParams: { system: 'windows' } }]
    }
  };

  currentNodeId = 'start';
  private readonly history: string[] = [];

  get currentNode(): DecisionNode {
    return this.nodes[this.currentNodeId];
  }

  get stepNumber(): number {
    return this.history.length + 1;
  }

  get canGoBack(): boolean {
    return this.history.length > 0;
  }

  selectChoice(choice: DecisionChoice): void {
    this.history.push(this.currentNodeId);
    this.currentNodeId = choice.nextId;
  }

  goBack(): void {
    const previousNodeId = this.history.pop();
    if (previousNodeId) this.currentNodeId = previousNodeId;
  }

  startOver(): void {
    this.history.length = 0;
    this.currentNodeId = 'start';
  }
}
