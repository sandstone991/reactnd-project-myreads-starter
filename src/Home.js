import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'

class Home extends React.Component{

 state={
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
   async componentDidMount(){
        let bookList = await this.getBooks()
       console.log(bookList)
        this.setState({
            books:[...bookList]
        })
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
               <BookShelf bookList={this.state.books} type={'currentlyReading'} title={'Currently Reading'} bookChange={this.handleBooksChange}/>
               <BookShelf bookList={this.state.books} type={'wantToRead'} title={'Want to read'} bookChange={this.handleBooksChange}/>
               <BookShelf bookList={this.state.books} type={'read'} title={'Read'}  bookChange={this.handleBooksChange} />


            </div>
            </div>
            </div>
          </div>
      
        )
    }
}

export default Home;
            /*
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            */