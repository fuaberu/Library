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
                title: "Harry Potter and the Philosopher's Stone",
                author: "J. K. Rowling",
                pages: 223,
                read: false
            },
            {
                title: "Moby Dick",
                author: "Herman Melville",
                pages: 378,
                read: true
            }
        ];

        const books = storedBooks;

        books.forEach(book => Ui.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');
        if (document.getElementById('read').checked == true || book.read == true) {
            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><a href="#" class="btn btn-success btn-sm readBtn">Read</a></td>
            <td><a href="#" class="btn btn-danger btn-sm delete" >x</a></td>
            `;
        } else {
            console.log(book.read)
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td><a href="#" class="btn btn-danger btn-sm readBtn">Not Read</a></td>
                <td><a href="#" class="btn btn-danger btn-sm delete" >x</a></td>
            `;
        }

        list.appendChild(row);
    }

    static changeReadStatus(element) {
        if(element.classList.contains('readBtn')) {
            if (element.classList.contains('btn-success')) {
                element.classList.add('btn-danger')
                element.classList.remove('btn-success')
                element.textContent = 'Not Read';
            } else {
                element.classList.remove('btn-danger')
                element.classList.add('btn-success')
                element.textContent = 'Read';
            }
        }
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
        document.getElementById('read').checked = false;
    }
}

//display books when page opens
document.addEventListener("DOMContentLoaded", Ui.displayBooks);

//add books
document.querySelector('.form-input').addEventListener('submit', (event) => {
    //to prevent from updating
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    if (title === '' || author === '' || pages === '') {
        alert('please fill in all empty field.');
    } else {
        //new Book
        const book = new Book(title,author,pages,read);
    
        //add new book
        Ui.addBookToList(book)
    
        //clear the input field
        Ui.clearRow()
    }
});

//remove a book 
document.getElementById('book-list').addEventListener('click', (event) => {
    Ui.deleteBook(event.target);
});

//change the read option
document.getElementById('book-list').addEventListener('click', (event) => {
    Ui.changeReadStatus(event.target);
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