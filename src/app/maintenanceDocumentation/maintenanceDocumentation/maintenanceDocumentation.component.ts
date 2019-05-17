import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { Document } from '../../../models/document';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-maintenanceDocumentation',
  templateUrl: './maintenanceDocumentation.component.html',
  styleUrls: ['./maintenanceDocumentation.component.css']
})
export class MaintenanceDocumentationComponent implements OnInit {

  document: Document;
  articles : Article[];
  documentImage : String = "";
  articleImages : String [];
  
  mainTitle : String;
  inputNameValue: String;
  inputDescriptionValue: String;
  inputImageValue: String;
  documentID : String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentProvider: DocumentProvider   

  ) {}

  //OnInit show all the documents
  ngOnInit() {
    this.documentID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    let inMode = this.route.snapshot.paramMap.get('inMode').toString(); //get the id from url param
    var documentImageDiv = document.getElementById("documentImageDiv");
    var createButton = document.getElementById("createButton");
    var editButton = document.getElementById("editButton");
    var noArticlesDiv = document.getElementsByClassName("noArticles") as HTMLCollectionOf<HTMLElement>;
    var articlesListDiv = document.getElementsByClassName("articlesList") as HTMLCollectionOf<HTMLElement>;

    
    if(inMode == 'create'){
      this.mainTitle = "Crear Documento";
      createButton.style.display = "block";
      noArticlesDiv[0].style.display = "block";
      articlesListDiv[0].style.display = "none";
    }else{
      this.mainTitle = "Editar Documento";
      editButton.style.display = "block";
      if(this.documentID != null && this.documentID.localeCompare("")){
        this.documentProvider.get(this.documentID).subscribe(document => {
          this.document = document;
          this.articles = document.articles;
          this.inputNameValue = document.name;
          this.inputDescriptionValue = document.text;
          this.documentImage = document.imagedoc;  
          if(this.documentImage != null && this.documentImage != ""){
            documentImageDiv.style.display = "block";
          }else{
            documentImageDiv.style.display = "none";
          }

          if (this.articles.length == 0) {
            articlesListDiv[0].style.display = "none";
            noArticlesDiv[0].style.display = "block";
          }else{
            articlesListDiv[0].style.display = "block";
            noArticlesDiv[0].style.display = "none";
          }
        });
      }
    }
    
  }

  addImage(){
    var documentImageDiv = document.getElementById("documentImageDiv");
    
    if(this.documentImage == null || this.documentImage == "" && this.inputImageValue != null && this.inputImageValue != ""){ //if document hasnt image and user adds one
      this.documentImage = this.inputImageValue;
    }else if(this.documentImage != null && this.documentImage != ""){//if document has image
      console.log("Elimina la foto actual antes de introducir una nueva.");
    }else{
      console.log("Introduzca una imagen correcta.");
    }
    if(this.documentImage != null && this.documentImage != ""){
      documentImageDiv.style.display = "block";
    }else{
      documentImageDiv.style.display = "none";
    }

    this.inputImageValue = "";
  }

  doDeleteImage(){
    this.documentImage = "";
    var documentImageDiv = document.getElementById("documentImageDiv");
    if(this.documentImage != null && this.documentImage != ""){
      documentImageDiv.style.display = "block";
    }else{
      documentImageDiv.style.display = "none";
    }
  }

  doCreate(){
    if(this.inputNameValue != null && this.inputNameValue != ""){
      var document = new Document(this.inputNameValue,this.inputNameValue,this.inputDescriptionValue,this.documentImage,this.articles);
      this.documentProvider.post(document).subscribe(documentPost=>{
        document = documentPost;
      },err => console.log("Se ha producido un error al crear el documento."));
      this.router.navigate(['/indexCRUD']);
    }else{
      console.log("Introduce un nombre");
    }
    
  }

  doEdit(){
    if(this.inputNameValue != null && this.inputNameValue != ""){
      var document = new Document(this.documentID,this.inputNameValue,this.inputDescriptionValue,this.documentImage,this.articles);
      this.documentProvider.put(this.documentID, document).subscribe(documentPut => {

      },err => console.log("Se ha producido un error al actualizar el documento."));
      this.router.navigate(['/indexCRUD']);
    }else{
      console.log("Introduce un nombre");
    }
  }

 
  
  
}
