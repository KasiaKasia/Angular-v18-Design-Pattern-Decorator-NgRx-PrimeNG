import { NgModule } from '@angular/core';
import { NgClass, NgFor, NgStyle } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepperModule } from 'primeng/stepper';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StyleClassModule } from 'primeng/styleclass';
import { CalendarModule } from 'primeng/calendar';
import { DataViewModule } from 'primeng/dataview';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [        
        NgClass,
        FormsModule, 
        CalendarModule,
        CardModule,
        DataViewModule,
        InputTextModule, 
        InputTextareaModule, 
        InputGroupAddonModule,
        InputGroupModule,
        IconFieldModule,
        StepperModule,         
        InputIconModule, 
        ButtonModule, 
        PasswordModule, 
        DropdownModule, 
        RippleModule,
        SplitButtonModule,
        FloatLabelModule,
        ReactiveFormsModule,
        RadioButtonModule,
        NgFor,
        StyleClassModule,
        NgStyle,
        TableModule,
        ToggleButtonModule,
        TimelineModule,
        TagModule
    ],
    exports: [
        NgClass,
        FormsModule,
        CalendarModule,
        CardModule,
        DataViewModule,
        InputTextModule, 
        InputTextareaModule, 
        InputGroupAddonModule,
        InputGroupModule,
        InputIconModule, 
        StepperModule, 
        IconFieldModule,        
        ButtonModule, 
        PasswordModule,
        DropdownModule, 
        RippleModule,
        SplitButtonModule,
        FloatLabelModule,
        ReactiveFormsModule,
        RadioButtonModule,
        NgFor,
        StyleClassModule,
        NgStyle,
        TableModule,
        ToggleButtonModule,
        TimelineModule,
        TagModule
    ],
 
  })
  export class ImportsModule {}
  