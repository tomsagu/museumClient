import { Component, OnInit } from '@angular/core';
import { PieceProvider } from 'src/providers/PieceProvider';
import { Piece } from 'src/models/Piece';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  constructor(private pieceProvider: PieceProvider) { }

  pieces: Piece[];
  donorPieces: Map<String, String[]> = new Map<String, String[]>();
  donorPiecesArray : String[][];


  charge : Boolean = false;
  ngOnInit() {
    this.pieceProvider.all().subscribe(piece => {
      this.pieces = piece;
      this.createMap();
    });
  }

  createMap() {
    for (let p of this.pieces) {
      if (!this.donorPieces.has(p.donor)) {

        this.donorPieces.set(p.donor, [p.donor,p.name]);
      } else {
        let aux = this.donorPieces.get(p.donor);
        aux.push(p.name);
        this.donorPieces.set(p.donor, aux);
      }
    }
    this.sortMap();
  }

  sortMap() {  
    let array = Array.from(this.donorPieces.values());
    array.sort((a,b)=> b.length - a.length);
    this.donorPiecesArray = array;

    this.charge = true;
    }
}
