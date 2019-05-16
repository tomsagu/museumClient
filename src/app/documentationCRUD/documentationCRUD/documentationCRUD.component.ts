import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { Document } from '../../../models/document';

@Component({
  selector: 'app-documentationCRUD',
  templateUrl: './documentationCRUD.component.html',
  styleUrls: ['./documentationCRUD.component.css']
})
export class DocumentationCRUDComponent implements OnInit {

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

  //go to create document view
  goToCreateDocument() {
    //TODO

  }

  //go to edit document view
  goToEditDocument(document) {
    //TODO

  }

  //delete a certain document
  doDelete(document) {
    //TODO

  }
  
}
