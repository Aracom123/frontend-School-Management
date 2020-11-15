import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EtudiantsService } from '../services/etudiants.service';
import { Etudiant } from '../model/etudiant.model';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  public currentEtudiant: Etudiant;
  private url:string;

  constructor(private router:Router, private activatedRoute: ActivatedRoute,private etudiantService:EtudiantsService) { }

  ngOnInit() {
    this.url = atob(this.activatedRoute.snapshot.params.id);
    this.etudiantService.getRessource(this.url)
    .subscribe(data=>{
      this.currentEtudiant = data;
    },err=>{

    })
  }

  onUpdateEtudiant(data){
    this.etudiantService.updateRessource(this.url,data)
    .subscribe(data=>{
      alert("Mise à jour effectuée avec Succès");
      this.router.navigateByUrl("/etudiants");
    },err=>{

    })
  }

}
