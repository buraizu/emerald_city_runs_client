import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NextUserEvent = ({userEvents}) => {
  let displayEvents;
  if(userEvents.userEvents) {
    displayEvents = userEvents.userEvents;
  }

  let nextUserEvent;
  let currentDate = new Date();

  if(displayEvents) {
    let upcomingUserEvents = displayEvents.filter((userEvent) => new Date(userEvent.date) > currentDate)
    let sortedUserEvents = upcomingUserEvents.sort((event1, event2) => new Date(event1.date) - new Date(event2.date))
    nextUserEvent = sortedUserEvents[0]
  }

  let goalText = "-- No goal set --"
  if(nextUserEvent && nextUserEvent.goal) {
    goalText = `Your goal: ${nextUserEvent.goal}`
  }

  const daysRemaining = () => {
    let diff = Math.abs(currentDate - new Date(nextUserEvent.date))
    let days = diff / (1000 * 60 * 60 * 24);
    return days.toFixed(0);
  }

  if(nextUserEvent) {
    return (
      <div className="feature icon-fix">
        <h2>Your next event</h2>
        <h4>{nextUserEvent.title}</h4>
        <p>{nextUserEvent.date}</p>
        <p>Only {daysRemaining()} days until your event!</p>
        <p>{goalText}</p>
        <p>
          <a href={nextUserEvent.url} target="_blank" rel="noopener noreferrer">
            <img src={'/btn_gray.png'}  alt="" />
          </a>
          <img className="active-icon" src={'/A-icon.png'}  alt="" />
        </p>
        <p><Link to={'/user_events/' + nextUserEvent.id}>Update Goal</Link></p>
      </div>
    )
  } else {
    return (
      <div className="feature">
        <h3>
          Nothing here at the moment... Head on over to
          <span> <Link to={'/events'}>Events</Link> </span>
          to select an event to train for!
        </h3>
      </div>
    )
  }
}

NextUserEvent.propTypes = {
  nextUserEvent: PropTypes.object
}

export default NextUserEvent;
