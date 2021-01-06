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
  username: '',
  // email: '',
  password: '',
  // passwordConfirm: '',
};

const initialFormErrors = {
  username: '',
  // email: '',
  password: '',
  // passwordConfirm: '',
};

const initialMembers = [];
const initialDisabled = true;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 93vh;
  text-align: center;
  background: url('https://background-tiles.com/overview/white/patterns/large/1027.png');

  .foot {
    align-self: flex-end;
  }
`;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [members, setMembers] = useState(initialMembers);
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

  const postNewMember = (newMember) => {
    axios
      .post('https://pl-planner.herokuapp.com/api/auth/register', newMember)
      .then((res) => {
        setMembers([res.data, ...members]);
        setFormValues(initialFormValues);
      })
      .catch((error) => {
        if (error.response.status === 500) {
          console.log(error);
        } else {
          alert(error.response.data);
          console.log(error);
        }
      });
  };

  const onSubmit = () => {
    const newMember = {
      username: formValues.username.trim(),
      password: formValues.password,
    };
    postNewMember(newMember);
    setFormValues(initialFormValues);
  };

  return (
    <div>
      <Wrapper>
        <Header />
        <Switch>
          {/* Designing UserProfile, adding path/props after */}
          {/* /profile path is just for testing */}
          <Route path='/profile'>
            <UserProfile />
          </Route>
          <Route path='/login'>
            <Login />

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
