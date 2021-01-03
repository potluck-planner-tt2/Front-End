import React from 'react';
import styled from 'styled-components';

import EventCard from './EventCard';

const dummyData = [{
  name:"Paul's Potato Party",
  organizer_id:9000,
  date_time:"2021-02-02-15:00"
},
{
  name:"Fear Factor Picnic",
  organizer_id:33,
  date_time:"2021-03-3-13:00"
}
]

const StyledUserProfile = styled.section`
display:flex;
flex-flow: column nowrap;
align-items:center;
`

function UserProfile(props) {

  return (
    <StyledUserProfile className="userProfile">
      <div className="welcomeMsg">
        <h2>Welcome back, _name_</h2>
      </div>
      <div>
        <h3 className="eventMsg">Upcoming Events</h3>
      </div>
      <div className="eventCardContainer">
        {dummyData.map(event => {
         return <EventCard key={event.id} event={event}/>
        })}
      </div>
    </StyledUserProfile>
  )
}

export default UserProfile
