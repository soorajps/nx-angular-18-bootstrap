import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaccFeaturesAuthenticationComponent } from './macc-features-authentication.component';

describe('MaccFeaturesAuthenticationComponent', () => {
  let component: MaccFeaturesAuthenticationComponent;
  let fixture: ComponentFixture<MaccFeaturesAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaccFeaturesAuthenticationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaccFeaturesAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
