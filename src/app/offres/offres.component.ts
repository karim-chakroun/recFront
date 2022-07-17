import { AjoutOffreComponent } from './../ajout-offre/ajout-offre.component';
import { OffresService } from './../shared/offres.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from '../shared/file.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  constructor(private service : OffresService, 
    public dialog: MatDialog,
    private http: HttpClient, 
    private fileService: FileService) { }
  offres;

  public files: string[] = [];

  ngOnInit(): void {
    this.getPhotos();

    this.service.getOffres().subscribe(
      res =>{
        this.offres = res;

      },
      err =>{
        console.log(err);
      }

    );

  }
  private getPhotos = () => {
    this.fileService.getPhotos().subscribe(data => this.files = data['photos']);
}

  /*openDialog() {
    this.dialog.open(AjoutOffreComponent, {
      data: {
        animal: 'panda',
      },
    });
  }*/

}
