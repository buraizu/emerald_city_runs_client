import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const UserEvent = ({userEvent}) => {
  let eventDate = new Date(userEvent.date);
  let currentDate = new Date();
  let buttonText = (currentDate < eventDate ? "Update your goal" : "Record your result")

  let pastEventText = (userEvent) => {
    return userEvent.result ? `Your result: ${userEvent.result}` : `-- No result entered --`
  }
  let futureEventText = (userEvent) => {
    return userEvent.goal ? `Your goal: ${userEvent.goal}` : `-- No goal set --`
  }
  let displayText = (eventDate < currentDate ? pastEventText(userEvent) : futureEventText(userEvent))
  return (
    <div className="feature">
      <h3>{userEvent.title}</h3>
      <p>Date: {userEvent.date}</p>
      <p>{displayText}</p>
      <p><Link to={'/user_events/' + userEvent.id}>{buttonText}</Link></p>
      <p><a href={userEvent.url} target="_blank" rel="noopener noreferrer">Event Home Page</a></p>
    </div>
  )

}

UserEvent.propTypes = {
  userEvent: PropTypes.object.isRequired
}

export default UserEvent;
