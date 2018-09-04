import {
  FETCH_USER_START,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  UPDATE_USER_SUCCESS
} from 'constants/types'

const initialState = {
  user: {
    isLoading: false,
    isEmpty: true,
    data: {}
  }
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {
        ...state,
        user: {
          isLoading: true
        }
      }

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: {
          isLoading: false,
          isEmpty: false,
          data: action.payload
        }
      }

    case FETCH_USER_FAILURE:
      return {
        ...state,
        user: {
          isLoading: false,
          isEmpty: false,
          data: {}
        }
      }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          data: {
            ...state.user.data,
            ...action.payload
          }
        }
      }

    default:
      return state
  }
}

export default userReducer
