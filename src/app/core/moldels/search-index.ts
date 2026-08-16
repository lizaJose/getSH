export const SEARCH_INDEX = [
  // Sections
  {
    type: 'section',
    title: 'Nmap',
    keywords: ['nmap', 'scan', 'port scan', 'enumeration'],
    route: '/scan',
  },
  {
    type: 'section',
    title: 'Password Attacks',
    keywords: ['hydra', 'password', 'bruteforce', 'brute force'],
    route: '/password-attacks',
  },
  {
    type: 'section',
    title: 'DNS Enumeration',
    keywords: ['dns', 'dig', 'subdomain'],
    route: '/scan',
  },

  // Commands
  {
    type: 'command',
    title: 'Nmap basic scan',
    keywords: ['nmap -sC', 'basic scan'],
    command: 'nmap -sC -sV 10.10.10.10',
    section: 'Nmap',
  },
  {
    type: 'command',
    title: 'Hydra SSH brute force',
    keywords: ['hydra ssh', 'bruteforce ssh'],
    command: 'hydra -l user -P rockyou.txt ssh://10.10.10.10',
    section: 'Password Attacks',
  },
];