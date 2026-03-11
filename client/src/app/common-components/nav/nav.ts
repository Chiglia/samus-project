import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-nav',
  imports: [SharedModule, DrawerModule],
  templateUrl: './nav.html',
  styles: ``,
})
export class Nav {
  menuItems = [
    { label: 'Applications', link: '/applications' },
    { label: 'Mission', link: '/mission' },
    { label: 'Contacts', link: '/contacts' },
    { label: 'Login', link: '/login' },
  ];

  menuVisible = false;
}
