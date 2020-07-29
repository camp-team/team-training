import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrendingComponent } from './trending/trending.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { NewsComponent } from './news/news.component';
import { BreadListComponent } from './bread-list/bread-list.component';
import { HeadingComponent } from './heading/heading.component';
import { HeroComponent } from './hero/hero.component';
import { TopComponent } from './top/top.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingComponent,
    HeroComponent,
    BreadListComponent,
    NewsComponent,
    HeadingComponent,
    PaginatorComponent,
    TopComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
