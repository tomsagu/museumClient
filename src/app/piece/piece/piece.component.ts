import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PieceProvider } from 'src/providers/PieceProvider';
import { Piece } from 'src/models/Piece';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  piece: Piece;

  constructor(
    private route: ActivatedRoute,
    private pieceProvider: PieceProvider
  ) { }

  ngOnInit() {
    let pieceID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param

    if (pieceID != null && pieceID.localeCompare("")) {
      this.pieceProvider.get(pieceID).subscribe(piece => {
        this.piece = piece;
      });
    }
  }

}
