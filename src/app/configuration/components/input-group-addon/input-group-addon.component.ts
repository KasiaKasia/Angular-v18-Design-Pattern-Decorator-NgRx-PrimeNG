import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-group-addon',
  standalone: true,
  imports: [NgIf, InputGroupModule, InputGroupAddonModule, ReactiveFormsModule, IconFieldModule, InputTextModule ],
  templateUrl: './input-group-addon.component.html',
  styleUrl: './input-group-addon.component.scss'
})
export class InputGroupComponent {
  classCssForInputGroup = input<string>('');
  classCssForIcon = input<string>('');
  formControlNameValue = input<string>();
  formGroupNameValue= input<number>(0)
  placeholder = input<string>('');
  formGroupValue = input<any>('');
  formArrayNameValue = input<string>('')
}
