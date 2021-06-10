import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
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
    public apiService: ApiService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.apiService.request('userList', 'get').subscribe((users) => {
      console.log('Users: ', users);
      this.users = users['data'];
      const favourites = this.storageService.get('favourites');
      if(favourites){
        this.users = this.users.map(u => ({ ...u, is_favourite: favourites.User.includes(u._id) }));
      }
    });
  }
}
