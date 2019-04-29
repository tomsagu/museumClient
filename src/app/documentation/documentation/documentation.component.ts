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

  documents: Document[];
  inputSearchValue: String;

  constructor(
    private router: Router,
    private documentProvider: DocumentProvider
  ) { }

  //OnInit show all the documents
  ngOnInit() {
    var documentListDiv = document.getElementsByClassName("documentList") as HTMLCollectionOf<HTMLElement>;
    var noDocumentsDiv = document.getElementsByClassName("noDocuments") as HTMLCollectionOf<HTMLElement>;
    this.documentProvider.all().subscribe(documents => {
      this.documents = documents;
      noDocumentsDiv[0].style.display = "none";
      if (documents.length == 0) {
        documentListDiv[0].style.display = "none";
        noDocumentsDiv[0].style.display = "block";
      }
    });

    noDocumentsDiv[0].style.display = "none";

    if (this.documents.length == 0) {
      documentListDiv[0].style.display = "none";
      noDocumentsDiv[0].style.display = "block";
    }

  }
  //go to Article Component and show the articles of the document clicked
  goToArticle(document) {
    if (document.articles.length != 0) {
      var link = document._links.self.href.split("/");
      var id = link[link.length - 1];

      this.router.navigate(['documentation/article/' + id]);
    }else{
      console.log("No articles to display");
    }

  }
  //show the documents which contain in their names or texts the word searched
  doSearch() {
    var documentListDiv = document.getElementsByClassName("documentList") as HTMLCollectionOf<HTMLElement>;
    var noDocumentsDiv = document.getElementsByClassName("noDocuments") as HTMLCollectionOf<HTMLElement>;
    this.documentProvider.getByWord(this.inputSearchValue).subscribe(documents => {
      this.documents = documents;
      noDocumentsDiv[0].style.display = "none";
      if (documents.length == 0) {
        noDocumentsDiv[0].style.display = "block";
      } else {
        documentListDiv[0].style.display = "block";
      }
    });


  }

}
