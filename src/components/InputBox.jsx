import { useState } from 'react';
import style from './InputBox.module.css';
import userNameIcon from '../assets/account_circle.png';
import emailIcon from '../assets/mail.png';
import keyIcon from '../assets/key.png';
import visibilityIcon from '../assets/visibility.png';
import visibilityOffIcon from '../assets/visibility_off.png';

const InputBox = ({ type, error, value, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const getInputDetails = () => {
    switch (type) {
      case 'email':
        return {
          icon: emailIcon,
          title: 'Email',
          placeholder: 'Enter your email',
        };
      case 'password':
        return {
          icon: keyIcon,
          title: 'Password',
          placeholder: 'Enter your password',
        };
      default:
        return {
          icon: userNameIcon,
          title: 'Username',
          placeholder: 'Enter your username',
        };
    }
  };

  const { icon, title, placeholder } = getInputDetails();

  return (
    <div>
      <div className={style.inputDiv}>
        <div className={style.inputIcon}>
          <img src={icon} alt={`${title} icon`} />
        </div>
        <div className={style.inputDetails}>
          <p className={style.inputLabel}>{title}</p>
          <input
            className={style.inputBox}
            placeholder={placeholder}
            type={type === 'password' && !isVisible ? 'password' : 'text'}
            value={value}
            onChange={onChange}
          />
        </div>
        {type === 'password' && (
          <img
            src={isVisible ? visibilityOffIcon : visibilityIcon}
            alt="Toggle visibility"
            className={style.visibilityIcon}
            onClick={() => setIsVisible(!isVisible)}
          />
        )}
      </div>
      {error && <p className={style.errormsg}>{error}</p>}
    </div>
  );
};

export default InputBox;
