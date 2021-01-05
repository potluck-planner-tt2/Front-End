import React, { createElement } from 'react';
import styled from 'styled-components';

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
`

function EventCard(props) {
  const { name, date_time, } = props.event;

  const dummyFoodItems = ["Baked Beans","Uncle Earl's Chili",'Expired Lima Beans']

  const getFoodList = (event) => {
    // axios GET call for food list of specific potluck event
    //.then const data = res.data
    // map through data add new component (list-style) under it's respective card 
    const { target } = event;
    target.classList.add('hide')

    // map into new component to pass userid/foodid props?
    dummyFoodItems.map(item => {
      return foodItem(item)
    })
  }

  const foodItem = (item)=> {
    const foodContainer = document.querySelector(".foodContainer");
    const div = document.createElement('div');
    div.classList.add('foodItem')
    div.textContent = item;
    div.addEventListener('click', () => {
      // working
      console.log("food item")
    })
    foodContainer.append(div);
  }

  return (
    <StyledEventCard className="eventCard">
      <h4 className="title">{name}</h4>
      <p className="subtitle">Date/Time: {date_time}</p>
      <button className="eventDetails" onClick={getFoodList}>Details</button>
      <div className="foodContainer"></div>
      
    </StyledEventCard>
  )
}

export default EventCard
