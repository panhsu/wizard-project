import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WizardService } from '../wizard.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  imports: [FormsModule]
})
export class Step2Component {
  email = '';

  constructor( private router: Router,private wizardService: WizardService) {}

  prev() {
    this.router.navigate(['/wizard/step1']);
  }

  next() {
    this.wizardService.setStepData('step2', { email: this.email });
    this.router.navigate(['/wizard/step3']);
  }
}
