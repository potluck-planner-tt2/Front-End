import React from 'react'
import styled from 'styled-components';


const StyledHome = styled.section`
display:flex;
flex-flow: column nowrap;
align-items:center;
.hero {
  height: 200px;
  width: 200px;
  background-image:url("../images/family.jpg");
}
`

function Home() {
  return (
    <StyledHome>
      <div className="hero">
        <h2>Welcome to Cookouts!</h2>
      </div>
      <div>
        <p>We believe that connecting with others is as important as the food we eat. So we decided to combine them together! Simply create an account or log in to confirm your attendence or share what dish you'll be bringing etc</p>
        <p>Eating is as important as the people around the table blah blah. How many times have you been to a potluck and there's 3 tuna cassaroles --talk about foodlist. -- Talk about features such as chaning location etc, bad weather etc.</p>
      </div>
    </StyledHome>
  )
}

export default Home
