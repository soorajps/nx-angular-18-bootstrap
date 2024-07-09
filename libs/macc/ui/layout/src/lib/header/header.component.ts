import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { star, mic } from 'ngx-bootstrap-icons';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [provideIcons({ star })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  iconStar = star;
  mic = mic;
  globalSearchDropdownOptions = [
    { label: 'All', value: 'all' },
    { label: 'Account', value: 'account' },
    { label: 'Service Order', value: 'serviceOrder' },
    { label: 'Trouble', value: 'trouble' },
    { label: 'Sales Leads', value: 'salesLead' },
  ];
}
