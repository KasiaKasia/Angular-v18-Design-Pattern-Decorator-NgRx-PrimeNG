import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoAngularComponent } from './logo-angular/logo-angular.component';
import { StepperPanelHeaderComponent } from './stepper-panel-header/stepper-panel-header.component';


@NgModule({
  exports: [LogoAngularComponent, StepperPanelHeaderComponent],
  imports: [
    CommonModule,
    LogoAngularComponent,
    StepperPanelHeaderComponent
  ]
})
export class ComponentsModule { }
