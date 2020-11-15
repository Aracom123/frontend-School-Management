import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../services/etudiants.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiant;
  constructor(private serviceEtudiants: EtudiantsService, private router: Router, private activatedRoute: ActivatedRoute) { 
    router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
      let url = atob(activatedRoute.snapshot.params.urlEtu);
      console.log(url);
      this.getEtudiant(url);
      }
    })
   
  }

  ngOnInit(): void {
  }

  getEtudiant(url){
    this.serviceEtudiants.getRessource(url)
    .subscribe(data=>{
      this.etudiant=data;
    },err=>{
      console.log(err);
    })
  }

}
