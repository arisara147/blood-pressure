import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  getMessages: any;
  getMessage() {
    throw new Error('Method not implemented.');
  }
  sendMessage(arg0: { text: string; }) {
    throw new Error('Method not implemented.');
  }
  constructor() { }
}
