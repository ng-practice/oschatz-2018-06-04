import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../lib/book.service';
import { switchMap } from 'rxjs/operators';
import { Book } from '../contracts/book';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {} as any;

  constructor(private route: ActivatedRoute, private books: BookService) {}

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => this.books.getBook(params.isbn)))
      .subscribe(book => (this.book = book));
  }

  saveChanges() {
    console.log(this.book);
    this.books.updateBook(this.book).subscribe();
  }
}
