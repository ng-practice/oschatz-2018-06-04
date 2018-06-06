import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Book } from '../contracts/book';
import { BookService } from '../lib/book.service';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private books: BookService) {}

  ngOnInit() {
    this.book$ = this.route.params
      .pipe(
        switchMap((params: { isbn: string }) => this.books.getBook(params.isbn))
      );
  }
}
