import { Button } from '@mui/material';
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
      {/* <Button variant="outlined" sx={{width: '100%', mt: '20px'}} onClick={()=>setState("register")}>Регистрация</Button>
      <Button variant="text" sx={{width: '100%', mt: '20px'}} onClick={()=>setState("login")}>Вход</Button> */}

        <button onClick={()=>setState("register")} className = {`${classes.btn_link} ${classes.btn_active}`}>Регистрация</button>
        <button onClick={()=>setState("login")}>Вход</button>
        {/* <h4>Регистрация</h4>
        <h4>Войти</h4> */}
      </div>
        {(state === "register") ? 
        <Register /> :
        <Login />}
      </div>
    </div>

  );
}

export default Authorization;