export const checkIn = () => ({
  type: 'CHECK_IN',
});

export const checkOut = () => ({
  type: 'CHECK_OUT',
});

export const CurrentUser = ({ id, username, email }) => ({
  type: 'currentUser',
  id,
  username,
  email,
});
