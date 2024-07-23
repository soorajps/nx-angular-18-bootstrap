import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { menulist } from './menulist';
import { RouterLink } from '@angular/router';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'lib-floating-menu',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterLink],
  templateUrl: './floating-menu.component.html',
  styleUrl: './floating-menu.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '170px',
        })
      ),
      state(
        'closed',
        style({
          width: '0px',
          overflow: 'hidden',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class FloatingMenuComponent {
  showMenu = false;
  menulist = menulist;
  toggle() {
    this.showMenu = !this.showMenu;
  }
}
