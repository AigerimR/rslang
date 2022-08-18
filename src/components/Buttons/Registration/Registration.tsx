import React from 'react';
import classes from './registration.scss';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
      <div>
        <Link to="/authorization"><button className={classes.enter_btn}></button></Link>
      </div>
  )
};

export default Registration;
