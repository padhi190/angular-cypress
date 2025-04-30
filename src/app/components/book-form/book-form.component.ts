import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h3>{{ bookToEdit ? 'Edit Book' : 'Add New Book' }}</h3>
    <form (ngSubmit)="onSubmit()">
      <div>
        <label for="title">Title:</label>
        <input id="title" [(ngModel)]="book.title" name="title" required>
      </div>
      <div>
        <label for="author">Author:</label>
        <input id="author" [(ngModel)]="book.author" name="author" required>
      </div>
      <div>
        <label for="publishedYear">Published Year:</label>
        <input id="publishedYear" [(ngModel)]="book.publishedYear" name="publishedYear" type="number" required>
      </div>
      <button type="submit">{{ bookToEdit ? 'Update' : 'Add' }} Book</button>
    </form>
  `
})
export class BookFormComponent implements OnChanges {
  @Input() bookToEdit: Book | null = null;
  @Output() bookSubmitted = new EventEmitter<Book>();

  book: Book = { title: '', author: '', publishedYear: 0 };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookToEdit'] && this.bookToEdit) {
      this.book = { ...this.bookToEdit };
    }
  }

  onSubmit(): void {
    this.bookSubmitted.emit(this.book);
    this.book = { title: '', author: '', publishedYear: 0 };
  }
}