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
  piece1: Piece;
  piece2: Piece;
  piece3: Piece;

  constructor(private router: Router,
    private pieceProvider: PieceProvider,
    private brandProvider: BrandProvider) { }

  ngOnInit() {
    this.pieceProvider.all().subscribe(pieces => {
      //this.pieces = [pieces[0],pieces[1],pieces[2]];
      this.piece1 = pieces[0];
      this.piece2 = pieces[1];
      this.piece3 = pieces[2];
      //console.log(pieces);
    });
    this.brandProvider.all().subscribe(brands => {
      this.brands = brands;
      // console.log(brands);
    });
  }

}
