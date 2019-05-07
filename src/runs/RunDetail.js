import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import EditRunForm from './EditRunForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

class RunDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      saving: false,
      run: this.props.run
    };
    this.updateRunState = this.updateRunState.bind(this);
    this.saveRun = this.saveRun.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteRun = this.deleteRun.bind(this);
    this.getPace = this.getPace.bind(this);
  }

  updateRunState(event) {
    const field = event.target.name;
    const run = this.state.run;
    run[field] = event.target.value;
    return this.setState({run: run});
  }

  saveRun(event) {
    event.preventDefault();
    this.setState({saving: true});

    this.props.actions.updateRun(this.state.run);
  }

  toggleEdit() {
    this.setState({isEditing: true})
  }

  deleteRun(event) {
    this.props.actions.deleteRun(this.state.run)
    this.props.history.push("/user_profile")
  }

  getPace = () => {
    let runTime = this.state.run.time;
    let runDistance = this.state.run.distance;
    let pace = (runDistance / (runTime  / 60));
    return pace.toFixed(1);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.run.id !== nextProps.run.id) {
      this.setState({run: nextProps.run});
    }
    this.setState({saving: false, isEditing: false});
  }

  render() {

    if (this.state.isEditing) { // this.state.hasGoal?
      return (
        <Col md={{ span: 4, offset: 5 }}>
          <div>
            <EditRunForm
              run={this.state.run}
              onChange={this.updateRunState}
              saveRun={this.saveRun}
            />
          </div>
        </Col>
      )
    }
    return (
      <Col md={{ span: 4, offset: 4 }}>
        <div className="feature">
          <h3>Run Details</h3>
          <h4>Course: {this.props.run.course}</h4>
          <p>Distance: {this.props.run.distance} miles</p>
          <p>Time: {this.props.run.time} minutes</p>
          <p>Review: {this.props.run.review}</p>
          <p>Rating: {this.props.run.rating}</p>
          <p>Your average pace: {this.getPace()} miles per hour</p>
          <button onClick={this.toggleEdit}>edit</button>
          <button onClick={this.deleteRun}>delete</button>
          <p><Link to={'/runs'}>Back to My Runs</Link><span> --- <Link to={'/user_profile'}>My Profile</Link></span></p>
        </div>
      </Col>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let run = {course: '', distance: '', time: '', review: '', rating: ''}
  const runId = ownProps.match.params.id;

  if(state.runs.runs.length > 0) {
    run = Object.assign({}, state.runs.runs.find(run => run.id === parseInt(runId)))
  }

  return {run: run}
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

RunDetail.propTypes = {
  run: PropTypes.object.isRequired,
  actions: PropTypes.objectOf(PropTypes.func)
}

export default connect(mapStateToProps, mapDispatchToProps)(RunDetail);
