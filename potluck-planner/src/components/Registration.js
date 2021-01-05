import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 3rem;
  }
`;

const StyledRegistration = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: 1.7rem;

  .error {
    color: #c70000;
  }

  .formInput {
    margin: 5px;
    margin-left: 20px;
  }

  #email {
    margin-left: 77px;
  }

  #password {
    margin-left: 26px;
  }

  .registerFormBtn {
    border-radius: 7px;
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
    margin-top: 30px;
    background: #56ab2f;
    // todo adjust color based on button disabled/enabled

    :hover {
      cursor: pointer;
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
    <StyledWrapper>
      <h2>Register now:</h2>
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
            value={values.password1}
          />
        </label>
        <button className='registerFormBtn' type='submit' disabled={disabled}>
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
