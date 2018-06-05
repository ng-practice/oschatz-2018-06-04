import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books.routing.module';

@NgModule({
  imports: [CommonModule, BooksRoutingModule],
  declarations: [BookListComponent, BookDetailComponent, BooksComponent],
  exports: [BookListComponent]
})
export class BooksModule {}
