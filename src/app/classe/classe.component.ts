import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { EtudiantsService } from '../services/etudiants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  constructor(private catService:CatalogueService, private router: Router) { }
  classes;
  etudiants;
  currentClasse;
  ngOnInit(): void {
    this.catService.getAllClasses()
    .subscribe(data=>{
      this.classes=data;
      console.log(this.classes);
    },err=>{
      console.log(err);
    })
  }


  onGetEtudiants(c){
    this.currentClasse = c;
    let url = c._links.etudiants.href;
    this.router.navigateByUrl("/etudiant/"+btoa(url));
  }
}
