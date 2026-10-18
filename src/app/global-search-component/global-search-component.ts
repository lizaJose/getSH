import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchService } from '../core/services/search.service';
import type { SearchMode } from '../core/services/search.service';
import type { SearchEntry } from '../core/moldels/search-index';
import { TerminalContextService } from '../core/services/terminal-context.service';

@Component({
  selector: 'app-global-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './global-search-component.html',
  styleUrls: ['./global-search-component.scss']
})
export class GlobalSearchComponent {

  @Output() close = new EventEmitter<void>();

  query = '';
  mode: SearchMode = 'all';

  results: SearchEntry[] = [];
  selectedIndex = 0;

  private readonly searchService = inject(SearchService);
  private readonly context = inject(TerminalContextService);
  private readonly router = inject(Router);

  onSearch(): void {
    this.results = this.searchService.search(this.query, this.mode);
    this.selectedIndex = 0;
  }

  setMode(mode: SearchMode): void {
    this.mode = mode;
    this.onSearch();
  }

  async go(item: SearchEntry): Promise<void> {
    if (item.route) {
      await this.router.navigate([item.route], { queryParams: item.queryParams });
    }

    if (item.command) {
      const command = this.context.replacePlaceholders(item.command);
      await navigator.clipboard.writeText(command);
    }

    this.query = '';
    this.results = [];
    this.selectedIndex = 0;

    this.close.emit();
  }

  handleKeyboard(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.close.emit();
        return;
    }

    if (!this.results.length) return;

    switch (event.key) {

      case 'ArrowDown':
        event.preventDefault();
        this.selectedIndex = Math.min(
          this.selectedIndex + 1,
          this.results.length - 1
        );
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.selectedIndex = Math.max(
          this.selectedIndex - 1,
          0
        );
        break;

      case 'Enter':
        event.preventDefault();
        void this.go(this.results[this.selectedIndex]);
        break;
    }
  }
}