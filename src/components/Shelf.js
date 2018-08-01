import React from 'react'
import Book from './Book'

// step 2: render the next item, a shelf, as a functional stateless component
const Shelf = (props) => {

    const {books, shelf, onShelfChange} = props  
       
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2> 
                             
            <div className="bookshelf-books">
                <ol className="books-grid">
                {/* loop over each book and populate the shelf */}
                    {books.map((book) => (
                        <li key={book.title}>
                            <Book 
                                book={book}
                                shelf={shelf}
                                onShelfChange={onShelfChange}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Shelf