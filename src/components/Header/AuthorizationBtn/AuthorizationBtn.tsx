import React, { useContext } from 'react';
import classes from './authorizationBtn.module.scss';
import { Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';

const AuthorizationBtn = () => {
  const { userLogged, setUserLogged } = useContext(UserContext);
  const handleLogOut = () => {
    setUserLogged(false);
    localStorage.clear();
  }

  return (
    userLogged ? (
      <div>
        <Link to="/authorization" onClick={handleLogOut}><button className={classes.logout_btn}></button></Link>
      </div>
      ) : (
      <div>
        <Link to="/authorization"><button className={classes.enter_btn}></button></Link>
      </div>
      )
  )
};

export default AuthorizationBtn;
