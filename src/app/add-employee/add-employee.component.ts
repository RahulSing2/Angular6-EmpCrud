import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  createdEmployee!:Employee;
  createdFlag:boolean=false;
  service:EmployeeserviceService;
  constructor(service:EmployeeserviceService) { 
    this.service= service;
  }

  ngOnInit(): void {
  }
add(data:any){
  this.createdEmployee=new Employee(data.eid,data.name);
  this.service.add(this.createdEmployee);
  this.createdFlag=true;
}
}
