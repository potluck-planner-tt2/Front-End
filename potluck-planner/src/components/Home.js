import React from 'react';
import styled from 'styled-components';
import heroBg from '../images/family.jpg';

const StyledHeroImg = styled.div`
  background-image: url(${heroBg});
  height: 60vh;
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
    font-size: 3rem;
    padding: 0 30px;
    width: 60%;
    min-width: 395px;
    color: white;
    border: 2px solid white;
    background: rgba(104, 120, 100, 0.6);
    text-shadow: 2.5px 2px 0px #5085a5;
  }
`;

const StyledHome = styled.div`
  margin: 0 auto;
  letter-spacing: 0.7px;
  border: 2px solid white;
  color: #f7f9fb;
  background: #687864;
  width: 60%;
  margin-bottom: 5vh;
  padding: 10px;

  h2 {
    font-size: 3.5rem;
    font-family: 'Lobster', cursive;
    margin: 3vh 0;
    text-shadow: 4px 4px 0px #8fc1e3;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.2;
    padding: 0 10px 10px 10px;
    font-weight: 500;
  }

  .bluebar {
    height: 3px;
    width: 75%;
    margin: 0 auto;
    background-color: #8fc1e3;
  }

  /* __Formatting__ */
  /* Title */
  /* background-image:url("../images/family.jpg"); */
  /* Write up some more info about site features below img */
`;

function Home() {
  return (
    <div>
      <StyledHeroImg>
        <div className='title'>
          <h2>Potluck planning made easy</h2>
        </div>
      </StyledHeroImg>
      <StyledHome>
        <div className='bluepart'>
          <h2>About us</h2>
          <p>
            We believe that connecting with others is as important as the food
            we eat. So we decided to combine them together! Simply create an
            account or log in to confirm your attendence or share what dish
            you'll be bringing etc
          </p>
          <div className='bluebar' />
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
