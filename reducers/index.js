import { combineReducers } from 'redux'
import tvMazeReducer from './tvmaze-reducer'
import formReducer from  './form-reducer'

export default combineReducers({
  // partOfTheStore: reducerThatIsResponsible
  tvMazeApiState: tvMazeReducer,
  formState: formReducer
})