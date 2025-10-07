import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { useSignOutMutation } from '../../services/api.js';

import Button from '../../components/Button';

import Logout from '../../assets/icons/logout.svg';
import Profile from '../../assets/icons/profile.svg';

import './styles.scss';

const ProfileContent = () => {
  const [signOut] = useSignOutMutation();
  const navigate = useNavigate();

  const handleSignOut = async() => {
    try {
      await signOut().unwrap();
      localStorage.removeItem('user-profile-data');
      navigate('/login');
    } catch {
      toast.error('Error signing out');
    }
  };

  return (
    <div className="profile-content__container">
      <img src={Profile} alt="" aria-hidden="true" />

      <div className="profile-content__div">
        <p className="profile-content__name">John Doe</p>
        <p className="profile-content__email">JohnDoe@email.com</p>
      </div>

      <Button type="new post" variant="primary">
        +&nbsp;&nbsp;&nbsp;New post
      </Button>

      <div className="profile-content__div">
        <p className="profile-content__item">Posts</p>
        <p className="profile-content__value">0</p>
      </div>
      <div className="profile-content__div">
        <p className="profile-content__item">Following</p>
        <p className="profile-content__value">0</p>
      </div>
      <div className="profile-content__div">
        <p className="profile-content__item">Followers</p>
        <p className="profile-content__value">0</p>
      </div>

      <hr className="profile-content__divider"/>

      <button
        className= "profile-content__logout"
        onClick={(event) => {
          event.stopPropagation();
          handleSignOut();
        }}
      >
        <img src={Logout} alt="log out" className="profile-content__icon"/>
        <p className="profile-content__logout-text">Sign out</p>
      </button>
    </div>
  );
};

export default ProfileContent;
