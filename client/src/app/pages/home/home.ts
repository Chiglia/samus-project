import { Component } from '@angular/core';
import { Nav } from '../../common-components/nav/nav';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-home',
  imports: [SharedModule, Nav],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {}
