import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import BookShelves from './components/BookShelves'
import BookSearch from './components/BookSearch'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
    state = {
        books: []
    };

    // fetch external data from the BooksAPI using getAll method and return a promise
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        }).catch(error =>
            console.log(error))
    }

    //handle the books' shelf change, use the update method and return a promise
    onShelfChange = (book, shelf) => {
        book.shelf = shelf
        BooksAPI.update(book, shelf).then( () => {
            // book.shelf = shelf
            this.setState({
                books: this.state.books.filter( (b) => b.id !== book.id).concat([book])
            })
        }).catch(error =>
            console.log(error))
    }
    
    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <BookShelves
                        books={this.state.books}
                        onShelfChange={this.onShelfChange}
                    />
                )}/>
                <Route path='/search' render={() => (
                    <BookSearch
                        books={this.state.books}
                        // shownBooks={this.state.books} v2
                        onShelfChange={this.onShelfChange} 
                        // onShelfChange={(book, shelf) => this.onShelfChange(book, shelf)}
                    />
                )}/>
            </div>  
        )
    }
}

export default BooksApp