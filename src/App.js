import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import SearchForBook from './searchForBook'


class BooksApp extends React.Component {
  state = {
  
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(<Home />)} /> 
        <Route exact path='/search' render={()=>(<SearchForBook/>)} />
        
      </div>
    )
  }
}

export default BooksApp
