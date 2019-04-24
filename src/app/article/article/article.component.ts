import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from "@angular/router";
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { Document } from '../../../models/document';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  document : Document;
  articles : Article [];
  
  constructor(
    private route : ActivatedRoute,
    private documentProvider : DocumentProvider
    ) { }

  ngOnInit() {
    
    let documentID = this.route.snapshot.paramMap.get('id').toString(); //get the id from url param
    
    if(documentID != null && documentID.localeCompare("")){
      this.documentProvider.get(documentID).subscribe(document => {
        this.document = document;
        this.articles = document.articles;
      });
    }
  }
}
