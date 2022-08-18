import React from 'react';
import classes from './header.module.scss';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Registration from '../Buttons/Registration/Registration';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        <Menu />
        <Registration />
      </div>
    </header>
  )
};

export default Header;
