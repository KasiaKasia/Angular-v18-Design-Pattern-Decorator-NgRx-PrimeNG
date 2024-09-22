import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAngularComponent } from './logo-angular.component';

describe('LogoAngularComponent', () => {
  let component: LogoAngularComponent;
  let fixture: ComponentFixture<LogoAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
