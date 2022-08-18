import React, { useState } from 'react';
import classes from './menu.module.scss';

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className={classes.menu}>
      <div className={menuActive ? `${classes.menu_btn} ${classes.menu_open}` : classes.menu_btn} onClick={() => setMenuActive(!menuActive)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classes.menu_shadow} style={menuActive ? { display: 'block' } : { display: 'none' }}></div>
      <ul className={menuActive ? `${classes.menu_list} ${classes.menu_active}` : classes.menu_list}>

        <li className={classes.menu_item}>
          <a className={classes.menu_link}>О нас</a>
        </li>
        <li className={classes.menu_item}>
          <a className={classes.menu_link}>Учебник</a>
        </li>
        <li className={classes.menu_item}>
          <a className={classes.menu_link}>Аудиовызов</a>
        </li>
        <li className={classes.menu_item}>
          <a className={classes.menu_link}>Спринт</a>
        </li>
        <li className={classes.menu_item}>
          <a className={classes.menu_link}>Сложные слова</a>
        </li>
        <li className={classes.menu__item}>
          <a className={classes.menu_link}>Статистика</a>
        </li>
      </ul>
    </nav>
  )
};

export default Menu;
