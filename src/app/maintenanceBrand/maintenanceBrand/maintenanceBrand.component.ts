import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { MaintenanceArticleDialogComponent } from 'src/app/maintenanceArticleDialog/maintenanceArticleDialog/maintenanceArticleDialog.component';
import { ConfirmDeleteDialogComponent } from 'src/app/confirmDeleteDialog/confirmDeleteDialog/confirmDeleteDialog.component';
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

  brand : Brand;
  
  mainTitle : String="";
  inputNameValue: String ="";
  inputDescriptionValue: String="";
  brandID : String="";
  namePieces : String[] = [];
  pieces : Piece[] = [];
  private pieceNew : Piece;
  private piece : Piece;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private brandProvider: BrandProvider,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private pieceProvider : PieceProvider
  ) { }

  ngOnInit() {
    this.brandID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    let inMode = this.route.snapshot.paramMap.get('inMode').toString(); //get the id from url param
    var createButton = document.getElementById("createButton");
    var editButton = document.getElementById("editButton");

  
  if(inMode == 'create'){
    this.mainTitle = "Crear Marca";
    createButton.style.display = "block";

  }else{
    this.mainTitle = "Editar Marca";
    editButton.style.display = "block";
    if(this.brandID != null && this.brandID.localeCompare("") != 0){
      this.brandProvider.get(this.brandID).subscribe(brand => {
        this.brand = brand;

        if(brand.pieces != null){
          this.namePieces = brand.pieces;
          console.log(this.namePieces);
        } 
        this.inputNameValue = brand.name;
        this.inputDescriptionValue = brand.text;

        this.pieceProvider.getByBrandName(brand.name).subscribe(pieces =>{
          this.pieces=pieces;
          console.log(this.pieces);
        });
      });
    }
  }
}

doCreate(){
  if(this.inputNameValue != null && this.inputNameValue.localeCompare("")!=0){
    var brand = new Brand(this.inputNameValue,this.inputNameValue,this.inputDescriptionValue,this.namePieces);
    this.brandProvider.post(brand).subscribe(brandPost=>{
      brand = brandPost;
    },err => this.showToaster("Se ha producido un error al crear la marca.", "error"));
    this.router.navigate(['indexCRUD']);
    this.showToaster("Marca creada con éxito.", "success");
  }else{
    this.showToaster("Introduce un nombre.", "error");
  }
  
}

doEdit(){
  if(this.inputNameValue != null && this.inputNameValue.localeCompare("")!=0){
    var brand = new Brand(this.brandID,this.inputNameValue,this.inputDescriptionValue,this.namePieces);
    this.brandProvider.put(this.brandID, brand).subscribe(brandPut => {
      
    },err => this.showToaster("Se ha producido un error al actualizar la marca.", "error"));
    
    this.router.navigate(['/indexCRUD']);
    this.showToaster("Marca modificada con éxito.", "success");
  }else{
    this.showToaster("Introduce un nombre.", "error");
  }
  /* for(var i=0; i<this.pieces.length; i++){
      for(var j = 0;j<this.pieces[i].brands.length; j++){
        if(this.pieces[i].brands[j].localeCompare(this.inputNameValue.toString())==0){
          //this.pieceNew = this.pieces[i];
          var n = this.pieces.indexOf(this.pieces[i]);
          this.pieces.splice(n,1);

          this.pieces[i].brands[j] = this.inputNameValue;
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
showToaster(message:string,brand:string){
  switch(brand) { 
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