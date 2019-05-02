import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProvider } from 'src/providers/UserProvider';
import {Md5} from 'ts-md5/dist/md5';
//import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputUsername: string = "";
  inputPassword: string = "";
  hashPassword : string;
 

  constructor(
    private router: Router,
    private userProvider: UserProvider,
    //private headerComponent : HeaderComponent
  ) { }

  
  ngOnInit() {
   
  }

  signIn() {
 
      if (this.inputUsername.length != 0 && this.inputPassword.length != 0) {
        this.hashPassword = Md5.hashStr(this.inputPassword).toString();   
        this.userProvider.findByUsernameAndPassword(this.inputUsername, this.hashPassword).subscribe(user => {       
          // @ts-ignore
          var link = user._links.self.href.split("/");
          var id = link[link.length - 1];
          sessionStorage.setItem("userId",id);
          //this.headerComponent.ngOnInit();
          this.router.navigate(['documentationCRUD']);
          
        },err => console.log("Usuario o contraseña incorrecta"));
              
      } else {
        console.log("Complete ambos campos");
      }
  }
}
