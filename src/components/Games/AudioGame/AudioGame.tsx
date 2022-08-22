import React from 'react';
import classes from './audioGame.module.scss';
import AudioMainPage from './AudioMainPage/AudioMainPage';

const AudioGame = () => {
  return (
    <main className={classes.audio_page}>
      <div className={classes.container}>
        <AudioMainPage />
      </div>
    </main >
  )
};

export default AudioGame;
