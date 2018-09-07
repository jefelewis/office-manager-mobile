// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import AuthReducer from './AuthReducer';


// React Native: Combine Reducers
export default combineReducers({
  authentication: AuthReducer,
});
