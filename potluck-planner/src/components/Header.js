import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import image from '../images/potluck_icon.jpg';

const StyledHeader = styled.header`
background: linear-gradient(to bottom, #56ab2f, #a8e063);

.navBar {
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  box-shadow: 0px 3px 10px 2px #2E2E2E;

   h1 {
    font-family: 'Lobster', cursive;
    font-size: 6rem;
    color:white;
    margin-left: 3%;
    text-shadow: 3px 2px 4px rgba(0,0,0,0.6);
  }
}

.banner {
  display:flex;
  flex-flow:row nowrap;
  justify-content:flex-start;
  align-items:center;
}

.bannerButtons {
  display:flex;
  flex-flow:row nowrap;
  justify-content:flex-end;
  align-items:center;
}

.btn {
  padding: 5px 10px;
  margin: 10px;
  border-radius: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  background: lightgreen;

  :hover {
    cursor: pointer;
  }
}

// Gotta fix logo 
.logo {
  margin: 10px;
  height:50px;
  width: 50px;
}
`

function Header(props) {

  const history = useHistory();

  return (
    <StyledHeader className="header">
      <nav className="navBar">
        <div className="banner">
          <div>
            {/****** Fix logo image *****/}
            <Link to="/">
              <img
              src={image}
              className="logo"
              />
              </Link> 
          </div>
          <div>
            <h1>Cookouts</h1>
          </div>
        </div>
        <div className="bannerButtons">
          <div>
          <button className="login btn"
          onClick={()=> history.push('/login')}>Login</button>
          </div>
          <div>
            <button className="register btn"
            onClick={()=> history.push('/registration')}>Sign Up Today!</button>
          </div>
        </div>
      </nav>
      
    </StyledHeader>
  )
}

export default Header
