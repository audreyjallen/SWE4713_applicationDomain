import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', role: '', active: true });
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to create a new user
  const handleCreateUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ username: '', role: '', active: true });
  };

  // Function to update a user's information
  const handleUpdateUser = () => {
    setUsers(users.map(user => (user.username === selectedUser.username ? selectedUser : user)));
    setSelectedUser(null);
  };

  // Function to activate or deactivate a user
  const handleToggleActive = (user) => {
    setUsers(users.map(u => (u.username === user.username ? { ...u, active: !u.active } : u)));
  };

  return (
    <div>
      {/* Create user form */}
      <h2>Create new user</h2>
      <form onSubmit={handleCreateUser}>
        <label>
          Username:
          <input type="text" value={newUser.username} onChange={(e) => setNewUser({ ...newUser, username: e.target.value })} />
        </label>
        <label>
          Role:
          <input type="text" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} />
        </label>
        <button type="submit">Create user</button>
      </form>

      {/* User list */}
      <h2>User list</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>{user.active ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => setSelectedUser(user)}>Edit</button>
                <button onClick={() => handleToggleActive(user)}>{user.active ? 'Deactivate' : 'Activate'}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update user form */}
      {selectedUser && (
        <>
          <h2>Update user</h2>
          <form onSubmit={handleUpdateUser}>
            <label>
              Username:
              <input type="text" value={selectedUser.username} onChange={(e) => setSelectedUser({ ...selectedUser, username: e.target.value })} />
            </label>
            <label>
              Role:
              <input type="text" value={selectedUser.role} onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })} />
            </label>
            <label>
              Active:
              <input type="checkbox" checked={selectedUser.active} onChange={(e) => setSelectedUser({ ...selectedUser, active: e.target.checked })} />
            </label>
            <button type="submit">Update user</button>
            <button onClick={() => setSelectedUser(null)}>Cancel</button>
          </form>
        </>
      )}
    </div>
  );
};

export default UserManagement;