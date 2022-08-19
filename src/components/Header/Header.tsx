import React from 'react';
import classes from './header.module.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import AuthorizationBtn from '../Buttons/AuthorizationBtn/AuthorizationBtn';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        <Menu />
        <AuthorizationBtn />
      </div>
    </header>
  )
};

export default Header;
