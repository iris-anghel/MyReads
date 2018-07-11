import React from 'react'
import BookShelf from './BookShelf'

// step 3: render the next item, representing all bookshelves. Since it only needs a render method, create it as a normal function
const AllShelves = (props) => {

    const {shelves, books, onChangeShelf} = props

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
                            books={books}
                            onChangeShelf={onChangeShelf}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllShelves