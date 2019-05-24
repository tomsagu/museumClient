import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomProvider } from 'src/providers/RoomProvider';
import { Room } from '../../../models/room';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MaintenanceArticleDialogComponent } from 'src/app/maintenanceArticleDialog/maintenanceArticleDialog/maintenanceArticleDialog.component';
import { ConfirmDeleteDialogComponent } from 'src/app/confirmDeleteDialog/confirmDeleteDialog/confirmDeleteDialog.component';
import { ToastrService } from 'ngx-toastr';
import { Piece } from 'src/models/Piece';
import { PieceProvider } from 'src/providers/PieceProvider';

@Component({
  selector: 'app-maintenanceRoom',
  templateUrl: './maintenanceRoom.component.html',
  styleUrls: ['./maintenanceRoom.component.css']
})
export class MaintenanceRoomComponent implements OnInit {

  room: Room;

  mainTitle: String = "";
  inputNameValue: String = "";
  inputLocationValue: String = "";
  inputDescriptionValue: String = "";
  roomID: String = "";
  roomName: String = "";
  private pieces: Piece[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roomProvider: RoomProvider,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private pieceProvider: PieceProvider
  ) { }

  //OnInit show all the rooms
  ngOnInit() {
    this.roomID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    let inMode = this.route.snapshot.paramMap.get('inMode').toString(); //get the id from url param
    var createButton = document.getElementById("createButton");
    var editButton = document.getElementById("editButton");

    //If you select create a room
    if (inMode == 'create') {
      this.mainTitle = "Crear Sala";
      createButton.style.display = "block";

      //If you select edit a room
    } else {
      this.mainTitle = "Editar Sala";
      editButton.style.display = "block";
      if (this.roomID != null && this.roomID.localeCompare("") != 0) {
        this.roomProvider.get(this.roomID).subscribe(room => {
          this.room = room;

          this.inputNameValue = room.name;
          this.inputLocationValue = room.location;
          this.inputDescriptionValue = room.text;

          //Save in a variable the previous room
          this.roomName = room.name;
        });
      }
    }
  }

  doCreate() {
    if (this.inputNameValue != null && this.inputNameValue.localeCompare("") != 0) {
      var room = new Room(this.inputNameValue, this.inputNameValue, this.inputLocationValue, this.inputDescriptionValue);
      this.roomProvider.post(room).subscribe(roomPost => {
        room = roomPost;
      }, err => this.showToaster("Se ha producido un error al crear la sala.", "error"));
      this.router.navigate(['indexCRUD']);
      this.showToaster("Sala creada con éxito.", "success");
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }

  }

  doEdit() {
    if (this.inputNameValue != null && this.inputNameValue.localeCompare("") != 0) {
      var room = new Room(this.roomID, this.inputNameValue, this.inputLocationValue, this.inputDescriptionValue);
      this.roomProvider.put(this.roomID, room).subscribe(roomPut => {

      }, err => this.showToaster("Se ha producido un error al actualizar la sala.", "error"));

      //Get all the pieces of the previous room to update it
      this.pieceProvider.getByRoomName(this.roomName).subscribe(pieces => {
        this.pieces = pieces;

        //Loop for that update the room of each piece in the array
        for (let p of this.pieces) {
          p.room = this.inputNameValue;
          var idp = this.getId(p);
          this.pieceProvider.put(idp, p).subscribe(piecePut => {
          }, err => this.showToaster("Se ha producido un error al actualizar la sala de la pieza.", "error"));
        }
      });

      //Redirect
      this.router.navigate(['/indexCRUD']);
      this.showToaster("Sala modificada con éxito.", "success");
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }
  }

  doReturn() {
    this.router.navigate(['indexCRUD']);
  }

  //show a toaster with information of a current action
  showToaster(message: string, room: string) {
    switch (room) {
      case "success": {
        this.toastr.success(message);
        break;
      }
      case "warning": {
        this.toastr.warning(message);
        break;
      }
      default: {
        this.toastr.error(message);
        break;
      }
    }
  }

  //Get the ID of a piece to use in room update
  getId(piece): String {
    var link = piece._links.self.href.split("/");
    var id = link[link.length - 1];
    return id;
  }
}