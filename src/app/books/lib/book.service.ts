import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../contracts/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  api = 'http://localhost:4730/books'

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/${isbn}`);
  }
}
