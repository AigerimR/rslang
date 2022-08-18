import React from 'react';
import classes from './logo.module.scss';

const Logo = () => {
  return (
    <div className={classes.logo_container}>
      <a className={classes.logo_link} href='#'>
        <h1 className={classes.logo}>
          RS
          <span className={classes.logo_L}>L</span>
          <span className={classes.logo_ang}>ang</span>
        </h1>
      </a>
      <div className={classes.logo_slogan}>
        <span>Открой с</span>
        <span>нами мир</span>
      </div>
    </div>
  )
};

export default Logo;
