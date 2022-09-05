import CountdownTimer from '../../../components/CountdownTimer/CountdownTime';
import React, { FC, useEffect, useState } from 'react';
import classes from './sprintGame.module.scss';
import { TSprintGameWord } from '../../../@types/words';
import { getAllSprintWords, getPageSprintWords } from '../../../apiHelpers/words/wordsController';
import ISprintGameProps from '../../../interfaces/sprintGame';
import getRandomIndex from '../../../utils/getRandomIndex';
import correctSound from '../../../assets/sounds/correctAnswer.mp3';
import wrongSound from '../../../assets/sounds/wrongAnswer.mp3';

const SprintGame: FC<ISprintGameProps> = ({
  difficultyLevel,
  score,
  page,
  handleFinishGame,
  handleAnswer,
  handleCorrectAnswersList,
  handleWrongAnswersList,
}) => {
  const [wordsList, setWords] = useState<TSprintGameWord[] | void>([
    {
      id: '',
      word: '',
      translate: '',
      wordTranslate: '',
      audio: '',
    },
  ]);
  const [index, setIndex] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);
  const [isVolumeUp, setVolumeUp] = useState<boolean>(true);

  useEffect(() => {
    const words: Promise<TSprintGameWord[] | void> = page
      ? getPageSprintWords(parseFloat(difficultyLevel), page)
      : getAllSprintWords(parseFloat(difficultyLevel));
    words.then((words) => setWords(words)).finally(() => setLoading(false));
  }, []);

  const checkAnswer = (answer: boolean) => {
    const rightAnswer = wordsList[index].translate === wordsList[index].wordTranslate;
    if (answer === rightAnswer) {
      handleAnswer(true);
      handleCorrectAnswersList(wordsList[index]);
      if (isVolumeUp) {
        new Audio(correctSound).play();
      }
    } else {
      handleAnswer(false);
      handleWrongAnswersList(wordsList[index]);
      if (isVolumeUp) {
        new Audio(wrongSound).play();
      }
    }
    const nextIndex = page ? getRandomIndex(20) : getRandomIndex(120);
    setIndex(nextIndex);
  };

  const handleUserAnswer = (answer: boolean) => {
    return () => {
      checkAnswer(answer);
    };
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className={classes.sprintContainer}>
      <div
        className={`${'material-icons'} ${classes.soundBtn}`}
        onClick={() => (isVolumeUp ? setVolumeUp(false) : setVolumeUp(true))}
      >
        {isVolumeUp ? 'volume_up' : 'volume_off'}
      </div>
      <p className={classes.sprintScore}>Score: {score}</p>
      <p className={classes.sprintQuestion}>
        {wordsList[index].word} это {wordsList[index].translate} ?
      </p>
      <div className={classes.buttonsContainer}>
        <button
          onClick={handleUserAnswer(true)}
          className={`${classes.button} ${classes.button_correct}`}
        >
          Верно
        </button>
        <button
          onClick={handleUserAnswer(false)}
          className={`${classes.button} ${classes.button_incorrect}`}
        >
          Неверно
        </button>
      </div>
      <CountdownTimer
        time={30}
        cb={(intervalId) => {
          clearInterval(intervalId);
          handleFinishGame(true);
        }}
      />
    </div>
  );
};

export default SprintGame;
