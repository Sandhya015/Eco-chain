import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const AuthForm2 = ({ onAuthenticate }) => {
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
    if (authDetails.id === '5678' && authDetails.password === 'about123') {
      swal('Authenticated', 'You may now proceed to About page', 'success');
      onAuthenticate(true);  // Set authentication to true
      navigate('/about');     // Navigate to About page
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
            placeholder='Enter your ID'
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

export default AuthForm2;
