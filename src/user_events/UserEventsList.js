import React from 'react';
import PropTypes from 'prop-types';
import UserEvent from './UserEvent';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const UserEventsList = (props) => {
  let currentDate = new Date();
  let userEvents = props.userEvents.userEvents;
  let displayUpcomingUserEvents = <div>Nothing to display at the moment. Try refreshing.</div>
  let displayPastUserEvents = <div>Check back here after your event to record your result!</div>

  if(props.userEvents.userEvents !== undefined) {

    let pastUserEvents = userEvents.filter((userEvent) => new Date(userEvent.date) < currentDate && userEvent.result === null)
    let upcomingUserEvents = userEvents.filter((userEvent) => new Date(userEvent.date) > currentDate)

    displayUpcomingUserEvents = upcomingUserEvents.map((userEvent) =>
        <UserEvent key={userEvent.id} userEvent={userEvent} />
      )
    displayPastUserEvents = pastUserEvents.map((userEvent) =>
        <UserEvent key={userEvent.id} userEvent={userEvent} />
      )

  }

  return (
    <div>
      <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <h2 className="displayText">Your Events</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 1 }}>
          <div className="feature">
            <h3>Your upcoming events</h3>
            {displayUpcomingUserEvents}
          </div>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <div className="feature">
            <h3>Your past events</h3>
            {displayPastUserEvents}
            <p>If you've already entered your event's result, check it out in <Link to="/trophies">Trophies</Link></p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

UserEventsList.propTypes = {
  userEvents: PropTypes.object.isRequired
}

export default UserEventsList;
