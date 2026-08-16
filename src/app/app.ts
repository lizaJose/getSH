import { CommonModule } from '@angular/common';
import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar';
import { GlobalSearchComponent } from './global-search-component/global-search-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    GlobalSearchComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  isSearchOpen = false;

  openSearch() {
    console.log('OPEN');
    this.isSearchOpen = true;
  }

  closeSearch() {
    this.isSearchOpen = false;
  }
}