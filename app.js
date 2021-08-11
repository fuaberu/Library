//book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
//Ui class
class Ui {
    static displayBooks () {
        const storedBooks = [
            {
                title: "mwecw",
                author: "dscs",
                pages: 8,
                read: true
            },
            {
                title: "mwecw",
                author: "dscs",
                pages: 8,
                read: true
            }
        ];

        const books = storedBooks;

        books.forEach(book => Ui.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete" >x</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(element) {
        if(element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
        }
    }

    static clearRow() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
        document.getElementById('read').value = '';
    }
}


//display boocks when page opens
document.addEventListener("DOMContentLoaded", Ui.displayBooks);

//add books
document.querySelector('.form-input').addEventListener('submit', (event) => {
    //to prevent from updating
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    //new Book
    const book = new Book(title,author,pages,read);

    //add new book
    Ui.addBookToList(book)

    //clear the input field
    Ui.clearRow()
});

//remove a book
document.getElementById('book-list').addEventListener('click', (event) => {
    Ui.deleteBook(event.target);
});
//open the form
function openForm() {
    document.getElementById("form").classList.remove("fade-out");
    document.getElementById("form").classList.add("fade-in");
};

// close the form
function closeForm() {
    document.getElementById("form").classList.remove("fade-in");
    document.getElementById("form").classList.add("fade-out");
};