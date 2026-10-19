import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TerminalContextService } from './core/services/terminal-context.service';
import { ThemeService } from './core/services/theme.service';
import { SidebarComponent } from './shared/components/sidebar/sidebar';
import { GlobalSearchComponent } from './global-search-component/global-search-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    SidebarComponent,
    GlobalSearchComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly context = inject(TerminalContextService);
  readonly theme = inject(ThemeService);

  isSearchOpen = false;

  openSearch() {
    this.isSearchOpen = true;
  }

  closeSearch() {
    this.isSearchOpen = false;
  }

  toggleTheme() {
    this.theme.toggle();
  }
}