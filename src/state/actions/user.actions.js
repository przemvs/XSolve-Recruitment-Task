import {
  FETCH_USER_FAILURE,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS
} from 'constants/types'

import userService from '../services/user'

export const getUser = id => async dispatch => {
  dispatch({type: FETCH_USER_START})
  try {
    const res = await userService.fetchUser(id)
    dispatch({type: FETCH_USER_SUCCESS, payload: res.data})
  } catch (error) {
    dispatch({type: FETCH_USER_FAILURE})
  }
}

export const updateUser = (id, data) => async dispatch => {
  dispatch({type: UPDATE_USER_START})
  const res = await userService.updateUserPartial({id, ...data})
  dispatch({type: UPDATE_USER_SUCCESS, payload: res.data})
}

export const followUser = (id, data) => async dispatch => {
  dispatch({type: UPDATE_USER_START})
  const res = await userService.updateUserPartial({id, ...data})
  dispatch({type: UPDATE_USER_SUCCESS, payload: res.data})
}
