import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';  // ✅ Import ParentComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ParentComponent]  // ✅ Add it here
})
export class AppComponent { }
