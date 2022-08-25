import React, { FC, useEffect, useState } from 'react';
import classes from './audiocall.module.scss';
import { TAudiocallWord } from '../../../@types/words';
import { getAllAudiocallWords, getPageAudiocallWords } from '../../../apiHelpers/words/wordsController';
import ISprintGameProps from '../../../interfaces/sprintGame';

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
  const [isVolumeUp, setVolumeUp] = useState<boolean>(true);
  const [isAnswerSelected, setAnswerSelected] = useState<boolean>(false);
  const [live, brokenLive]: string[] = ['favorite', 'heart_broken'];
  const hearts = new Array(5).fill(live);

  useEffect(() => {
    const words: Promise<TAudiocallWord[] | void> = page
      ? getPageAudiocallWords(parseFloat(difficultyLevel), page)
      : getAllAudiocallWords(parseFloat(difficultyLevel));
    words.then((words) => setWords(words)).finally(() => setLoading(false));
  }, []);

  const audio = new Audio(wordsList[index].audio);
  const [w0, w1, w2, w3, w4]: string[] = wordsList[index].translate;

  const checkAnswer = (n: number) => {
    console.log([w0, w1, w2, w3, w4][n] === wordsList[index].rightTranslate);
  }

  if (loading) return <p>Loading...</p>;
  return (
    <div className={classes.audiocallWrapper}>
      <div className={classes.audiocallContainer}>
        <div className={classes.audiocallLives}>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{hearts[0]}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{hearts[1]}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{hearts[2]}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{hearts[3]}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{hearts[4]}</span>
        </div>
        <div className={`${'material-icons'} ${classes.audiocall_sound_btn}`}>{isVolumeUp ? 'volume_up' : 'volume_off'}
        </div>
      </div>
      <div className={classes.audiocallContentWrapper}>
        <div className={classes.audiocallNull} style={isAnswerSelected ? { display: 'none' } : { display: 'block' }} onClick={() => audio.play()}></div>
        <div className={classes.audioOpenWord} style={isAnswerSelected ? { display: 'flex' } : { display: 'none' }}>
          <div className={classes.audioOpenWord_img} style={{ backgroundImage: `url(${wordsList[index].image})` }}>
          </div>
          <div className={classes.audioOpenWord_context}>
            <span className={classes.audioOpenWord_context_sound} onClick={() => audio.play()}></span>
            <span className={classes.audioOpenWord_context_value}>{wordsList[index].word}</span>
          </div>
        </div>
        <ol className={classes.audioList}>
          <li className={classes.audioList_item} onClick={() => checkAnswer(0)}>{w0}</li>
          <li className={classes.audioList_item} onClick={() => checkAnswer(1)}>{w1}</li>
          <li className={classes.audioList_item} onClick={() => checkAnswer(2)}>{w2}</li>
          <li className={classes.audioList_item} onClick={() => checkAnswer(3)}>{w3}</li>
          <li className={classes.audioList_item} onClick={() => checkAnswer(4)}>{w4}</li>
        </ol>
        <button className={`${classes.audiocallBtn} ${classes.missWordBtn}`}> Не знаю</button>
        <button className={`${'material-icons'} ${classes.audiocallBtn} ${classes.nextWordBtn}`} style={{ display: 'none' }}> east</button>
      </div>
    </div>
  );
};

export default AudioGame;
