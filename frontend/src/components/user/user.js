import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  './User.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newUser, setNewUser] = useState({ email: '', password: '' });
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users');
      setUsers(response.data);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Failed to fetch users.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/register', newUser);
      setNewUser({ email: '', password: '' });
      fetchUsers();
      setShowAddModal(false);
    } catch (err) {
      console.error('Error adding user:', err);
      setError('Failed to add user.');
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleEditUser = async () => {
    try {
      await axios.put(`http://localhost:8080/api/users/email/${editingUser.email}`, editForm);
      setUsers(users.map(user => (user.email === editingUser.email ? { ...user, ...editForm } : user)));
      setEditingUser(null);
      setEditForm({ email: '', password: '' });
      setShowEditModal(false);
    } catch (err) {
      console.error('Error updating user:', err);
      setError('Failed to update user.');
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error('Error deleting user:', err);
      setError('Failed to delete user.');
    }
  };

  return (
    <div className="user-management">
      <h2>Manage Users</h2>
      {error && <p className="error">{error}</p>}
      <button onClick={() => setShowAddModal(true)} className="user-action-button">Add User</button>

      {/* Table View */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>
                <button onClick={() => {
                  setEditingUser(user);
                  setEditForm({
                    email: user.email,
                    password: user.password,
                  });
                  setShowEditModal(true);
                }} className="user-action-button">Edit</button>
                <button onClick={() => handleDeleteUser(user.id)} className="user-delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="user-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="user-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Add User</h2>
            <div className="user-modal-grid">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newUser.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={newUser.password}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleAddUser} className="user-action-button">Add User</button>
            <button onClick={() => setShowAddModal(false)} className="user-close-modal-button">Close</button>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && editingUser && (
        <div className="user-modal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="user-modal-content" onClick={e => e.stopPropagation()}>
            <h2>Edit User</h2>
            <div className="user-modal-grid">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={editForm.email}
                onChange={handleEditInputChange}
                disabled
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={editForm.password}
                onChange={handleEditInputChange}
              />
            </div>
            <button onClick={handleEditUser} className="user-action-button">Update User</button>
            <button onClick={() => setShowEditModal(false)} className="user-close-modal-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
