import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'; 

const About = () => {
  const navigate = useNavigate();
  const [usersWithTransactions, setUsersWithTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setUsersWithTransactions(storedTransactions);
  }, []);

  return (
    <div className="about-container">
      <h1>Transaction History</h1>

      {usersWithTransactions.length === 0 ? (
        <p>No transactions recorded yet.</p>
      ) : (
        <ul className="transaction-list">
          {usersWithTransactions.map((user) => (
            <li key={user.userId} className="transaction-item">
              <strong>{user.name}</strong> - {user.userId}
              <button className="view-btn" onClick={() => navigate(`/inspect?userId=${user.userId}`)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default About;
