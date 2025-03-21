import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const AuthForm = ({ onAuthenticate }) => {
  const navigate = useNavigate();
  const [authDetails, setAuthDetails] = useState({
    id: '',
    password: '',
  });

  const handleChange = (e) => {
    setAuthDetails({
      ...authDetails,
      [e.target.name]: e.target.value,
    });
  };

  const authenticateUser = () => {
    if (authDetails.id === '1234' && authDetails.password === 'sandhya') {
      swal('Authenticated', 'You may now proceed to registration', 'success');
      onAuthenticate(true);  // Set authentication to true
      navigate('/register');  // Navigate to register page
    } else {
      swal('Authentication Failed', 'Invalid ID or password', 'error');
    }
  };

  return (
    <div className='container'>
      <div className='sign-up'>
        <h1 className='heading'><b>AUTHENTICATION</b></h1>
        
        <div className='text'>
          <input
            placeholder='Enter your ID (e.g., 1234)'
            name='id'
            type='text'
            onChange={handleChange}
          />
        </div>
        <div className='text'>
          <input
            placeholder='Enter your password'
            name='password'
            type='password'
            onChange={handleChange}
          />
        </div>

        <button className='button_login' onClick={authenticateUser}>
          Authenticate
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
