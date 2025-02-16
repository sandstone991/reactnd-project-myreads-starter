import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import BookSearch from "./Book";
import * as BooksAPI from "./BooksAPI";

export default class SearchForBook extends React.Component {
  state = {
    query: "",
    bookList: [],
  };
  //Handle input into the state
  handleChange = async (event) => {
    event.preventDefault();
    this.setState({
      query: event.target.value,
    });
    //Call the search function
    this.callApiSearch(event.target.value);
  };
  //search into the api with the query the user has provided
  callApiSearch = async (query) => {
    //ajax
    let response = await BooksAPI.search(query);
    let books = await response;
    try {
      //If its an array set the state to it
      if (Array.isArray(books)) {
        this.setState({
          bookList: [...books],
        });
      }
      //if the value of the search input is empty don't show anything
      else if (this.state.query === "" || typeof books === "undefined") {
        this.setState({
          bookList: [],
        });
      }
      //if its anything other than an array *error* don't show anything
      else {
        this.setState({
          bookList: [],
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.handleChange}
                value={this.state.query}
              />
            </div>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookSearch
              bookList={this.state.bookList}
              booksOwned={this.props.books}
              bookChange={this.props.handleBooksChange}
              handleShelfUpdate={this.props.handleShelfUpdate}
            />
          </ol>
        </div>
      </div>
    );
  }
}
