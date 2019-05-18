import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import { Article } from '../../../models/article';

@Component({
  selector: 'app-maintenanceArticleDialog',
  templateUrl: './maintenanceArticleDialog.component.html',
  styleUrls: ['./maintenanceArticleDialog.component.css']
})
export class MaintenanceArticleDialogComponent implements OnInit{

  inputNameValue: String ="";
  inputDescriptionValue: String ="";
  inputImageValue: String="";
  articleImages : String[] = [];


  constructor(
    private dialogRef: MatDialogRef<MaintenanceArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      if(data != null){
        this.inputNameValue = data.name;
        this.inputDescriptionValue = data.text;
        this.articleImages = data.images;
      }    
    }

  ngOnInit() {
    var articleImageDiv = document.getElementById("articleImageDiv");
    if(this.articleImages.length != 0){
      articleImageDiv.style.display = "block";
    }else{
      articleImageDiv.style.display = "none";
    }
  }

  save(){
    if(this.inputNameValue != null && this.inputNameValue != ""){
      var article = new Article(this.inputNameValue,this.inputDescriptionValue,this.articleImages);
      this.dialogRef.close(article);
    }else{
      console.log("Introduce un nombre");
    }
    
    
  }

  close(){
    this.dialogRef.close();
  }

  addImage(){
    var articleImageDiv = document.getElementById("articleImageDiv");
    
    if(this.inputImageValue != null && this.inputImageValue != ""){
      
      this.articleImages[this.articleImages.length] = this.inputImageValue;
      
    }else{
      console.log("Introduzca una imagen correcta.");
    }

    if(this.articleImages.length != 0){
      articleImageDiv.style.display = "block";
    }else{
      articleImageDiv.style.display = "none";
    }

    this.inputImageValue = "";
  }

  doDeleteImage(image){
    var n = this.articleImages.indexOf(image);
    this.articleImages.splice(n,1);
  }
}





