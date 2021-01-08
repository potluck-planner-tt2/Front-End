import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useHistory } from 'react-router-dom';

import EventCard from './EventCard';
import EventForm from './EventForm';
import { UserContext } from '../context/UserContext';
import { axiosDev } from '../utils/axiosDev';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  background-color: #687864;
  min-height: 500px;
  width: 600px;
  color: #f7f9fb;
  font-family: droid-sans, sans-serif;
  border: 2px solid white;
  transition: 0.3s;

  .events {
    width: 800px;
  }

  h2 {
    font-size: 4.5rem;
    font-family: 'Lobster', cursive;
    text-shadow: 4px 4px 0px #8fc1e3;
  }

  p {
    font-size: 1.4rem;
    font-family: droid-sans, sans-serif;
    line-height: 1.2;
    padding: 0 30px 10px;
    font-weight: 500;
  }

  .errorWrapper {
    margin: 30px;
    font-size: 1.3rem;
  }

  @media (max-width: 650px) {
    width: 400px;
    min-height: 55vh;

    h2 {
      font-size: 3rem;
    }

    .error {
      font-size: 1.1rem;
    }
  }
`;

const StyledEventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  background-color: #687864;
  width: 80%;
  color: #f7f9fb;
  font-family: droid-sans, sans-serif;
  border: 2px solid white;
  transition: 0.3s;

  h2 {
    font-size: 4.5rem;
    font-family: 'Lobster', cursive;
    text-shadow: 4px 4px 0px #8fc1e3;
  }

  @media (max-width: 650px) {
    width: 400px;

    h2 {
      font-size: 3rem;
    }
  }
`;

const StyledUserProfile = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media (max-width: 650px) {
    .container {
      flex-direction: column;
    }
  }

  .eventCardContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px;
  }

  .btn {
    padding: 10px 15px;
    width: 200px;
    margin-top: 20px;
    border: none;
    border-radius: 7px;
    font-size: 1.5rem;
    color: #f7f9fb;
    background: #8fc1e3;
  }

  .evntBtn {
    width: 300px;
  }

  .btn:hover {
    box-shadow: 0 0 0 2px #f7f9fb;
    outline: white;
  }

  .btn:focus {
    box-shadow: 0 0 0 2px #f7f9fb;
    outline: white;
  }

  .btn:disabled {
    background-color: #cccccc;
    color: #666666;
    :hover {
      box-shadow: 0 0 0 0px #f7f9fb;
      outline: white;
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
      <StyledWrapper>
        <div className='welcomeMsg'>
          <h2>
            Welcome back
            <br /> {loggedInUser.username}
          </h2>
        </div>
        <p>
          You can start here by creating a new event or
          <br />
          scroll down to see your upcoming evnets!
        </p>
        <NavLink to={`${match.url}/${user_id}/newpotluck`}>
          <button className='btn evntBtn'>Create A New Event!</button>
        </NavLink>
        <br />
        <br />
        <Route path={`${match.url}/:id/newpotluck`}>
          <EventForm
            submit={submitHandler}
            change={changeHandler}
            values={formValues}
          />
        </Route>
      </StyledWrapper>
      <StyledEventWrapper className='events'>
        <h2 className='eventMsg'>Upcoming Events</h2>
        <div className='eventCardContainer'>
          {
            //eslint-disable-next-line
            userPots.map((potluck) => {
              if (potluck.organizer_id === loggedInUser.user_id) {
                return (
                  <EventCard
                    className='eventCard'
                    key={potluck.pl_id}
                    event={potluck}
                  />
                );
              }
            })
          }
        </div>
      </StyledEventWrapper>
    </StyledUserProfile>
  );
}

export default UserProfile;
