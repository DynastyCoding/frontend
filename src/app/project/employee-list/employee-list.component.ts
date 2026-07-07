import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

export interface EmployeeData {
  id: number;
  name: string;
  department: string;
  hireDate: Date;
  salary: number;
}

const EMPLOYEE_DATA: EmployeeData[] = [
  { id: 1, name: '林大偉', department: '研發部', hireDate: new Date('2020-11-20'), salary: 65000 },
  { id: 2, name: '李志豪', department: '業務部', hireDate: new Date('2019-05-05'), salary: 70000 },
  { id: 3, name: '張雅婷', department: '人資部', hireDate: new Date('2023-01-10'), salary: 48000 },
  { id: 4, name: '陳美玲', department: '行銷部', hireDate: new Date('2022-08-15'), salary: 55000 },
  { id: 5, name: '王建明', department: '研發部', hireDate: new Date('2021-03-01'), salary: 62000 },
  { id: 6, name: '劉怡君', department: '財務部', hireDate: new Date('2020-09-12'), salary: 58000 }
]

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, FormsModule, MatTableModule, MatPaginatorModule,
    MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatTabsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})

export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'department', 'hireDate', 'salary'];

  employees: EmployeeData[] = EMPLOYEE_DATA;
  dataSource = new MatTableDataSource<EmployeeData>(this.employees);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
