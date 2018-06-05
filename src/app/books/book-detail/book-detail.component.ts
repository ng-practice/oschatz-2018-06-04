import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../lib/book.service';
import { Book } from '../contracts/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  book: Book;
  subscription = Subscription.EMPTY;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe((params: { isbn: string }) =>
        this.bookService
          .getBook(params.isbn)
          .subscribe(book => (this.book = book))
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
