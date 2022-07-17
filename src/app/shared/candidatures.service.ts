import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidaturesService {

  constructor(private http : HttpClient, private fb : FormBuilder) { }
  readonly BaseURI = 'https://localhost:44390/api';

  getCandidatures(){
    return this.http.get(this.BaseURI+ '/Candidature');
  }

  formModel = this.fb.group({
    date_postulation: [, [Validators.required]],
    etat: [,],
    curriculum_Vitae: [, [Validators.required]],
    score: [,],

  })

  PostCandidatures (CVPath,OffreId,UserId,myDate = new Date()){
    var body = {
      date_postulation: myDate,
      etat: 'en attente',
      curriculum_Vitae: CVPath,
      score: 0,
      offreFK: OffreId,
      candidatFK: UserId

    };
    return this.http.post( this.BaseURI +'/Candidature', body);
  }
}
