import { Component, OnInit } from '@angular/core';
import { Comment } from '../interfaces/comment';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  comment: Comment = {
    id: 'xxxx',
    articleId: 'xxxx',
    userName: 'Jonathan Walker',
    avatarUrl: 'assets/comment-card/avatar.png',
    body:
      'In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.',
    thumbnailUrl: 'assets/comment-card/video-thumbnail.png',
    videoUrl: 'assets/comment-card/video-src-sample.mp4',
    updatedAt: new Date(),
  };
}
