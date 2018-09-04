import {
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_SUCCESS,
  ADD_NEW_COMMENT_START,
  ADD_NEW_COMMENT_SUCCESS,
  ADD_NEW_COMMENT_FAILURE
} from 'constants/types'

import {startSubmit, stopSubmit, reset} from 'redux-form'
import commentService from '../services/comments'

export const getComments = userId => async dispatch => {
  dispatch({type: FETCH_COMMENTS_START})
  try {
    const res = await commentService.fetchComments(userId)
    dispatch({type: FETCH_COMMENTS_SUCCESS, payload: res.data})
  } catch (error) {
    dispatch({type: FETCH_COMMENTS_FAILURE})
  }
}

export const addComment = commentData => async dispatch => {
  dispatch(startSubmit('addComment'))
  try {
    dispatch({type: ADD_NEW_COMMENT_START})
    const res = await commentService.addComment(commentData)
    dispatch({type: ADD_NEW_COMMENT_SUCCESS, payload: res.data})
    dispatch(reset('addComment'))
    dispatch(stopSubmit('addComment'))
  } catch (error) {
    dispatch({type: ADD_NEW_COMMENT_FAILURE, payload: error})
    dispatch(stopSubmit('addComment'))
  }
}
