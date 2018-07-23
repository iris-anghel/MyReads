import React, {Component} from 'react'
import Book from './Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

// step 4: implement book search
class BookSearch extends Component {

    state = {
        books: []
        // query: ''
    }

    // handle the books' search: use the search method and return a promise
    onSearch = (event) => {        
        let value = event.target.value.trim();

        if (value) {
            BooksAPI.search(value).then(response => {
                if (response.error) {
                    this.setState({
                        books: []
                    })
                } else {
                    this.setState({
                        books: response.map(item => {
                        // check for duplicates in bookshelves
                        // I don't think it works
                            let book = this.props.books.find(book => book.id === item.id)
                            return book || item
                        })
                    })
                }
            }).catch((response) => {
                console.log('Please review "SEARCH_TERMS.md" for accepted search terms')
            })
        } else {
            this.setState({
                books: []
            });
        }
    }

    render() {
        const {books} = this.state
        const {onBookShelfChange} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={this.onSearch}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                        <ol className="books-grid">
                            {books.map(book => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        onBookShelfChange={onBookShelfChange}
                                    />
                                </li>
                            ))}
                        </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch
