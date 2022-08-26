import React, { useContext } from 'react';
import classes from './authorizationBtn.module.scss';
import { Link } from 'react-router-dom';
import CommonContext from '../../Context/Context';

const AuthorizationBtn = () => {
  const { userLogged, setUserLogged } = useContext(CommonContext);
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