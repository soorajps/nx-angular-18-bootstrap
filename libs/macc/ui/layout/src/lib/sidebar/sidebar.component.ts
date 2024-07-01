import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import navigationItems from './navigation-items';

@Component({
  selector: 'lib-sidebar',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  navigationItems = navigationItems;
}
