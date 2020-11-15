import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { withRouter } from 'react-router-dom';

class EventDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      runEvent: this.props.event
    }
    this.setUserEvent = this.setUserEvent.bind(this);
  }

  setUserEvent() {
    const userEvent = this.props.runEvent;
    this.props.setEvent(userEvent)
    this.props.history.push('/user_events')
  }

  render() {

    return (
      <div
        key={this.props.key}
        event={this.props.runEvent}
        className="feature event-feature"
      >
        <h3>{this.props.runEvent.title}</h3>
        <p>Date: {this.props.runEvent.date}</p>
        <p>
          <a href={this.props.runEvent.home_url} target="_blank" rel="noopener noreferrer">
            <img src={'/btn_gray.png'}  alt="" />
          </a>
        </p>
        <p>
          <a href={this.props.runEvent.reg_url} target="_blank" rel="noopener noreferrer">
            Event Home Page
          </a>
        </p>
        <p>
          <button onClick={this.setUserEvent}>Add to My Events</button>
        </p>
        <img className="active-icon" src={'/A-icon.png'}  alt="" />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.runEvent.id;
  let event = Object.assign({}, state.events.events.find(event => event.id === eventId))

  return {event: event}
}

EventDetail.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventDetail = withRouter(connect(mapStateToProps, {...actions})(EventDetail));
