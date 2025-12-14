import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WizardService {
  private data: any = {};

  setStepData(step: string, stepData: any) {
    this.data[step] = stepData;
  }

  getStepData(step: string) {
    return this.data[step];
  }

  getAllData() {
    return this.data;
  }

  clearData() {
    this.data = {};
  }
}