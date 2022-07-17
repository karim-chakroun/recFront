import { Router } from '@angular/router';
import { OffresService } from './../shared/offres.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-offre',
  templateUrl: './ajout-offre.component.html',
  styleUrls: ['./ajout-offre.component.css']
})
export class AjoutOffreComponent implements OnInit {
  @Input() myoffres: any;

  constructor(public service: OffresService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.PostOffres().subscribe(
      (res: any) => {
          this.myoffres = res;
          this.service.formModel.reset();
          this.router.navigateByUrl('/Offres');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
    );
  }

}
