import { Component, OnInit } from '@angular/core';
 
import { DepartmentService } from '../shared/department.service'
import { Department } from '../shared/department.model';
import { ToastrService } from 'ngx-toastr';    
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
 
  constructor(private departmentService: DepartmentService, private toastr : ToastrService) { }
 
  ngOnInit() {
    this.departmentService.getDepartmentList();
  }
 
  showForEdit(dept: Department) {
    this.departmentService.selectedDepartment = Object.assign({}, dept);
  }
  
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.departmentService.deleteDepartment(id)
      .subscribe(x => {
        this.departmentService.getDepartmentList();
        this.toastr.warning("Deleted Successfully","Department");
      })
    }
  }
}