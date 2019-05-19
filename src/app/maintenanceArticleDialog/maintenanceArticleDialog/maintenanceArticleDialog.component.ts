import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { Article } from '../../../models/article';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-maintenanceArticleDialog',
  templateUrl: './maintenanceArticleDialog.component.html',
  styleUrls: ['./maintenanceArticleDialog.component.css']
})
export class MaintenanceArticleDialogComponent implements OnInit {

  inputNameValue: String = "";
  inputDescriptionValue: String = "";
  inputImageValue: String = "";
  articleImages: String[] = [];


  constructor(
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<MaintenanceArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data != null) {
      this.inputNameValue = data.name;
      this.inputDescriptionValue = data.text;
      this.articleImages = data.images;
    }
  }

  ngOnInit() {
    this.displayImage();
  }

  //close the dialog and update the document articles list with the new one
  save() {
    if (this.inputNameValue != null && this.inputNameValue != "") {
      var article = new Article(this.inputNameValue, this.inputDescriptionValue, this.articleImages);
      this.dialogRef.close(article);
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }
  }

  //close the dialog without save
  close() {
    this.dialogRef.close();
  }

  //add an image to article images list
  addImage() {
    if (this.inputImageValue != null && this.inputImageValue != "") {
      this.articleImages[this.articleImages.length] = this.inputImageValue;

    } else {
      this.showToaster("Introduce una imagen correcta.", "error");
    }

    this.displayImage();
    this.inputImageValue = "";
  }

  //delete an image of an article
  doDeleteImage(image) {
    var n = this.articleImages.indexOf(image);
    this.articleImages.splice(n, 1);
  }

  //hide delete button if there isn't any image
  displayImage() {
    var articleImageDiv = document.getElementById("articleImageDiv");
    if (this.articleImages != null && this.articleImages.length != 0) {
      articleImageDiv.style.display = "block";
    } else {
      articleImageDiv.style.display = "none";
    }
  }

  //show a toaster with information of a current action
  showToaster(message:string,type:string){
    switch(type) { 
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





