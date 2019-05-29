import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Piece } from 'src/models/Piece';
import { PieceProvider } from 'src/providers/PieceProvider';
import { Brand } from 'src/models/Brand';
import { BrandProvider } from 'src/providers/BrandProvider';

@Component({
  selector: 'app-maintenanceBrand',
  templateUrl: './maintenanceBrand.component.html',
  styleUrls: ['./maintenanceBrand.component.css']
})
export class MaintenanceBrandComponent implements OnInit {

  brand: Brand;

  mainTitle: String = "";
  inputNameValue: String = "";
  inputDescriptionValue: String = "";
  brandID: String = "";
  namePieces: String[] = [];
  pieces: Piece[] = [];
  brandName: String = "";
  piece: Piece;
  pieceID: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private brandProvider: BrandProvider,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private pieceProvider: PieceProvider
  ) { }

  //OnInit show all the brands
  ngOnInit() {
    this.brandID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    let inMode = this.route.snapshot.paramMap.get('inMode').toString(); //get the id from url param
    var createButton = document.getElementById("createButton");
    var editButton = document.getElementById("editButton");

    //If you select create a brand
    if (inMode == 'create') {
      this.mainTitle = "Crear Marca";
      createButton.style.display = "block";

      //If you select edit a brand
    } else {
      this.mainTitle = "Editar Marca";
      editButton.style.display = "block";
      if (this.brandID != null && this.brandID.localeCompare("") != 0) {
        this.brandProvider.get(this.brandID).subscribe(brand => {
          this.brand = brand;

          this.inputNameValue = brand.name;
          this.inputDescriptionValue = brand.text;

          //Save in a variable the previous brand
          this.brandName = brand.name;

          //Get all the pieces of the previous brand to update it
          this.pieceProvider.getByBrandName(this.brandName).subscribe(pieces => {
            this.pieces = pieces;
            //Save all names of the pieces of the brand selected
            for (var i = 0; i < this.pieces.length; i++) {
              this.namePieces[i] = this.pieces[i].name;
            }
          });
        });
      }
    }
  }

  doCreate() {
    if (this.inputNameValue != null && this.inputNameValue.localeCompare("") != 0) {
      var brand = new Brand(this.inputNameValue, this.inputNameValue, this.inputDescriptionValue, this.namePieces);
      this.brandProvider.post(brand).subscribe(brandPost => {
        brand = brandPost;
      }, err => this.showToaster("Se ha producido un error al crear la marca.", "error"));
      this.router.navigate(['indexCRUD']);
      this.showToaster("Marca creada con éxito.", "success");
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }

  }

  doEdit() {
    if (this.inputNameValue != null && this.inputNameValue.localeCompare("") != 0) {
      var brand = new Brand(this.brandID, this.inputNameValue, this.inputDescriptionValue, this.namePieces);
      this.brandProvider.put(this.brandID, brand).subscribe(brandPut => {

      }, err => this.showToaster("Se ha producido un error al actualizar la marca.", "error"));

      //Get all the pieces of the previous brand to update it
      this.pieceProvider.getByBrandName(this.brandName).subscribe(pieces => {
        this.pieces = pieces;
        //Loop for that update the brand of each piece in the array
        for (let p of this.pieces) {
          p.brand = this.inputNameValue;
          var idp = this.getId(p);
          this.pieceProvider.put(idp, p).subscribe(piecePut => {
          }, err => this.showToaster("Se ha producido un error al actualizar la marca de la pieza.", "error"));
        }
      });

      //Redirect
      this.router.navigate(['/indexCRUD']);
      this.showToaster("Marca modificada con éxito.", "success");
    } else {
      this.showToaster("Introduce un nombre.", "error");
    }
  }

  doReturn() {
    this.router.navigate(['indexCRUD']);
  }

  //show a toaster with information of a current action
  showToaster(message: string, brand: string) {
    switch (brand) {
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

  //Get the ID of a piece to use in brand update
  getId(piece): String {
    var link = piece._links.self.href.split("/");
    var id = link[link.length - 1];
    return id;
  }
}