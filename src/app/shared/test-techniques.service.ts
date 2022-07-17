import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestTechniquesService {

  constructor(private http : HttpClient, private fb : FormBuilder) { }
  readonly BaseURI = 'https://localhost:44390/api';

  formModel = this.fb.group({
    destination: [, [Validators.required]],
    date_depot: [, [Validators.required]],
    duree: [, [Validators.required]],
    lien_test: [, [Validators.required]],

  })

  PostTests (){
    var body = {
      destination: this.formModel.value.destination,
      date_depot: this.formModel.value.date_depot,
      duree: this.formModel.value.duree,
      lien_test: this.formModel.value.lien_test,

    };
    return this.http.post( this.BaseURI +'/TestTechnique', body);
  }

}
