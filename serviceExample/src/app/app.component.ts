import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'serviceExample';
  _msg: String = '';

  constructor(private _messageService: MessageService) {
    // this._msg = _messageService.getMessage();
  }

  getMessage() {
    this._msg = this._messageService.getMessage();
  }
}
