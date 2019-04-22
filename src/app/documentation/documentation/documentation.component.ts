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
  
  constructor (
    private router : Router,
    private documentProvider : DocumentProvider
    ) {}

  ngOnInit() {
    this.documentProvider.all().subscribe(documents => {
      this.documents = documents;   
      });
      
  }
  goToArticle(document) {
    var link = document._links.self.href.split("/");
    var id = link[link.length-1];
    this.router.navigate(['/documentation/article/' + id]);
}

}
