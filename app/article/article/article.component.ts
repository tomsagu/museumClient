import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  route : ActivatedRoute;
  documentId : String;
  constructor() { }

  ngOnInit() {
    //No reconoce snapshot.
    this.documentId = this.route.snapshot.paramMap.get('id').toString(); //get the documentId from url param
    console.log(this.documentId);
  }

}
