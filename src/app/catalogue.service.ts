import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host: String = "http://localhost:8080";

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getAllClasses(){
    let headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.authService.jwt });
    return this.http.get(this.host + "/classes", { headers: headers });
  }

  //Ajout 
  public postRessource(url, data) {
    let headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.authService.jwt });
    return this.http.post(url, data, { headers: headers });
  }


  //Update 
  public putRessource(url, data) {
    let headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.authService.jwt });
    return this.http.put(url, data, { headers: headers });
  }


  public getRessource(url) {
    let headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.authService.jwt });
    return this.http.get(url, { headers: headers });
  }


  getAllScolarite() {
    let headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.authService.jwt });
    return this.http.get(this.host + "/scolarites", { headers: headers });
  }

}
