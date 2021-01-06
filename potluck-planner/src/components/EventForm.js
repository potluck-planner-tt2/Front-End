import React, { useState } from 'react'
import styled from 'styled-components';

const StyledEventForm = styled.form`
display:flex;
flex-flow:column nowrap;
align-items:center;
width: 80%;
margin:auto;
background:#e5c299;
font-size: 2rem;
border-radius: 15px;
border: 2px solid black;

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
`

const initialEventValues= {
  eventName:"",
  date_time:"",
}

function EventForm(props) {
  const [ formValues, setFormValues ] = useState(initialEventValues);

  const changeHandler = event => {
    setFormValues({
      ...formValues,
      [event.target.name] : event.target.value
    });
  }

  const submitHandler = event => {
    event.preventDefault();
    // post with axios
    // return form to initial values
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
      <label className="formLabel">Date/Time:
        <input 
        type="date"
        id="dateTime"
        className="formInput"
        name='dateTime'
        onChange={changeHandler}
        value={formValues.date_time}
        />
      </label>
      <button className="eventFormBtn"
      type="submit"
      >Create New Event</button>
    </StyledEventForm>
  )
}

export default EventForm
