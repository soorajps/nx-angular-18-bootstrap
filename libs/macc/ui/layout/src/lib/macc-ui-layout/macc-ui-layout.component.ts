import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FloatingMenuComponent } from '@macc/macc/ui/components';

@Component({
  selector: 'lib-macc-ui-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    RouterModule,
    FloatingMenuComponent,
  ],
  templateUrl: './macc-ui-layout.component.html',
  styleUrl: './macc-ui-layout.component.scss',
})
export class MaccUiLayoutComponent {
  sideBarCollapsed!: boolean;

  onSidebarCollapse($event: unknown) {
    this.sideBarCollapsed = $event as boolean;
  }
}
