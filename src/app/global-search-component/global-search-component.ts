import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchService } from '../core/services/search.service';

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
  mode: 'all' | 'sections' | 'commands' = 'all';

  results: any[] = [];
  selectedIndex = 0;

  constructor(
    private searchService: SearchService,
    private router: Router
  ) {}

  // 🔍 SEARCH PRINCIPAL
  onSearch() {
    console.log('SEARCH INPUT:', this.query);

    this.results = this.searchService.search(this.query, this.mode);

    console.log('RESULTS:', this.results);

    this.selectedIndex = 0;
  }

  // 🔀 CAMBIO DE MODO
  setMode(mode: 'all' | 'sections' | 'commands') {
    this.mode = mode;
    this.onSearch();
  }

  // 🚀 EJECUTAR RESULTADO
  go(item: any) {

    // navegación a sección
    if (item.route) {
      this.router.navigate([item.route]);
    }

    // comando
    if (item.command) {
      console.log('COMMAND:', item.command);
      navigator.clipboard.writeText(item.command);
    }

    // reset
    this.query = '';
    this.results = [];
    this.selectedIndex = 0;

    this.close.emit();
  }

  // ⌨️ navegación teclado
  handleKeyboard(event: KeyboardEvent) {

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
        this.go(this.results[this.selectedIndex]);
        break;

      case 'Escape':
        this.close.emit();
        break;
    }
  }
}