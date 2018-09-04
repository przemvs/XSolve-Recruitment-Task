import {
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
  ADD_NEW_COMMENT_SUCCESS
} from '../../constants/types'

const initialState = {
  comments: {
    isLoading: false,
    isEmpty: true,
    data: {}
  }
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_START:
      return {
        ...state,
        comments: {
          isLoading: true
        }
      }

    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          isLoading: false,
          isEmpty: false,
          data: action.payload
        }
      }

    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        comments: {
          isLoading: false,
          isEmpty: false,
          data: {}
        }
      }

    case ADD_NEW_COMMENT_SUCCESS:
      const comments = state.comments.data.filter(comment => {
        return comment.id !== action.payload.id
      })

      const newComment = action.payload
      const data = [...comments, newComment]

      return {
        ...state,
        comments: {
          ...state.comments,
          data
        }
      }

    default:
      return state
  }
}

export default commentsReducer
