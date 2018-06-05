import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../contracts/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  api = 'http://localhost:4730/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.api);
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/${isbn}`);
  }

  updateBook(book: Book) {
    return this.http.put(`${this.api}/${book.isbn}`, book);
  }
}
