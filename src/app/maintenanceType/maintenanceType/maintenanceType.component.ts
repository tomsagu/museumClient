import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeProvider } from 'src/providers/TypeProvider';
import { Type } from '../../../models/type';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Piece } from 'src/models/Piece';
import { PieceProvider } from 'src/providers/PieceProvider';


@Component({
  selector: 'app-maintenanceType',
  templateUrl: './maintenanceType.component.html',
  styleUrls: ['./maintenanceType.component.css']
})
export class MaintenanceTypeComponent implements OnInit {

  type: Type;

  mainTitle: String = "";
  inputNameValue: String = "";
  typeID: String = "";
  typeName: String = "";
  private pieces: Piece[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private typeProvider: TypeProvider,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private pieceProvider: PieceProvider
  ) { }

  //OnInit show all the types
  ngOnInit() {
    this.typeID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    let inMode = this.route.snapshot.paramMap.get('inMode').toString(); //get the id from url param
    var createButton = document.getElementById("createButton");
    var editButton = document.getElementById("editButton");

    //If you select create a type
    if (inMode == 'create') {
      this.mainTitle = "Crear Tipo";
      createButton.style.display = "block";

      //If you select edit a type
    } else {
      this.mainTitle = "Editar Tipo";
      editButton.style.display = "block";
      if (this.typeID != null && this.typeID.localeCompare("") != 0) {
        this.typeProvider.get(this.typeID).subscribe(type => {
          this.type = type;

          this.inputNameValue = type.name;

          //Save in a variable the previous room
          this.typeName = type.name;
        });
      }
    }
  }

  doCreate() {
    if (this.inputNameValue != null && this.inputNameValue.localeCompare("") != 0) {
      var type = new Type(this.inputNameValue, this.inputNameValue);
      this.typeProvider.post(type).subscribe(typePost => {
        type = typePost;
      }, err => this.showToaster("Se ha producido un error al crear el tipo.", "error"));
      this.ngOnInit();
      this.router.navigate(['/typeCRUD']);
      this.showToaster("Tipo creado con éxito.", "success");
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }

  }

  doEdit() {
    if (this.inputNameValue != null && this.inputNameValue.localeCompare("") != 0) {
      var type = new Type(this.typeID, this.inputNameValue);
      this.typeProvider.put(this.typeID, type).subscribe(typePut => {

      }, err => this.showToaster("Se ha producido un error al actualizar el tipo.", "error"));

      //Get all the pieces of the previous type to update it
      var array = new Array(this.type.name);
      this.pieceProvider.getByTypes(array).subscribe(pieces => {
        this.pieces = pieces;

        //Loop for that update the type of each piece in the array
        for (var i = 0; i < this.pieces.length; i++) {
          for (var j = 0; j < this.pieces[i].types.length; j++) {
            if (this.pieces[i].types[j] == this.typeName) {
              this.pieces[i].types[j] = this.inputNameValue;
              var idp = this.getId(this.pieces[i]);
              this.pieceProvider.put(idp, this.pieces[i]).subscribe(piecePut => {
              }, err => this.showToaster("Se ha producido un error al actualizar la sala de la pieza.", "error"));
            }
          }
        }

      });
      this.ngOnInit();
      //Redirect to previous page
      this.router.navigate(['/typeCRUD']);
      this.showToaster("Tipo modificado con éxito.", "success");
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }
  }

  doReturn() {
    this.router.navigate(['typeCRUD']);
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

  //Get the ID of a piece to use in room update
  getId(piece): String {
    var link = piece._links.self.href.split("/");
    var id = link[link.length - 1];
    return id;
  }
}



