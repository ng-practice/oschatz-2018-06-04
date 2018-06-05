import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { BookListComponent } from './books/book-list/book-list.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
