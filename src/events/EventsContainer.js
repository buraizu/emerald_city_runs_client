import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import EventList from './EventList';

class EventsContainer extends Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={{ span: 2, offset: 5 }}>
            <h2 className="displayText text-center">Upcoming Events</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={{ span: 10 }}>
            <div className="eventsContainer feature">
              <EventList runEvents={this.props.events} setEvent={this.props.setEvent} />
            </div>
          </Col>
        </Row>
      </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

EventsContainer.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  setEvent: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {...actions})(EventsContainer);
