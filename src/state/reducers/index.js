import {combineReducers} from 'redux'
import commentsReducer from './comments.reducer'
import userReducer from './user.reducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
  comments: commentsReducer,
  user: userReducer,
  form: formReducer
})
