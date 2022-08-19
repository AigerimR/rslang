import React from 'react';
import classes from './waveHeader.module.scss';

const WaveTop = () => {
  return (
    <div className={classes.header_ocean}>
      <div className={classes.header_wave}></div>
      <div className={classes.header_wave}></div>
    </div>
  )
};

export default WaveTop;
