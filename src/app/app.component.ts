import { Component } from '@angular/core';
import { Employee, EmployeeserviceService } from './employeeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpCRUD';
service:EmployeeserviceService;
constructor(service:EmployeeserviceService)
{
  this.service=service;
}
}
