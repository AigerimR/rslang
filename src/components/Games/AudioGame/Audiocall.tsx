import React, { FC, useEffect, useState } from 'react';
import classes from './audiocall.module.scss';
import { TAudiocallWord } from '../../../@types/words';
import { getAllAudiocallWords, getPageAudiocallWords } from '../../../apiHelpers/words/wordsController';
import ISprintGameProps from '../../../interfaces/sprintGame';
import getRandomIndex from '../../../utils/getRandomIndex';
import mixArray from '../../../utils/mixArray';

const AudioGame: FC<ISprintGameProps> = ({
  difficultyLevel,
  score,
  page,
  handleFinishGame,
  handleScore,
  handleAnswer,
  handleRightAnswer,
}) => {
  const [wordsList, setWords] = useState<TAudiocallWord[] | void>([
    {
      id: '',
      word: '',
      image: '',
      audio: '',
      rightTranslate: '',
      translate: [],
    },
  ]);
  const [index, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const [live, brokenLive]: string[] = ['favorite', 'heart_broken'];
  let [live1, live2, live3, live4, live5]: boolean[] = new Array(5).fill(true);
  let isVolumeUp: boolean = true;

  useEffect(() => {
    const words: Promise<TAudiocallWord[] | void> = page
      ? getPageAudiocallWords(parseFloat(difficultyLevel), page)
      : getAllAudiocallWords(parseFloat(difficultyLevel));
    words.then((words) => setWords(words)).finally(() => setLoading(false));
  }, []);

  const [w1, w2, w3, w4, w5]: string[] = mixArray(wordsList[index].translate);
  const audio = new Audio(wordsList[index].audio);
  console.log(wordsList[index]);
  audio.play();

  if (loading) return <p>Loading...</p>;

  return (
    <div className={classes.audiocallWrapper}>
      <div className={classes.audiocallContainer}>
        <div className={classes.audiocallLives}>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{live1 ? live : brokenLive}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{live2 ? live : brokenLive}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{live3 ? live : brokenLive}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{live4 ? live : brokenLive}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{live5 ? live : brokenLive}</span>
        </div>
        <div className={`${'material-icons'} ${classes.audiocall_sound_btn}`}>{isVolumeUp ? 'volume_up' : 'volume_off'}
        </div>
      </div>
      <div className={classes.audiocallContentWrapper}>
        <div className={classes.audiocallNull} style={{ display: 'block' }} onClick={() => audio.play()}></div>
        <div className={classes.audioOpenWord} style={{ display: 'none' }}>
          <div className={classes.audioOpenWord_img} style={{ backgroundImage: `url(${wordsList[index].image})` }}>
          </div>
          <div className={classes.audioOpenWord_context}>
            <span className={classes.audioOpenWord_context_sound} onClick={() => audio.play()}></span>
            <span className={classes.audioOpenWord_context_value}>{wordsList[index].word}</span>
          </div>
        </div>
        <ol className={classes.audioList}>
          <li className={classes.audioList_item}>{w1}</li>
          <li className={`${classes.audioList_item}`}>{w2}</li>
          <li className={`${classes.audioList_item}`}>{w3}</li>
          <li className={`${classes.audioList_item}`}>{w4}</li>
          <li className={`${classes.audioList_item}`}>{w5}</li>
        </ol>
        <button className={`${classes.audiocallBtn} ${classes.missWordBtn}`}> Не знаю</button>
        <button className={`${'material-icons'} ${classes.audiocallBtn} ${classes.nextWordBtn}`} style={{ display: 'none' }}> east</button>
      </div>
    </div>
  );
};

export default AudioGame;
