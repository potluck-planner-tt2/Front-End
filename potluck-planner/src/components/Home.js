import React from 'react';
import styled from 'styled-components';
import heroBg from '../images/family.jpg';
import bullet from '../images/bullet.png';

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
    font-family: droid-sans, sans-serif;
    padding: 0 30px;
    width: 60%;
    min-width: 395px;
    color: white;
    border: 2px solid white;
    background: rgba(104, 120, 100, 0.6);
    text-shadow: 2.5px 2px 0px #5085a5;
  }
`;

const StyledAbout = styled.div`
  margin: 0 auto;

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
    text-shadow: 3.5px 3.5px 0px #8fc1e3;
  }

  p {
    font-size: 1.4rem;
    font-family: droid-sans, sans-serif;
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

  .listContainer {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style-image: url(${bullet});
    padding-inline-start: 1ch;
    width: 70%;
    margin: 20px 0px;
    margin-bottom: 0;
  }

  li {
    padding: 10px;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
  }

  /* __Formatting__ */
  /* Title */
  /* background-image:url("../images/family.jpg"); */
  /* Write up some more info about site features below img */
`;

function Home() {
  return (
    <div>
      <StyledHeroImg alt='A group of people sharing a meal'>
        <div className='title'>
          <h2>Potluck planning made easy</h2>
        </div>
      </StyledHeroImg>
      <StyledAbout>
        <h2>About us</h2>
        <p>
          Here at Cookouts we believe the people you surround yourself with are
          as important as the food you fill yourself with and there is no better
          way to combine the two than with a potluck!
        </p>
        <p>
          Our goal was to create a way for ANYONE to easily organize their own
          potluck without having to deal with the most common issues involved in
          the planning. <br />
          Say goodbye to duplicate dishes!
        </p>
        <div className='bluebar' />
        <p>
          Some of the wonderful features you will have access too upon signing
          up include:
          <div className='listContainer'>
            <ul>
              <li>
                Quickly schedule a new potluck and invite your friends! They can
                even confirm if they're coming!
              </li>
              <li>
                Create a food list! Friends can mark off items they would like
                to bring, no more confusion!
              </li>
              <li>
                Easily notify all your friends of any changes to the when and
                where! They will never miss a beet!
              </li>
            </ul>
          </div>
        </p>
      </StyledAbout>
    </div>
  );
}

export default Home;
