import React from 'react';
import classes from './logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={classes.logo_container}>
      <Link to="/" className={classes.logo_link}>

        <h1 className={classes.logo}>
          RS
          <span className={classes.logo_L}>L</span>
          <span className={classes.logo_ang}>ang</span>
        </h1>
      </Link>
      <div className={classes.logo_slogan}>
        <span>Открой с</span>
        <span>нами мир</span>
      </div>
    </div>
  )
};

export default Logo;
