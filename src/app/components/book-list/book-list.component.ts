import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookFormComponent],
  template: `
    <h2>Books</h2>
    <ul>
      <li *ngFor="let book of books">
        {{ book.title }} by {{ book.author }} ({{ book.publishedYear }})
        <button (click)="editBook(book)">Edit</button>
        <button (click)="deleteBook(book.id!)">Delete</button>
      </li>
    </ul>
    <app-book-form [bookToEdit]="selectedBook" (bookSubmitted)="onBookSubmitted($event)"></app-book-form>
  `
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  editBook(book: Book): void {
    this.selectedBook = { ...book };
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id);
  }

  onBookSubmitted(book: Book): void {
    if (book.id) {
      this.bookService.updateBook(book);
    } else {
      this.bookService.addBook(book);
    }
    this.selectedBook = null;
  }
}