import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './shared/department.service'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  providers: [DepartmentService]
})
export class DepartmentsComponent implements OnInit {

  constructor(private departmentService : DepartmentService) { }

  ngOnInit() {
  }

}
