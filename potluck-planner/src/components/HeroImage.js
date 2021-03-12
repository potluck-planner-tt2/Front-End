import React from 'react';
import styled from 'styled-components';
import heroBg from '../images/family.webp';

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

export default function HeroImage() {
  return (
    <StyledHeroImg alt='A group of people sharing a meal'>
      <div className='title'>
        <h2>Potluck planning made easy</h2>
      </div>
    </StyledHeroImg>
  );
}
