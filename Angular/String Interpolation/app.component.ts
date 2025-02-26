import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular & Bootstrap Integration';
  message: string = 'Welcome to the Employee Portal!';
  
  // Employee details
  employeeId: number = 101;
  employeeName: string = 'John Doe';
}
