import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { ChatService } from './services/chat.service';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newMessage;
  modalRef: BsModalRef;
  @ViewChild('chatTemplate') chatTemplate: TemplateRef<any>;

  constructor(
    public chatService: ChatService,
    private modalService: BsModalService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe((message: any) => {
      if(message.user !== 'prashant'){
        this.newMessage = message;
        if(!this.router.url.includes('chat')){
          this.modalRef = this.modalService.show(this.chatTemplate);
        }
      }
    });
  }

  navigateToChat(){
    this.modalRef.hide();
    this.router.navigate(['chat']);
  }
}
