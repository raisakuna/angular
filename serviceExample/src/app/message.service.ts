import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  _message = 'Hello from angular service';
  constructor() {}
  getMessage() {
    return this._message;
  }
}
