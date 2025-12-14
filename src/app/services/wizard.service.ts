import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WizardService {
  private data: any = {};

  private treeSubject = new BehaviorSubject<any>(null);
  tree$ = this.treeSubject.asObservable();

 
  setTree(tree: any) {
    this.treeSubject.next(tree);
  }

  getTree() {
    return this.treeSubject.getValue();
  }
  setStepData(step: string, stepData: any) {
    this.data[step] = stepData;
  }

  set(step: string, value: any) {
    this.data[step] = value;
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