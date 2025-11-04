import { Routes , RouterModule } from '@angular/router';
import { EmployeeCreate } from './employee-create/employee-create';
import { EmployeeEdit } from './employee-edit/employee-edit';
import { EmployeeList } from './employee-list/employee-list';
import { NgModule }  from '@angular/core';

export const routes: Routes = [
    {
        path : '' , 
        pathMatch : 'full' , 
        redirectTo : 'create-employee'
    },
    {
        path : 'create-employee' ,
        component : EmployeeCreate
    },
    {
        path : 'employee-list' ,
        component : EmployeeList
    },
    {
        path : 'employee-edit/:id' ,
        component : EmployeeEdit
    },
];

// @NgModule({
//     imports: []
// })
