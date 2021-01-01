import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
background: green;
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
