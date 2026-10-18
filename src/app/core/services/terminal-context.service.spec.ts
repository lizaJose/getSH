import { TerminalContextService } from './terminal-context.service';

describe('TerminalContextService', () => {
  let context: TerminalContextService;

  beforeEach(() => {
    context = new TerminalContextService();
    context.victimIp = '192.0.2.20';
    context.victimPort = '8080';
    context.localIp = '192.0.2.10';
    context.localPort = '9001';
  });

  it('applies only the enabled victim IP placeholder', () => {
    context.useVictimPort = false;
    context.useLocalIp = false;
    context.useLocalPort = false;

    expect(context.replacePlaceholders('{{TARGET_IP}}:{{TARGET_PORT}} {{LHOST}}:{{LPORT}}'))
      .toBe('192.0.2.20:{{TARGET_PORT}} {{LHOST}}:{{LPORT}}');
  });

  it('supports local IP and local port without changing victim placeholders', () => {
    context.useVictimIp = false;
    context.useVictimPort = false;

    expect(context.replacePlaceholders('{{TARGET_IP}}:{{TARGET_PORT}} {{LHOST}}:{{LPORT}}'))
      .toBe('{{TARGET_IP}}:{{TARGET_PORT}} 192.0.2.10:9001');
  });

  it('keeps ordinary words in comments and commands unchanged', () => {
    context.useVictimPort = false;

    expect(context.replacePlaceholders('# Check the target port before testing\nnmap -p {{TARGET_PORT}} {{TARGET_IP}}'))
      .toBe('# Check the target port before testing\nnmap -p {{TARGET_PORT}} 192.0.2.20');
  });

  it('supports explicit angle-bracket IP and port tokens', () => {
    expect(context.replacePlaceholders('nmap -p <PORT> <IP>'))
      .toBe('nmap -p 8080 192.0.2.20');
  });
});