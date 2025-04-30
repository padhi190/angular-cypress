import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];
  private booksSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  constructor() {
    // Initialize with some sample data
    this.addBook({ title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 });
    this.addBook({ title: '1984', author: 'George Orwell', publishedYear: 1949 });
  }

  getBooks(): Observable<Book[]> {
    return this.booksSubject.asObservable();
  }

  addBook(book: Book): void {
    book.id = this.books.length + 1;
    this.books.push(book);
    this.booksSubject.next([...this.books]);
  }

  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
      this.booksSubject.next([...this.books]);
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
    this.booksSubject.next([...this.books]);
  }
}