import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';
import { Applications } from './pages/public/applications/applications';
import { Mission } from './pages/public/mission/mission';
import { Login } from './pages/auth/login/login';
import { Settings } from './pages/settings/settings';
import { NotFound } from './errors/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'applications',
    component: Applications,
  },
  {
    path: 'mission',
    component: Mission,
  },
  {
    path: 'contacts',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'settings',
    component: Settings,
  },
  {
    path: '**',
    component: NotFound,
  },
];
