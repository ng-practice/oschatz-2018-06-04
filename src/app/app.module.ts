import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PlaygroundModule } from './playground/playground.module';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    BooksModule,
    PlaygroundModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
