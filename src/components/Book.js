import React from 'react'

// step 1: render the most basic item, a book. Since it only needs a render method, create it as a normal function
// maybe make the shelf changer a separate component
const Book = (props) => {
    const { book, onChangeBookShelf } = props

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" 
                    style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` 
                    }}>
                </div>

                <div className="book-shelf-changer">
                    <select
                        value={book.shelf ? book.shelf : 'none'}
                        onChange={(event) => onChangeBookShelf(book, event.target.value)}
                        // this doesn't work
                    >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>

            </div>

            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )  
}

export default Book