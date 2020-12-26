import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: linear-gradient(to top, #56ab2f, #a8e063);
  box-shadow: 0px -3px 5px 2px rgba(0, 0, 0, 0.4);
  text-align: center;
  width: 100%;

  h3 {
    font-family: 'Lobster', cursive;
    font-size: 2.5rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
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
