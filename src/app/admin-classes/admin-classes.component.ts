import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { EtudiantsService } from '../services/etudiants.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-classes',
  templateUrl: './admin-classes.component.html',
  styleUrls: ['./admin-classes.component.css']
})
export class AdminClassesComponent implements OnInit {
  classes;
  mode='list';
  currentClasses;
  constructor(private catService: CatalogueService, private etudService:EtudiantsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.onGetClasses();
  }

  onGetClasses(){
    this.catService.getAllClasses()
      .subscribe(data => {
        this.classes = data;
      }, err => {
        console.log(err);
      })
  }

  onDeleteClasses(c){
    let url = c._links.self.href;
    let eledelete = c._links.etudiants.href;
    console.log(eledelete);
    let d = confirm("Etes vous sûr de vouloir supprimer");
    if(!d) return;
    this.etudService.deleteRessource(url)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetClasses();
      }, err => {
        console.log(err);
      })

  }


  onNewClasses(){
    this.mode = 'new-classe';
  }

  onSaveClasse(data){
    let url = this.catService.host+"/classes";
    this.catService.postRessource(url,data)
    .subscribe(
      data=>{
        this.mode='list';
          this.onGetClasses();
      },err=>{

      }
    )
  }


  onEditClasses(c){
    let url = c._links.self.href;
    this.catService.getRessource(url)
    .subscribe(data=>{
      this.currentClasses = data;
      this.mode = 'edit-classe';
    },err=>{

    })
  }

  onUpdateClasse(data){
    let url = this.currentClasses._links.self.href;
    this.catService.putRessource(url, data)
      .subscribe(
        data => {
          this.mode = 'list';
          this.onGetClasses();
        }, err => {

        }
      )
  }
}
