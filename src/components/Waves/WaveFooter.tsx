import React from 'react';
import classes from './waveFooter.module.scss';

const WaveTop = () => {
  return (
    <div className={classes.footer_ocean}>
      <div className={classes.footer_wave}></div>
      <div className={classes.footer_wave}></div>
    </div>
  )
};

export default WaveTop;
