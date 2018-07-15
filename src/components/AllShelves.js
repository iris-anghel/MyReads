import React from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'

// step 3: render the next item, representing all bookshelves. Since it only needs a render method, create it as a normal function
const AllShelves = (props) => {

    const {books, onChangeShelf} = props
    const shelves = [
        {
            // add name????
            id: 'currentlyReading',
            title: 'Currently Reading',
            books: books.filter(book => book.shelf === 'currentlyReading')
        },
        {
            id: 'wantToRead',
            title: 'Want To Read',
            books: books.filter(book => book.shelf === 'wantToRead')
        },
        {
            id: 'read',
            title: 'Read',
            books: books.filter(book => book.shelf === 'read')
        }
    ]

    return (
        <div className="list-books">

            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                {shelves.map((shelf) => (
                    <div key={shelf.id}>
                        <BookShelf 
                            shelf={shelf}
                            books={shelf.books}
                            title={shelf.title}
                            // books={books.filter(book => book.shelf === shelf.shelfName)}
                            onChangeShelf={onChangeShelf}
                        />
                    </div>
                ))}
            </div>

            <div className="open-search">
                <Link to="/search">Add  a book</Link>
            </div>
        </div>
    )
}

export default AllShelves