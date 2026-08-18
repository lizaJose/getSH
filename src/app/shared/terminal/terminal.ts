import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss'
})
export class Terminal {

  @Input() command: string = '';

  copied = false;


  // =========================================================
  // COMMAND FORMATTING
  // =========================================================

  get formattedCommand(): string[] {
    return this.command
      .trim()
      .split('\n')
      .map(line => line.replace(/\r$/, ''));
  }

  isComment(line: string): boolean {
    return line.trimStart().startsWith('#');
  }


  // =========================================================
  // COPY
  // =========================================================

  async copyCommand(): Promise<void> {

    try {

      await navigator.clipboard.writeText(this.command);

      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 1800);

    } catch (error) {

      console.error('Failed to copy command:', error);

    }

  }

}