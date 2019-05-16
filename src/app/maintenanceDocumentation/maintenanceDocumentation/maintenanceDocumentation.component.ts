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
  
  mainTitle : String;
  inputNameValue: String;
  inputDescriptionValue: String;
  inputImageValue: String;

  constructor(
    private route: ActivatedRoute,
    private documentProvider: DocumentProvider
  ) { }

  //OnInit show all the documents
  ngOnInit() {
    let documentID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    let inMode = this.route.snapshot.paramMap.get('inMode').toString(); //get the id from url param
    
    if(inMode == 'create'){
      this.mainTitle = "Crear Documento";
    }else{
      this.mainTitle = "Editar Documento";
      if(documentID != null && documentID.localeCompare("")){
        this.documentProvider.get(documentID).subscribe(document => {
          this.document = document;
          this.articles = document.articles;
          this.inputNameValue = document.name;
          this.inputDescriptionValue = document.text;
        });
      }
    }
  }
  
  
}
