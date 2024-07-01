import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaccUtilsComponent } from './macc-utils.component';

describe('MaccUtilsComponent', () => {
  let component: MaccUtilsComponent;
  let fixture: ComponentFixture<MaccUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaccUtilsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaccUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
