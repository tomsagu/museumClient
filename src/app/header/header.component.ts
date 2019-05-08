import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    var signout = document.getElementById("signout");
    if (sessionStorage.getItem("userId") != null) {
      signout.style.display = "block";
    } else {
      signout.style.display = "none";
    }
  }

  doLogIn() {
    if (sessionStorage.getItem("userId") != null) {
      this.router.navigate(['documentationCRUD']);
    } else {
      this.router.navigate(['login']);
    }
    this.ngOnInit();
  }

  doSignOut() {
    sessionStorage.removeItem("userId");
    this.ngOnInit();
  }

}
