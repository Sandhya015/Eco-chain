import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className='body'>
        <header className='header'>
          <div className='wrapper'>
            <div className='logo'>
              <img src='https://i.postimg.cc/mg4rWBmv/logo.png' alt=''></img>
            </div>
            <ul className='nav-area'>
              <li>
                <a onClick={() => navigate('/home')}>Home</a>
              </li>
              <li>
                <a onClick={() => navigate('/register/customer')}>Sign Up</a>
              </li>
              <li>
                <a onClick={() => navigate('/login')}>Sign In</a>
              </li>
              <li>
                <a onClick={() => navigate('/contact')}>Contact</a>
              </li>
              <li>
                <a onClick={() => navigate('/inspect')}>Update</a>
              </li>
              <li>
                <a onClick={() => navigate('/about')}>Inspect</a>
              </li>
            </ul>
          </div>
          <div className='welcome-text'>
            <h1>
              Smart Waste Management <span>Portal</span>
            </h1>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Welcome;
