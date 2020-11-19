import axios from 'axios';

const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default {
  // Search books from Google API
  search: function (query) {
    return axios.get(baseURL + query);
  },
  // Get saved books from database
  getBooks: function () {
    return axios.get('/api/books');
  },
  // Save a new book to database
  saveBook: function (bookData) {
    return axios.post('/api/books', bookData);
  },
  // Delete a book from database
  deleteBook: function (id) {
    return axios.delete('/api/books/' + id);
  },
};