export interface Comment {
  id: string;
  articleId: string;
  userName: string;
  avatarUrl: string;
  body: string;
  thumbnailUrl: string;
  videoUrl: string;
  updatedAt: Date;
}
