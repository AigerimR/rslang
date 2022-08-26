import React from 'react';
import classes from './authorizationBtn.module.scss';
import { Link } from 'react-router-dom';

const AuthorizationBtn = () => {
  return (
      <div>
        <Link to="/authorization"><button className={classes.enter_btn}></button></Link>
      </div>
  )
};

export default AuthorizationBtn;
