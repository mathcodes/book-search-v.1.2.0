import React, { useState } from "react";
import API from "../utils/API";
import { Rows, ContainerCust } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { Button, ButtonToolbar, Card, Col, Row } from "react-bootstrap";

const Search = () => {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState("");

  // Handles updating component state when the user types into the input field
  const handleInputChange = e => {
    const { value } = e.target;
    setSearchBook(value);
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  const handleFormSubmit = e => {
    e.preventDefault();
    API.getBooks(searchBook)
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  };

  const handleSaveBook = (e, data) => {
    e.preventDefault();

    API.saveBook(data)
      .then((res) => alert("Book Saved!"))
      .catch((err) => console.log(err));
  };

  return (
    <ContainerCust>
      <Rows>
        <ContainerCust fluid>
          <h4>Book Search</h4>
          <Input
            placeholder="Search Google Books"
            onChange={handleInputChange}
          />
          <FormBtn onClick={handleFormSubmit}>Search</FormBtn>
        </ContainerCust>
      </Rows>
      <Rows>
        <ContainerCust>
          {books.length ? (
            <div
              className="row row-cols-3"
              style={{ justifyContent: "center" }}
            >
              {books.map((book) => {
                return (
                  <div
                    key={book.id}
                    className="card col-sm-3"
                    style={{ margin: "15px" }}
                  >
                    <img
                      src={
                        book.volumeInfo.imageLinks
                          ? book.volumeInfo.imageLinks.thumbnail
                          : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
                      }
                      className="card-img-top"
                      style={{ height: 260 }}
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title"><span style={{ fontWeight: "bold" }}>{book.volumeInfo.title}</span>
                      </h5>
                      <h6 className="card-title">Published by:<span style={{ color: "green" }}> {book.volumeInfo.authors}</span></h6>
                      <p className="card-text">
                        {book.volumeInfo.description
                          ? book.volumeInfo.description.length >=
                            120
                            ? book.volumeInfo.description.slice(
                              0,
                              120
                            )
                            : book.volumeInfo.description
                          : "No Description Available"} ...
                      </p>


                      <Button
                        className="btn btn-dark"
                        onClick={(e) =>
                          handleSaveBook(e, {
                            title: book.volumeInfo.title,
                            image: book.volumeInfo.imageLinks
                              ? book.volumeInfo.imageLinks
                                .thumbnail
                              : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",
                            author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : "No Author Available",
                            description:
                              book.volumeInfo.description,
                            link: book.volumeInfo.infoLink,
                          })
                        }
                      >
                        SAVE
                      </Button>
                      <a
                        href={book.volumeInfo.infoLink}
                        rel="noopener noreferrer"
                        target={"_blank"}
                        className="card-link"
                        style={{ padding: '0px', textAlign: 'center' }}
                      >
                        <Button variant="primary">Purchase</Button>

                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h5>No Results to Display</h5>
          )}
        </ContainerCust>
      </Rows>
    </ContainerCust>
  );
};
export default Search;