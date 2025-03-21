import React, { useState } from 'react';
import './Inspect.css'; // Import CSS file

const Inspect = () => {
  const initialUsers = [
    { id: 1, name: 'John Doe', userId: 'U1001', aadhaar: '1234-5678-9012', wasteDetails: 'Added Plastic', profilePic: null },
    { id: 2, name: 'Jane Smith', userId: 'U1002', aadhaar: '2345-6789-0123', wasteDetails: 'Processed Metal', profilePic: null },
    { id: 3, name: 'Alice Johnson', userId: 'U1003', aadhaar: '3456-7890-1234', wasteDetails: 'Transferred Glass', profilePic: null },
    { id: 4, name: 'Robert Brown', userId: 'U1004', aadhaar: '4567-8901-2345', wasteDetails: 'Added E-Waste', profilePic: null },
    { id: 5, name: 'Emily Davis', userId: 'U1005', aadhaar: '5678-9012-3456', wasteDetails: 'Transferred Plastic', profilePic: null },
    { id: 1, name: 'John Doe', userId: 'U1001', aadhaar: '1234-5678-9012', wasteDetails: 'Added Plastic', profilePic: null },
    { id: 2, name: 'Jane Smith', userId: 'U1002', aadhaar: '2345-6789-0123', wasteDetails: 'Processed Metal', profilePic: null },
    { id: 3, name: 'Alice Johnson', userId: 'U1003', aadhaar: '3456-7890-1234', wasteDetails: 'Transferred Glass', profilePic: null },
    { id: 4, name: 'Robert Brown', userId: 'U1004', aadhaar: '4567-8901-2345', wasteDetails: 'Added E-Waste', profilePic: null },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newWasteDetails, setNewWasteDetails] = useState('');

  // Handle file upload
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const updatedUsers = users.map((user) =>
          user.id === selectedUser.id ? { ...user, profilePic: reader.result } : user
        );
        setUsers(updatedUsers);
        setSelectedUser({ ...selectedUser, profilePic: reader.result });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, wasteDetails: newWasteDetails } : user
    );
    setUsers(updatedUsers);
    setSelectedUser({ ...selectedUser, wasteDetails: newWasteDetails });
    setNewWasteDetails('');
  };

  return (
    <div className="inspect-container">
      <h1>Update Users</h1>

      <div className="user-list">
        {selectedUser ? (
          <div className="user-details">
            {/* Profile Image Upload */}
            <div className="profile-section">
              <img
                src={selectedUser.profilePic || "https://via.placeholder.com/150"}
                alt="Profile"
                className="profile-img"
              />
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>

            {/* User Info */}
            <div className="user-info">
              <h2>User Profile</h2>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>User ID:</strong> {selectedUser.userId}</p>
              <p><strong>Aadhaar No.:</strong> {selectedUser.aadhaar}</p>
              <p><strong>Waste Transfer Details:</strong> {selectedUser.wasteDetails}</p>

              {/* Update Section */}
              <input
                type="text"
                placeholder="Update Waste Transfer Details"
                value={newWasteDetails}
                onChange={(e) => setNewWasteDetails(e.target.value)}
              />
              <button className="update-btn" onClick={handleUpdate}>Update</button>
              <button className="back-btn" onClick={() => setSelectedUser(null)}>Back to Users</button>
            </div>
          </div>
        ) : (
          <div>
            <h2>All Users</h2>
            <ul>
              {users.map((user) => (
                <li key={user.id} className="user-card">
                  <strong>{user.name}</strong> - {user.userId}
                  <button className="view-btn" onClick={() => setSelectedUser(user)}>View Details</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inspect;
