import React, { FC } from 'react';
import classes from './header.module.scss';
import Menu from './Menu/Menu';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
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
        <Menu />
        <button className={classes.enter_btn}></button>
      </div>
    </header>
  )
};

export default Header;
