import { Routes } from '@angular/router';
import { Step1Component } from './wizard/step1/step1.component';
import { Step2Component } from './wizard/step2/step2.component';
import { Step3Component } from './wizard/step3/step3.component';

export const routes: Routes = [
  { path: '', redirectTo: 'wizard/step1', pathMatch: 'full' },
  { path: 'wizard/step1', component: Step1Component },
  { path: 'wizard/step2', component: Step2Component },
  { path: 'wizard/step3', component: Step3Component }
];
