import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
 
import { DepartmentService } from '../shared/department.service'
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
 
  constructor(private departmentService: DepartmentService, private toastr: ToastrService) { }
 
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();

    this.departmentService.selectedDepartment = {
      DepartmentID: null,
      name: '',
      groupName: '',
      modifiedDate: ''
    }
  }
 
  onSubmit(form: NgForm) {
    if (form.value.DepartmentID == null) {
      this.departmentService.postDepartment(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.departmentService.getDepartmentList();
          this.toastr.success('New Record Added Succcessfully', 'Department Register');
        })
    }
    else {
      this.departmentService.putDepartment(form.value.DepartmentID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.departmentService.getDepartmentList();
        this.toastr.info('Record Updated Successfully!', 'Department Register');
      });
    }
  }
}