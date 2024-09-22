import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoAngularComponent } from './logo-angular/logo-angular.component';


@NgModule({
  exports: [LogoAngularComponent],
  imports: [
    CommonModule,
    LogoAngularComponent
  ]
})
export class ComponentsModule { }
