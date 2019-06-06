import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Trophy = ({userEvent}) => {

  return (
    <div className="feature">
      <h3>Congratulations, you finished {userEvent.title}</h3>
      <p>Your goal: {userEvent.goal}</p>
      <p>Your result: {userEvent.result}</p>
      <Link to={'/user_events/' + userEvent.id}>Details</Link>
      <img src={'/A-icon.png'}  alt="" />
    </div>
  )

}

Trophy.propTypes = {
  userEvent: PropTypes.object.isRequired
}

export default Trophy;
