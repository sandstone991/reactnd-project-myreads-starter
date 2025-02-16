import React from "react";
export default function ChangeShelf(props) {
  //props.handleShelfUpdate
  const handleChange = (event) => {
    let shelf = event.target.value;
    props.handleShelfUpdate(shelf, props.bookID);
  };

  //bookID -> current book .. booksOwned is the books owned rigt now
  //Check the current book if it exits in books Owned return its shelf if it doesn't immediately return none

  const defaultValue = (book, booksOwned) => {
    let bookFound = booksOwned.find((bookOwned) => bookOwned.id === book.id);
    if (bookFound) {
      return bookFound.shelf;
    } else {
      return "none";
    }
  };

  return (
    <div className="book-shelf-changer">
      <select
        onChange={handleChange}
        defaultValue={defaultValue(props.bookID, props.booksOwned)}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
