export const addUserToLocalStorage = (user) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('calidoUser', JSON.stringify(user));
  }
};

// export const removeUserFromLocalStorage = () => {
//   localStorage.removeItem('user');
// };

export const getUserFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const result = localStorage.getItem('calidoUser');
    const user = result ? JSON.parse(result) : null;
    return user;
  }
};
