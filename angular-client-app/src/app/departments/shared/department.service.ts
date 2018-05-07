import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
import {Department} from'./department.model'
 
@Injectable()
export class DepartmentService {
  selectedDepartment : Department;
  departmentList : Department[];
  constructor(private http : Http) { }
 
  postDepartment(dept : Department){
    var body = JSON.stringify(dept);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:50267/api/Department',body,requestOptions).map(x => x.json());
  }
 
  putDepartment(id, dept) {
    var body = JSON.stringify(dept);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:50267/api/Department/' + id,
      body,
      requestOptions).map(res => res.json());
  }
 
  getDepartmentList(){
    this.http.get('http://localhost:50267/api/Department')
    .map((data : Response) =>{
      return data.json() as Department[];
    }).toPromise().then(x => {
      this.departmentList = x;
    })
  }
 
  deleteDepartment(id: number) {
    return this.http.delete('http://localhost:50267/api/Department/' + id).map(res => res.json());
  }
}