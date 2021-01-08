// eslint-disable-next-line
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { axiosDev } from '../utils/axiosDev';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #687864;
  min-height: 60vh;
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

  .errorWrapper {
    margin: 30px;
    font-size: 1.3rem;
  }

  @media (max-width: 650px) {
    width: 400px;

    h2 {
      font-size: 3.5rem;
    }
  }
`;

const StyledEventForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: 1.6rem;
  text-shadow: 1.5px 0.5px 0px #5085a5;
  transition: 0.3s;
  margin: 30px 0;

  .formInput {
    margin: 5px;
    margin-left: 20px;
    border-radius: 7px;
    border: none;
    text-align: center;
  }

  .formInput:focus {
    box-shadow: 0 0 0 3px #8fc1e3;
    outline: white;
    color: transparent;
    text-shadow: 0 0 0 black;
  }

  #password {
    margin-left: 28px;
  }

  .btn {
    padding: 10px 15px;
    width: 200px;
    margin-top: 20px;
    border: none;
    border-radius: 7px;
    font-size: 1.5rem;
    color: #f7f9fb;
    background: #8fc1e3;
  }

  .btn:hover {
    box-shadow: 0 0 0 2px #f7f9fb;
    outline: white;
  }

  .btn:focus {
    box-shadow: 0 0 0 2px #f7f9fb;
    outline: white;
  }

  .btn:disabled {
    background-color: #cccccc;
    color: #666666;
    :hover {
      box-shadow: 0 0 0 0px #f7f9fb;
      outline: white;
    }
  }
  @media (max-width: 650px) {
    font-size: 1.5rem;

    .btn {
      font-size: 1rem;
      font-weight: 500;
      width: 150px;
    }
  }

  .addFoodBtn {
    padding: 5px 15px;
    margin: 10px;
    border-radius: 7px;
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    background: blue;

    :hover {
      cursor: pointer;
    }
  }
`;

const initialFoodList = [];

function EventForm({ change, submit, values }) {
  const [foodList, setFoodList] = useState(initialFoodList);

  const addFood = (event) => {
    event.preventDefault();
    let foodInput = JSON.stringify(document.querySelector('#food').value);

    axiosDev()
      .post('/api/foods', foodInput)
      .then((res) => {
        console.log(res);
        setFoodList(...foodList, foodInput);
      })
      .catch((err) => {
        console.log('catch error' + err);
      });
    // setFoodList(foodList => [foodInput, ...foodList])
  };

  return (
    <StyledWrapper>
      <StyledEventForm className='eventForm' onSubmit={submit}>
        <h2>New Event:</h2>
        <label className='formLabel'>
          Event Name:
          <input
            type='text'
            id='eventName'
            className='formInput'
            name='name'
            placeholder='Enter Event Name'
            onChange={change}
            value={values.username}
          />
        </label>
        <label className='formLabel'>
          Event Location:
          <input
            type='text'
            id='location'
            className='formInput'
            name='location'
            placeholder='Enter A Location'
            onChange={change}
            value={values.location}
          />
        </label>
        <label className='formLabel'>
          Date/Time:
          <input
            type='datetime-local'
            id='date_time'
            className='formInput'
            name='date_time'
            onChange={change}
            value={values.date_time}
          />
        </label>
        <label className='formLabel'>
          Potluck Foods:
          <input
            type='text'
            id='food'
            className='formInput'
            name='food'
            placeholder='Enter Food'
            onChange={change}
            value={values.foods}
          />
        </label>
        <button className='btn' onClick={addFood}>
          Add Food
        </button>
        <div className='foodListContainer'></div>
        <button className='btn' type='submit'>
          Create New Event
        </button>
      </StyledEventForm>
    </StyledWrapper>
  );
}

export default EventForm;
