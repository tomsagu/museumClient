import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-documentationCRUD',
  templateUrl: './documentationCRUD.component.html',
  styleUrls: ['./documentationCRUD.component.css']
})
export class DocumentationCRUDComponent implements OnInit {


  constructor(
    private router: Router,
  ) { }

  //OnInit show all the documents
  ngOnInit() {
  
  }
  
}
