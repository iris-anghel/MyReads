import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import BookShelves from './components/BookShelves'
import Book from './components/Book'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
    state = {
        books: [],
        query: '',
        showBooks: []
    }

    //handle the books' shelf change, use the update method and return a promise
    updateShelf = (book, shelf) => {
        let books
        if (this.state.books.findIndex(b => b.id === book.id) > 0) {
        // change the position of an existing book in the shelf
        books = this.state.books.map(b => {
            if (b.id === book.id) {
                return {...book, shelf}
            } else {
                return b
            }
        })
            } else {
                // add a new book to the shelf
                books = [...this.state.books, {...book, shelf}]
            }

            this.setState({books})

            BooksAPI.update(book, shelf)
                .then((data) => {
                }).catch(error => {
                    console.log(this.state.searchError)
                })
    }
 
    // fetch external data from the BooksAPI using getAll method and return a promise
    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState({books})
        }).catch( () => {
            console.log('An error occured while fetching data from BooksAPI')
        })
    }

    updateQuery = (query) => {
        this.setState({query: query})
        let showBooks = []
        if (query) {
            BooksAPI.search(query).then(response => {
                if (response.length) {
                    showBooks = response.map(b => {
                        const index = this.state.books.findIndex(c => c.id === b.id)
                            if( index >= 0 ) {
                              return this.state.books[index]
                            } else {
                              return b
                            }
                    })
                }
                this.setState({showBooks})
            }).catch(error => {
                console.log(error)
            })
        } else {
            this.setState({showBooks})
        }
    }

    render() {
        const {query} = this.state

        return (
            <div className="app">

                <Route exact path="/search" render={() => (
                    <div className="search-books">

                        <div className="search-books-bar">
                            <Link className="close-search" to="/">Close</Link>
                            <div className="search-books-input-wrapper">
                                <input type="text"
                                    placeholder="Search by title or author"
                                    value={query}
                                    onChange={(event) => this.updateQuery(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="search-books-results">
                            <ol className="books-grid">
                                {this.state.showBooks.map((book, i) => (
                                    <Book 
                                        key={i}
                                        book={book}
                                        onUpdateBook={(book, shelf) => this.updateShelf(book, shelf)}/>
                                ))}
                            </ol>
                        </div>

                    </div>
                )} 
                />

                <Route exact path="/" render={() => (
                    <BookShelves 
                        books={this.state.books}
                        onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)}/>
                )}
                />

            </div>  
        )
    }
}

export default BooksApp;