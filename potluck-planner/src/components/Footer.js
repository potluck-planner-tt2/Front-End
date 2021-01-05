import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #687864;
  text-align: center;
  width: 100%;
  height: 7vh;

  h3 {
    font-family: 'Lobster', cursive;
    font-size: 2.5rem;
    color: white;
    text-shadow: 2px 2px 0px #8fc1e3;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <h3>Cookouts LLC. &copy;</h3>
    </StyledFooter>
  );
}

export default Footer;
