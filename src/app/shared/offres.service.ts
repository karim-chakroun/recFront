import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  constructor(private http : HttpClient, private fb : FormBuilder) { }
  readonly BaseURI = 'https://localhost:44390/api';

  getOffres(){
    return this.http.get(this.BaseURI+ '/Offre');
  }

  getOffreById(id){
    return this.http.get(this.BaseURI+ '/Offre/'+id);
  }

  //Frorm Model
  // create
  formModel = this.fb.group({
    nomOffre: [, [Validators.required]],
    pays: [, [Validators.required]],
    region: [, [Validators.required]],
    date_debut: [, [Validators.required]],
    qualites_interpersonnelles: [,],
    competences_techniques: [, [Validators.required]],
    diplome_demande: [, [Validators.required]],
    experience_demandee: [, [Validators.required]],

    salaire: [, ],
    type_contrat: [, ],
    departement : [, [Validators.required]],
  })

  PostOffres (){
    var body = {
      nomOffre: this.formModel.value.nomOffre,
      pays: this.formModel.value.pays,
      region: this.formModel.value.region,
      date_debut: this.formModel.value.date_debut,
      qualites_interpersonnelles: this.formModel.value.qualites_interpersonnelles,
      competences_techniques: this.formModel.value.competences_techniques,
      diplome_demande: this.formModel.value.diplome_demande,
      experience_demandee: this.formModel.value.experience_demandee,

      salaire: this.formModel.value.salaire,
      type_contrat: this.formModel.value.type_contrat,
      departement: this.formModel.value.departement,
    };
    return this.http.post( this.BaseURI +'/Offre', body);
  }

}
