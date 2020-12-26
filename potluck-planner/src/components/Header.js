import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import image from '../images/potluck_icon.jpg';

const StyledHeader = styled.header`
  /* background: linear-gradient(to bottom, #56ab2f, #a8e063); */
  background-color: #5cdb95;

  .navBar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.4);
    /* width 100% for bigger screens / chop body to 80%? play with media queries*/

    h1 {
      font-family: 'Lobster', cursive;
      font-size: 2.8rem;
      color: white;
      margin-left: 3%;
      text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.6);
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
    /* font-weight: 600; */
    color: white;
    /* background: #87ceeb; */
    background: #05386b;

    :hover {
      cursor: pointer;
    }
  }

  // Gotta fix logo
  .logo {
    margin: 10px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
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
                src={image}
                className='logo'
                alt='Company Logo' /*Added alt text -MJ*/
              />
            </Link>
          </div>
          <div>
            <h1>Cookouts</h1>
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
