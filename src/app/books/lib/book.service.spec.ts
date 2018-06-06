import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('Service: book', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });

    service = TestBed.get(BookService);
    httpMock = TestBed.get(HttpTestingController);
  });

  describe('When loading books is successful', () => {
    it('should yield a list of books', done => {
        service.getBooks().subscribe(books => {
            expect(books.length).toBe(0);
            done();
        });

        httpMock
          .expectOne(service.api)
          .flush([]);
    });
  });

  afterEach(() => httpMock.verify());
});
