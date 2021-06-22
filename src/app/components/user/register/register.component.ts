import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  passwordVisible = false;
  confirmPasswordVisible = false;
  userId;

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      password: [''],
      confirm_password: ['']
    },{ validators: [this.checkPasswords.bind(this), this.passwordRequired.bind(this) ]});

    if(this.userId){
      this.getUser();
    }
  }

  checkPasswords(group: FormGroup){
    if(!this.userId){
      const password = group.get('password').value;
      const confirmPassword = group.get('confirm_password').value;
      return password === confirmPassword ? null : { notSame: true };
    }
    return null;
  }

  passwordRequired(group: FormGroup){
    if(!this.userId){
      const password = group.get('password').value;
      return password !== ''? null: { passwordEmpty: true };
    }
    return null;
  }

  register(){
    this.registerForm.controls.confirm_password.setValue(undefined);
    console.log('Register Form:', this.registerForm.value);
    this.apiService.request('userRegister', 'post', null, this.registerForm.value).subscribe((result => {
      if(result.success){
        this.router.navigate(['users']);
      }
    }));
  }

  passwordPeak(visible){
    this.passwordVisible = visible;
  }
  confirmPasswordPeak(visible){
    this.confirmPasswordVisible = visible;
  }

  getUser(){
    this.apiService.request('userList', 'get').subscribe((result) => {
      const user = result['data'].find(u => u._id === this.userId);
      this.registerForm.patchValue(user);
    });
  }

  saveUser(){
    console.log('Save user: ', this.registerForm.value);
    this.registerForm.controls.confirm_password.setValue(undefined);
    this.registerForm.controls.password.setValue(undefined);
    this.apiService.request('userEdit', 'put', this.userId, this.registerForm.value).subscribe((result => {
      if(result){
        Swal.fire("Nice", "User info is up to date!", 'success');
        this.router.navigate(['users']);
      }
    }));
  }

}
