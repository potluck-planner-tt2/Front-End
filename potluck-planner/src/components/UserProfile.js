import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import EventCard from './EventCard';
import EventForm from './EventForm';
import { UserContext } from '../context/UserContext';
import { axiosDev } from '../utils/axiosDev';

const StyledUserProfile = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

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
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
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
    text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.6);
    background: #56ab2f;
    border: 2px black solid;

    :hover {
      cursor: pointer;
    }
  }
`;

const initialEventValues = {
  name: '',
  location: '',
  date_time: '',
};

const initialPotlucks = [
  {
    name: '',
    organizer_id: '',
    date_time: '',
    location: '',
  },
];

function UserProfile() {
  const [formValues, setFormValues] = useState(initialEventValues);
  const [potlucks, setPotlucks] = useState(initialPotlucks);
  const [userPots, setUserPots] = useState(initialPotlucks);
  const history = useHistory();
  let match = useRouteMatch();

  const { loggedInUser } = useContext(UserContext);
  const { user_id } = loggedInUser;

  useEffect(() => {
    axiosDev()
      .get('/api/potlucks')
      .then((res) => {
        setPotlucks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const temparr = [];
    potlucks.map((potluck) => {
      if (
        potluck.organizer_id === loggedInUser.user_id &&
        !Object.keys(userPots).includes(potluck.pl_id)
      ) {
        temparr.push(potluck);
      }
      setUserPots(temparr);
      return null;
    });
    //eslint-disable-next-line
  }, [potlucks]);

  const changeHandler = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newPotluck = {
      name: formValues.name,
      location: formValues.location.trim(),
      date_time: formValues.date_time.trim(),
      organizer_id: loggedInUser.user_id,
    };
    axiosDev()
      .post('/api/potlucks', newPotluck)
      .then((res) => {
        console.log('Sucess!');
        axiosDev()
          .get('/api/potlucks')
          .then((res) => {
            setPotlucks(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(':(', err);
      });
    setFormValues(initialEventValues);
    history.push(`/profile/${user_id}`);
  };

  useEffect(() => {
    axiosDev()
      .get('/api/potlucks')
      .then((res) => {
        setPotlucks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StyledUserProfile className='userProfile'>
      <div className='welcomeMsg'>
        <h2>Welcome back, {loggedInUser.username}</h2>
      </div>
      <div>
        <h3 className='eventMsg'>Upcoming Events</h3>
      </div>
      <div className='eventCardContainer'>
        {userPots.map((potluck) => {
          if (potluck.organizer_id === loggedInUser.user_id) {
            return (
              <EventCard
                className='eventCard'
                key={potluck.pl_id}
                event={potluck}
              />
            );
          }
        })}
      </div>
      <div>
        <NavLink to={`${match.url}/${user_id}/newpotluck`}>
          <button className='newEventBtn'>Create A New Event!</button>
        </NavLink>
      </div>
      <div>
        <Route path={`${match.url}/:id/newpotluck`}>
          <EventForm
            submit={submitHandler}
            change={changeHandler}
            values={formValues}
          />
        </Route>
      </div>
    </StyledUserProfile>
  );
}

export default UserProfile;
