import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  public host: String = "http://localhost:8080";

  constructor(private httpClient:HttpClient, private authService: AuthenticationService){

  }

  public getEtudiants(page:number, size:number){
    let headers = new HttpHeaders({'authorization':'Bearer '+this.authService.jwt});
    return this.httpClient.get(this.host + "/etudiants?page="+page+"&size="+size,{headers:headers});
  }

  public getEtudiantsParPrenom(keyword:string, page:number, size:number){
    let headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.authService.jwt });
    return this.httpClient.get(this.host + "/etudiants/search/parPrenom?prenom="+keyword+"&page=" + page + "&size=" + size, { headers: headers });
    console.log(this.httpClient.get(this.host + "/etudiants/search/parPrenom?prenom=" +keyword+ "&page=" + page + "&size=" + size, { headers: headers }));
  }


  //Supprimer un etudiant
  public deleteRessource(url){
    let headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.authService.jwt });
    return this.httpClient.delete(url,{ headers: headers });
  }


  //Ajout d'un etudiant
  public ajoutEtudiant(url,data): Observable<Etudiant>{
    let headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.authService.jwt });
    return this.httpClient.post<Etudiant>(url,data,{ headers: headers });
  }

  //Consulter une ressource
  public getRessource(url): Observable<Etudiant>{
    let headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.authService.jwt });
    return this.httpClient.get<Etudiant>(url, { headers: headers });
  }


  //Mise à jour
  public updateRessource(url, data): Observable<Etudiant> {
    let headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.authService.jwt });
    return this.httpClient.put<Etudiant>(url,data, { headers: headers });
  }


  

}
