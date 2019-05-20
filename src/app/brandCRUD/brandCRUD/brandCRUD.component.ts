import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandProvider } from 'src/providers/BrandProvider';
import { Brand } from '../../../models/brand';

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
    private brandProvider: BrandProvider
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
    var brandListDiv = document.getElementsByClassName("brandList") as HTMLCollectionOf<HTMLElement>;
    var noBrandsDiv = document.getElementsByClassName("noBrands") as HTMLCollectionOf<HTMLElement>;
    this.brandProvider.getByWord(this.inputSearchValue).subscribe(brands => {
      this.brands = brands;
      noBrandsDiv[0].style.display = "none";
      if (brands.length == 0) {
        noBrandsDiv[0].style.display = "block";
      } else {
        brandListDiv[0].style.display = "block";
      }
    });
  }

  //go to create brand view
  goToCreateBrand() {
    //TODO

  }

  //go to edit brand view
  goToEditBrand(brand) {
    //TODO

  }

  //delete a certain brand
  doDelete(brand) {
    //TODO

  }
  
}