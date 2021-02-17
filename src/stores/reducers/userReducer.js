const initialState = {
  id: 'still not logged in',
  username: 'not logged in',
  email: 'not logged in',
};

const userReducer = (state = initialState, action) => {
  const {
    type, id, username, email,
  } = action;

  switch (type) {
    case 'currentUser':
      return {
        ...state,
        id,
        username,
        email,
      };
    default:
      return state;
  }
};

export default userReducer;
