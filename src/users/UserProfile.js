import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import LatestRun from '../runs/LatestRun';
import NextUserEvent from '../user_events/NextUserEvent';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
      userEvents: this.props.userEvents
    }
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  componentDidMount() {
    this.props.fetchUserEvents();
    this.props.fetchRuns();
  }

  render() {
    const userEvents = this.props.userEvents;
    const runs = this.props.runs;

    return(
      <div>
        <Row>
          <Col md={{ span: 2, offset: 5 }}>
            <h2 className="displayText text-center">Your Profile</h2>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <div className="feature largeText text-center">
              <Link to={'/runs'}>My Runs</Link>
            </div>
            <LatestRun runs={runs} />
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <div className="feature largeText text-center">
              <Link to={'/user_events'}>My Events</Link>
            </div>
            <NextUserEvent userEvents={userEvents} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    users: state.users,
    runs: state.runs,
    userEvents: state.userEvents
  });
};

export default UserProfile = withRouter(connect(mapStateToProps, {...actions})(UserProfile));
