import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
background: linear-gradient(to top, #56ab2f, #a8e063);
box-shadow: 0px -3px 10px 2px #2E2E2E;
height: 8vh;
text-align:center;
`

function Footer() {

  
  return (
    <StyledFooter className="footer">
      The Most Beautifulest Site on the Interwebs!
    </StyledFooter>
  )
}

export default Footer
