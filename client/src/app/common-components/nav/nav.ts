import { Component, computed, inject, output } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { ThemeService } from '../../services/theme.service';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-nav',
  imports: [SharedModule, ToolbarModule, MenuModule, DrawerModule],
  templateUrl: './nav.html',
  styles: ``,
})
export class Nav {
  menuItems = [
    { label: 'Iniziative', link: '/iniziative' },
    { label: 'Bollettino', link: '/bollettino' },
    { label: 'Contatti', link: '/contatti' },
    { label: 'Prenotazione sale', link: '/sale' },
  ];

  menuVisible = false;

  private readonly themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggle();
  }
}
