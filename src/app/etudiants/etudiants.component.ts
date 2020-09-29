import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../services/etudiants.service';

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

  constructor(private serviceEtudiants:EtudiantsService) { }

  ngOnInit(): void {
  }
  
  onGetEtudiants (){
    this.serviceEtudiants.getEtudiants(this.currentPage, this.size)
    .subscribe(
      data => {
        this.etudiants = data;
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
        this.totalPages = data["page"].totalPages;
        this.pages = new Array(this.totalPages);
      },
      err =>{
        console.log(err);
      }
    );
  }


}
