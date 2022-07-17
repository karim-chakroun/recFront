import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private fb : FormBuilder) { }

  readonly BaseURI = 'https://localhost:44390/api';
  formModel = this.fb.group({

    Emails: this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      ConfirmEmail: ['', [Validators.required, Validators.email]]
    }),
    UserName: ['', Validators.required],
    FullName: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords }),

  });

  register() {
    var body = {
      userName: this.formModel.value.UserName,
      email: this.formModel.value.Emails.Email,
      fullName: this.formModel.value.FullName,
      password: this.formModel.value.Passwords.Password

    };
    return this.http.post( this.BaseURI +'/ApplicationUser/RegisterCandidat', body);
  }

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  login(formData){
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getUserProfile(){

    return this.http.get(this.BaseURI+ '/UserProfile');
  }

  roleMatch(allowedRoles): boolean{
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element =>{
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }




}

