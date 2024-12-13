  export const checkIfLoggedIn = () => {
    const authToken = localStorage.getItem('authToken');
    return authToken !== null;
  };
  
  export const logoutUser = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  };
  