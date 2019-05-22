import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomProvider } from 'src/providers/RoomProvider';
import { Room } from '../../../models/room';
import {MatDialog,MatDialogConfig} from '@angular/material';
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

  room : Room;
  
  mainTitle : String="";
  inputNameValue: String ="";
  inputLocationValue: String ="";
  inputDescriptionValue: String="";
  roomID : String="";
  private pieces : Piece[] = [];
  private pieceNew : Piece;
  private piece : Piece;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roomProvider: RoomProvider,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private pieceProvider : PieceProvider
  ) { }

  ngOnInit() {
    this.roomID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    let inMode = this.route.snapshot.paramMap.get('inMode').toString(); //get the id from url param
    var createButton = document.getElementById("createButton");
    var editButton = document.getElementById("editButton");

  
  if(inMode == 'create'){
    this.mainTitle = "Crear Sala";
    createButton.style.display = "block";

  }else{
    this.mainTitle = "Editar Sala";
    editButton.style.display = "block";
    if(this.roomID != null && this.roomID.localeCompare("") != 0){
      this.roomProvider.get(this.roomID).subscribe(room => {
        this.room = room;
         
        this.inputNameValue = room.name;
        this.inputLocationValue = room.location;
        this.inputDescriptionValue = room.text;

        this.pieceProvider.getByRoomName(room.name).subscribe(pieces =>{
          this.pieces=pieces;
          console.log(this.pieces);
        });
      });
    }
  }
}

doCreate(){
  if(this.inputNameValue != null && this.inputNameValue.localeCompare("")!=0){
    var room = new Room(this.inputNameValue,this.inputNameValue,this.inputLocationValue,this.inputDescriptionValue);
    this.roomProvider.post(room).subscribe(roomPost=>{
      room = roomPost;
    },err => this.showToaster("Se ha producido un error al crear la sala.", "error"));
    this.router.navigate(['indexCRUD']);
    this.showToaster("Sala creada con éxito.", "success");
  }else{
    this.showToaster("Introduce un nombre.", "error");
  }
  
}

doEdit(){
  if(this.inputNameValue != null && this.inputNameValue.localeCompare("")!=0){
    var room = new Room(this.roomID,this.inputNameValue,this.inputLocationValue,this.inputDescriptionValue);
    this.roomProvider.put(this.roomID, room).subscribe(roomPut => {
      
    },err => this.showToaster("Se ha producido un error al actualizar la sala.", "error"));
    
    this.router.navigate(['/indexCRUD']);
    this.showToaster("Sala modificada con éxito.", "success");
  }else{
    this.showToaster("Introduce un nombre.", "error");
  }
  /* for(var i=0; i<this.pieces.length; i++){
      for(var j = 0;j<this.pieces[i].rooms.length; j++){
        if(this.pieces[i].rooms[j].localeCompare(this.inputNameValue.toString())==0){
          //this.pieceNew = this.pieces[i];
          var n = this.pieces.indexOf(this.pieces[i]);
          this.pieces.splice(n,1);

          this.pieces[i].rooms[j] = this.inputNameValue;
          console.log("1"+this.inputNameValue);
          this.pieces.push(this.pieces[i]);
        }
      }
    }*/
}

doReturn(){
  console.log("Fin "+this.pieces.length);
  this.router.navigate(['indexCRUD']);
}

//show a toaster with information of a current action
showToaster(message:string,room:string){
  switch(room) { 
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
}