import { Component } from '@angular/core';
import { WizardService } from '../wizard.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step3.component.html'
})
export class Step3Component {
  wizardData: any;

  constructor(private wizardService: WizardService) {
    this.wizardData = this.wizardService.getAllData();
  }

  submit() {
    window.alert('OK');
  }
}
