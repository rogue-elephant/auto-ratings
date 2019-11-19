import { Component } from '@angular/core';
import * as Sentiment from 'sentiment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'auto-rating';
  public rating = 0;
  public longRating = 0;
  public reviewTitle: string;
  public userReview: string;

  updateRating() {
    const sentiment = new Sentiment().analyze(`${this.reviewTitle}.  ${this.userReview}`);
    this.rating = Math.min(5, Math.max(0, sentiment.score));
    this.longRating = Math.min(100, Math.max(0, this.rating * 20));
  }
}
