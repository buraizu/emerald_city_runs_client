import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import UserEventsList from './UserEventsList';

class UserEventsContainer extends Component {

  componentDidMount() {
    this.props.fetchUserEvents();
  }

  render() {
    const userEvents = this.props.userEvents;

      return (
        <div>
          <UserEventsList userEvents={userEvents}/>
        </div>
      )
    }

 }

 const mapStateToProps = (state) => {
   return {
     userEvents: state.userEvents
   }
 }

 UserEventsContainer.propTypes = {
   userEvents: PropTypes.object.isRequired
 }

export default connect (mapStateToProps, {...actions})(UserEventsContainer);
