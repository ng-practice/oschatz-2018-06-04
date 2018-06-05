import { Component, OnInit } from '@angular/core';
import { Book } from '../contracts/book';
import { BookService } from '../lib/book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe(
        books => (this.books = books),
        err => {},
        () => console.info('NO DATA TO SHOW')
      );
  }
}
