import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { Document } from '../../../models/document';
import { Article } from '../../../models/article';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MaintenanceArticleDialogComponent } from 'src/app/maintenanceArticleDialog/maintenanceArticleDialog/maintenanceArticleDialog.component';
import { ConfirmDeleteDialogComponent } from 'src/app/confirmDeleteDialog/confirmDeleteDialog/confirmDeleteDialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-maintenanceDocumentation',
  templateUrl: './maintenanceDocumentation.component.html',
  styleUrls: ['./maintenanceDocumentation.component.css']
})
export class MaintenanceDocumentationComponent implements OnInit {

  document: Document;
  articles: Article[] = [];
  documentImage: String = "";
  articleImages: String[];

  mainTitle: String = "";
  inputNameValue: String = "";
  inputDescriptionValue: String = "";
  inputImageValue: String = "";
  documentID: String = "";



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentProvider: DocumentProvider,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  //OnInit show all the documents
  ngOnInit() {
    this.documentID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    let inMode = this.route.snapshot.paramMap.get('inMode').toString(); //get the id from url param
    var createButton = document.getElementById("createButton");
    var editButton = document.getElementById("editButton");


    if (inMode == 'create') {
      this.mainTitle = "Crear Documento";
      createButton.style.display = "block";

    } else {
      this.mainTitle = "Editar Documento";
      editButton.style.display = "block";
      if (this.documentID != null && this.documentID.localeCompare("") != 0) {
        this.documentProvider.get(this.documentID).subscribe(document => {
          this.document = document;
          if (document.articles != null) {
            this.articles = document.articles;
          }

          this.inputNameValue = document.name;
          this.inputDescriptionValue = document.text;
          this.documentImage = document.imagedoc;

          this.displayImage();
          this.displayList(this.articles);

        });
      }
    }

  }

  addImage() {
    if (this.documentImage == null || this.documentImage.localeCompare("") == 0
      && this.inputImageValue != null && this.inputImageValue.localeCompare("") != 0) { //if document hasnt image and user adds one
      this.documentImage = this.inputImageValue;
    } else if (this.documentImage != null && this.documentImage.localeCompare("") != 0) {//if document has image
      this.showToaster("Elimine la foto actual antes de introducir una nueva.", "warning");
    } else {
      this.showToaster("Introduzca una imagen correcta.", "error");
    }

    this.displayImage();
    this.inputImageValue = "";
  }

  doDeleteImage() {
    this.documentImage = "";
    this.displayImage();

  }

  doCreate() {
    if (this.inputNameValue != null && this.inputNameValue.localeCompare("") != 0) {
      var document = new Document(this.inputNameValue, this.inputNameValue, this.inputDescriptionValue, this.documentImage, this.articles);
      this.documentProvider.post(document).subscribe(documentPost => {
        document = documentPost;
      }, err => this.showToaster("Se ha producido un error al crear el documento.", "error"));
      this.router.navigate(['/documentationCRUD']);
      this.showToaster("Documento creado con éxito.", "success");
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }

  }

  doEdit() {
    if (this.inputNameValue != null && this.inputNameValue.localeCompare("") != 0) {
      var document = new Document(this.documentID, this.inputNameValue, this.inputDescriptionValue, this.documentImage, this.articles);
      this.documentProvider.put(this.documentID, document).subscribe(documentPut => {

      }, err => this.showToaster("Se ha producido un error al actualizar el documento.", "error"));
      this.ngOnInit();
      this.router.navigate(['/documentationCRUD']);
      this.showToaster("Documento modificado con éxito.", "success");
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }
  }

  doReturn() {
    this.router.navigate(['/documentationCRUD']);
  }

  /*These are the actions for maintenanceArticleDialog*/

  //open a dialog to create a new article
  createArticle() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(MaintenanceArticleDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      article => {
        if (article != null) {
          this.articles.push(article);
          this.showToaster("Artículo creado con éxito.", "success");
        }
        this.displayList(this.articles);

      });
  }

  //open a dialog to edit an existing article
  editArticle(article) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { name: article.name, text: article.text, images: article.images };
    const dialogRef = this.dialog.open(MaintenanceArticleDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      articleEdited => {
        if (articleEdited != null) {
          var n = this.articles.indexOf(article);
          this.articles.splice(n, 1);

          article.name = articleEdited.name;
          article.text = articleEdited.text;
          article.images = articleEdited.images;

          this.articles.push(article);
          this.showToaster("Artículo modificado con éxito.", "success");
        }
        this.displayList(this.articles);

      });
  }

  //delete an article from the document articles list
  doDelete(article) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { name: "artículo" };
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if (result != null && result) {
          var n = this.articles.indexOf(article);
          this.articles.splice(n, 1);

          this.showToaster("Artículo borrado con éxito.", "success");
        }
        this.displayList(this.articles);
      });
  }

  //if there isn't any item in the list, show a message
  displayList(articles) {
    var noArticlesDiv = document.getElementsByClassName("noArticles") as HTMLCollectionOf<HTMLElement>;
    var articlesListDiv = document.getElementsByClassName("articlesList") as HTMLCollectionOf<HTMLElement>;
    if (articles != null && articles.length == 0) {
      articlesListDiv[0].style.display = "none";
      noArticlesDiv[0].style.display = "block";
    } else {
      articlesListDiv[0].style.display = "block";
      noArticlesDiv[0].style.display = "none";
    }
  }

  //hide delete button if there isn't any image
  displayImage() {
    var documentImageDiv = document.getElementById("documentImageDiv");
    if (this.documentImage != null && this.documentImage.localeCompare("") != 0) {
      documentImageDiv.style.display = "block";
    } else {
      documentImageDiv.style.display = "none";
    }
  }

  //show a toaster with information of a current action
  showToaster(message: string, type: string) {
    switch (type) {
      case "success": {
        this.toastr.success(message);
        break;
      }
      case "warning": {
        this.toastr.warning(message);
        break;
      }
      default: {
        this.toastr.error(message);
        break;
      }
    }
  }
}



