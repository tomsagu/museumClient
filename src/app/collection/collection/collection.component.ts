import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PieceProvider } from 'src/providers/PieceProvider';
import { BrandProvider } from 'src/providers/BrandProvider';
import { TypeProvider } from 'src/providers/TypeProvider';
import { RoomProvider } from 'src/providers/RoomProvider';
import { Piece } from 'src/models/Piece';
import { Type } from 'src/models/Type';
import { Brand } from 'src/models/Brand';
import { Room } from 'src/models/Room';
import { Options } from 'ng5-slider';
import { FormGroup, FormControl } from '@angular/forms';




@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {

  pieces: Piece[] = [];
  types: Type[] = [];
  brands: Brand[] = [];
  rooms: Room[] = [];
  /**Values of the form (checkbox)*/
  optionsCheckbox = [];
  /**Slider */
  minYear: number = 1950;
  maxYear: number = 1990;
  options: Options = {
    floor: 1900,
    ceil: 2019,
    step: 5
  };
  //select
  selectedBrand: String = "";
  constructor(
    private router: Router,
    private pieceProvider: PieceProvider,
    private brandProvider: BrandProvider,
    private typeProvider: TypeProvider,
    private roomProvider: RoomProvider,
  ) {


  }

  ngOnInit() {
    this.pieceProvider.all().subscribe(pieces => {
      this.pieces = pieces;
      // console.log(pieces);
    });
    this.brandProvider.all().subscribe(brands => {
      this.brands = brands;
      // console.log(brands);
    });
    this.typeProvider.all().subscribe(types => {
      this.types = types;
      this.initoptions();
      // console.log(this.types);
    });
    this.roomProvider.all().subscribe(rooms => {
      this.rooms = rooms;
      // console.log(rooms);
    });


  }

  //go to Piece Component and show the info of the piece clicked
  goToPiece(piece) {
    var link = piece._links.self.href.split("/");
    var id = link[link.length - 1];

    this.router.navigate(['collection/piece/' + id]);
  }

  initoptions() {
    for (let i in this.types) {
      this.optionsCheckbox[i] = { name: this.types[i].name, value: i, checked: false };
    }
  }

  get selectedOptions() { // right now: ['1','3']  
    return this.optionsCheckbox
      .filter(opt => opt.checked)
      .map(opt => opt.name)
  }

  doSearch() {
    this.pieceProvider.getByYearAndTypesAndBrandName(this.minYear.toString(), this.maxYear.toString(), this.selectedOptions, this.selectedBrand).subscribe(pieces => {
      this.pieces = pieces;
    });
  }

  intersection(array1: any[], array2: any[]): any[] {
    let result: any[] = [];
    let dict: {} = {};
    for (let el of array1) {
      if (!(el in dict)) {
        dict[el] = 1;
      }
    }

    for (let el2 of array2) {
      if (el2 in dict && dict[el2] !== 2) {
        dict[el2] = 2;
        result.push(el2);
      }
    }


    return result;
  };

  submit() {
    console.log(this.brands);
  }

}
