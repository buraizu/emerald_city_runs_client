export default (state = { loading: false, userEvents: [] }, action) => {

  switch(action.type) {

    case 'ADD_USER_EVENT':
      return {
        userEvents: [action.userEvent, ...state.userEvents]
      };

    case 'LOADING_USER_EVENTS':
      return Object.assign({}, state, {loading: true});

    case 'FETCH_USER_EVENTS':
      const sortedUserEvents = action.payload.sort((event1, event2) => new Date(event1.date) - new Date(event2.date))
      return {loading: false, userEvents: sortedUserEvents};

    case 'UPDATE_USER_EVENT':
      return {
        userEvents: [
          ...state.userEvents.filter(userEvent => userEvent.id !== action.userEvent.id),
          Object.assign({}, action.userEvent)
        ]
      }

    case 'DELETE_USER_EVENT':
      const idOfUserEventToDelete = action.userEvent.id
      const newState = Object.assign([], state.userEvents.filter(userEvent => {
        return userEvent.id !== idOfUserEventToDelete
      }));
      return {
        userEvents: [
          ...newState
        ]
      }

    case 'USER_EVENT_FAILURE':
      return {
        errors: action.errors || []
      }

    default:
      return state;
  }
}
