import React, { useState } from 'react';
import classes from "./authorization.module.scss"
import Login from './Login/Login';
import Register from './Register/Register';

const Authorization: React.FC = () => {
  const [state, setState] = useState<string>("register");

  return (
    <div className = {classes.auth_main}>
      <div className = {classes.auth_container}>
      <div className={classes.auth_header}>
        <button className = {`${classes.btn_link} ${state === 'register' ? classes.btn_active : ""}`} onClick={()=>setState("register")}>Регистрация</button>
        <button className = {`${classes.btn_link} ${state === 'login' ? classes.btn_active : ""}`} onClick={()=>setState("login")}>Вход</button>
      </div>
        {(state === "register") ? <Register /> : <Login />}
      </div>
    </div>
  );
}

export default Authorization;