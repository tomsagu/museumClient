import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeProvider } from 'src/providers/TypeProvider';
import { Type } from '../../../models/type';

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
    private typeProvider: TypeProvider
  ) { }

  //OnInit show all the types
  ngOnInit() {
    var typeListDiv = document.getElementsByClassName("typeList") as HTMLCollectionOf<HTMLElement>;
    var noTypesDiv = document.getElementsByClassName("noTypes") as HTMLCollectionOf<HTMLElement>;
    this.typeProvider.all().subscribe(types => {
      this.types = types;
      noTypesDiv[0].style.display = "none";
      if (types.length == 0) {
        typeListDiv[0].style.display = "none";
        noTypesDiv[0].style.display = "block";
      }
    });

    noTypesDiv[0].style.display = "none";

    if (this.types.length == 0) {
      typeListDiv[0].style.display = "none";
      noTypesDiv[0].style.display = "block";
    }

  }
  //show the types which contain in their names or texts the word searched
  doSearch() {
    var typeListDiv = document.getElementsByClassName("typeList") as HTMLCollectionOf<HTMLElement>;
    var noTypesDiv = document.getElementsByClassName("noTypes") as HTMLCollectionOf<HTMLElement>;
    this.typeProvider.getByWord(this.inputSearchValue).subscribe(types => {
      this.types = types;
      noTypesDiv[0].style.display = "none";
      if (types.length == 0) {
        noTypesDiv[0].style.display = "block";
      } else {
        typeListDiv[0].style.display = "block";
      }
    });
  }

  //go to create type view
  goToCreateType() {
    //TODO

  }

  //go to edit type view
  goToEditType(type) {
    //TODO

  }

  //delete a certain type
  doDelete(type) {
    //TODO

  }
  
}