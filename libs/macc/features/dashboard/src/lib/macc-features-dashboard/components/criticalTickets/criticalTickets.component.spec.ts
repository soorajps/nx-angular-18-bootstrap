import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriticalTicketsComponent } from './criticalTickets.component';

describe('CriticalTicketsComponent', () => {
  let component: CriticalTicketsComponent;
  let fixture: ComponentFixture<CriticalTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriticalTicketsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CriticalTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
