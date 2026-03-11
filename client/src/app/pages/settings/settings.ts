import { Component, computed, inject } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { ThemeService } from '../../services/theme.service';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-settings',
  imports: [SharedModule, MenuModule],
  templateUrl: './settings.html',
  styles: ``,
})
export class Settings {
  public readonly themeService = inject(ThemeService);
  private readonly transloco = inject(TranslocoService);

  private readonly lang = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang(),
  });

  readonly languageMenuItems = computed<MenuItem[]>(() => {
    const currentLang = this.lang();
    return [
      {
        label: 'English',
        icon: 'pi pi-language',
        disabled: currentLang === 'en',
        command: () => this.onLanguageChange('en'),
      },
      {
        label: 'Italiano',
        icon: 'pi pi-language',
        disabled: currentLang === 'it',
        command: () => this.onLanguageChange('it'),
      },
    ];
  });
  onLanguageChange(lang: string): void {
    this.transloco.setActiveLang(lang);
  }
}
