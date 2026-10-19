import { Injectable } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'theme-preference';
const LIGHT_CLASS = 'theme-light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  mode: ThemeMode = 'dark';

  constructor() {
    const stored = this.readStoredMode();
    this.apply(stored ?? 'dark');
  }

  toggle(): void {
    this.apply(this.mode === 'dark' ? 'light' : 'dark');
  }

  private apply(mode: ThemeMode): void {
    this.mode = mode;
    document.documentElement.classList.toggle(LIGHT_CLASS, mode === 'light');
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // localStorage may be unavailable (privacy mode, SSR, etc.) - ignore.
    }
  }

  private readStoredMode(): ThemeMode | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'light' || stored === 'dark' ? stored : null;
    } catch {
      return null;
    }
  }
}
