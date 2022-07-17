import { EntretienRHsService } from './../shared/entretien-rhs.service';
import { Router } from '@angular/router';
import { TestTechniquesService } from './../shared/test-techniques.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entretien-rhs',
  templateUrl: './entretien-rhs.component.html',
  styleUrls: ['./entretien-rhs.component.css']
})
export class EntretienRHsComponent implements OnInit {
  @Input() myEntretiens;
  constructor(public service: EntretienRHsService, private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.service.PostEntretiens().subscribe(
      (res: any) => {
          this.myEntretiens = res;
          this.service.formModel.reset();
          this.router.navigateByUrl('/Candidatures');
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
    );
  }


}
