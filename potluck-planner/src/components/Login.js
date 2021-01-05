import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';

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

const initialValues = {
  username:"",
  password:"",
};

export const axiosDev = () => {
  const token = window.localStorage.getItem('token')
  return axios.create({
      headers: {
          authorization: token
      },
      baseURL: 'https://pl-planner.herokuapp.com'
  })
}

function Login(props) {
const [ logValues, setLogValues ] = useState(initialValues);

  const login = event => {
   event.preventDefault();

   axiosDev().post('/api/auth/login', logValues)
   .then(res => {
     window.localStorage.setItem("token", res.data.token)
     setLogValues(initialValues);
     console.log(res.data.token)
   })
   .catch(err => {
    console.log(err)
   }) 
  
  }

  const changeHandler = event => {
    const { name, value } = event.target;
    setLogValues({
      ...logValues,
      [name]: value
    }); 
  }

  return (
    <StyledLogin className="loginForm" onSubmit={login}>
      <h2>Log in!</h2>
      <label className="formLabel">Username:
        <input 
        type="text"
        id="username"
        className="formInput"
        name='username'
        placeholder="Enter Username"
        onChange={changeHandler}
        value={logValues.username}
        />
      </label>
      <label className="formLabel">Password:
        <input 
        type="password"
        id="password"
        className="formInput"
        name='password'
        placeholder="Enter Password"
        onChange={changeHandler}
        value={logValues.password}
        />
      </label>
      {/* Add server response error if any */}
      <button className="loginFormBtn"
      type="submit"
      >Log In</button>
    </StyledLogin>
  )
}

export default Login
