import React, { FC } from 'react';
import classes from './menu.module.scss';

const Menu: FC = () => {
  return (
    <nav className={classes.menu}>
      <div className={classes.menu_btn}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={classes.menu_shadow}></div>
      <ul className={classes.menu_list}>
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
