import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PieceProvider } from 'src/providers/PieceProvider';
import { Piece } from 'src/models/Piece';



@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {
  piece: Piece;
  images: String[];
  size : number;
  slideIndex : any = 1;


  constructor(
    private route: ActivatedRoute,
    private pieceProvider: PieceProvider
    
  ) { }

  ngOnInit() {
    var imagesListDiv = document.getElementsByClassName("footer") as HTMLCollectionOf<HTMLElement>;
    let pieceID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param

    if (pieceID != null && pieceID.localeCompare("")) {
      this.pieceProvider.get(pieceID).subscribe(piece => {
        this.piece = piece;
        this.images=piece.images;
        this.size=this.images.length+1;
      });
    }
    this.showSlides(this.slideIndex);

    }

    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      var dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex-1].style.display = "block";
      dots[this.slideIndex-1].className += " active";
      
    }
  
    
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    }
    
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    }
    

    aumentarVisitas(){
      /*
      console.log(Number(this.piece.visits));
      this.piece.visits=String((Number(this.piece.visits)+1));
      this.pieceProvider.put(this.piece.id,this.piece);
      console.log(this.piece1);
      this.pieceProvider.post(this.piece1);
      */
    }
}
