import React from 'react';
import classes from './audioMainPage.module.scss';
import CloseButton from '../Buttons/audioControlButtons/CloseButton/CloseButton';
import StartButton from '../Buttons/AudioStartButton/AudioStartButton';

const AudioGame = () => {
  return (
    <section>
      <div className={classes.audioMain_control_btns} >
        <CloseButton />
      </div>
      <div className={classes.audioMain_container}>
        <h2 className={classes.audioMain_title}>Аудиовызов</h2>
        <p className={classes.audioMain_info}>Тренировка улучшает восприятие речи на слух.</p>
        <p className={classes.audioMain_rule}>В этой игре нужно выбрать перевод услышанного слова.</p>
        <StartButton />
      </div>
    </ section>
  )
};

export default AudioGame;
