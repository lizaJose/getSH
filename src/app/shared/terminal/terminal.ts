import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalContextService } from '../../core/services/terminal-context.service';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss'
})
export class Terminal {
  private readonly context = inject(TerminalContextService);

  @Input() command: string = '';

  copied = false;

  get formattedCommand(): string[] {
    const renderedCommand = this.context.replacePlaceholders(this.command);

    return renderedCommand
      .trim()
      .split('\n')
      .map(line => line.replace(/\r$/, ''));
  }

  isComment(line: string): boolean {
    return line.trimStart().startsWith('#');
  }

  async copyCommand(): Promise<void> {
    try {
      const renderedCommand = this.context.replacePlaceholders(this.command);
      await navigator.clipboard.writeText(renderedCommand);

      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 1800);
    } catch (error) {
      console.error('Failed to copy command:', error);
    }
  }
}