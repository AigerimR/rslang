import React, { useContext, useState } from 'react';
import classes from './menu.module.scss';
import { Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const body = document.body;
  menuActive ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';
  const { userLogged, setUserLogged } = useContext(UserContext);

  return (
    <div className={classes.menu_container}>
      <nav className={classes.menu}>
        <div className={menuActive ? `${classes.menu_btn} ${classes.menu_open}` : classes.menu_btn} onClick={() => setMenuActive(!menuActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={classes.menu_shadow} style={menuActive ? { display: 'block' } : { display: 'none' }} onClick={() => setMenuActive(false)}></div>
        <ul className={menuActive ? `${classes.menu_list} ${classes.menu_active}` : classes.menu_list}>
          <li className={classes.menu_item}>
            <Link to="/textbook" className={classes.menu_link} onClick={() => setMenuActive(false)}>Учебник</Link>
          </li>
          <li className={classes.menu_item}>
            <Link to="/audio-game" className={classes.menu_link} onClick={() => setMenuActive(false)}>Аудиовызов</Link>
          </li>
          <li className={classes.menu_item}>
            <Link to="/sprint-game" className={classes.menu_link} onClick={() => setMenuActive(false)}>Спринт</Link>
          </li>
          <li className={userLogged ? classes.menu_item : classes.menu_none}>
          {/* <li className={classes.menu_item}> */}
            <Link to="/complex-words" className={classes.menu_link} onClick={() => setMenuActive(false)}>Сложные слова</Link>
          </li>
          <li className={userLogged ? classes.menu_item : classes.menu_none}>
          {/* <li className={classes.menu__item}> */}
            <Link to="/statistics" className={classes.menu_link} onClick={() => setMenuActive(false)}>Статистика</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Menu;
