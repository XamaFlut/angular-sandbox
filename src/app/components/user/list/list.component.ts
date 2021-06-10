import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: User[] = [];

  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.apiService.request('userList', 'get').subscribe((users) => {
      console.log('Users: ', users);
      this.users = users['data'];
    });
  }
}
