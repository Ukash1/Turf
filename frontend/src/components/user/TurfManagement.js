import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TurfManagement.css';
import { Link } from 'react-router-dom';
// import UserManagement from './user';
// import AdminNavbar from './AdminNavbar';

const TurfManagement = () => {
  const [books, setBooks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newBook, setNewBook] = useState({
    name: '', imgSrc: '', amount: '', rating: ''
  });
  const [editingBook, setEditingBook] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '', imgSrc: '', amount: '', rating: ''
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/books/getall');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result.split(',')[1]); // Get Base64 string without data URL prefix
    };
    reader.readAsDataURL(file);
  };

  const addBook = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/books/add', {
        ...newBook,
        amount: parseFloat(newBook.amount),
        rating: parseFloat(newBook.rating)
      });
      setBooks([...books, response.data]);
      setNewBook({
        name: '', imgSrc: '', amount: '', rating: ''
      });
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding book', error);
    }
  };

  const updateBook = async () => {
    try {
      await axios.put(`http://localhost:8080/api/books/update/${editingBook.id}`, {
        ...editForm,
        amount: parseFloat(editForm.amount),
        rating: parseFloat(editForm.rating)
      });
      setBooks(books.map(book => (book.id === editingBook.id ? { ...book, ...editForm } : book)));
      setEditingBook(null);
      setEditForm({
        name: '', imgSrc: '', amount: '', rating: ''
      });
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating book', error);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:8080/api/books/delete/${bookId}`);
      setBooks(books.filter(book => book.id !== bookId));
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };

  return (
    <div className="turf-mana">
      {/* <AdminNavbar /> */}

      <div className="turf-management">
        <h1>Manage Books</h1>
        <button onClick={() => setShowAddModal(true)} className="book-action-button">Add Book</button>
    <Link to={'/user'}>
     <button className="book-action-button">User</button>
    </Link>   

        {/* Table View */}
        <table className="book-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Rating</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(books) && books.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>${book.amount}</td>
                <td>{book.rating}</td>
                <td>
                  {book.imgSrc && <img src={`data:image/jpeg;base64,${book.imgSrc}`} alt={book.name} className="book-image" />}
                </td>
                <td>
                  <button onClick={() => {
                    setEditingBook(book);
                    setEditForm({
                      name: book.name,
                      imgSrc: book.imgSrc,
                      amount: book.amount,
                      rating: book.rating
                    });
                    setShowEditModal(true);
                  }} className="book-action-button">Edit</button>
                  <button onClick={() => deleteBook(book.id)} className="book-delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Book Modal */}
        {showAddModal && (
          <div className="book-modal-overlay" onClick={() => setShowAddModal(false)}>
            <div className="book-modal-content" onClick={e => e.stopPropagation()}>
              <h2>Add Book</h2>
              <div className="book-modal-grid">
                <input
                  type="text"
                  placeholder="Name"
                  value={newBook.name}
                  onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, (base64) => setNewBook({ ...newBook, imgSrc: base64 }))}
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={newBook.amount}
                  onChange={(e) => setNewBook({ ...newBook, amount: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Rating"
                  value={newBook.rating}
                  onChange={(e) => setNewBook({ ...newBook, rating: e.target.value })}
                />
              </div>
              <button onClick={addBook} className="book-action-button">Add Book</button>
              <button onClick={() => setShowAddModal(false)} className="book-close-modal-button">Close</button>
            </div>
          </div>
        )}

        {/* Edit Book Modal */}
        {showEditModal && editingBook && (
          <div className="book-modal-overlay" onClick={() => setShowEditModal(false)}>
            <div className="book-modal-content" onClick={e => e.stopPropagation()}>
              <h2>Edit Book</h2>
              <div className="book-modal-grid">
                <input
                  type="text"
                  placeholder="Name"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, (base64) => setEditForm({ ...editForm, imgSrc: base64 }))}
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={editForm.amount}
                  onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Rating"
                  value={editForm.rating}
                  onChange={(e) => setEditForm({ ...editForm, rating: e.target.value })}
                />
              </div>
              <button onClick={updateBook} className="book-action-button">Update Book</button>
              <button onClick={() => setShowEditModal(false)} className="book-close-modal-button">Close</button>
            </div>
          </div>
        )}
      </div>
      {/* <UserManagement/> */}
    </div>
  );
};

export default TurfManagement;
