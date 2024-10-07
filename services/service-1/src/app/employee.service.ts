import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employee = [
    {
      id: 1,
      name: 'John',
      location: 'New York',
      phone: '343-343-3433',
    },
    {
      id: 2,
      name: 'Disha',
      location: 'Mumbai',
      phone: '343-343-3113',
    },
    {
      id: 3,
      name: 'Rakul',
      location: 'California',
      phone: '343-343-4221',
    },
    {
      id: 4,
      name: 'Johanna',
      location: 'Connecticut',
      phone: '123-343-3298',
    },
  ];

  getEmployees() {
    return this.employee;
  }

  getEmployeeById(id: number) {
    return this.employee.find((employee) => employee.id === id);
  }
}
