export const fetchUserEvents = () => {
  let data = {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${localStorage.token}`,
    },
  }
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER_EVENTS'});
    return fetch('https://emerald-city-runs-api.herokuapp.com/api/user_events', data)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: 'FETCH_USER_EVENTS', payload: responseJson })
      })
  }
}


export const setEvent = (event) => {
  let data = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event)
  }
  return function(dispatch) {
    return fetch(`https://emerald-city-runs-api.herokuapp.com/api/user_events`, data)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({type: 'ADD_USER_EVENT', userEvent: responseJson})
      })
      .catch((errors) => {
        dispatch({type: 'USER_EVENT_FAILURE', errors: errors})
      })
  }
}

// const authFailure = (errors) => {
//   return {
//     type: types.AUTHENTICATION_FAILURE,
//     errors: errors
//   }
// }

export const setGoal = (userEvent) => {

  let userEventId = userEvent.id;
  let data = {
    method: 'PUT',
    headers: {
      "Authorization": `Bearer ${localStorage.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userEvent)
  }

  return function(dispatch) {
    return fetch(`https://emerald-city-runs-api.herokuapp.com/api/${userEventId}`, data)
      .then(response => response.json())
      .then(responseJson => {
        dispatch({type: 'UPDATE_USER_EVENT', userEvent: responseJson})
      })
  }
}

export const deleteUserEvent = (userEvent) => {
  let data = {
    method: 'DELETE',
    headers: {"Authorization": `Bearer ${localStorage.token}`}
  }

  return function(dispatch) {
    return fetch(`https://emerald-city-runs-api.herokuapp.com/api/${userEvent.id}`, data)
      .then(dispatch({type: 'DELETE_USER_EVENT', userEvent: userEvent}))
    }
}
