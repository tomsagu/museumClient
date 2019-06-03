import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandProvider } from 'src/providers/BrandProvider';
import { Brand } from '../../../models/brand';

import { ConfirmDeleteDialogComponent } from 'src/app/confirmDeleteDialog/confirmDeleteDialog/confirmDeleteDialog.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-brandCRUD',
  templateUrl: './brandCRUD.component.html',
  styleUrls: ['./brandCRUD.component.css']
})
export class BrandCRUDComponent implements OnInit {

  brands: Brand[];
  inputSearchValue: String;

  constructor(
    private router: Router,
    private brandProvider: BrandProvider,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  //OnInit show all the brands
  ngOnInit() {
    var brandListDiv = document.getElementsByClassName("brandList") as HTMLCollectionOf<HTMLElement>;
    var noBrandsDiv = document.getElementsByClassName("noBrands") as HTMLCollectionOf<HTMLElement>;
    this.brandProvider.all().subscribe(brands => {
      this.brands = brands;
      noBrandsDiv[0].style.display = "none";
      if (brands.length == 0) {
        brandListDiv[0].style.display = "none";
        noBrandsDiv[0].style.display = "block";
      }
    });

    noBrandsDiv[0].style.display = "none";

    if (this.brands.length == 0) {
      brandListDiv[0].style.display = "none";
      noBrandsDiv[0].style.display = "block";
    }

  }
  //show the brands which contain in their names or texts the word searched
  doSearch() {

    this.brandProvider.getByWord(this.inputSearchValue).subscribe(brands => {
      this.brands = brands;
      this.displayList(brands);
    });
  }

  //go to create brand view
  goToCreateBrand() {
    var id = "null";
    var inMode = "create";
    this.router.navigate(['brandCRUD/maintenanceBrand/' + id + '/' + inMode]);

  }

  //go to edit brand view
  goToEditBrand(brand) {
    var link = brand._links.self.href.split("/");
    var id = link[link.length - 1];
    var inMode = "edit";
    this.router.navigate(['brandCRUD/maintenanceBrand/' + id + '/' + inMode]);

  }

  //delete a certain brand
  doDelete(brand) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { name: "esta marca" };
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if (result != null && result) {
          var link = brand._links.self.href.split("/");
          var id = link[link.length - 1];
          this.brandProvider.delete(id).subscribe();
          location.reload();
        }
      });

  }
  //if there isn't any item in the list, show a message
  displayList(brands) {
    var brandListDiv = document.getElementsByClassName("brandList") as HTMLCollectionOf<HTMLElement>;
    var noBrandsDiv = document.getElementsByClassName("noBrands") as HTMLCollectionOf<HTMLElement>;
    noBrandsDiv[0].style.display = "none";
    if (brands != null && brands.length == 0) {
      brandListDiv[0].style.display = "none";
      noBrandsDiv[0].style.display = "block";
    } else {
      brandListDiv[0].style.display = "block";
    }
  }

}