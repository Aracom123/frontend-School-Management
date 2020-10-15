import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.authService.loadToken();
  }
  title = 'my-app';

  constructor(private authService: AuthenticationService){}

  isAdmin() {
    return this.authService.isAdmin();
  }


  isUser() {
    return this.authService.isUser();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
   }

   logOut(){
     this.authService.logout();
   }
}
