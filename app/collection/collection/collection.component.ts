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



@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  pieces: Piece[] = [];
  types: Type[] = [];
  brands: Brand[] = [];
  rooms: Room[] = [];
  space= /%20/gi;

  constructor(
    private router: Router,
    private pieceProvider: PieceProvider,
    private brandProvider: BrandProvider,
    private typeProvider: TypeProvider,
    private roomProvider: RoomProvider
  ) { }

  ngOnInit() {
    this.pieceProvider.all().subscribe(pieces => {
      this.pieces = pieces;
      console.log(pieces);
    });

    this.brandProvider.all().subscribe(brands => {
      this.brands = brands;
      console.log(brands);
    });

    this.typeProvider.all().subscribe(types => {
      this.types = types;
      console.log(this.types);
    });

    this.roomProvider.all().subscribe(rooms => {
      this.rooms = rooms;
     console.log(rooms);
    });

  }

}
