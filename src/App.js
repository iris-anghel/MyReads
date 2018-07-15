import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import AllShelves from './components/AllShelves'
import BookSearch from './components/BookSearch'
import * as BooksAPI from './BooksAPI'

// import all components and render them
class BooksApp extends Component {
    state = {
        books: []
    }

    // fetch external data from the BooksAPI using getAll method and return a promise
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    // handle the books' shelf change, use the update method and return a promise
    // must I add it also here ???????????
    onShelfChange = (book, shelf) => {
        book.shelf = shelf
        BooksAPI.update(book, shelf)
            .then( () => {
                this.setState({
                    books: this.state.books.filter( (b) => b.id !== book.id).concat([book])})
            })  
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <AllShelves 
                        books={this.state.books}
                        onShelfChange={this.onShelfChange}
                    />
                )}/>
                <Route path='/search' render={() => (
                    <BookSearch
                        books={this.state.books}
                        onShelfChange={this.onShelfChange} 
                    />
                )}/>
            </div>  
        )
    }
}

export default BooksApp