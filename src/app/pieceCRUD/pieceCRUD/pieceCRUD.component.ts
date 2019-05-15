import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pieceCRUD',
  templateUrl: './pieceCRUD.component.html',
  styleUrls: ['./pieceCRUD.component.css']
})
export class PieceCRUDComponent implements OnInit {

  constructor( 
     private router: Router,
     ) { }

  ngOnInit() {
  }

}
