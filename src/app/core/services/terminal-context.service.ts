import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TerminalContextService {
  victimIp = '10.10.10.10';
  victimPort = '80';
  localIp = '10.0.2.15';
  localPort = '4444';
  useVictimIp = true;
  useVictimPort = true;
  useLocalIp = true;
  useLocalPort = true;

  get values(): Record<string, string> {
    const values: Record<string, string> = {};

    if (this.useVictimIp) {
      Object.assign(values, {
        victim_ip: this.victimIp,
        target_ip: this.victimIp,
        target: this.victimIp,
        ip: this.victimIp,
        VICTIM_IP: this.victimIp,
        TARGET_IP: this.victimIp,
        TARGET: this.victimIp,
        RHOST: this.victimIp,
        rhost: this.victimIp,
      });
    }

    if (this.useVictimPort) {
      Object.assign(values, {
        victim_port: this.victimPort,
        target_port: this.victimPort,
        port: this.victimPort,
        PORT: this.victimPort,
        VICTIM_PORT: this.victimPort,
        TARGET_PORT: this.victimPort,
        RPORT: this.victimPort,
        rport: this.victimPort,
      });
    }

    if (this.useLocalIp) {
      Object.assign(values, {
        local_ip: this.localIp,
        LOCAL_IP: this.localIp,
        LHOST: this.localIp,
        lhost: this.localIp,
        attacker_ip: this.localIp,
        ATTACKER_IP: this.localIp,
      });
    }

    if (this.useLocalPort) {
      Object.assign(values, {
        local_port: this.localPort,
        LOCAL_PORT: this.localPort,
        LPORT: this.localPort,
        lport: this.localPort,
        attacker_port: this.localPort,
        ATTACKER_PORT: this.localPort,
      });
    }

    return values;
  }

  replacePlaceholders(command: string): string {
    if (!command) {
      return '';
    }

    let output = command;
    const explicitlyWrappedOnly = new Set(['ip', 'port', 'target']);
    const uppercaseOnly = new Set(['PORT', 'TARGET']);

    Object.entries(this.values).forEach(([token, value]) => {
      const patterns = [
        new RegExp(`\\{\\{\\s*${token}\\s*\\}\\}`, 'gi'),
        new RegExp(`<\\s*${token}\\s*>`, 'gi'),
        new RegExp(`\\$\\{\\s*${token}\\s*\\}`, 'gi'),
      ];

      if (!explicitlyWrappedOnly.has(token)) {
        patterns.push(new RegExp(`\\b${token}\\b`, uppercaseOnly.has(token) ? 'g' : 'gi'));
      }

      patterns.forEach((pattern) => {
        output = output.replace(pattern, value);
      });
    });

    return output;
  }
}
