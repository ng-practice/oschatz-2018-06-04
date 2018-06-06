import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlaygroundModule } from '../playground/playground.module';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlaygroundModule,
    BooksRoutingModule
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BooksComponent,
    BookEditComponent,
    BookCreateComponent
  ],
  exports: [BookListComponent]
})
export class BooksModule {}
