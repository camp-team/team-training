import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../interfaces/comment';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent implements OnInit {
  @Input() comment: Comment;
  constructor() {}

  isPlaying: boolean;

  ngOnInit(): void {}

  start() {
    this.isPlaying = true;
  }
}
