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

  it('returns no results for an empty query', () => {
    expect(service.search('   ')).toEqual([]);
  });
});