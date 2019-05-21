import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeProvider } from 'src/providers/TypeProvider';
import { Type } from '../../../models/type';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { MaintenanceArticleDialogComponent } from 'src/app/maintenanceArticleDialog/maintenanceArticleDialog/maintenanceArticleDialog.component';
import { ConfirmDeleteDialogComponent } from 'src/app/confirmDeleteDialog/confirmDeleteDialog/confirmDeleteDialog.component';
import { ToastrService } from 'ngx-toastr';
import { Piece } from 'src/models/Piece';
import { PieceProvider } from 'src/providers/PieceProvider';


@Component({
  selector: 'app-maintenanceType',
  templateUrl: './maintenanceType.component.html',
  styleUrls: ['./maintenanceType.component.css']
})
export class MaintenanceTypeComponent implements OnInit {

  type : Type;
  
  mainTitle : String="";
  inputNameValue: String ="";
  typeID : String="";
  private pieces : Piece[] = [];
  private pieceNew : Piece;
  private piece : Piece;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private typeProvider: TypeProvider,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private pieceProvider : PieceProvider
  ) {}

  //OnInit show all the types
  ngOnInit() {
    this.typeID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    let inMode = this.route.snapshot.paramMap.get('inMode').toString(); //get the id from url param
    var createButton = document.getElementById("createButton");
    var editButton = document.getElementById("editButton");

    
    if(inMode == 'create'){
      this.mainTitle = "Crear Tipo";
      createButton.style.display = "block";

    }else{
      this.mainTitle = "Editar Tipo";
      editButton.style.display = "block";
      if(this.typeID != null && this.typeID.localeCompare("") != 0){
        this.typeProvider.get(this.typeID).subscribe(type => {
          this.type = type;
           
          this.inputNameValue = type.name;

          var array = new Array(this.type.name);
         /* for (var i = 0; i < array.length; i++) {
              console.log(array[i]);
          }*/
          this.pieceProvider.getByTypes(array).subscribe(pieces =>{
            this.pieces=pieces;
          });
        });
      }
    }
  }

  doCreate(){
    if(this.inputNameValue != null && this.inputNameValue.localeCompare("")!=0){
      var type = new Type(this.inputNameValue,this.inputNameValue);
      this.typeProvider.post(type).subscribe(typePost=>{
        type = typePost;
      },err => this.showToaster("Se ha producido un error al crear el tipo.", "error"));
      this.router.navigate(['indexCRUD']);
      this.showToaster("Tipo creado con éxito.", "success");
    }else{
      this.showToaster("Introduce un nombre.", "error");
    }
    
  }

  doEdit(){
    if(this.inputNameValue != null && this.inputNameValue.localeCompare("")!=0){
      var type = new Type(this.typeID,this.inputNameValue);
      this.typeProvider.put(this.typeID, type).subscribe(typePut => {
        
      },err => this.showToaster("Se ha producido un error al actualizar el tipo.", "error"));
      
      this.router.navigate(['/indexCRUD']);
      this.showToaster("Tipo modificado con éxito.", "success");
    }else{
      this.showToaster("Introduce un nombre.", "error");
    }
    /* for(var i=0; i<this.pieces.length; i++){
        for(var j = 0;j<this.pieces[i].types.length; j++){
          if(this.pieces[i].types[j].localeCompare(this.inputNameValue.toString())==0){
            //this.pieceNew = this.pieces[i];
            var n = this.pieces.indexOf(this.pieces[i]);
            this.pieces.splice(n,1);
  
            this.pieces[i].types[j] = this.inputNameValue;
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
  showToaster(message:string,type:string){
    switch(type) { 
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



