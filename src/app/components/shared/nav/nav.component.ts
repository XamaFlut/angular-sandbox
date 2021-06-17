import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from '../../../services/api.service';
import { SettingsService } from '../../../services/settings.service';
import Swal from 'sweetalert2';
import { PermissionService } from '../../../services/permission.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  currentTheme = 'light';
  username = '';
  loginForm: FormGroup;

  constructor(
    public settingsService: SettingsService,
    public storageService: StorageService,
    public apiService: ApiService,
    public formBuilder: FormBuilder,
    public permissionService: PermissionService
  ) { }

  ngOnInit(): void {
    this.currentTheme = this.settingsService.theme;
    this.settingsService.outsetTheme.subscribe(result => {
      console.log('Navbar theme: ', result);
      this.currentTheme = result;
    });

    const user = this.storageService.get('user');
    if(user)
    {
      this.username = `${user.first_name} ${user.last_name}`;
    }

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signin(){
    this.apiService.request('userSignIn', 'post', null, this.loginForm.value).subscribe(result=>{  
      this.storageService.set('user', result.user);
      this.storageService.set('token', result.token);
      this.username = `${result.user.first_name} ${result.user.last_name}`;
      Swal.fire('Welcome', this.username, 'success');
    });
  }

  logout(){
    this.username = '';
    this.storageService.remove('user');
    this.storageService.remove('token');
  }

}
