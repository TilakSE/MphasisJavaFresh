import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-list',
  imports: [RouterLink , CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{
  ngOnInit(){
    this.loadEmployees()
  }
  Employee : any = [];

  constructor(
    public restApi : RestApiService
  ){}

  loadEmployees(){
    return this.restApi.getEmployees().subscribe((data : {}) =>{
      this.Employee = data;
    })
  }

  //Delete Employee

  deleteEmployee(id : any){
    if(window.confirm('Are you sure , you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }

}

