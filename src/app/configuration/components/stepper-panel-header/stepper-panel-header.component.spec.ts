import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperPanelHeaderComponent } from './stepper-panel-header.component';

describe('StepperPanelHeaderComponent', () => {
  let component: StepperPanelHeaderComponent;
  let fixture: ComponentFixture<StepperPanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperPanelHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
