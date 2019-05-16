import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PieceProvider } from 'src/providers/PieceProvider';
import { Piece } from '../../../models/piece';

@Component({
  selector: 'app-pieceCRUD',
  templateUrl: './pieceCRUD.component.html',
  styleUrls: ['./pieceCRUD.component.css']
})
export class PieceCRUDComponent implements OnInit {

  pieces: Piece[];
  inputSearchValue: String;

  constructor( 
     private router: Router,
     private pieceProvider: PieceProvider
     ) { }

  //OnInit show all the pieces
  ngOnInit() {
    var pieceListDiv = document.getElementsByClassName("pieceList") as HTMLCollectionOf<HTMLElement>;
    var noPiecesDiv = document.getElementsByClassName("noPieces") as HTMLCollectionOf<HTMLElement>;
    this.pieceProvider.all().subscribe(pieces => {
      this.pieces = pieces;
      noPiecesDiv[0].style.display = "none";
      if (pieces.length == 0) {
        pieceListDiv[0].style.display = "none";
        noPiecesDiv[0].style.display = "block";
      }
    });

    noPiecesDiv[0].style.display = "none";

    if (this.pieces.length == 0) {
      pieceListDiv[0].style.display = "none";
      noPiecesDiv[0].style.display = "block";
    }
  }

  //show the pieces which contain in their names or texts the word searched
  doSearch() {
    var pieceListDiv = document.getElementsByClassName("pieceList") as HTMLCollectionOf<HTMLElement>;
    var noPiecesDiv = document.getElementsByClassName("noPieces") as HTMLCollectionOf<HTMLElement>;
    this.pieceProvider.getByName(this.inputSearchValue).subscribe(pieces => {
      this.pieces = pieces;
      noPiecesDiv[0].style.display = "none";
      if (pieces.length == 0) {
        noPiecesDiv[0].style.display = "block";
      } else {
        pieceListDiv[0].style.display = "block";
      }
    });
  }

  //go to create document view
  goToCreatePiece() {
    //TODO

  }

  //go to edit document view
  goToEditPiece(document) {
    //TODO

  }

  //delete a certain document
  doDelete(document) {
    //TODO

  }

}
