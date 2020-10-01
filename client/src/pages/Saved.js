import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API"

const Saved = () => {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);


  // Loads all saved books and sets them to books
  const loadSavedBooks = async () => {
      try {
          const saved = await API.getSavedBooks();
          setBooks(saved.data);
      } catch (err) {
          throw err;
      }
  }

  // Loads all books
  useEffect(() => {
      loadSavedBooks();
  }, [books]);

   // Deletes a book from the database with a given id, then reloads books from the db
  const handleDeleteBook = async (id) => {
      try {
          await API.deleteBook(id)
          const savedBooks = books.filter(book => book.id !== id);
          setBooks(savedBooks);
      } catch (err) {
          throw err;
      }
  }

  return (
    <Container fluid>
      <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
      <Row>
        {books.length ? (
          <div
            className='row row-cols-3'
            style={{ justifyContent: 'center' }}
          >
            {books.map((book) => {
              return (
                <div
                  key={book._id}
                  className='card col-sm-3'
                  style={{ margin: '5px' }}
                >
                  <img
                    src={
                      book.image
                        ? book.image
                        : 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png'
                    }
                    className='card-img-top'
                    style={{ height: 300 }}
                    alt='...'
                  ></img>
                  <div className='card-body'>
                    <h5 className='card-title'>{book.title}</h5>
                    <p className='card-text'>
                      {book.description
                        ? book.description.length >= 200
                          ? book.description.slice(0, 200)
                          : book.description
                        : 'No Description Available'}
                    </p>
                    <button
                      className='btn btn-dark'
                      onClick={() => handleDeleteBook(book._id)}
                    >
                      Delete
                    </button>
                    <a
                      href={book.link}
                      rel='noopener noreferrer'
                      target={'_blank'}
                      className='card-link'
                      style={{ padding: '20px', textAlign: 'center' }}
                    >
                      Book Link
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h5>No Results to Display</h5>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default Saved;