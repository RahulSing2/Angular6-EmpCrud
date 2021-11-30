import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
service:EmployeeserviceService;
  constructor(service:EmployeeserviceService) {
    this.service=service;
   }
employees:Employee[]=[];
delete(id:number){
  this.service.delete(id);
  this.employees=this.service.getEmployee();
}
  ngOnInit(): void {
    this.service.fetchEmployees();
    this.employees=this.service.getEmployee();
  }

}
