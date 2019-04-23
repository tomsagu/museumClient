import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PieceProvider } from 'src/providers/PieceProvider';
import { Piece } from '../../../models/piece';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit{

  //url : String = "http://localhost:8080/pieces";

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];  
  pieces: Piece[] = [];
  

  constructor(
    private router : Router,
    private pieceProvider : PieceProvider
  ) { }

  ngOnInit() {  
    this.pieceProvider.all().subscribe(pieces => {
    this.pieces = pieces;
    console.log(pieces);
    });
     
    
  }

}
