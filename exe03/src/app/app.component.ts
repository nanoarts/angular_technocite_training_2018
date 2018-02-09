import { Component } from '@angular/core';
import { Article } from './article/article.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulaire Angular';
  articles: Article[];
  nbrArticle: number;

  constructor() {
    this.articles = [
      new Article('Angular is the best', 'http://angular.io', 30),
      new Article('Vue is the best', 'http://vue.com', 20),
      new Article('Ember is the best', 'http://ember.io', 35),
    ];
    // this.votes = 35;
    // this.link = 'http://angular.io';
    // this.title = 'Angular is the best';
  }


  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(title.value, link.value);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
