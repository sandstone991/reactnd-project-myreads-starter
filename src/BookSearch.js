import React from 'react'
import './App.css'
import ChangeShelf from './changeShelf'
export default function BookSearch(props){

  return(
    props.bookList.map(book=> (
                    <li key={book.id}>
                     <div className="book" >
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                           <ChangeShelf bookID={book} bookChange={props.bookChange}/>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{Array.isArray(book.authors)?book.authors.toString():book.authors}</div>
                        </div>
                        </li>

    

      
    )
        
        
        )
)
}