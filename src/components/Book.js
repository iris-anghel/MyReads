import React from 'react'
import ShelfChanger from './ShelfChanger'

// step 1: render the most basic item, a book, as a functional stateless component

const Book = (props) => {
    
    const {book, onShelfChange} = props
    const noCover = 'http://via.placeholder.com/128x193?text=No+Cover'
        
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" 
                    style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noCover })` 
                    }}>
                </div>
                <ShelfChanger
                    book={book}
                    onShelfChange={onShelfChange}
                />

                {/* moved to separate component */}
                {/* <div className="book-shelf-changer">
                    <select
                        value={book.shelf ? book.shelf : 'none'}
                        onChange={(event) => onShelfChange(book, event.target.value)}
                    >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div> */}
            </div>

            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(', '): ""}</div>
        </div>
    ) 
}

export default Book