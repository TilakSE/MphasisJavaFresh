import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone: true,  // ✅ Make it standalone
  imports: [CommonModule, FormsModule, ChildComponent]  // ✅ Import required modules & child
})
export class ParentComponent {
  parentValue: string = 'Hello from Parent!';
}
