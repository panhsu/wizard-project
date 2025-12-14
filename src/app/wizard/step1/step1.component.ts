import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { WizardService } from '../../services/wizard.service';
import { MbfService } from '../../services/mbf.service';
import { TreeNodeComponent } from './tree-node.component';

@Component({
  standalone: true,
  selector: 'app-step1',
  imports: [CommonModule, FormsModule, TreeNodeComponent],
  templateUrl: './step1.component.html'
})
export class Step1Component {

  tree: any;


  constructor(private router: Router,private wizardService: WizardService, private mbf: MbfService) {}
  ngOnInit(): void {
    const savedTree = this.wizardService.getTree();
    if (savedTree) 
    {
      this.tree = savedTree;
    } 
    else 
    {
      this.mbf.getTreeNodes().subscribe(tree => 
        {
          this.tree = tree;
          this.wizardService.setTree(this.tree);
        });
      }
    }

  onToggle(node: any) {
    if (node.children) {
      node.children.forEach((child: any) => {
        child.selected = node.selected;
        this.onToggle(child);
      });
    }
    this.wizardService.setTree(this.tree);
  }


  next() {
    this.router.navigate(['/wizard/step2']);
  }
}
