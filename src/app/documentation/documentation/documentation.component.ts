import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { Document } from '../../../models/document';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  documents: Document[] = [];
  inputSearchValue: String;

  constructor(
    private router: Router,
    private documentProvider: DocumentProvider
  ) { }

  //OnInit show all the documents
  ngOnInit() {
    this.documentProvider.all().subscribe(documents => {
      this.documents = documents;
    });

  }
  //go to Article Component and show the articles of the document clicked
  goToArticle(document) {
    var link = document._links.self.href.split("/");
    var id = link[link.length - 1];
    
    this.router.navigate(['documentation/article/' + id]);
  }
  //show the documents which contain in their names or texts the word searched
  doSearch(){

    //TODO - Implement getByName   
    console.log(this.inputSearchValue); //this is the word searched
    
    this.documentProvider.all().subscribe(documents => {
      this.documents = documents;
    });
  }

}
