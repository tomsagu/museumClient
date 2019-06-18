import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  minYear: number = 1900;
  maxYear: number = 2019;
  options: Options = {
    floor: 1900,
    ceil: 2019,
    step: 5
  };
  //select
  selectedBrand: String = "";
  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private pieceProvider: PieceProvider,
    private brandProvider: BrandProvider,
    private typeProvider: TypeProvider,
    private roomProvider: RoomProvider,
  ) {


  }

  ngOnInit() {
    let brandID = this.route.snapshot.paramMap.get('id'); //get the id from url param
    
    if(brandID != null && brandID.localeCompare("")){
      this.brandProvider.get(brandID).subscribe(brand => {
        this.selectedBrand = brand.name;
        this.doSearchByBrandName();
      });
    }else{
      this.selectedBrand = 'Ninguna';
    }

    this.pieceProvider.all().subscribe(pieces => {
      this.pieces = pieces;

    });
    this.brandProvider.all().subscribe(brands => {
      this.brands = brands;

    });
    this.typeProvider.all().subscribe(types => {
      this.types = types;
      this.initoptions();

    });
    this.roomProvider.all().subscribe(rooms => {
      this.rooms = rooms;

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
    if(this.selectedOptions.length==0 && this.selectedBrand=='Ninguna'){
      this.pieceProvider.getByYear(this.minYear.toString(), this.maxYear.toString()).subscribe(pieces => {
        this.pieces = pieces;
      });
    }else if(this.selectedOptions.length==0){
      this.pieceProvider.getByYearAndBrandName(this.minYear.toString(), this.maxYear.toString(), this.selectedBrand).subscribe(pieces => {
        this.pieces = pieces;
      });
    }else if(this.selectedBrand=='Ninguna') {
      this.pieceProvider.getByYearAndTypes(this.minYear.toString(), this.maxYear.toString(), this.selectedOptions).subscribe(pieces => {
        this.pieces = pieces;
      });
    }else{
      this.pieceProvider.getByYearAndTypesAndBrandName(this.minYear.toString(), this.maxYear.toString(), this.selectedOptions, this.selectedBrand).subscribe(pieces => {
        this.pieces = pieces;
      });
    }
  }

  doSearchByBrandName(){
    this.pieceProvider.getByBrandName(this.selectedBrand).subscribe(pieces => {
      this.pieces = pieces;
    });
  }
  
  submit() {
  }

}
