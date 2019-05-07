import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RunForm extends Component {

  state = {
    course: '',
    distance: '',
    time: '',
    review: '',
    rating: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const run = {...this.state};

    this.props.postRun(run);

    this.setState({
      course: '',
      distance: '',
      time: '',
      review: '',
      rating: ''
    })
  }

  render() {
    return(
      <div className="feature">
        <h3>Log your latest run here</h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="course"
            value={this.state.course}
            placeholder="course"
          />
          <br />
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="distance"
            value={this.state.distance}
            placeholder="distance"
          />
          <br />
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="time"
            value={this.state.time}
            placeholder="time"
          />
          <br />
          <textarea
            onChange={(event) => this.handleOnChange(event)}
            name="review"
            value={this.state.review}
            placeholder="Please write a review"
          />
          <br />
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="rating"
            value={this.state.rating}
            placeholder="rating"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }

}

RunForm.propTypes = {
  postRun: PropTypes.func.isRequired
}

export default RunForm;
