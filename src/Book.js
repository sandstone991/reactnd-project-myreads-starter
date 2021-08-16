import React from "react";
import "./App.css";
import ChangeShelf from "./changeShelf";
import img from "./icons/thumbnail.jpg";
export default function BookSearch(props) {
  return props.bookList.map((book) => {
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  typeof book.imageLinks == "undefined"
                    ? img
                    : book.imageLinks.thumbnail
                })`,
              }}
            />
            <ChangeShelf
              bookID={book}
              bookChange={props.bookChange}
              booksOwned={props.booksOwned}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {Array.isArray(book.authors)
              ? book.authors.toString()
              : book.authors}
          </div>
        </div>
      </li>
    );
  });
}
