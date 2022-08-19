import React from 'react';
import classes from './header.module.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import AuthorizationBtn from '../Buttons/AuthorizationBtn/AuthorizationBtn';

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.container}>
          <Logo />
          <Menu />
          <AuthorizationBtn />
        </div>
      </header>
    </div>
  )
};

export default Header;
