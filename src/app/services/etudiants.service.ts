import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  public host: String = "http://localhost:8080";

  constructor(private httpClient:HttpClient){

  }

  public getEtudiants(page:number, size:number){
    return this.httpClient.get(this.host + "/etudiants?page="+page+"&size="+size);
  }

  public getEtudiantsParPrenom(keyword:string, page:number, size:number){
    return this.httpClient.get(this.host + "/etudiants/search/parPrenom?prenom="+keyword+"&page="+page+"&size="+size);
  }
}
