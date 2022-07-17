import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntretienRHsService {

  constructor(private http : HttpClient, private fb : FormBuilder) { }
  readonly BaseURI = 'https://localhost:44390/api';

  formModel = this.fb.group({
    equipe_recrutement: [, [Validators.required]],
    localisation: [, ],
    duree: [, [Validators.required]],
    date: [, [Validators.required]],
    heure: [, [Validators.required]],
    type_entretien: [, [Validators.required]],
    destination: [, [Validators.required]],

  })

  PostEntretiens (){
    var body = {
      equipe_recrutement: this.formModel.value.equipe_recrutement,
      localisation: this.formModel.value.localisation,
      duree: this.formModel.value.duree,
      date: this.formModel.value.date,
      heure: this.formModel.value.heure,
      type_entretien: this.formModel.value.type_entretien,
      destination: this.formModel.value.destination,
    };
    return this.http.post( this.BaseURI +'/EntretienRH', body);
  }
}
