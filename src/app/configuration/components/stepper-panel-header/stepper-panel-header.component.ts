import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-stepper-panel-header',
  standalone: true,
  imports: [ButtonModule, IconFieldModule],
  templateUrl: './stepper-panel-header.component.html',
  styleUrl: './stepper-panel-header.component.scss'
})
export class StepperPanelHeaderComponent {
  onClick = output<number>();
  classCssForIcon = input<string>('');
  index = input<number>(0);
  
  handleClick(event: MouseEvent) { 
    const active = Number((event.target as HTMLInputElement).value)
    this.onClick.emit(active);
  }
}
