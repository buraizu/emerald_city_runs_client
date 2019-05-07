export const fetchEvents = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS' });
    return fetch('/api/events')
      .then(response => response.json())
      .then(responseJson => {
        dispatch({ type: 'ADD_EVENTS', events: responseJson })
      })
  }
}

export const getEvents = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EVENTS' });
    return fetch(`/api/get_events`)
      .then(response => console.log(response))
  }
}
