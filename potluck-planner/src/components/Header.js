import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logo from '../images/logo8.png';
import { UserContext } from '../context/UserContext';

import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #687864;

  .navBar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border: 2px white;
    border-style: hidden hidden solid hidden;
    height: 110px;

    h1 {
      font-family: 'Lobster', cursive;
      font-size: 5.4rem;
      color: #f7f9fb;
      text-shadow: 4px 4px 0px #8fc1e3;
      transition: 0.3s;
    }

    a {
      text-decoration: none;
    }
  }

  .banner {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .bannerButtons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
  }

  .btn {
    padding: 10px 15px;
    width: 100px;
    margin: 10px;
    border: none;
    border-radius: 7px;
    font-size: 1.1rem;
    font-weight: 500;
    color: #f7f9fb;
    background: #8fc1e3;
  }

  .btn:focus {
    box-shadow: 0 0 0 2px #f7f9fb;
    outline: white;
  }

  .logo {
    padding: 5px;
    width: 115px;
    transition: 0.3s;
  }

  @media (max-width: 700px) {
    .bannerButtons {
      flex-direction: column;
      justify-content: space-evenly;
    }

    .btn {
      margin: 0px 10px;
    }
  }

  @media (max-width: 600px) {
    .navBar h1 {
      font-size: 4rem;
    }

    .logo {
      padding: 5px;
      width: 90px;
    }
  }
`;

function Header() {
  const history = useHistory();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <StyledHeader>
      <nav className='navBar'>
        <div className='banner'>
          <div>
            <Link to='/'>
              <img src={logo} className='logo' alt='Company Logo' />
            </Link>
          </div>
          <div>
            <Link to='/'>
              <h1>Cookouts</h1>
            </Link>
          </div>
        </div>
        {loggedInUser.user_id ? (
          <div className='bannerButtons'>
            <div>
              <button
                className='register btn'
                onClick={() => history.push(`/profile/${loggedInUser.user_id}`)}
              >
                Profile
              </button>
            </div>
            <div>
              <button
                className='login btn'
                onClick={() => {
                  history.push('/login');
                  window.localStorage.removeItem('token');
                  const loggedUser = {
                    user_id: '',
                    username: '',
                  };
                  setLoggedInUser(loggedUser);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className='bannerButtons'>
            <div>
              <button
                className='register btn'
                onClick={() => history.push('/registration')}
              >
                Sign Up
              </button>
            </div>
            <div>
              <button
                className='login btn'
                onClick={() => history.push('/login')}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </StyledHeader>
  );
}

export default Header;
