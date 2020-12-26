import React from 'react';
import styled from 'styled-components';
import heroBg from '../images/family.jpg';

const StyledHeroImg = styled.div`
  background-image: url(${heroBg});
  height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px white;
  border-style: solid hidden;
  margin: 5vh 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 4rem;
    padding: 10px 30px;
    color: white;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const StyledHome = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

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
      <StyledHeroImg>
        <div className='title'>
          <h2>Welcome to</h2>
          <h2>Cookouts</h2>
        </div>
      </StyledHeroImg>
      <StyledHome>
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
