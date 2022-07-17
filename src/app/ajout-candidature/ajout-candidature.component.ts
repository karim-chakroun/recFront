import { CandidaturesService } from './../shared/candidatures.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-ajout-candidature',
  templateUrl: './ajout-candidature.component.html',
  styleUrls: ['./ajout-candidature.component.css']
})
export class AjoutCandidatureComponent implements OnInit {

  constructor( public service : CandidaturesService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private uService:UserService) { }
  mycandidatures;

  candidatureId;

  response: {dbPath: ''};

  ngOnInit(): void {
    this.candidatureId=this.data.offreId;
    if (localStorage.getItem('token') != null){
      this.getUserProfile();
    }
  }


  uploadFinished = (event) => { 
    this.response = event; 
  }

  onSubmit(OffreId,UserId){
    this.service.PostCandidatures(this.response.dbPath,OffreId,UserId).subscribe(
      (res: any) => {
          
          this.service.formModel.reset();
          //this.router.navigateByUrl('/Candidatures');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
    );
  }

  userDetails;
  getUserProfile(){
    this.uService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  
  /*onSubmit() {
    this.service.PostCandidatures(this.response.dbPath).subscribe(
      (res: any) => {
          this.mycandidatures = res;
          this.service.formModel.reset();
          //this.router.navigateByUrl('/Candidatures');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
    );
  }*/

}
