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
  visita: number;
  constructor(
    private route: ActivatedRoute,
    private pieceProvider: PieceProvider
  ) { }

  ngOnInit() {
    let pieceID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param

    if (pieceID != null && pieceID.localeCompare("")) {
      this.pieceProvider.get(pieceID).subscribe(piece => {
        this.piece = piece;
        this.aumentarVisitas();
      });
    }
    
    //this.piece.visits=String((Number(this.piece.visits)+1));
    //this.pieceProvider.put(this.piece.id,this.piece);
    }

    aumentarVisitas(){
      console.warn(this.piece.name);
    }
}
