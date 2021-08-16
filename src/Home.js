import React from 'react'
import './App.css'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class Home extends React.Component{

   async componentDidMount(){
      await this.props.handleBooksChange()
   }
  
    render(){
        return(

             <div className="app">
     
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
               <BookShelf bookList={this.props.books} type={'currentlyReading'} title={'Currently Reading'} bookChange={this.props.handleBooksChange}/>
               <BookShelf bookList={this.props.books} type={'wantToRead'} title={'Want to read'} bookChange={this.props.handleBooksChange}/>
               <BookShelf bookList={this.props.books} type={'read'} title={'Read'}  bookChange={this.props.handleBooksChange} />
               <div className="open-search">
              <Link to='/search'><button>Add a book</button></Link>
            </div>

            </div>
            </div>
            </div>
          </div>
      
        )
    }
}

export default Home;
        