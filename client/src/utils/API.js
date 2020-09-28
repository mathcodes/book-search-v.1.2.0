import axios from "axios";
// const APIKEY = "AIzaSyCOvx3OS4Ceq3UAB_GK5YhqGntWEzjoWmQ"; 
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Gets all books
  getBooks: title => {
    return axios.get(URL + title);
  },
 // Gets all saved books
 getSavedBooks: () => {
	return axios.get("/api/books/");
},
   // Deletes the book with the given id
   deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  },

  // Saves a book to the database
  saveBook: bookData => {
    return axios.post("/api/books", bookData);
  }
};