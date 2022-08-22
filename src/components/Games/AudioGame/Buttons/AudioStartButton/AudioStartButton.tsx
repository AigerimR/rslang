import React, { useState } from 'react';
import classes from './audioStartButton.module.scss';
import LevelPopup from '../../Popups/LevelPopup/LevelPopup';

const StartButton = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={classes.audio_start_btn_container}>
      <button className={classes.audio_start_btn} onClick={() => setModalActive(true)}>Начать</button>

      <LevelPopup active={modalActive} setActive={setModalActive} />
    </div>
  )
};

export default StartButton;
