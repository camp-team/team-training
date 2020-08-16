import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadListComponent } from './bread-list/bread-list.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { DetailHeroComponent } from './detail-header/detail-hero/detail-hero.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeadingComponent } from './heading/heading.component';
import { NewsComponent } from './news/news.component';
import { RelativetimePipe } from './pipe/relativetime.pipe';
// import { PaginatorComponent } from './paginator/paginator.component';
// import { TopComponent } from './top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    BreadListComponent,
    NewsComponent,
    HeadingComponent,
    FooterComponent,
    HeaderComponent,
    RelativetimePipe,
    CommentCardComponent,
    // PaginatorComponent,
    // TopComponent,
    DetailHeaderComponent,
    DetailHeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
