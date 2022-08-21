import React, { useState } from 'react';
import classes from './audiogame.module.scss';
import CloseButton from './CloseButton/CloseButton';

const AudioGame = () => {
  return (
    <main className={classes.audiogame_page}>
      <div className={classes.container}>
        <CloseButton />
        <div className={classes.audiogame_container}>
          <h2 className={classes.audiogame_title}>Аудиовызов</h2>
          <p className={classes.audiogame_info}>Тренировка улучшает восприятие речи на слух.</p>
          <p className={classes.audiogame_rule}>В этой игре нужно выбрать перевод услышанного слова.</p>
          <button className={classes.audiogame_start}>Начать</button>
        </div>
      </div>
    </main >
  )
};

export default AudioGame;
