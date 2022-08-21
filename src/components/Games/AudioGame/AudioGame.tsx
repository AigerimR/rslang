import React from 'react';
import classes from './audioGame.module.scss';
import CloseButton from './Buttons/CloseButton/CloseButton';
//import AudioGamePage from './AudioGamePage/AudioGamePage';


const AudioGame = () => {
  return (
    /*     <div>
          <AudioGamePage />
        </div> */
    <main className={classes.audiogame_page}>
      <div className={classes.container}>
        <div className={classes.audiogame_control_btns} >
          <CloseButton />
        </div>
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
