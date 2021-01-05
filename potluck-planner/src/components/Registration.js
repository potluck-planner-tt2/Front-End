import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #687864;
  height: 50vh;
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

const StyledRegistration = styled.form`
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
  }

  .formInput:focus {
    box-shadow: 0 0 0 3px #8fc1e3;
    outline: white;
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

function Registration(props) {
  const { values, onChange, onSubmit, disabled, errors } = props;

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <StyledWrapper className='formWrapper'>
      <h2>Register:</h2>
      <StyledRegistration onSubmit={submitHandler}>
        <label>
          Username:
          <input
            type='text'
            id='username'
            className='formInput'
            name='username'
            placeholder='Enter Username'
            onChange={changeHandler}
            value={values.username}
          />
        </label>
        {/* Disabling email field for development
        <label>
          Email:
          <input
            type='email'
            id='email'
            className='formInput'
            name='email'
            placeholder='Enter Email'
            onChange={changeHandler}
            value={values.email}
          />
        </label> */}
        <label>
          Password:
          <input
            type='password'
            id='password'
            className='formInput'
            name='password'
            placeholder='Enter Password'
            onChange={changeHandler}
            value={values.password}
          />
        </label>
        <button className='btn' type='submit' disabled={disabled}>
          Create Account
        </button>
      </StyledRegistration>
      <div className='errorWrapper'>
        {errors.username && <div className='error'>{errors.username}</div>}
        {/* Disabling for development 
        {errors.email && <div className='error'>{errors.email}</div>} */}
        {errors.password && <div className='error'>{errors.password}</div>}
      </div>
    </StyledWrapper>
  );
}

export default Registration;
