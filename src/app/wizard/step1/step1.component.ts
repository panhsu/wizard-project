import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { WizardService } from '../wizard.service';

@Component({
  standalone: true,
  selector: 'app-step1',
  imports: [CommonModule, FormsModule],
  templateUrl: './step1.component.html'
})
export class Step1Component {

  name = '';

  constructor(private router: Router,private wizardService: WizardService) {}

  next() {
    this.router.navigate(['wizard/step2']);
  }
}
