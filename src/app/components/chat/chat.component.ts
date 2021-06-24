import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { ChatService } from '../../services/chat.service';
import { distinctUntilChanged, filter, map, scan } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  
  selectedColor = 'pink';
  selectedBackgroundColor = 'black';
  message = {
    message: '',
    color: this.selectedColor,
    backgroundColor: this.selectedBackgroundColor,
    user: ''
  };
  messages = [];
  username = '';

  @Input() newMessage;

  list$ = this.chatService.getMessages().pipe(
    filter((value) => {
      return value['user'] !== 'Angular';
    }),
    map((value) => {
      value['message'] = value['message'].split('pinochio').join('Our Honorable PM');
      return value;
    }),
    map((value) => JSON.stringify(value)),
    distinctUntilChanged(),
    map((value) => JSON.parse(value)),
    scan((acc, value) => {
      acc.push(value);
      return acc;
    }, [])
  );

  constructor(
    public chatService: ChatService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getMessages();
    const user = this.storageService.get('user');
    if(user)
    {
      this.username = user.username;
    }
    if(this.newMessage){
      this.messages.push(this.newMessage);
    }
  }

  sendMessage(){
    if(this.message.message){
      this.message.user = this.username;
      this.message.color = this.selectedColor;
      this.message.backgroundColor = this.selectedBackgroundColor;
      this.chatService.sendMessage(this.message);
      this.message = {
        message: '',
        color: this.selectedColor,
        backgroundColor: this.selectedBackgroundColor,
        user: this.username
      };
    }
  }

  getMessages(){
    this.chatService.getMessages().subscribe((message: any) => {
      this.messages.push(message);
    });
  }

}
