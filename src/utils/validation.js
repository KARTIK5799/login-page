
export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return null;
  };
  

  export const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    return null; 
  };
  
 
  export const validateUsername = (username) => {
    if (username !== 'emilys') {
      return 'Username must be "emilys"';
    }
    return null;
  };
  