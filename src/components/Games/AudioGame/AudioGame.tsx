import React from 'react';
import AudioMainPage from './AudioMainPage/AudioMainPage';
import classes from './audiogame.module.scss';

const AudioGame = () => {
  return (
    <main className={classes.audio_page}>
      <div className={classes.container}>
        <AudioMainPage />
      </div>
    </main>
  );
};

export default AudioGame;
