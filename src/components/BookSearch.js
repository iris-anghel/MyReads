import React, {Component} from 'react'
import Book from './Book'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

// step 4: implement book search
class BookSearch extends Component {

    state = {
        books: []
        // query: '',
        // hasError: false
    }

    // Book search query
    // onSearch = (query) => {
    //     if(!query) {
    //         this.setState({ 
    //             query: '',
    //             books: [],
    //             hasError: true})
    //     } else {
    //         this.setState({ query: query.trim() })
    //         BooksAPI.search(query).then(books => {
    //             this.setState({ books: books })
    //         })
    //         // this is not correct  
    //     }
    // }

    // handle the books' search: use the search method and return a promise
    onSearch = (event) => {
        const value = event.target.value
    
        if(value) {
          BooksAPI.search(value).then((books) => {
            if(!books || books.hasOwnProperty('error')) {
              this.setState({ books: [] })
            } else {
                this.setState({ books: books })
            }
          })
        } else {
          this.setState( { books: [] })
        }
      }

     // handle the books' shelf change, use the update method and return a promise
    onShelfChange = (book, shelf) => {
        book.shelf = shelf
        BooksAPI.update(book, shelf)
            .then( () => {
              this.setState({
                books: this.state.books.filter( (b) => b.id !== book.id).concat([book])})
            })  
        }

    render() {

        const {books} = this.state
        const {onShelfChange} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={this.onSearch}
                            // onChange={event => {this.onSearch(event.target.value)}}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    onShelfChange={onShelfChange}
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
