import React from 'react';
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

`

function EventCard(props) {
  const { name, date_time } = props.event;

  return (
    <StyledEventCard className="eventCard">
      <h4 className="title">{name}</h4>
      <p className="subtitle">Date/Time: {date_time}</p>
      {/* add button onClick to access event details */}
      <button className="eventDetails">Details</button>
    </StyledEventCard>
  )
}

export default EventCard
