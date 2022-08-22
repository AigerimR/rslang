import React from 'react';
import classes from './wordList.module.scss';

const WordList = () => {
  return (
    <ol className={classes.audio_list}>
      <li className={classes.audio_list_item}>девочка</li>
      <li className={classes.audio_list_item}>мука</li>
      <li className={classes.audio_list_item}>значить</li>
      <li className={classes.audio_list_item}>пушка</li>
      <li className={classes.audio_list_item}>квартира</li>
    </ol>
  )
};

export default WordList;
