import React from 'react';
import PropTypes from 'prop-types';
import EventDetail from './EventDetail';

const EventList = (props) => {

  const displayEvents = props.runEvents.events.map((event, index) => {
    return (
      <EventDetail key={index} runEvent={event} />
    )
  })

  return (
    <div>
      <ul className="displayEvents">
        {displayEvents}
      </ul>
    </div>
  );

}

EventList.propTypes = {
  events: PropTypes.array
}

export default EventList;
