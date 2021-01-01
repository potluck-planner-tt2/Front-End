import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import image from '../images/potluck_icon.jpg';

const StyledHeader = styled.header`
background: orange;

.navBar {
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
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
  border-radius: 9999px;
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
