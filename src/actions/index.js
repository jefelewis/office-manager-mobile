// Redux: Action
const emailChanged = (text) => {
  return {
    type: 'email_changed',
    payload: text,
  };
};


// Exports
export default emailChanged;
