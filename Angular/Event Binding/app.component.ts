import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule] // ✅ Add FormsModule here
})
export class AppComponent {
  title: string = 'Angular Event Listener Example';

  // Form fields
  employeeId: number = 0;
  employeeName: string = 'XYZ';
  joinDate: string = '02/03/2025';

  // Method to capture form submission
  submitForm() {
    alert(`Employee Details:\nID: ${this.employeeId}\nName: ${this.employeeName}\nJoining Date: ${this.joinDate}`);
  }
}
