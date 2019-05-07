import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RunsList from './RunsList';
import RunForm from './RunForm';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class RunsContainer extends Component {

  componentDidMount() {
    this.props.fetchRuns();
  }

  render() {
    const runs = this.props.runs;

      return (
        <div>
          <Row>
            <Col md={{ span: 2, offset: 5 }}>
              <h2 className="displayText text-center">Runs</h2>
              </Col>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <RunForm postRun={this.props.postRun} />
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <RunsList runs={runs} />
            </Col>
          </Row>
        </div>
      )
    }

 }

 const mapStateToProps = (state) => {
   return {
     runs: state.runs
   }
 }

 RunsContainer.propTypes = {
   runs: PropTypes.object.isRequired,
   postRun: PropTypes.func.isRequired
 }

export default connect (mapStateToProps, {...actions})(RunsContainer);
