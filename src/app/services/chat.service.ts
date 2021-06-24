import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = 'https://sdworx-socket-sandbox.herokuapp.com/';
  private socket;

  constructor() {
    this.socket = io(this.url);
   }

   getMessages(){
    return new Observable(observer => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      })
    });
   }

   sendMessage(message){
    this.socket.emit('new-message', message);
   }
}
