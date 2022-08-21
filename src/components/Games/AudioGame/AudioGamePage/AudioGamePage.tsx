import React from 'react';
import classes from './audioGamePage.scss';
import CloseButton from '../Buttons/CloseButton/CloseButton';
import FullScreenButton from '../Buttons/FullScreenButton/FullScreenButton';
import SoundButton from '../Buttons/SoundButton/SoundButton';

const AudioGamePage = () => {
  return (
    <main className={classes.audio_page}>
      <div className={classes.container}>
        <div className={classes.audio_control_btns} >
          <SoundButton />
          <FullScreenButton />
          <CloseButton />
        </div>
      </div>
    </main >
  )
};

export default AudioGamePage;
