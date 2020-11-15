import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../services/etudiants.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  etudiants:any;
  

  public currentPage:number = 0;
  public size:number=4;
  public totalPages:number;
  public pages:Array<number>;
  public currentKeyword:string;


  constructor(private serviceEtudiants:EtudiantsService, private router:Router, private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.loadToken();
  }
  
  onGetEtudiants (){
    this.serviceEtudiants.getEtudiants(this.currentPage, this.size)
    .subscribe(
      data => {
        this.etudiants = data;
        console.log(this.etudiants);
        this.totalPages = data["page"].totalPages;
        this.pages = new Array(this.totalPages);
      },
      err =>{
        console.log(err);
      }
    );
  }

  onGetPages(i:number){
    this.currentPage=i;
    this.chercher();
  }

  onChercher(form:any){        
    this.currentKeyword=form.keyword;
    this.currentPage=0;
    this.chercher();
  }

  chercher(){    
    this.serviceEtudiants.getEtudiantsParPrenom(this.currentKeyword, this.currentPage, this.size)
    .subscribe(
      data => {
        this.etudiants = data;
        console.log(this.etudiants);
        this.totalPages = data["page"].totalPages;
        this.pages = new Array(this.totalPages);
      },
      err =>{
        console.log(err);
      }
    );
  }


  onDeleteEtudiant(e){
    let conf = confirm("Etes vous sûr");
    if (conf){
      return this.serviceEtudiants.deleteRessource(e._links.self.href)
      .subscribe(data=>{
          this.chercher();
      },err=>{
          console.log(err);
      })
    }
  }


  //On transmet les données
  onEditEtudiant(e){
    let url= e._links.self.href;
    this.router.navigateByUrl("/edit-etudiant/"+btoa(url));
  }


}
