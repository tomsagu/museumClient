import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomProvider } from 'src/providers/RoomProvider';
import { Room } from '../../../models/room';

import { ConfirmDeleteDialogComponent } from 'src/app/confirmDeleteDialog/confirmDeleteDialog/confirmDeleteDialog.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';

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
    private roomProvider: RoomProvider,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  //OnInit show all the rooms
  ngOnInit() {
    this.roomProvider.all().subscribe(rooms => {
      this.rooms = rooms;
    });
    this.displayList(this.rooms);
  }

  //show the rooms which contain in their names or texts the word searched
  doSearch() {
    this.roomProvider.getByWord(this.inputSearchValue).subscribe(rooms => {
      this.rooms = rooms;
      this.displayList(rooms);
    });
  }

  //go to create room view
  goToCreateRoom() {
    var id = "null";
    var inMode = "create";
    this.router.navigate(['indexCRUD/maintenanceRoom/' + id + '/' + inMode]);
  }

  //go to edit room view
  goToEditRoom(room) {
    var link = room._links.self.href.split("/");
    var id = link[link.length - 1];
    var inMode = "edit";
    this.router.navigate(['indexCRUD/maintenanceRoom/' + id + '/' + inMode]);
  }

  //delete a certain room
  doDelete(room) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { name: "esta sala" };
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if (result != null && result) {
          var link = room._links.self.href.split("/");
          var id = link[link.length - 1];
          this.roomProvider.delete(id).subscribe();
          location.reload();
        }
      });
  }
  //if there isn't any item in the list, show a message
  displayList(rooms) {
    var roomListDiv = document.getElementsByClassName("roomList") as HTMLCollectionOf<HTMLElement>;
    var noRoomsDiv = document.getElementsByClassName("noRooms") as HTMLCollectionOf<HTMLElement>;
    noRoomsDiv[0].style.display = "none";
    if (rooms != null && rooms.length == 0) {
      roomListDiv[0].style.display = "none";
      noRoomsDiv[0].style.display = "block";
    } else {
      roomListDiv[0].style.display = "block";
    }
  }

}