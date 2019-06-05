import { Component, OnInit } from '@angular/core';
import { JWTProvider } from 'src/providers/JWTProvider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'museouma';

  constructor( private jwtProvider: JWTProvider){}

  ngOnInit(){
   
    this.jwtProvider.login().subscribe(response => { 
      sessionStorage.setItem("token",response.headers.get('Authorization'));
    });
  }
}
