import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
    //script to active nav-item
    $(document).ready(function () {
      //Click event handler for nav-items
      $('.nav-item').on('click', function () {

        //Remove any previous active classes
        $('.nav-item').removeClass('active');

        //Add active class to the clicked item
        $(this).addClass('active');
      });
    });
    //End script

    var signout = document.getElementById("signout");
    if (sessionStorage.getItem("userId") != null) {
      signout.style.display = "block";
    } else {
      signout.style.display = "none";
    }
  }

  doLogIn() {
    if (sessionStorage.getItem("userId") != null) {
      this.router.navigate(['indexCRUD']);
    } else {
      this.router.navigate(['login']);
    }
    this.ngOnInit();
  }

  doSignOut() {
    sessionStorage.removeItem("userId");
    this.ngOnInit();
  }
  goInicio() {
    this.router.navigate(['home']);
  }
}
