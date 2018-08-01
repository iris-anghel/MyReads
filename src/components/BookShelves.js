import React from 'react'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'

// step 3: render the next item, representing all bookshelves. Same, as a functional stateless component
const BookShelves = (props) => {

    const {books, title, onShelfChange} = props
    const shelves = [
        {
            name: 'currentlyReading',
            title: 'Currently Reading'
        },
        {
            name: 'wantToRead',
            title: 'Want To Read'
        },
        {
            name: 'read',
            title: 'Read'
        }
    ]

    return (
        <div className="list-books">

            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
            {/* filter by shelf name */}
                {shelves.map((shelf) => (
                    <div key={shelf.name}>
                        <Shelf 
                            shelf={shelf}
                            // books={books}
                            title={title}
                            books={books.filter(book => book.shelf === shelf.name)}
                            onShelfChange={onShelfChange}
                        />
                    </div>
                ))}
            </div>

            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
            
        </div>
    )
}

export default BookShelves