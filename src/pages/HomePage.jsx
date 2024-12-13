import { useNavigate } from 'react-router-dom';
import style from './HomePage.module.css'; 
import ProfileImg from '../assets/profile.png';
import { logoutUser } from '../utils/api'; 

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logoutUser(); 
    navigate('/auth/login'); 
  };

  return (
    <div className={style.homePage}>
      <div className={style.homeTitle}>
        <h2>
          Welcome to <span>Unstop</span>
        </h2>
      </div>
      <div className={style.profileCard}>
        <img
          src={ProfileImg} 
          alt="Profile"
          className={style.profileImage}
        />
        <div className={style.profileDetails}>
          <h3>Michael Dam</h3>
          <p>example@gmail.com</p>
          <p>Female</p>
        </div>
        <button className={style.logoutButton} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default HomePage;
