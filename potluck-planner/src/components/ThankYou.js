import React from 'react';
import Delay from './DelayedLoader';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: #687864;
  min-height: 50vh;
  width: 600px;
  color: #f7f9fb;
  font-family: droid-sans, sans-serif;
  border: 2px solid white;
  transition: 0.3s;

  h2 {
    font-size: 4.5rem;
    font-family: 'Lobster', cursive;
    text-shadow: 4px 4px 0px #8fc1e3;
  }

  p {
    font-size: 1.3rem;
  }

  .spinner {
    margin-top: 30px;
    border: 16px solid #f7f9fb;
    border-top: 16px solid #8fc1e3;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 650px) {
    width: 400px;
  }
`;

function ThankYou({ values }) {
  return (
    <StyledWrapper className='formWrapper'>
      <h2>Thank you!</h2>
      <p>Thank you for registering, redirecting to login...</p>
      <div class='spinner'></div>
      <Delay />
    </StyledWrapper>
  );
}

export default ThankYou;
