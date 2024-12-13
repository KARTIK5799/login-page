import LoginForm from '../components/LoginForm';
import style from './LoginPage.module.css';
import leftImg from '../assets/illustration.png'

const LoginPage = () => {
  return (
    <div className={style.LoginForm}>
      <div className={style.LeftSide}>
        <img src={leftImg} alt="Illustration" />
      </div>

      <div className={style.RightSide}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
