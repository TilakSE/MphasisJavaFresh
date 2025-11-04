import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import  {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Customer - CRUD Application'
}
