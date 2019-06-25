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

import { ToastrService } from 'ngx-toastr';


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

  mainTitle: String;
  pieceID: String;
  pieceBrand: String;
  pieceName: String;

  inputNameValue: String;
  inputTextValue: String;
  inputYearValue: String;
  inputCreatedateValue: Date;
  inputQrValue: String;
  inputRoomValue: String;
  inputBrandValue: String;
  inputVisitsValue: String;
  inputDonorValue: String;
  inputImagesValues: String[];
  inputImageValue: String = "";
  inputTypesValues: String[];
  inputTypeValue: String = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pieceProvider: PieceProvider,
    private brandProvider: BrandProvider,
    private roomProvider: RoomProvider,
    private typeProvider: TypeProvider,
    private toastr: ToastrService
  ) { }

  //OnInit show all the pieces
  ngOnInit() {
    //PARAMS TOOK
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
    });


    //Create or EDIT Mode
    if (inMode == 'create') {
      this.mainTitle = "Crear Pieza";
      createButton.style.display = "block";
      this.inputVisitsValue = "0";
      let dateTime = new Date();
      this.inputCreatedateValue = dateTime;
      this.inputTypesValues = [];
      this.inputImagesValues = [];
    } else {
      this.mainTitle = "Editar Pieza";
      editButton.style.display = "block";
      if (this.pieceID != null && this.pieceID.localeCompare("")) {
        this.pieceProvider.get(this.pieceID).subscribe(piece => {
          this.piece = piece;
          this.inputNameValue = piece.name;
          this.pieceName = piece.name;
          this.inputTextValue = piece.text;
          this.inputYearValue = piece.year;
          this.inputCreatedateValue = piece.createdate;
          this.inputQrValue = piece.qr;
          this.inputRoomValue = piece.room;
          this.inputBrandValue = piece.brand;
          this.pieceBrand = piece.brand;
          this.inputVisitsValue = piece.visits;
          this.inputDonorValue = piece.donor;
          this.inputImagesValues = piece.images;
          this.inputTypesValues = piece.types;
          this.displayImage();
          this.displayType();
        });
      }
    }


  }

  doCreate() {
    //create the piece
    if (this.inputNameValue != null && this.inputNameValue.localeCompare("") != 0) {
      this.inputQrValue = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + "http://localhost:4200/collection/piece/" + this.inputNameValue;
      var piece = new Piece(this.inputNameValue, this.inputNameValue, this.inputTextValue, this.inputYearValue,
        this.inputCreatedateValue, this.inputQrValue, this.inputRoomValue, this.inputBrandValue, this.inputVisitsValue,
        this.inputDonorValue, this.inputImagesValues, this.inputTypesValues);
      this.pieceProvider.post(piece).subscribe(piecePost => {
        piece = piecePost;
      }, err => this.showToaster("Se ha producido un error al crear la pieza.", "error"));
      //Update Brand
      for (let b of this.brands) {
        if (b.name == this.inputBrandValue) {
          b.pieces[b.pieces.length] = this.inputNameValue;
          var idb = this.getId(b);
          this.brandProvider.put(idb, b).subscribe(brandPut => {
          }, err => this.showToaster("Se ha producido un error al actualizar el fabricante de la pieza.", "error"));
          break;
        }
      }
      this.ngOnInit();
      //redirect
      this.router.navigate(['/pieceCRUD']);
      this.showToaster("Pieza creada con éxito.", "success");
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }

  }
  doEdit() {
    if (this.inputNameValue != null && this.inputNameValue.localeCompare("") != 0) {
      var piece = new Piece(this.inputNameValue, this.inputNameValue, this.inputTextValue, this.inputYearValue,
        this.inputCreatedateValue, this.inputQrValue, this.inputRoomValue, this.inputBrandValue, this.inputVisitsValue,
        this.inputDonorValue, this.inputImagesValues, this.inputTypesValues);
      this.pieceProvider.put(this.pieceID, piece).subscribe(piecePut => {
      }, err => this.showToaster("Se ha producido un error al actualizar la pieza.", "error"));
      //if brand changue
      if (this.inputBrandValue != this.pieceBrand) {
        //Add the piece to the new brand
        for (let b of this.brands) {
          if (b.name == this.inputBrandValue) {
            b.pieces[b.pieces.length] = this.inputNameValue;
            var idb = this.getId(b);
            this.brandProvider.put(idb, b).subscribe(brandPut => {
            }, err => this.showToaster("Se ha producido un error al actualizar el fabricante de la pieza.", "error"));
            break;
          }
        }
        //Remove the piece from the initial brand
        for (let b of this.brands) {
          if (b.name == this.pieceBrand) {
            var index = b.pieces.indexOf(this.pieceName);
            b.pieces.splice(index, 1)
            var idb = this.getId(b);
            this.brandProvider.put(idb, b).subscribe(brandPut => {
            }, err => this.showToaster("Se ha producido un error al actualizar el fabricante de la pieza.", "error"));
            break;
          }
        }
      }
      this.ngOnInit();
      //Redirect to the crud page
      this.router.navigate(['/pieceCRUD']);
      this.showToaster("Pieza modificado con éxito.", "success");
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }
  }

  doReturn() {
    this.router.navigate(['/pieceCRUD']);
  }


  //add an image to piece images list
  addImage() {
    if (this.inputImageValue != null && this.inputImageValue != "") {
      this.inputImagesValues[this.inputImagesValues.length] = this.inputImageValue;
    } else {
      this.showToaster("Introduce una imagen correcta.", "error");
    }
    this.displayImage();
    this.inputImageValue = "";
  }

  //delete an image of a piece
  doDeleteImage(image) {
    var n = this.inputImagesValues.indexOf(image);
    this.inputImagesValues.splice(n, 1);
  }


  //hide delete button if there isn't any image
  displayImage() {
    var pieceImageDiv = document.getElementById("pieceImageDiv");
    if (this.inputImagesValues != null && this.inputImagesValues.length != 0) {
      pieceImageDiv.style.display = "block";
    } else {
      pieceImageDiv.style.display = "none";
    }
  }


  //add an type to article images list
  addType() {
    if (this.inputTypeValue != null && this.inputTypeValue != "") {
      this.inputTypesValues[this.inputTypesValues.length] = this.inputTypeValue;

    } else {
      this.showToaster("Introduce un tipo correcto correcta.", "error");
    }

    this.displayType();
    this.inputImageValue = "";
  }

  //delete an type of a piece
  doDeleteType(type) {
    var n = this.inputTypesValues.indexOf(type);
    this.inputTypesValues.splice(n, 1);
  }


  //hide delete button if there isn't any image
  displayType() {
    var pieceTypeDiv = document.getElementById("pieceTypeDiv");
    if (this.inputTypesValues != null && this.inputTypesValues.length != 0) {
      pieceTypeDiv.style.display = "block";
    } else {
      pieceTypeDiv.style.display = "none";
    }
  }


  //show a toaster with information of a current action
  showToaster(message: string, type: string) {
    switch (type) {
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

  getId(brand): String {
    var link = brand._links.self.href.split("/");
    var id = link[link.length - 1];
    return id;
  }


}
