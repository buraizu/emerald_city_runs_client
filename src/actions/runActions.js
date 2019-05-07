export const fetchRuns = () => {
  let data = {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${localStorage.token}`,
    },
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_RUNS'});
    return fetch("https://emerald-city-runs-api.herokuapp.com/api/runs", data)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: 'FETCH_RUNS', payload: responseJson })
      })
  }
}

export const postRun = (run) => {
  let data = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(run)
  }

  return function(dispatch) {
    return fetch("https://emerald-city-runs-api.herokuapp.com/api/runs", data)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: 'ADD_RUN', run: responseJson})
      })
  }
}

export const updateRun = (run) => {
  let runId = run.id;
  let data = {
    method: 'PUT',
    headers: {
      "Authorization": `Bearer ${localStorage.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(run)
  }

  return function(dispatch) {
    return fetch(`https://emerald-city-runs-api.herokuapp.com/api/runs/${runId}`, data)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({type: 'UPDATE_RUN', run: responseJson})
      })
  }
}

export const deleteRun = (run) => {
  let data = {
    method: 'DELETE',
    headers: {"Authorization": `Bearer ${localStorage.token}`}
  }

  return function(dispatch) {
    return fetch(`https://emerald-city-runs-api.herokuapp.com/api/runs/${run.id}`, data)
      .then(dispatch({type: 'DELETE_RUN', run: run}))
    }
}
