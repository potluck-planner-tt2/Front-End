import React,{ useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { axiosDev } from '../utils/axiosDev';

const StyledEventCard = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:center;
background:#e5c299;
border-radius: 15px;
min-width: 250px;
margin: 10px;
padding: 10px;
border: 2px black solid;

h4 {
  font-size: 2rem;
  padding: 5px;
}

p {
  font-size: 1.5rem;
  padding: 5px;
}

.eventDetails {
  padding: 5px 10px;
  margin: 10px;
  border-radius: 7px;
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  background: #87ceeb;

  :hover {
    cursor: pointer;
  }
}

.foodItem {
  font-size: 1.5rem;
}

.hide {
  display:none;
}

.strike {
  text-decoration:line-through;
}
`
const initialFoodList = [];

function EventCard(props) {

  const { name, date_time, location } = props.event;


  const { loggedInUser } = useContext(UserContext)
  console.log(loggedInUser)
  const { user_id, username } = loggedInUser;

  // const dummyFoodItems = ["Baked Beans","Uncle Earl's Chili",'Expired Lima Beans'];

  const getFoodList = (event) => {
    const { target } = event;
    target.classList.add('hide')

    foodList.map(item => {
      return foodItem(item.name)
    })
  }

  // axios foodlist
  useEffect(() => {
    axiosDev().get('/api/foods')
    .then(res => {
      console.log(res.data);
      setFoodList(res.data);
    })
    .catch(err => {
      console.log(err)
    }) 
  },[])

  const foodItem = (item)=> {
    const foodContainer = document.querySelector(".foodContainer");
    const div = document.createElement('div');
    div.classList.add('foodItem')
    div.textContent = item;

    div.addEventListener('click', (event) => {
      event.target.classList.toggle("strike");
      const span = document.createElement('span');
      span.classList.toggle('cook');
      span.textContent = `Brought by ${username}`;
      div.parentNode.insertBefore(span, div.nextSibling);
    },{once:true})
    foodContainer.append(div);
  }

  return (
    <StyledEventCard className="eventCard">
      <h4 className="title">{name}</h4>
      <p className="location">Location: {location}</p>
      <p className="subtitle">Date/Time: {date_time}</p>
      <button className="eventDetails" onClick={getFoodList}>Details</button>
      <div className="foodContainer">
        { }
      </div>
    </StyledEventCard>
  )
}

export default EventCard
