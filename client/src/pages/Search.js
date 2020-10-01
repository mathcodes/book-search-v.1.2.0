import React, { useState } from "react";
import API from "../utils/API";
import { Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

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
    <Container>
      <Row>
        <Container fluid>
          <h4>Book Search</h4>
          <Input
            placeholder="Search Google Books"
            onChange={handleInputChange}
          />
          <FormBtn onClick={handleFormSubmit}>Search</FormBtn>
        </Container>
      </Row>
      <Row>
        <Container>
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
                      <h5 className="card-title">
                        {book.volumeInfo.title}
                      </h5>
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
                      <button
                        className="btn btn-dark"
                        onClick={(e) =>
                          handleSaveBook(e, {
                            title: book.volumeInfo.title,
                            image: book.volumeInfo.imageLinks
                              ? book.volumeInfo.imageLinks
                                .thumbnail
                              : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",
                            author: book.volumeInfo.authors[0],
                            description:
                              book.volumeInfo.description,
                            link: book.volumeInfo.infoLink,
                          })
                        }
                      >
                        SAVE
                        </button><p></p>
                      <a
                        href={book.volumeInfo.infoLink}
                        rel="noopener noreferrer"
                        target={"_blank"}
                        className="card-link"
                        style={{ padding: '0px', textAlign: 'center' }}
                      >
                        Purchase
                        </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
              <h5>No Results to Display</h5>
            )}
        </Container>
      </Row>
    </Container>
  );
};
export default Search;