import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
      password: ['', Validators.required],
      confirm_password: ['']
    },{ validators: this.checkPasswords });

    if(this.userId){
      this.getUser();
      this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        phone: ['', Validators.required]});
    }
  }

  checkPasswords(group: FormGroup){
    const password = group.get('password').value;
    const confirmPassword = group.get('confirm_password').value;
    return password === confirmPassword ? null : { notSame: true };
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
  }

}
