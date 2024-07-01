import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaccFeaturesAccountComponent } from './macc-features-account.component';

describe('MaccFeaturesAccountComponent', () => {
  let component: MaccFeaturesAccountComponent;
  let fixture: ComponentFixture<MaccFeaturesAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaccFeaturesAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaccFeaturesAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
