import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillCyclesComponent } from './billCycles.component';

describe('BillCyclesComponent', () => {
  let component: BillCyclesComponent;
  let fixture: ComponentFixture<BillCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillCyclesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
