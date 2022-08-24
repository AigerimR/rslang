import React, { useState } from 'react';
import classes from "./authorization.module.scss"
import Register from './Register/Register';

const Authorization: React.FC = () => {
  
  return (
    <div className = {classes.auth_main}>
      <div className = {classes.auth_container}>
        <Register />
        {/* <LogIn /> */}
      </div>
    </div>

  );
}

export default Authorization;