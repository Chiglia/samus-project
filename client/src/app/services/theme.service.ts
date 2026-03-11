import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  );

  private mobile = signal(window.innerWidth <= 768);

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('my-app-dark', this.theme() === 'dark');
    });

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', (e) => {
      this.theme.set(e.matches ? 'dark' : 'light');
    });

    window.addEventListener('resize', () => {
      this.mobile.set(window.innerWidth <= 768);
    });
  }

  toggle() {
    this.theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  set(theme: 'light' | 'dark') {
    this.theme.set(theme);
  }

  isMobile() {
    return this.mobile();
  }
}
