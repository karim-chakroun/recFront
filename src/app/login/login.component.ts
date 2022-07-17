import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  formModel={
    UserName: '',
    Password: ''
  }


  constructor(private service : UserService, private router : Router, private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
    this.router.navigateByUrl('/');
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{

        //this.snackBar.open("connected", "welcome!");
        localStorage.setItem('token',res.token);
        this.router.navigateByUrl('/Profile');

      },
      err=>{
        this.snackBar.open("wrong password", "try again");
      }

    );

    }

}
