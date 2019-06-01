import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { Document } from '../../../models/document';

import { ConfirmDeleteDialogComponent } from 'src/app/confirmDeleteDialog/confirmDeleteDialog/confirmDeleteDialog.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';

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
    private documentProvider: DocumentProvider,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  //OnInit show all the documents
  ngOnInit() {

    this.documentProvider.all().subscribe(documents => {
      this.documents = documents;

    });
    this.displayList(this.documents);


  }
  //show the documents which contain in their names or texts the word searched
  doSearch() {
    this.documentProvider.getByWord(this.inputSearchValue).subscribe(documents => {
      this.documents = documents;
      this.displayList(documents);
    });
  }

  //go to create document view
  goToCreateDocument() {
    var id = "null";
    var inMode = "create";
    this.router.navigate(['documentationCRUD/maintenanceDocumentation/' + id + '/' + inMode]);

  }

  //go to edit document view
  goToEditDocument(document) {
    var link = document._links.self.href.split("/");
    var id = link[link.length - 1];
    var inMode = "edit";
    this.router.navigate(['documentationCRUD/maintenanceDocumentation/' + id + '/' + inMode]);

  }

  //delete a certain document
  doDelete(document) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { name: "este documento" };
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if (result != null && result) {
          var link = document._links.self.href.split("/");
          var id = link[link.length - 1];
          this.documentProvider.delete(id).subscribe();
          location.reload();
        }
      });
  }

  //if there isn't any item in the list, show a message
  displayList(documents) {
    var documentListDiv = document.getElementsByClassName("documentList") as HTMLCollectionOf<HTMLElement>;
    var noDocumentsDiv = document.getElementsByClassName("noDocuments") as HTMLCollectionOf<HTMLElement>;
    noDocumentsDiv[0].style.display = "none";
    if (documents != null && documents.length == 0) {
      documentListDiv[0].style.display = "none";
      noDocumentsDiv[0].style.display = "block";
    } else {
      documentListDiv[0].style.display = "block";
    }
  }
}
