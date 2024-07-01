import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaccUiComponentsComponent } from './macc-ui-components.component';

describe('MaccUiComponentsComponent', () => {
  let component: MaccUiComponentsComponent;
  let fixture: ComponentFixture<MaccUiComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaccUiComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaccUiComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
