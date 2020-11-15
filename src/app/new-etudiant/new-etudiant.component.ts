import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantsService } from '../services/etudiants.service';
import { Etudiant } from '../model/etudiant.model';
import { CatalogueService } from '../catalogue.service';
import { FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.css']
})
export class NewEtudiantComponent implements OnInit {
  public currentEtudiant: Etudiant;
  public mode: number = 1;
  public classes: any;
  public etCl;
  public recupEtudiantClasse;
  public classValue ="http://localhost:8080/classe/";
  public scolariteValue = "http://localhost:8080/scolarite/";
  public recuScolarite;
  public recupEtudiantScolarite;
 
  etudiantsCl = "localhost:8080/etudiants";
  recupereETClasse;

  constructor(private etudiantService: EtudiantsService, private router: Router, private catService: CatalogueService, private serviceEtudiants: EtudiantsService) { }

  ngOnInit(): void {
    this.catService.getAllClasses()
      .subscribe(resp => {
        // this.router.navigateByUrl("/etudiants");
        this.classes = resp;
       
      }, err => {
        console.log(err);
      })

    //this.onScolariteClasse();

    this.catService.getAllScolarite()
      .subscribe(resp => {
        // this.router.navigateByUrl("/etudiants");
        this.recuScolarite = resp;

      }, err => {
        console.log(err);
      })
  }

  onSaveEtudiant(data:any){
    this.etudiantService.ajoutEtudiant(this.etudiantService.host+"/etudiants",data)
    .subscribe(resp=>{
     // this.router.navigateByUrl("/etudiants");
     this.currentEtudiant = resp;

      this.getEtudiantClas(this.etudiantService.host+"/etudiants/"+this.currentEtudiant.id+"/classe");
      this.getEtudiantScolarite(this.etudiantService.host+"/etudiants/"+this.currentEtudiant.id+"/scolarite");
     this.mode = 2;
    },err=>{
        console.log(err);
    })
  }



  //Recuperation de l'etudiant avec sa classe
  getEtudiantClas(url) {
    this.catService.getRessource(url)
      .subscribe(data => {
        this.recupEtudiantClasse = data;
        //console.log(this.recupEtudiantClasse);
        this.currentEtudiant.classe = this.recupEtudiantClasse;
        console.log("AZA" + this.currentEtudiant.classe);
      }, err => {
        console.log(err);
      })
  }



  getEtudiantScolarite(url) {
    this.catService.getRessource(url)
      .subscribe(data => {
        this.recupEtudiantScolarite = data;
        //console.log(this.recupEtudiantClasse);
        this.currentEtudiant.scolarite = this.recupEtudiantScolarite;
        console.log("AZA" + this.currentEtudiant.scolarite);
      }, err => {
        console.log(err);
      })
  }

 /*onScolariteClasse(){
   this.catService.getAllScolarite()
     .subscribe(resp => {
       // this.router.navigateByUrl("/etudiants");
       this.recuScolarite = resp;

     }, err => {
       console.log(err);
     })
 }*/
    
  

  onNewEtudiant(){
    this.mode=1;
  }

}
