import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router-dom';
import Trophy from './Trophy';

class TrophyCase extends Component {

  componentDidMount() {
    this.props.fetchUserEvents();
  }

  render() {
    let currentDate = new Date();

    const trophyEvents = this.props.userEvents.userEvents.filter((userEvent) => new Date(userEvent.date) < currentDate && userEvent.result !== null);

    const displayTrophies = trophyEvents.map((userEvent) => {
      return <Trophy key={userEvent.id} userEvent={userEvent} />
    })

    if(trophyEvents.length > 0) {
      return (
        <div>
          <Row>
            <Col md={{ span: 2, offset: 5 }}>
              <h2 className="displayText">Your Trophies</h2>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <div className="feature">{displayTrophies}</div>
            </Col>
          </Row>
        </div>
        )
      } else {
        return (
          <div>
            <Row>
              <Col md={{ span: 4, offset: 4 }}>
                <div className="feature text-center">
                  <h3>Come back once you've completed some <Link to={'/events'}>Events!</Link></h3>
                </div>
              </Col>
            </Row>
          </div>
          )
        }
      }

 }

 const mapStateToProps = (state) => {
   return {
     userEvents: state.userEvents
   }
 }

 TrophyCase.propTypes = {
   userEvents: PropTypes.object.isRequired,
 }

export default connect (mapStateToProps, {...actions})(TrophyCase);
