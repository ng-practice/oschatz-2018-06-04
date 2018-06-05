import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Book } from '../contracts/book';
import { BookService } from '../lib/book.service';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  book: Book = {} as any;
  subscription = Subscription.EMPTY;

  constructor(private route: ActivatedRoute, private books: BookService) {}

  ngOnInit() {
    // Advanced Level
    this.subscription = this.route.params
      .pipe(
        switchMap((params: { isbn: string }) => this.books.getBook(params.isbn))
      )
      .subscribe(book => (this.book = book));
      
    // Beginner Level
    // this.subscription = this.route.params
    //   .subscribe((params: { isbn: string }) =>
    //     this.bookService
    //       .getBook(params.isbn)
    //       .subscribe(book => (this.book = book))
    //   );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
