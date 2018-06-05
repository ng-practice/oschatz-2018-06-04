import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { CanLeaveGuard } from './lib/can-leave.guard';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        component: BookListComponent,
        path: ''
      },
      {
        component: BookDetailComponent,
        path: ':isbn'
      },
      {
        component: BookEditComponent,
        path: 'edit/:isbn'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
