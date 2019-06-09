import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { Document } from '../../../models/document';
import { Article } from '../../../models/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  document: Document;
  articles: Article[];
  articleSelected: Article;
  articleIndex: number = 0;
  images: String[];
  slideIndex: any = 1;

  constructor(
    private route: ActivatedRoute,
    private documentProvider: DocumentProvider
  ) { }

  ngOnInit() {
    let documentID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param

    if (documentID != null && documentID.localeCompare("")) {
      this.documentProvider.get(documentID).subscribe(document => {
        this.document = document;
        this.articles = document.articles;
        this.articleSelected = document.articles[this.articleIndex];
        this.images = this.articleSelected.images;
        this.displayGallery();       
      });
    } 
  }

  viewArticle(article) {
    this.articleSelected = article;
    this.articleIndex = this.articles.indexOf(article);
    this.images = this.articleSelected.images;
    this.displayGallery();
    this.displayCurrentArticle();
  }

  goPrevious() {
    if (this.articleIndex == 0) { //If it is the first article
      this.articleIndex = this.articles.length - 1;
    }
    else {
      this.articleIndex--;
    }
    this.articleSelected = this.articles[this.articleIndex];
    this.images = this.articleSelected.images;
    this.displayGallery();
    this.displayCurrentArticle();
  }

  goNext() {
    if (this.articleIndex == this.articles.length - 1) { //If it is the last article
      this.articleIndex = 0;
    }
    else {
      this.articleIndex++;
    }
    this.articleSelected = this.articles[this.articleIndex];
    this.images = this.articleSelected.images;
    this.displayGallery();
    this.displayCurrentArticle();
  }

  displayGallery() {
    var imagesListDiv = document.getElementsByClassName("footer") as HTMLCollectionOf<HTMLElement>;
    if (this.images != null) {
      imagesListDiv[0].style.display = "block";
    } else {
      imagesListDiv[0].style.display = "none";
    }
  }

  displayCurrentArticle(){
    var articleList = document.getElementsByClassName("page-link") as HTMLCollectionOf<HTMLElement>;
    
    for(var i = 0; i < articleList.length; i++){
      articleList[i].style.color = "black";
      articleList[i].style.fontWeight = "normal";

    }
    var currentArticle = document.getElementById(this.articleSelected.name.toString());
    currentArticle.style.color = "#cd0067";
    currentArticle.style.fontWeight = "bold";
    
    
  }

  /*these are the methods for gallery implementation*/
  openModal() {
    document.getElementById('myModal').style.display = "block";
  }

  closeModal() {
    document.getElementById('myModal').style.display = "none";
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    var dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
    var captionText = document.getElementById("caption");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }


  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
}
