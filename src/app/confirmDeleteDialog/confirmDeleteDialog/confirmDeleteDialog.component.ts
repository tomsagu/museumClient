import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-confirmDeleteDialog',
  templateUrl: './confirmDeleteDialog.component.html',
  styleUrls: ['./confirmDeleteDialog.component.css']
})
export class ConfirmDeleteDialogComponent implements OnInit {

  infoName : string;

  constructor(
    private dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data != null){
        this.infoName = data.name;
      }
  }

  ngOnInit() {
   
  }

  //close the dialog and delete the item selected
  delete() {
    this.dialogRef.close(true);
  }

  //close the dialog without delete
  close() {
    this.dialogRef.close();
  }

}





