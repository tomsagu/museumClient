import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PieceProvider } from 'src/providers/PieceProvider';
import { RoomProvider } from 'src/providers/RoomProvider';
import { Piece } from 'src/models/Piece';
import { Room } from 'src/models/Room';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  pieces: Piece[] = [];
  room : Room;

  constructor(  private route : ActivatedRoute,
    private router: Router,
    private pieceProvider: PieceProvider,
    private roomProvider: RoomProvider,
    ) { }

  ngOnInit() {
  }

    doSearch(room){
      console.log(room);
      this.pieceProvider.getByRoomName(room).subscribe(pieces => {
        this.pieces = pieces;
      });
    }


    //go to Piece Component and show the info of the piece clicked
    goToPiece(piece) {
      var link = piece._links.self.href.split("/");
      var id = link[link.length - 1];
  
      this.router.navigate(['collection/piece/' + id]);
    }
  
}
