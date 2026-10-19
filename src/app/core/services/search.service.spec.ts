import { SearchService } from './search.service';

describe('SearchService', () => {
  const service = new SearchService();

  it('finds Nmap when the query contains a small typo', () => {
    const results = service.search('nmao');

    expect(results.some(result => result.title === 'Nmap')).toBe(true);
    expect(results.some(result => result.title === 'Nmap full TCP port scan')).toBe(true);
  });

  it('filters results to sections or commands', () => {
    const sections = service.search('nmap', 'sections');
    const commands = service.search('nmap', 'commands');

    expect(sections.length).toBeGreaterThan(0);
    expect(sections.every(result => result.type === 'section')).toBe(true);
    expect(commands.length).toBeGreaterThan(0);
    expect(commands.every(result => result.type === 'command')).toBe(true);
  });

  it('points Hydra results to the matching authentication panel', () => {
    const results = service.search('hydra', 'sections');
    const sshResult = results.find(result => result.title === 'Hydra SSH Authentication');
    const ftpResult = results.find(result => result.title === 'Hydra FTP Authentication');

    expect(sshResult?.queryParams).toEqual({ service: 'ssh', panel: 'ssh-authentication' });
    expect(ftpResult?.queryParams).toEqual({ service: 'ftp', panel: 'ftp-authentication' });
  });

  it('points tool and platform results to their selected sections', () => {
    const rustScan = service.search('rustscan', 'sections')
      .find(result => result.title === 'RustScan');
    const windowsPrivEsc = service.search('windows privesc', 'sections')
      .find(result => result.title === 'Windows Privilege Escalation');

    expect(rustScan?.queryParams).toEqual({ tool: 'rustscan' });
    expect(windowsPrivEsc?.queryParams).toEqual({ system: 'windows' });
  });

  it('finds File Transfer and opens Useful Stuff', () => {
    const result = service.search('file transfer', 'sections')
      .find(entry => entry.title === 'File Transfer');

    expect(result?.route).toBe('/useful-stuff');
    expect(result?.section).toBe('Useful Stuff');
    expect(result?.queryParams).toEqual({ section: 'file-transfer' });
    expect(service.search('file transfer', 'sections')[0]?.title).toBe('File Transfer');
  });

  it('opens AD Post-Exploitation inside the Windows Pivot Flow', () => {
    const result = service.search('post exploitation', 'sections')
      .find(entry => entry.title === 'AD Post-Exploitation');

    expect(result?.route).toBe('/ad');
    expect(result?.queryParams).toEqual({ service: 'ad-flow', phase: 'post-exploitation' });
  });

  it('opens the three-host AD example from search', () => {
    const result = service.search('sqli to dcsync', 'sections')
      .find(entry => entry.title === 'Three-Host AD Example');

    expect(result?.route).toBe('/ad');
    expect(result?.queryParams).toEqual({ service: 'ad-example-three-host' });
  });

  it('finds pspy and opens Linux PrivEsc', () => {
    const result = service.search('pspy', 'sections')
      .find(entry => entry.title === 'pspy Process Monitor');

    expect(result?.route).toBe('/privesc');
    expect(result?.queryParams).toEqual({ system: 'linux' });
  });

  it('opens the Useful Stuff tunnel reference from search', () => {
    const result = service.search('chisel', 'sections')
      .find(entry => entry.title === 'Tunneling & Port Forwarding');

    expect(result?.route).toBe('/useful-stuff');
    expect(result?.queryParams).toEqual({ section: 'tunneling' });
  });

  it('finds the Windows PrivEsc guide for AlwaysInstallElevated', () => {
    const result = service.search('alwaysinstallelevated', 'sections')
      .find(entry => entry.title === 'Windows Privilege Escalation');

    expect(result?.queryParams).toEqual({ system: 'windows' });
  });

  it('returns no results for an empty query', () => {
    expect(service.search('   ')).toEqual([]);
  });
});