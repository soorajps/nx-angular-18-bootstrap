import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaccUiLayoutComponent } from './macc-ui-layout.component';

describe('MaccUiLayoutComponent', () => {
  let component: MaccUiLayoutComponent;
  let fixture: ComponentFixture<MaccUiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaccUiLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaccUiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
