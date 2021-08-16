import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import SearchForBook from './searchForBook'


class BooksApp extends React.Component {
  state = {
   books:[]
  }
    getBooks = async()=>{
        let bookList = await BooksAPI.getAll();
        return bookList
   }
   handleBooksChange = async ()=>{
  let bookList = await this.getBooks()
   this.setState({
            books:[...bookList]
        })
 }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(<Home books={this.state.books} handleBooksChange={this.handleBooksChange}/>)} /> 
        <Route exact path='/search' render={()=>(<SearchForBook books={this.state.books}  handleBooksChange={this.handleBooksChange} />)} />
        
      </div>
    )
  }
}

export default BooksApp
