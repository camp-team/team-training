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
  // dummy: DummyData = {
  //   userName: 'Jonathan Walker',
  //   avatarUrl: '/assets/comment-card/avatar.png',
  //   body:
  //     'In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.',
  //   thumbnailUrl: '/assets/comment-card/video-thumbnail.png',
  //   videoUrl: '/assets/comment-card/video-src-sample.mp4',
  //   updatedAt: new Date(),
  // };

  ngOnInit(): void {}

  start() {
    this.isPlaying = true;
  }
}
