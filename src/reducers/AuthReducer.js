// Redux: Initial State
const initialState = {
  email: '',
  password: '',
};


// Redux: Reducer
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


// Exports
export default AuthReducer;
