import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tree-node',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  styleUrls: ['./tree-node.component.css'],
  templateUrl: './tree-node.component.html' 
})
export class TreeNodeComponent {
  @Input() node: any;
  @Output() toggle = new EventEmitter<any>();

  onChildToggle(event: any) {
    this.toggle.emit(event);
  }

  onToggle() {
    this.toggle.emit(this.node);
  }
}
