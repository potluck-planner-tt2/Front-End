import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo8.png';

const StyledHeader = styled.header`
  /* background: linear-gradient(to bottom, #56ab2f, #a8e063); */
  background-color: #687864;

  .navBar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    /* box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.4); */
    border: 2px white;
    border-style: hidden hidden solid hidden;
    height: 110px;
    /* width 100% for bigger screens / chop body to 80%? play with media queries*/

    h1 {
      font-family: 'Lobster', cursive;
      font-size: 5rem;
      color: #f7f9fb;
      text-shadow: 4px 4px 0px #8fc1e3;
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
    margin: 10px;
    border: none;
    border-radius: 7px;
    font-size: 1.1rem;
    font-weight: 500;
    color: #f7f9fb;
    /* background: #87ceeb; */
    background: #8fc1e3;

    :hover {
      cursor: pointer;
    }
  }

  // Gotta fix logo
  .logo {
    padding: 5px;
    width: 115px;
  }
`;

function Header(props) {
  const history = useHistory();

  return (
    <StyledHeader>
      <nav className='navBar'>
        <div className='banner'>
          <div>
            {/****** Fix logo image *****/}
            <Link to='/'>
              <img
                src={logo}
                className='logo'
                alt='Company Logo' /*Added alt text -MJ*/
              />
            </Link>
          </div>
          <div>
            <Link to='/'>
              <h1>Cookouts</h1>
            </Link>
          </div>
        </div>
        <div className='bannerButtons'>
          <div>
            <button
              className='login btn'
              onClick={() => history.push('/login')}
            >
              Login
            </button>
          </div>
          <div>
            <button
              className='register btn'
              onClick={() => history.push('/registration')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
}

export default Header;
