import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone:true
})
export class ChildComponent {
  @Input() childValue!: string;  // ✅ Receive data from parent
  @Output() childValueChange = new EventEmitter<string>();  // ✅ Emit changes back

  onValueChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;  // ✅ Type assertion
    this.childValueChange.emit(inputElement.value);
  }
  
}
