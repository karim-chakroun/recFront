import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  userDetails;

  constructor(private service : UserService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null){
      this.getUserProfile();
    }
    
    }

    getUserProfile(){
      this.service.getUserProfile().subscribe(
        res =>{
          this.userDetails = res;
        },
        err =>{
          console.log(err);
        }
  
      );
    }

    SeDeconnecter(){
      localStorage.removeItem('token');

      this.router.navigateByUrl('/');
    }
}

