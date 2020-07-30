import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { BreadListComponent } from './bread-list/bread-list.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { HeadingComponent } from './heading/heading.component';
import { HeroComponent } from './hero/hero.component';
import { NewsComponent } from './news/news.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { RelativetimePipe } from './pipe/relativetime.pipe';
import { TopComponent } from './top/top.component';
import { TrendingComponent } from './trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    HeroComponent,
    BreadListComponent,
    NewsComponent,
    HeadingComponent,
    PaginatorComponent,
    RelativetimePipe,
    CommentCardComponent,
    TopComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    TopComponent,
    ArticleListComponent,
    ArticleDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
