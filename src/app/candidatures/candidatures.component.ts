import { CandidaturesService } from './../shared/candidatures.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {

  constructor(private service : CandidaturesService) { }

  candidatures;


  ngOnInit(): void {

    this.service.getCandidatures().subscribe(
      res =>{
        this.candidatures = res;

      },
      err =>{
        console.log(err);
      }

    );

  }

}
