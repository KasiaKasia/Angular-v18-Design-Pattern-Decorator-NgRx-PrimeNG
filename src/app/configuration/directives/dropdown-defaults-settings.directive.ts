import { Directive, ElementRef } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { Host } from '@angular/core';

@Directive({
  selector: '[dropdownDefaultsSettings]',
  standalone: true
})
export class DropdownDefaultsSettingsDirective {

  constructor(@Host() private dropdown: Dropdown, private el: ElementRef) {
    this.setDefaultSettings();
  }

  setDefaultSettings() {
    const dropdownComponent = this.el.nativeElement;
    dropdownComponent.style.width = '100%';
    this.dropdown.showClear = true;
    this.dropdown.filter = true;
    this.dropdown.checkmark = true;
    this.dropdown.styleClass = 'w-full';
  }
}
