import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PieceProvider } from 'src/providers/PieceProvider';
import { RoomProvider } from 'src/providers/RoomProvider';
import { BrandProvider } from './../../../providers/BrandProvider';
import { TypeProvider } from 'src/providers/TypeProvider';
import { Piece } from '../../../models/piece';
import { Brand } from './../../../models/Brand';
import { Room } from 'src/models/Room';
import { Type } from 'src/models/Type';


@Component({
  selector: 'app-maintenancePiece',
  templateUrl: './maintenancePiece.component.html',
  styleUrls: ['./maintenancePiece.component.css']
})
export class MaintenancePieceComponent implements OnInit {

  piece: Piece;
  types: Type[] = [];
  brands: Brand[] = [];
  rooms: Room[] = [];

  mainTitle : String;
  pieceID : String;

  inputNameValue : String;
  inputTextValue : String;
  inputYearValue : String;
  inputCreatedateValue: Date;
  inputQrValue : String;
  inputRoomValue : String;
  inputBrandValue : String;
  inputVisitsValue : String;
  inputDonorValue : String;
  inputImagesValues : String[];
  inputImageValue : String = "";
  inputTypesValues : String[];
  inputTypeValue : String = "";

  constructor( 
     private router: Router,
     private route: ActivatedRoute,
     private pieceProvider: PieceProvider,
     private brandProvider: BrandProvider,
     private roomProvider: RoomProvider,
     private typeProvider: TypeProvider
     ) { }

  //OnInit show all the pieces
  ngOnInit() {
    this.pieceID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    let inMode = this.route.snapshot.paramMap.get('inMode').toString(); //get the id from url param

    var createButton = document.getElementById("createButton");
    var editButton = document.getElementById("editButton");
    
    //Chargue of Rooms,Brands and Types values
    this.brandProvider.all().subscribe(brands => {
      this.brands = brands;
    });
    this.typeProvider.all().subscribe(types => {
      this.types = types;
    });
    this.roomProvider.all().subscribe(rooms => {
      this.rooms = rooms;
      console.log(rooms);
    });



    if(inMode == 'create'){
      this.mainTitle = "Crear Pieza";
      createButton.style.display = "block";

    }else{
      this.mainTitle = "Editar Pieza";
      editButton.style.display = "block";

      if(this.pieceID != null && this.pieceID.localeCompare("")){
        this.pieceProvider.get(this.pieceID).subscribe(piece => {
          this.piece = piece;
          this.inputNameValue = piece.name;
          this.inputTextValue =piece.text;
          this.inputYearValue = piece.year; 
          this.inputCreatedateValue = piece.createdate;
          this.inputQrValue = piece.qr;
          this.inputRoomValue = piece.room;
          this.inputBrandValue = piece.brand;
          this.inputVisitsValue = piece.visits;
          this.inputDonorValue = piece.donor;
          this.inputImagesValues= piece.images;
          this.inputTypesValues = piece.types;
        });
      }

    }
  }

  doCreate(){
    /*
    if(this.inputNameValue != null && this.inputNameValue.localeCompare("")!=0){
      var document = new Document(this.inputNameValue,this.inputNameValue,this.inputDescriptionValue,this.documentImage,this.articles);
      this.documentProvider.post(document).subscribe(documentPost=>{
        document = documentPost;
      },err => this.showToaster("Se ha producido un error al crear el documento.", "error"));
      this.router.navigate(['/indexCRUD']);
      this.showToaster("Documento creado con éxito.", "success");
    }else{
      this.showToaster("Introduce un nombre.", "error");
    }
    */
  }

  doEdit(){
    /*
    if(this.inputNameValue != null && this.inputNameValue.localeCompare("")!=0){
      var document = new Document(this.documentID,this.inputNameValue,this.inputDescriptionValue,this.documentImage,this.articles);
      this.documentProvider.put(this.documentID, document).subscribe(documentPut => {

      },err => this.showToaster("Se ha producido un error al actualizar el documento.", "error"));
      this.router.navigate(['/indexCRUD']);
      this.showToaster("Documento modificado con éxito.", "success");
    }else{
      this.showToaster("Introduce un nombre.", "error");
    }
    */
  }

  doReturn(){
    this.router.navigate(['/indexCRUD']);
  }

  

}
