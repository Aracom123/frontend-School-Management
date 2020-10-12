import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(dataForm: any){
    //console.log(dataForm);
    this.authService.login(dataForm.username, dataForm.password);
    if(this.authService.isAuthenticated){
      this.router.navigateByUrl('');
    }
    else{
      this.router.navigateByUrl('login');
    }
  }

}
