import React from 'react'
import BookSearch from './Book'

export default function BookShelf (props){

    const filterBooks = (books)=>{
      return (books.filter(book=>book.shelf===props.type))
    }
return( 
                   <div className="bookshelf">
                  <h2 className="bookshelf-title">{props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookSearch bookList={filterBooks(props.bookList)} bookChange={props.bookChange}/>
                      </ol>
                      </div>
                      </div>
                      )
                      }
                      