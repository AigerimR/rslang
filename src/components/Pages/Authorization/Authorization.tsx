import React, { useState } from 'react';
import classes from './authorization.module.scss'
import Login from './Login/Login';
import Register from './Register/Register';
import manImage from '../../../assets/img/login_man.png';
import Footer from '../../Footer/Footer';

const Authorization: React.FC = () => {
  const [state, setState] = useState<string>('register');

  return (
    <section className={classes.auth_main}>
      <div className={classes.container}>
        <div className={classes.auth_container}>
          <div className={classes.auth_header}>
            <button className={`${classes.btn_link} ${state === 'register' ? classes.btn_active : ''}`} onClick={() => setState('register')}>Регистрация</button>
            <button className={`${classes.btn_link} ${state === 'login' ? classes.btn_active : ''}`} onClick={() => setState('login')}>Вход</button>
          </div>
          {(state === 'register') ? <Register /> : <Login />}
        </div>
        <div className={classes.auth_side}>
          {state === 'register' ? <h2 >Зарегистрируйся и получи больше пользы!</h2> : <></>}
          <img src={manImage} alt="" className={classes.auth_img} />
        </div>
      </div>
    </section>
  );
}

export default Authorization;
