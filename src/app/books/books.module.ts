import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books.routing.module';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  imports: [CommonModule, FormsModule, BooksRoutingModule],
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BooksComponent,
    BookEditComponent
  ],
  exports: [BookListComponent]
})
export class BooksModule {}
