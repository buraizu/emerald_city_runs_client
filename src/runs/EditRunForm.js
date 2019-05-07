import React, { Component }  from 'react';
import PropTypes from 'prop-types';

class EditRunForm extends Component {

  render() {
    return (
      <div className="feature">
        <h3>Edit Run</h3>
        <form onSubmit={this.props.saveRun}>
          <span>Course: </span>
          <input
            type="text"
            onChange={this.props.onChange}
            name="course"
            value={this.props.run.course}
            placeholder="course"
          />
          <br />
          <span>Distance: </span>
          <input
            type="text"
            onChange={this.props.onChange}
            name="distance"
            value={this.props.run.distance}
            placeholder="distance"
          />
          <br />
          <span>Time: </span>
          <input
            type="text"
            onChange={this.props.onChange}
            name="time"
            value={this.props.run.time}
            placeholder="time"
          />
          <br />
          <span>Review: </span>
          <textarea
            onChange={this.props.onChange}
            name="review"
            value={this.props.run.review}
            placeholder="Please write a review"
          />
          <br />
          <span>Rating: </span>
          <input
            type="text"
            onChange={this.props.onChange}
            name="rating"
            value={this.props.run.rating}
            placeholder="rating"
          />
          <br />
          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
          />
        </form>
      </div>
    )
  }
}

EditRunForm.propTypes = {
  run: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  saveRun: PropTypes.func.isRequired
}

export default EditRunForm;
