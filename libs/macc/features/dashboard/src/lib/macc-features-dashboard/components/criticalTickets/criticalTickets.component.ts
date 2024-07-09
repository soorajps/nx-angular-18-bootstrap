import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { exclamationTriangleFill } from 'ngx-bootstrap-icons';
import { NgIconComponent } from '@ng-icons/core';
@Component({
  selector: 'lib-critical-tickets',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './criticalTickets.component.html',
  styleUrl: './criticalTickets.component.css',
})
export class CriticalTicketsComponent {
  iconExclamationTriangleFill = exclamationTriangleFill;
}
