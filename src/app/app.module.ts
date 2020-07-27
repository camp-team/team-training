import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { NewsComponent } from './news/news.component';

import { BreadListComponent } from './bread-list/bread-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent
    BreadListComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
