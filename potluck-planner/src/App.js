import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import schema from './validation/schema';
import axios from 'axios';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Registration';
import UserProfile from './components/UserProfile';

const initialFormValues = {
  // cleanup register/login values
  // cant login without password confirmation value from registration.js
  // make separate state for login/register form values
  username: '',
  email: '',
  password: '',
  // taking out temporarily, interfers with Login.js
  // passwordConfirm required for validation on both Registration/Login
  // prevents login, due to empty form field, when one isn't required to login
  // passwordConfirm:"",
};

// testing git branch *****************************************

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const initialMember = [];
const initialDisabled = true;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: 100vh;
  text-align: center;
  background: url('https://background-tiles.com/overview/white/patterns/large/1027.png');
`;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [newMember, setNewMember] = useState(initialMember);
  const [isDisabled, setIsDisabled] = useState(initialDisabled);

  const onChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setIsDisabled(!valid);
    });
  }, [formValues]);

  const onSubmit = () => {
    const newMember = {
      // Adjust/ make new for login/register
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // Removed temporarily, interferring with login.
      // passwordConfirm:formValues.passwordConfirm.trim(),
    };
    // todos
    // POST new member for registration
    // GET validate user for login
  };

  return (
    <div>
      <Header />
      <Wrapper className='Wrapper'>
        <Switch>
          {/* Designing UserProfile, adding path/props after */}
          {/* /profile path is just for testing */}
          <Route path='/profile'>
            <UserProfile />
          </Route>
          <Route path='/login'>
            <Login
              values={formValues}
              onChange={onChange}
              onSubmit={onSubmit}
              disabled={isDisabled}
              errors={formErrors}
            />
          </Route>
          <Route path='/registration'>
            <Registration
              values={formValues}
              onChange={onChange}
              onSubmit={onSubmit}
              disabled={isDisabled}
              errors={formErrors}
            />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
