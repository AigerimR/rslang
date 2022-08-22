import React from 'react';
import classes from './audioMissButton.module.scss';

const MissWordButton = () => {
  return (
    <div>
      <button className={classes.audio_miss_btn}> Не знаю</button>
    </div>
  )
};

export default MissWordButton;
