import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
background: linear-gradient(to top, #56ab2f, #a8e063);
box-shadow: 0px -3px 10px 2px #2E2E2E;
text-align:center;

h3 {
  font-family: 'Lobster', cursive;
  font-size: 2.5rem;
  color:grey;
}

`

function Footer() {

  
  return (
    <StyledFooter className="footer">
      <h3>Cookouts LLC. &copy;</h3>
    </StyledFooter>
  )
}

export default Footer
