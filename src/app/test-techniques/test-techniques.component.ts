import { TestTechniquesService } from './../shared/test-techniques.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-techniques',
  templateUrl: './test-techniques.component.html',
  styleUrls: ['./test-techniques.component.css']
})
export class TestTechniquesComponent implements OnInit {
  @Input() myTests;
  constructor(public service: TestTechniquesService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.PostTests().subscribe(
      (res: any) => {
          this.myTests = res;
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
