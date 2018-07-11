import React from 'react'
import Book from './Book'

// step 2: render the next item, a bookshelf. Since it only needs a render method, create it as a normal function
const BookShelf = (props) => {

    const {shelf, books, onChangeShelf} = props  
       
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2> 
                             
            <div className="bookshelf-books">
                <ol className="books-grid">
                {/* loop over each book and create the shelf */}
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book 
                                book={book}
                                onChangeShelf={onChangeShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf