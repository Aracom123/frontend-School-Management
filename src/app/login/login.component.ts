import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor( private authService: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(data/*dataForm: any*/){
    //console.log(dataForm);
    /*this.authService.login(dataForm.username, dataForm.password);
    if(this.authService.isAuthenticated){
      this.router.navigateByUrl('');
    }
    else{
      this.router.navigateByUrl('login');
    }*/
    this.authService.loginUser(data)
    .subscribe(resp=>{
      //console.log(resp.headers.get('Authorization'));
      let jwt = resp.headers.get('Authorization');
      this.authService.saveToken(jwt);
      this.router.navigateByUrl("/");
    },err=>{

    })
  }


  isAdmin(){
    return this.authService.isAdmin();
  }


  isUser() {
    return this.authService.isUser();
  }

}
