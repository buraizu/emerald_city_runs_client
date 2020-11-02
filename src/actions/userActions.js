import * as types from './actionTypes'
import { datadogLogs } from '@datadog/browser-logs'

//this function has an authentication request action type
const authRequest = () => {
  datadogLogs.logger.info('Authentication request', { name: 'authRequest', location: 'userActions.js' })
  return {
    type: types.AUTHENTICATION_REQUEST
  }
}

//this function has an authentication success action type. When there's a success in correct credentials, the server passes a user and token.
const authSuccess = (user, token) => {
  datadogLogs.logger.info('Authentication success', { name: 'authSuccess', location: 'userActions.js' })
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}
//this function has an authentication failure action type. When there are incorrect credentials, the server passes errors.
const authFailure = (errors) => {
  datadogLogs.logger.info('Authentication failure', { name: 'authFailure', location: 'userActions.js' })
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const signup = (user) => {
  const newUser = user
  datadogLogs.logger.info('New User', { email: newUser.email, location: 'userActions.js' })
  return dispatch => {
    return fetch(`https://emerald-city-runs-api.herokuapp.com/api/users`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user: user})
    })
      .then(response => response.json())
      .then(jresp => {
        dispatch(authenticate({
          email: newUser.email,
          password: newUser.password})
        );
      })
      .catch((errors) => {
        dispatch(authFailure(errors))
      })
  };
}

export const authenticate = (credentials) => {
  return dispatch => {
    dispatch(authRequest())
    return fetch(`https://emerald-city-runs-api.herokuapp.com/api/user_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: credentials})
    })
      .then(res => res.json())
      .then((response) => {
          const token = response.jwt;
          localStorage.setItem('token', token);
          return getUser(credentials)
      })
      .then((user) => {
        console.log(user)
          dispatch(authSuccess(user, localStorage.token))
      })
      .catch((errors) => {
          dispatch(authFailure(errors))
          localStorage.clear()
      })
  }
}

export const getUser = (credentials) => {
  const request = new Request(`https://emerald-city-runs-api.herokuapp.com/api/find_user`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({user: credentials})
  })
  return fetch(request)
    .then(response => response.json())
    .then(userJson => {return userJson})
    .catch(error => {
      return error;
    });
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: types.LOGOUT
    });
  }
}
