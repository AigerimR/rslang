import React from 'react';
import classes from './audioGamePage.scss';
import CloseButton from '../Buttons/audioControlButtons/CloseButton/CloseButton';
import FullScreenButton from '../Buttons/audioControlButtons/FullScreenButton/FullScreenButton';
import SoundButton from '../Buttons/audioControlButtons/SoundButton/SoundButton';
import MissWordButton from '../Buttons/AudioMissButton/AudioMissButton';
import OpenWord from './OpenWord/OpenWord';
import WordList from './WordList/WordList';

const AudioGamePage = () => {
  return (
    <section>
      <div className={classes.audioGame_control_container}>
        <div className={classes.audioGame_lives}>
          <span className={`${'material-icons'} ${classes.audioGame_live} ${classes.live_1}`}>favorite {/* heart_broken */}</span>
          <span className={`${'material-icons'} ${classes.audioGame_live} ${classes.live_2}`}>favorite {/* heart_broken */}</span>
          <span className={`${'material-icons'} ${classes.audioGame_live} ${classes.live_3}`}>favorite {/* heart_broken */}</span>
          <span className={`${'material-icons'} ${classes.audioGame_live} ${classes.live_4}`}>favorite {/* heart_broken */}</span>
          <span className={`${'material-icons'} ${classes.audioGame_live} ${classes.live_5}`}>favorite {/* heart_broken */}</span>
        </div>
        <div className={classes.audioGame_control_btns} >
          <SoundButton />
          <FullScreenButton />
          <CloseButton />
        </div>
      </div>
      <div className={classes.audioGame_content}>
        <div className={classes.audioGame_null}></div>
        <OpenWord />
        <WordList />
        <MissWordButton />
      </div>
    </section >
  )
};

export default AudioGamePage;
