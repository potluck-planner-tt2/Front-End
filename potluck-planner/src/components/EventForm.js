import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { axiosDev } from '../utils/axiosDev';

const StyledEventForm = styled.form`
display:flex;
flex-flow:column nowrap;
align-items:center;
width: 80%;
margin: 10px auto;
background:#e5c299;
font-size: 2rem;
border-radius: 15px;
border: 2px solid black;

h3 {
  padding:15px 5px;
}

.formInput {
  margin: 5px;
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
`

const initialEventValues= {
  eventName:"",
  location:"",
  date_time:"",
}

const initialFoodList = [];


function EventForm(props) {
  const [ formValues, setFormValues ] = useState(initialEventValues);
  const [ foodList, setFoodList ] = useState(initialFoodList);
  const changeHandler = event => {
    setFormValues({
      ...formValues,
      [event.target.name] : event.target.value
    });
  }

  const postNewPotluck = (newPotluck) => {
    axiosDev().post('/api/potlucks', newPotluck)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const submitHandler = event => {
    event.preventDefault();
    const newPotluck = {
      // add user_id from global store
      eventName: formValues.eventName.trim(),
      location: formValues.location.trim(),
      date_time: formValues.date_time.trim(),
      foodList: formValues.foodList
    };
    postNewPotluck(newPotluck);
    setFormValues(initialEventValues);
  }

  useEffect(() => {
    // axios call and paint foodlist to food container
    const foodContainer = document.querySelector('.foodContainer');
    foodList.map(item => {
      const div = document.createElement('div');
      div.classList.add('food')
      div.textContent = item;
      foodContainer.append(div)
    })
  }, [foodList])

  const addFood = event => {
    event.preventDefault();
    let foodInput = document.querySelector('#food');

    foodList.push(foodInput.value.toLowerCase());
    foodInput.value = "";

    console.log(foodInput);
    console.log(foodList);
  }

  return (
    <StyledEventForm className="eventForm" onSubmit={submitHandler}>
      <h3>Create New Event!</h3>
      <label className="formLabel">Event Name:
        <input 
        type="text"
        id="eventName"
        className="formInput"
        name='eventName'
        placeholder="Enter Event Name"
        onChange={changeHandler}
        value={formValues.username}
        />
      </label>
      <label className="formLabel">Event Location:
        <input 
        type="text"
        id="location"
        className="formInput"
        name='location'
        placeholder="Enter A Location"
        onChange={changeHandler}
        value={formValues.location}
        />
      </label>
      <label className="formLabel">Date/Time:
        <input 
        type="datetime-local"
        id="date_time"
        className="formInput"
        name='date_time'
        onChange={changeHandler}
        value={formValues.date_time}
        />
      </label>
      <label className="formLabel">Potluck Foods:
        <input
        type="text"
        id="food"
        className="formInput"
        name='food'
        placeholder="Enter Food"
        onChange={changeHandler}
        value={formValues.foods}
        />
      </label>
      <button className="addFoodBtn" onClick={addFood}>Add Food</button>
      <div className="foodContainer"></div>
      <button className="eventFormBtn"
      type="submit"
      >Create New Event</button>
    </StyledEventForm>
  )
}

export default EventForm
