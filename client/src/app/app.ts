import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule],
  template: `
    <p-toast></p-toast>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  private readonly themeService = inject(ThemeService);
}
