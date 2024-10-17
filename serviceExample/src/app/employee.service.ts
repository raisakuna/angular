import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees = [
    {
      id: 1,
      name: 'Alex',
      department: 'Sales Dept',
      location: 'California',
      phone: '454-343-3343',
    },
    {
      id: 2,
      name: 'John',
      department: 'Fine Dept',
      location: 'New York',
      phone: '454-343-1234',
    },
    {
      id: 3,
      name: 'Disha',
      department: 'IT Dept',
      location: 'New Jersey',
      phone: '123-343-9000',
    },
    {
      id: 4,
      name: 'Maskey',
      department: 'Product Dept',
      location: 'Mumbai',
      phone: '321-675-4322',
    },
  ];

  getEmployee() {
    return this.employees;
  }

  getEmployeeById(id: number) {
    return this.employees.find((employee) => employee.id === id);
  }

  constructor() {}
}
