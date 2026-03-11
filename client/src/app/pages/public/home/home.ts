import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';

@Component({
  selector: 'app-home',
  imports: [SharedModule],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  apps = [
    {
      name: 'Calendar',
      icon: 'pi pi-calendar',
      description: 'Plan events and collaborate with your team.',
      link: '/calendar',
    },
    {
      name: 'Notes',
      icon: 'pi pi-file-edit',
      description: 'Organize ideas and documents in one place.',
      link: '/notes',
    },
    {
      name: 'Contacts',
      icon: 'pi pi-users',
      description: 'Manage personal and professional contacts.',
      link: '/contacts',
    },
    {
      name: 'Drive',
      icon: 'pi pi-cloud',
      description: 'Store and share files securely.',
      link: '/drive',
    },
    {
      name: 'Tasks',
      icon: 'pi pi-check-square',
      description: 'Track tasks and productivity.',
      link: '/tasks',
    },
    {
      name: 'Mail',
      icon: 'pi pi-envelope',
      description: 'Private and secure email communication.',
      link: '/mail',
    },
  ];
}
