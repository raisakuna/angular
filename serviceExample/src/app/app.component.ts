import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'serviceExample';
  _msg: String = '';
  employees: any;
  empId: any;

  constructor(private _messageService: MessageService) {
    // this._msg = _messageService.getMessage();
  }

  getMessage() {
    this._msg = this._messageService.getMessage();
  }

  showDetails(id: number) {}
}
