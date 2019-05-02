import { Component, OnInit } from '@angular/core';
import { Piece } from 'src/models/Piece';
import { Brand } from 'src/models/Brand';
import { PieceProvider } from 'src/providers/PieceProvider';
import { BrandProvider } from 'src/providers/BrandProvider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pieces: Piece[] = [];
  brands: Brand[] = [];
  piece1: Piece; piece2: Piece; piece3: Piece;
  brand1: Brand; brand2: Brand; brand3: Brand;
  piece1ByBrand: Piece; piece2ByBrand: Piece; piece3ByBrand: Piece;

  constructor(private router: Router,
    private pieceProvider: PieceProvider,
    private brandProvider: BrandProvider) { }

  ngOnInit() {

    this.pieceProvider.all().subscribe(pieces => {
      this.pieces = pieces;

      var randomNumbers = this.get3RandomDifferentNumbers();
      this.piece1 = pieces[randomNumbers[0]];
      this.piece2 = pieces[randomNumbers[1]];
      this.piece3 = pieces[randomNumbers[2]];
    });
    
    this.brandProvider.all().subscribe(brands => {
      this.brands = brands;
      
      var randomNumbersBrand = this.get3RandomDifferentNumbersBrand();
      this.brand1 = brands[randomNumbersBrand[0]];
      this.brand2 = brands[randomNumbersBrand[1]];
      this.brand3 = brands[randomNumbersBrand[2]];

      this.pieceProvider.getByBrandName(this.brand1.name).subscribe(pieces => {
        this.piece1ByBrand = pieces[0];;
      });
      this.pieceProvider.getByBrandName(this.brand2.name).subscribe(pieces => {
        this.piece2ByBrand = pieces[0];
      });
      this.pieceProvider.getByBrandName(this.brand3.name).subscribe(pieces => {
        this.piece3ByBrand = pieces[0];
      });
    });
  }

  get3RandomDifferentNumbers() {
    var arr = []
    while (arr.length < 3) {
      var r = Math.floor(Math.random() * this.pieces.length - 1) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  }

  get3RandomDifferentNumbersBrand() {
    var arr = []
    while (arr.length < 3) {
      var r = Math.floor(Math.random() * this.brands.length - 1) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
      console.log(arr);
    }
    return arr;
  }
  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  goToSearch(brand) {
    var link = brand._links.self.href.split("/");
    var id = link[link.length - 1];

    this.router.navigate(['collection/' + id]);

  }

  goToPiece(piece) {
    var link = piece._links.self.href.split("/");
    var id = link[link.length - 1];

    this.router.navigate(['collection/piece/' + id]);
  }

}
