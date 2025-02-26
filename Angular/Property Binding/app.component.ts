import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Property Binding Example';
  employeeId: number = 102;
  employeeName: string = 'Alice Johnson';
  
  // Property binding examples
  isDisabled: boolean = true; // Button initially disabled
  bgColor: string = 'bg-light'; // Bootstrap background color
  textColor: string = 'text-dark'; // Bootstrap text color
  imageUrl: string = 'https://cdn-icons-png.flaticon.com/512/4975/4975693.png'; // Placeholder image

  // Date Fields
  joinDate: string = new Date().toISOString().split('T')[0]; // Default to today's date
  minDate: string = '2023-01-01'; // Min selectable date
  maxDate: string = '2025-12-31'; // Max selectable date
  isDateDisabled: boolean = true; // Initially disable date selection

  // Method to toggle button state
  toggleButton() {
    this.isDisabled = !this.isDisabled;
    this.bgColor = this.isDisabled ? 'bg-light' : 'bg-warning';
    this.textColor = this.isDisabled ? 'text-dark' : 'text-white';
  }

  // Method to enable/disable date input
  toggleDateSelection() {
    this.isDateDisabled = !this.isDateDisabled;
  }
}
