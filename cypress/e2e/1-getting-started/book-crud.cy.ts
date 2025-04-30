describe('Book CRUD Operations', () => {
  beforeEach(() => {
    cy.visit('/');
    //cy.visit('http://localhost:4200/');
  });

  it('should display the book list', () => {
    cy.contains('h1', 'Book Management System');
    cy.contains('li', 'To Kill a Mockingbird by Harper Lee (1960)');
    cy.contains('li', '1984 by George Orwell (1949)');
  });

  it('should add a new book', () => {
    const newBook = {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedYear: 1925
    };

    cy.get('input[name="title"]').type(newBook.title);
    cy.get('input[name="author"]').type(newBook.author);
    cy.get('input[name="publishedYear"]').type(newBook.publishedYear.toString());
    cy.contains('button', 'Add Book').click();

    cy.contains('li', `${newBook.title} by ${newBook.author} (${newBook.publishedYear})`);
  });

  it('should edit an existing book', () => {
    cy.contains('li', 'To Kill a Mockingbird').within(() => {
      cy.contains('button', 'Edit').click();
    });

    cy.get('input[name="title"]').clear().type('To Kill a Mockingbird (Updated)');
    cy.contains('button', 'Update Book').click();

    cy.contains('li', 'To Kill a Mockingbird (Updated) by Harper Lee (1960)');
  });

  it('should delete a book', () => {
    cy.contains('li', '1984').within(() => {
      cy.contains('button', 'Delete').click();
    });

    cy.contains('li', '1984').should('not.exist');
  });
});
