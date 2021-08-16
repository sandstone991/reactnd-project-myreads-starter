import React from "react";
import "./App.css";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class Home extends React.Component {
  async componentDidMount() {
    await this.props.handleBooksChange();
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                bookList={this.props.books}
                type={"currentlyReading"}
                title={"Currently Reading"}
                handleShelfUpdate={this.props.handleShelfUpdate}
              />
              <BookShelf
                bookList={this.props.books}
                type={"wantToRead"}
                title={"Want to read"}
                handleShelfUpdate={this.props.handleShelfUpdate}
              />
              <BookShelf
                bookList={this.props.books}
                type={"read"}
                title={"Read"}
                handleShelfUpdate={this.props.handleShelfUpdate}
              />
              <div className="open-search">
                <Link to="/search">
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
