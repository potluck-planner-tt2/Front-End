import React from 'react';
import styled from 'styled-components';


function EventCard(props) {
  const { name, date_time } = props.event;

  return (
    <div className="eventCard">
      <div>Event Name:{name}</div>
      <div>Date/Time:{date_time}</div>
      {console.log('Card working')}
    </div>
  )
}

export default EventCard
