import React from 'react';
import styled from 'styled-components';
import heroBg from '../images/family.jpg';

const StyledHeroImg = styled.div`
  background-image: url(${heroBg});
  height: 40vh;
  background-position: center;
  background-repeat: cover;
`;

const StyledHome = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h2 {
    font-size: 4rem;
    padding: 10px 0;
  }

  p {
    font-size: 2rem;
    line-height: 1.4;
  }

  /* __Formatting__ */
  /* Title */
  /* background-image:url("../images/family.jpg"); */
  /* Write up some more info about site features below img */
`;

function Home() {
  return (
    <div className='wrapper'>
      <StyledHeroImg imgScr={process.env.PUBLIC_URL + '/family.jpg'} />
      <StyledHome>
        <h2>Welcome to Cookouts!</h2>
        <div>
          <p>
            We believe that connecting with others is as important as the food
            we eat. So we decided to combine them together! Simply create an
            account or log in to confirm your attendence or share what dish
            you'll be bringing etc
          </p>
          <p>
            Eating is as important as the people around the table blah blah. How
            many times have you been to a potluck and there's 3 tuna cassaroles
            --talk about foodlist. -- Talk about features such as chaning
            location etc, bad weather etc.
          </p>
        </div>
      </StyledHome>
    </div>
  );
}

export default Home;
