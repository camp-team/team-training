import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadListComponent } from './bread-list/bread-list.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeadingComponent } from './heading/heading.component';
import { NewsComponent } from './news/news.component';
import { RelativetimePipe } from './pipe/relativetime.pipe';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { DetailHeroComponent } from './detail-header/detail-hero/detail-hero.component';
import { CardLargeComponent } from './card-large/card-large.component';

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
    DetailHeaderComponent,
    DetailHeroComponent,
    CardLargeComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
