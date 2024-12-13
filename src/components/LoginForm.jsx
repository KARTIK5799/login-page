import { useState, useEffect } from 'react';
import InputBox from './InputBox';
import style from './LoginForm.module.css';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import { validateEmail, validatePassword, validateUsername } from '../utils/validation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setIsLoggedIn(true);
      window.location.href = '/home'; 
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    const usernameError = validateUsername(username);
    if (usernameError) newErrors.username = usernameError;

    const emailError = validateEmail(email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {

      localStorage.setItem('authToken', 'dummy-token'); 
      localStorage.setItem('userData', JSON.stringify({ username, email, password })); // Add password here
  
      toast.success(`Successfully logged in as ${username}`);
    
      setIsLoggedIn(true);
      window.location.href = '/home'; 
    } else {
      toast.error('Please fill all fields correctly.');
    }
  };
  

  return (
    <div className={style.loginForm}>
      <div className={style.loginTitle}>
        <h2>
          Welcome to <span>Unstop</span>
        </h2>
      </div>
      <div className={style.loginOptions}>
        <button className={style.loginButton}>
          <img src={googleIcon} alt="Google Icon" />
          <p>Login with Google</p>
        </button>
        <button className={style.loginButton}>
          <img src={facebookIcon} alt="Facebook Icon" />
          <p>Login with Facebook</p>
        </button>
      </div>
      <div className={style.divider}>OR</div>
      <form className={style.inputSection} onSubmit={handleSubmit}>
        <InputBox
          type="username"
          error={errors.username}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox
          type="email"
          error={errors.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox
          type="password"
          error={errors.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.api && <p className={style.errormsg}>{errors.api}</p>}
        <div className={style.rememberAndForgetSection}>
          <div className={style.checkboxWrapper}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <a href="#" className={style.forgetLink}>Forgot Password?</a>
        </div>
        <button className={style.submitButton} type="submit">
          Login
        </button>
        <p className={style.registerPrompt}>
          Don’t have an account? <span className={style.registerLink}>Register</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
