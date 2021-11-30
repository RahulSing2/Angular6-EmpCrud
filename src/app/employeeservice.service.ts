import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

employees:Employee[]=[];
  constructor(private http:HttpClient) { 
    this.http=http;
  }
  fetched:boolean=false;
  fetchEmployees(){
    this.http.get('./assets/employee.json').subscribe(
      data=>{
        if(!this.fetched){
          this.convert(data);
          this.fetched=true;      
        }
      }
    );
  }
  getEmployee():Employee[]
  {
    return this.employees;
  }
  convert(data:any){
    for(let o of data ){
      let e=new Employee(o.id,o.name);
      this.employees.push(e);
    }
  }
  delete(eid:number){
    let foundIndex:number=-1;
    for(let i=0;i<this.employees.length;i++)
    {
      let e= this.employees[i];
      if(eid=e.id){
        foundIndex=i;
        break;
      }
    }
   
    
    this.employees.splice(foundIndex,1);
  }
  add(e:Employee)
  {
    this.employees.push(e);
  }
}
  export class Employee{
    id:number;
    name:string;
    constructor(id:number,name:string){
      this.id=id;
      this.name=name;
    }
  }

