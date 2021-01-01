import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

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
}

.bannerButtons {
  display:flex;
  flex-flow:row nowrap;
  justify-content:flex-end;
}
`

function Header(props) {

  const history = useHistory();

  return (
    <StyledHeader className="header">
      <nav className="navBar">
        <div className="banner">
          <div>
            <Link to="/">Logo/return Home Here</Link> 
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
