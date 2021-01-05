import React from 'react'
import styled from 'styled-components';

const StyledRegistration =styled.form`
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

.registerFormBtn {
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


function Registration(props) {

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
    <StyledRegistration className="registerForm" onSubmit={submitHandler}>
      <h2>Register now!</h2>
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
      {errors.email && <div className="error">{errors.email}</div>}
      <label className="formLabel">Email:
        <input 
        type="email"
        id="email"
        className="formInput"
        name='email'
        placeholder="Enter Email"
        onChange={changeHandler}
        value={values.email}
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
        value={values.password1}
        />
      </label>
      {errors.passwordConfirm && <div className="error">{errors.passwordConfirm}</div>}
      <label className="formLabel">Confirm Password:
        <input 
        type="password"
        id="passwordConfirm"
        className="formInput"
        name='passwordConfirm'
        placeholder="Confirm Password"
        onChange={changeHandler}
        value={values.passwordConfirm}
        />
      </label>
      <button className="registerFormBtn"
      type="submit"
      disabled={disabled}>Create Account</button>
    </StyledRegistration>
  )
}

export default Registration
