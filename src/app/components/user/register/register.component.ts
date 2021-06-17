import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['']
    },{ validators: this.checkPasswords });
  }

  checkPasswords(group: FormGroup){
    const password = group.get('password').value;
    const confirmPassword = group.get('confirm_password').value;
    return password === confirmPassword ? null : { notSame: true };
  }

  register(){
    this.registerForm.controls.confirm_password.setValue(undefined);
    console.log('Register Form:', this.registerForm.value);
    // this.apiService.request('userRegister', 'post', null, this.registerForm.value).subscribe((result => {

    // }));
  }

  passwordPeak(visible){
    this.passwordVisible = visible;
  }
  confirmPasswordPeak(visible){
    this.confirmPasswordVisible = visible;
  }

}
