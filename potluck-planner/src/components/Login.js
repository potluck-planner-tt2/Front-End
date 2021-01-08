import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosDev } from '../utils/axiosDev';
import { UserContext } from '../context/UserContext';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #687864;
  min-height: 50vh;
  width: 600px;
  color: #f7f9fb;
  font-family: droid-sans, sans-serif;
  border: 2px solid white;
  transition: 0.3s;

  h2 {
    font-size: 4.5rem;
    font-family: 'Lobster', cursive;
    text-shadow: 4px 4px 0px #8fc1e3;
  }

  .errorWrapper {
    margin: 30px;
    font-size: 1.3rem;
  }

  @media (max-width: 650px) {
    width: 400px;

    h2 {
      font-size: 3.5rem;
    }

    .error {
      font-size: 1.1rem;
    }
  }
`;

const StyledLogin = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: 1.6rem;
  text-shadow: 1.5px 0.5px 0px #5085a5;
  transition: 0.3s;

  .formInput {
    margin: 5px;
    margin-left: 20px;
    border-radius: 7px;
    border: none;
    text-align: center;
  }

  .formInput:focus {
    box-shadow: 0 0 0 3px #8fc1e3;
    outline: white;
    color: transparent;
    text-shadow: 0 0 0 black;
  }

  #password {
    margin-left: 28px;
  }

  .btn {
    padding: 10px 15px;
    width: 200px;
    margin-top: 20px;
    border: none;
    border-radius: 7px;
    font-size: 1.5rem;
    color: #f7f9fb;
    background: #8fc1e3;
  }

  .btn:hover {
    box-shadow: 0 0 0 2px #f7f9fb;
    outline: white;
  }

  .btn:focus {
    box-shadow: 0 0 0 2px #f7f9fb;
    outline: white;
  }

  .btn:disabled {
    background-color: #cccccc;
    color: #666666;
    :hover {
      box-shadow: 0 0 0 0px #f7f9fb;
      outline: white;
    }
  }
  @media (max-width: 650px) {
    font-size: 1.5rem;

    .btn {
      font-size: 1rem;
      font-weight: 500;
      width: 150px;
    }
  }
`;

const initialValues = {
  username: '',
  password: '',
};

function Login() {
  const [logValues, setLogValues] = useState(initialValues);
  const { setLoggedInUser } = useContext(UserContext);

  let history = useHistory();

  const login = (event) => {
    event.preventDefault();

    axiosDev()
      .post('/api/auth/login', logValues)
      .then((res) => {
        window.localStorage.setItem('token', res.data.token);

        const loggedUser = {
          user_id: res.data.user_id,
          username: res.data.username,
        };
        setLoggedInUser(loggedUser);

        history.push(`/profile/${res.data.user_id}`);
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error);
      });
    setLogValues(initialValues);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setLogValues({
      ...logValues,
      [name]: value,
    });
  };

  return (
    <StyledWrapper className='formWrapper'>
      <StyledLogin className='loginForm' onSubmit={login}>
        <h2>Login:</h2>
        <label className='formLabel'>
          Username:
          <input
            type='text'
            id='username'
            className='formInput'
            name='username'
            placeholder='Enter Username'
            onChange={changeHandler}
            value={logValues.username}
          />
        </label>
        <label className='formLabel'>
          Password:
          <input
            type='password'
            id='password'
            className='formInput'
            name='password'
            placeholder='Enter Password'
            onChange={changeHandler}
            value={logValues.password}
          />
        </label>
        <button className='btn' type='submit'>
          Log In
        </button>
      </StyledLogin>
    </StyledWrapper>
  );
}

export default Login;
