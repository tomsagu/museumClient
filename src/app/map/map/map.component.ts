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

    doSearch(varroom){
      console.log(varroom);
      this.roomProvider.getByName(varroom).subscribe(room=>{
        this.room=room;
        console.log(room.name)
      })
      this.pieceProvider.getByRoomName(varroom).subscribe(pieces => {
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
