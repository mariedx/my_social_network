const initialState = {
  username: 'not logged in',
  email: 'not logged in',
};

const userReducer = (state = initialState, action) => {
  const { type, username, email } = action;

  switch (type) {
    case 'currentUser':
      return {
        ...state,
        username,
        email,
      };
    default:
      return state;
  }
};

export default userReducer;
