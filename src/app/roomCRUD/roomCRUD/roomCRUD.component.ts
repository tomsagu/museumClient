import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomProvider } from 'src/providers/RoomProvider';
import { Room } from '../../../models/room';

@Component({
  selector: 'app-roomCRUD',
  templateUrl: './roomCRUD.component.html',
  styleUrls: ['./roomCRUD.component.css']
})
export class RoomCRUDComponent implements OnInit {

  rooms: Room[];
  inputSearchValue: String;

  constructor(
    private router: Router,
    private roomProvider: RoomProvider
  ) { }

  //OnInit show all the rooms
  ngOnInit() {
    var roomListDiv = document.getElementsByClassName("roomList") as HTMLCollectionOf<HTMLElement>;
    var noRoomsDiv = document.getElementsByClassName("noRooms") as HTMLCollectionOf<HTMLElement>;
    this.roomProvider.all().subscribe(rooms => {
      this.rooms = rooms;
      noRoomsDiv[0].style.display = "none";
      if (rooms.length == 0) {
        roomListDiv[0].style.display = "none";
        noRoomsDiv[0].style.display = "block";
      }
    });

    noRoomsDiv[0].style.display = "none";

    if (this.rooms.length == 0) {
      roomListDiv[0].style.display = "none";
      noRoomsDiv[0].style.display = "block";
    }

  }
  //show the rooms which contain in their names or texts the word searched
  doSearch() {
    var roomListDiv = document.getElementsByClassName("roomList") as HTMLCollectionOf<HTMLElement>;
    var noRoomsDiv = document.getElementsByClassName("noRooms") as HTMLCollectionOf<HTMLElement>;
    this.roomProvider.getByWord(this.inputSearchValue).subscribe(rooms => {
      this.rooms = rooms;
      noRoomsDiv[0].style.display = "none";
      if (rooms.length == 0) {
        noRoomsDiv[0].style.display = "block";
      } else {
        roomListDiv[0].style.display = "block";
      }
    });
  }

  //go to create room view
  goToCreateRoom() {
    //TODO

  }

  //go to edit room view
  goToEditRoom(room) {
    //TODO

  }

  //delete a certain room
  doDelete(room) {
    //TODO

  }
  
}