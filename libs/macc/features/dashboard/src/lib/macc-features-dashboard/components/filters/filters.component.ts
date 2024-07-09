import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { chevronDown } from 'ngx-bootstrap-icons';
@Component({
  selector: 'lib-filters',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  iconChevronDown = chevronDown;
  expand = false;
}
