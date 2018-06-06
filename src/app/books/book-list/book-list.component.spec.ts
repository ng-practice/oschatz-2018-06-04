import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookService } from '../lib/book.service';
import { empty } from 'rxjs';
import { Book } from '../contracts/book';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  let books: Book[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, BookDetailComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'books/:isbn',
            component: BookDetailComponent
          }
        ])
      ],
      providers: [
        {
          provide: BookService,
          useFactory: () => ({
            getBooks: () => empty(),
            getBook: () => empty()
          })
        }
      ]
    }).compileComponents();

    books = [{ isbn: '123' } as any];
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    component.books = books;

    fixture.detectChanges();
  });

  describe('When the details link is clicked', () => {
    it('should navigate to details page', fakeAsync(() => {
      const detailsLink: HTMLAnchorElement = fixture.debugElement.query(
        By.css('[href]')
      ).nativeElement;

      detailsLink.click();
      tick();

      const location: Location = TestBed.get(Location);
      expect(location.path()).toContain('123');
      // expect(location.isCurrentPathEqualTo('/books/123')).toBe(true);
    }));
  });
});
