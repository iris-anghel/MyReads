import React, {Component} from 'react'
import Book from './Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

// step 4: implement book search
class BookSearch extends Component {

    state = {
        query: "",
        shownBooks: []
    }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.searchBooks(query)
    }

    searchBooks = (query) => {
        if (query) {
            //display books that match the search query
            BooksAPI.search(query).then((shownBooks) => {
                //if the query doesn't match the SEARCH_TERMS, show no results
                if (shownBooks.error) {
                    this.setState({ shownBooks: [] })
                } else {
                    this.setState({ shownBooks: shownBooks })
                }
            }).catch(error => {
                console.log(error)
            })
        } else {
            this.setState({ shownBooks: [] })
        }
    }
    
    render() {
        // got help on slack with this. not the most elegent solution, but in the displayed results list, all shelves were set to "none"
        this.state.shownBooks.map((shownBooks) => {
            shownBooks.shelf = "none"
            this.props.books.map((book) => {
                shownBooks.id === book.id ? shownBooks.shelf = book.shelf : ""}
            )
        })

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.shownBooks
                            .map((shownBooks) =>
                            <li key={shownBooks.id}>
                                <Book
                                    book={shownBooks}
                                    onShelfChange={this.props.onShelfChange}
                                    shelf={shownBooks.shelf}
                                />
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        )   
    }
}

export default BookSearch
