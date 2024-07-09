import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillCyclesComponent } from './components/billCycles/billCycles.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CriticalTicketsComponent } from './components/criticalTickets/criticalTickets.component';
import { InboxComponent } from './components/inbox/inbox.component';

@Component({
  selector: 'lib-macc-features-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BillCyclesComponent,
    FiltersComponent,
    CriticalTicketsComponent,
    InboxComponent,
  ],
  templateUrl: './macc-features-dashboard.component.html',
  styleUrl: './macc-features-dashboard.component.scss',
})
export class MaccFeaturesDashboardComponent {}
