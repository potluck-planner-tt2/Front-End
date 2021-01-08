// eslint-disable-next-line
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { axiosDev } from '../utils/axiosDev';

const StyledEventForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 80%;
  margin: 10px auto;
  background: #e5c299;
  font-size: 2rem;
  border-radius: 15px;
  border: 2px solid black;

  h3 {
    padding: 15px 5px;
  }

  .formInput {
    margin: 5px;
    text-align: center;
  }

  .eventFormBtn {
    padding: 5px 15px;
    margin: 10px;
    border-radius: 7px;
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
    background: #56ab2f;

    :hover {
      cursor: pointer;
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

// const initialEventValues = {
//   name: '',
//   location: '',
//   date_time: '',
// };

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
    <StyledEventForm className='eventForm' onSubmit={submit}>
      <h3>Create New Event!</h3>
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
      <button className='addFoodBtn' onClick={addFood}>
        Add Food
      </button>
      <div className='foodListContainer'></div>
      <button className='eventFormBtn' type='submit'>
        Create New Event
      </button>
    </StyledEventForm>
  );
}

export default EventForm;
