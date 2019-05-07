import React from 'react';
import PropTypes from 'prop-types';
import Run from './Run';

const RunsList = (props) => {
  let runCount = <div className="feature text-center">RUNS: {props.runs.runs.length}</div>
  let displayRuns;

  if(props.runs.runs !== undefined && props.runs.runs.length > 0) {
    displayRuns = props.runs.runs.map((run, index) =>
        <Run key={run.id} run={run} />
      )
  }

  return (
    <div>
      {runCount}
      {displayRuns}
    </div>
  )
}

RunsList.propTypes = {
  runs: PropTypes.object
}

export default RunsList;
