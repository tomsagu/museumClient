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

    //script to active nav-item when click on name
    $(document).ready(function () {
      //Click event handler for navbar-brand
      $('.navbar-brand').on('click', function () {

        //Remove any previous active classes
        $('.nav-item').removeClass('active');

        //Add active class to the home item
        $('.home').addClass('active');
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

  //Login administration page
  doLogIn() {
    if (sessionStorage.getItem("userId") != null) {
      this.router.navigate(['/documentationCRUD']);
    } else {
      this.router.navigate(['login']);
    }
    this.ngOnInit();
  }

  //Logout administration page
  doSignOut() {
    sessionStorage.removeItem("userId");
    this.ngOnInit();
  }

  //Go home
  goInicio() {
    this.router.navigate(['home']);
  }
}
