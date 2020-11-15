import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  jwt:string;
  login:string;
  roles:Array<string>;
  hostlogin: string = "http://localhost:8080";
 


  constructor(private http: HttpClient) { }

  public loginUser(data){
    return this.http.post(this.hostlogin+"/login",data,{observe:'response'});
  }

  saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

  parseJWT(){
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.login = objJWT.obj;
    this.roles = objJWT.role;
    console.log(this.login);
    //console.log(this.roles);
  }

  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }
  isUser() {
    return this.roles.indexOf('USER')>= 0;
  }

  isAuthenticated(){
    return this.roles && (this.isAdmin() || this.isUser());
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }

  logout() {
    localStorage.removeItem('token');
    this.initParams();
    
  }


  initParams(){
    this.jwt = undefined;
    this.login = undefined;
    this.roles = undefined;
    
  }
}
