import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row' ;

  @Input() article: Article;

  constructor() {
    // this.votes = 35;
    // this.link = 'http://angular.io';
    // this.title = 'Angular is the best';
    // this.article = new Article('Angular is the best', 'http://angular.io', 30);
  }

    voteUp() {
     this.article.voteUp();
     return false;
    }

    voteDown() {
      this.article.voteDown();
      return false;
     }


  ngOnInit() {
  }

}
