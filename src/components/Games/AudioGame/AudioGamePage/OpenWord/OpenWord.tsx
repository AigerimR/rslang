import React from 'react';
import classes from './openWord.module.scss';

const OpenWord = () => {
  return (
    <div className={classes.audio_open_word}>
      <div className={classes.audio_open_word_img}></div>
      <div className={classes.audio_open_word_context}>
        <span className={classes.audio_open_word_context_sound}></span>
        <span className={classes.audio_open_word_context_value}>girl</span>
      </div>
    </div>
  )
};

export default OpenWord;
