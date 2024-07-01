import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaccFeaturesDashboardComponent } from './macc-features-dashboard.component';

describe('MaccFeaturesDashboardComponent', () => {
  let component: MaccFeaturesDashboardComponent;
  let fixture: ComponentFixture<MaccFeaturesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaccFeaturesDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaccFeaturesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
