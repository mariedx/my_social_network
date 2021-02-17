export const checkIn = () => ({
  type: 'CHECK_IN',
});

export const checkOut = () => ({
  type: 'CHECK_OUT',
});

export const CurrentUser = ({ username, email }) => ({
  type: 'currentUser',
  username,
  email,
});
