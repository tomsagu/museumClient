import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PieceProvider } from 'src/providers/PieceProvider';
import { BrandProvider } from 'src/providers/BrandProvider';
import { Piece } from '../../../models/piece';
import { Brand } from '../../../models/brand';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmDeleteDialogComponent } from 'src/app/confirmDeleteDialog/confirmDeleteDialog/confirmDeleteDialog.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-pieceCRUD',
  templateUrl: './pieceCRUD.component.html',
  styleUrls: ['./pieceCRUD.component.css']
})
export class PieceCRUDComponent implements OnInit {

  pieces: Piece[];
  brands: Brand[];
  inputSearchValue: String;

  constructor(
    private router: Router,
    private pieceProvider: PieceProvider,
    private brandProvider: BrandProvider,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  //OnInit show all the pieces
  ngOnInit() {
    var pieceListDiv = document.getElementsByClassName("pieceList") as HTMLCollectionOf<HTMLElement>;
    var noPiecesDiv = document.getElementsByClassName("noPieces") as HTMLCollectionOf<HTMLElement>;
    this.pieceProvider.all().subscribe(pieces => {
      this.pieces = pieces;
      noPiecesDiv[0].style.display = "none";
      if (pieces.length == 0) {
        pieceListDiv[0].style.display = "none";
        noPiecesDiv[0].style.display = "block";
      }
      //Load brands
      this.brandProvider.all().subscribe(brands => {
        this.brands = brands;
      });
    });

    noPiecesDiv[0].style.display = "none";

    if (this.pieces.length == 0) {
      pieceListDiv[0].style.display = "none";
      noPiecesDiv[0].style.display = "block";
    }
  }

  //show the pieces which contain in their names or texts the word searched
  doSearch() {
    var pieceListDiv = document.getElementsByClassName("pieceList") as HTMLCollectionOf<HTMLElement>;
    var noPiecesDiv = document.getElementsByClassName("noPieces") as HTMLCollectionOf<HTMLElement>;
    this.pieceProvider.getByWord(this.inputSearchValue).subscribe(pieces => {
      this.pieces = pieces;
      noPiecesDiv[0].style.display = "none";
      if (pieces.length == 0) {
        noPiecesDiv[0].style.display = "block";
      } else {
        pieceListDiv[0].style.display = "block";
      }
    });
  }

  //go to create piece view
  goToCreatePiece() {
    var id = "null";
    var inMode = "create";
    this.router.navigate(['indexCRUD/maintenancePiece/' + id + '/' + inMode]);
  }

  //go to edit piece view
  goToEditPiece(piece) {
    var link = piece._links.self.href.split("/");
    var id = link[link.length - 1];
    var inMode = "edit";
    this.router.navigate(['indexCRUD/maintenancePiece/' + id + '/' + inMode]);

  }

  //delete a certain piece
  doDelete(piece) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { name: "piece" };
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if (result != null && result) {
          var link = piece._links.self.href.split("/");
          var id = link[link.length - 1];
          this.pieceProvider.delete(id).subscribe();
          //delete the piece of the brand
          for (let b of this.brands) {
            if (b.name == piece.brand) {
              var index = b.pieces.indexOf(piece.name);
              b.pieces.splice(index, 1)
              var idb = this.getId(b);
              this.brandProvider.put(idb, b).subscribe(brandPut => {
              }, err => this.showToaster("Se ha producido un error al actualizar la marca de la pieza.", "error"));
              break;
            }
          }
          location.reload();
        }
      });

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
