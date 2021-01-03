import React from 'react'
import styled from 'styled-components';

const StyledLogin = styled.form`
display:flex;
flex-flow:column nowrap;
align-items:center;
font-size: 2rem;

.error {
  color:#c70000;
}

.formInput {
  margin: 5px;
}

.loginFormBtn {
  padding: 5px 15px;
  margin: 10px;
  border-radius: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  background: #56ab2f;
  // todo adjust color based on button disabled/enabled

  :hover {
    cursor: pointer;
  }
}
`

function Login(props) {
const { values, onChange, onSubmit, disabled, errors } = props;

  const submitHandler = event => {
   event.preventDefault();
   onSubmit(); 
  }

  const changeHandler = event => {
    const { name, value } = event.target;
    onChange(name, value);
  }

  return (
    <StyledLogin className="loginForm" onSubmit={submitHandler}>
      {errors.username && <div className="error">{errors.username}</div>}
      <label className="formLabel">Username:
        <input 
        type="text"
        id="username"
        className="formInput"
        name='username'
        placeholder="Enter Username"
        onChange={changeHandler}
        value={values.username}
        />
      </label>
      {errors.password && <div className="error">{errors.password}</div>}
      <label className="formLabel">Password:
        <input 
        type="password"
        id="password"
        className="formInput"
        name='password'
        placeholder="Enter Password"
        onChange={changeHandler}
        value={values.password}
        />
      </label>
      <button className="loginFormBtn"
      type="submit"
      disabled={disabled}
      >Log In</button>
    </StyledLogin>
  )
}

export default Login
