import React from 'react';
import { Link, Route, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import EventCard from './EventCard';
import EventForm from './EventForm';


// **** Using dummy Data atm **** //
// **** Using dummy Data atm **** //
const dummyData = [{
  name:"Paul's Potato Party",
  organizer_id:9000,
  date_time:"2021-02-02 15:00"
},
{
  name:"Fear Factor Picnic",
  organizer_id:33,
  date_time:"2021-03-3 13:00"
},
]

const StyledUserProfile = styled.section`
display:flex;
flex-flow: column nowrap;
align-items:center;


h2 {
  font-size: 4rem;
  padding: 10%;
  margin: 5%;
}

h3 {
  font-size: 3rem;
  padding: 10%;
  margin: 5%;
}

.eventCardContainer {
  display:flex;
  flex-flow: row wrap;
  justify-content:center;
  margin: 30px 0;
}

.newEventBtn {
  font-family: 'Lobster', cursive;
  padding: 15px 35px;
  margin: 20px;
  border-radius: 7px;
  font-size: 3rem;
  text-decoration: underline;
  font-weight: 400;
  color: white;
  text-shadow: 3px 2px 4px rgba(0,0,0,0.6);
  background: #56ab2f;
  border: 2px black solid;

  :hover {
    cursor: pointer;
  }
}
`

function UserProfile(props) {
  let { id } = useParams();
  let match = useRouteMatch();
  let history = useHistory();

  return (
    <StyledUserProfile className="userProfile">
      <div className="welcomeMsg">
        {/* dynamically add username */}
        <h2>Welcome back, _username_</h2>
      </div>
      <div>
        {/* keep Upcoming Events unmounted until they have events */}
        <h3 className="eventMsg">Upcoming Events</h3>
      </div>
      <div className="eventCardContainer">
        {dummyData.map(event => {
         return <EventCard
         className="eventCard"
         key={event.organizer_id}
         event={event}
         />
        })}
      </div>
      <div>
        {/* Add nested Link/NavLink to EventForm */}
        <Link to={`${match.url}/${id}/newpotluck`}>
        <button className="newEventBtn">Create A New Event!</button>
        </Link>
      </div>
      <div>
        <Route path={`${match.url}/${id}/newpotluck`}>
          <EventForm />
        </Route>
      </div>
    </StyledUserProfile>
  )
}

export default UserProfile
