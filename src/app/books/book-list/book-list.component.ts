import { Component, OnInit } from '@angular/core';
import { Book } from '../contracts/book';
import { BookService } from '../lib/book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books = this.bookService.getBooks();

  constructor(private bookService: BookService) {}
}
