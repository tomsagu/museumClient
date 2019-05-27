import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeProvider } from 'src/providers/TypeProvider';
import { Type } from '../../../models/type';

import { ConfirmDeleteDialogComponent } from 'src/app/confirmDeleteDialog/confirmDeleteDialog/confirmDeleteDialog.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-typeCRUD',
  templateUrl: './typeCRUD.component.html',
  styleUrls: ['./typeCRUD.component.css']
})
export class TypeCRUDComponent implements OnInit {

  types: Type[];
  inputSearchValue: String;

  constructor(
    private router: Router,
    private typeProvider: TypeProvider,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  //OnInit show all the types
  ngOnInit() {
    this.typeProvider.all().subscribe(types => {
      this.types = types;
    });
    this.displayList(this.types);
  }

  //show the types which contain in their names or texts the word searched
  doSearch() {
    this.typeProvider.getByWord(this.inputSearchValue).subscribe(types => {
      this.types = types;
      this.displayList(types);
    });
  }

  //go to create type view
  goToCreateType() {
    var id = "null";
    var inMode = "create";
    this.router.navigate(['indexCRUD/maintenanceType/' + id + '/' + inMode]);
  }

  //go to edit type view
  goToEditType(type) {
    var link = type._links.self.href.split("/");
    var id = link[link.length - 1];
    var inMode = "edit";
    this.router.navigate(['indexCRUD/maintenanceType/' + id + '/' + inMode]);
  }

  //delete a certain type
  doDelete(type) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { name: "tipo" };
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if (result != null && result) {
          var link = type._links.self.href.split("/");
          var id = link[link.length - 1];
          this.typeProvider.delete(id).subscribe();
          location.reload();
        }
      });
  }
  //if there isn't any item in the list, show a message
  displayList(types) {
    var typeListDiv = document.getElementsByClassName("typeList") as HTMLCollectionOf<HTMLElement>;
    var noTypesDiv = document.getElementsByClassName("noTypes") as HTMLCollectionOf<HTMLElement>;
    noTypesDiv[0].style.display = "none";
    if (types != null && types.length == 0) {
      typeListDiv[0].style.display = "none";
      noTypesDiv[0].style.display = "block";
    } else {
      typeListDiv[0].style.display = "block";
    }
  }

}