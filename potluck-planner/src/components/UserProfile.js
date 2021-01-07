import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useParams, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import EventCard from './EventCard';
import EventForm from './EventForm';
import { UserContext } from '../context/UserContext';
import { axiosDev } from '../utils/axiosDev';
import axios from 'axios';


const initialPotlucks = [{
  name:"",
  organizer_id:"",
  date_time:"",
  location:"",
}]

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
  const [ potlucks, setPotlucks ] = useState(initialPotlucks);

  let match = useRouteMatch();
  

  const { loggedInUser } = useContext(UserContext)
  const { user_id } = loggedInUser;

  useEffect(() => {
    axiosDev().get('/api/potlucks')
  .then(res => {
    console.log(res.data)
    setPotlucks(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  },[])

// test
  // potlucks.map(potluck => {
  //   let sortPotlucks = [];
  //   if (sortPotlucks.contains(potluck)) {
  //     sortPotlucks.pop(potluck)
  //   } else {
  //     sortPotlucks.push(potluck);
  //   }
  // })

  return (
    <StyledUserProfile className="userProfile">
      <div className="welcomeMsg">
        <h2>Welcome back, {loggedInUser.username}</h2>
      </div>
      <div>
        <h3 className="eventMsg">Upcoming Events</h3>
      </div>
      <div className="eventCardContainer">
        {potlucks.map(potluck => {
          if(potluck.organizer_id === loggedInUser.user_id)
          {
            return (
              <EventCard
              className="eventCard"
              key={potluck.organizer_id}
              event={potluck}
              />
              )
          }
     })}
      </div>
      <div>
        <NavLink to={`${match.url}/${user_id}/newpotluck`}>
        <button className="newEventBtn">Create A New Event!</button>
        </NavLink>
      </div>
      <div>
        <Route path={`${match.url}/:id/newpotluck`}>
          <EventForm potlucks={potlucks} setPotlucks={setPotlucks}/>
        </Route>
      </div>
    </StyledUserProfile>
  )
}

export default UserProfile
