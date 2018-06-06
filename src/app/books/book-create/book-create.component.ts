import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      abstract: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  createBook() {
    console.log(this.form.value);
    this.form.reset();
  }
}
