import CountdownTimer from '../../../components/CountdownTimer/CountdownTime';
import React, { FC, useEffect, useState } from 'react';
import classes from './sprintGame.module.scss';
import { TSprintGameWord } from '../../../@types/words';
import { getAllSprintWords, getPageSprintWords } from '../../../apiHelpers/words/wordsController';
import ISprintGameProps from '../../../interfaces/sprintGame';
import getRandomIndex from '../../../utils/getRandomIndex';

const SprintGame: FC<ISprintGameProps> = ({
  difficultyLevel,
  score,
  page,
  handleFinishGame,
  handleScore,
  handleAnswer,
  handleRightAnswer,
}) => {
  const [wordsList, setWords] = useState<TSprintGameWord[] | void>([
    {
      id: '',
      word: '',
      translate: '',
      rightTranslate: '',
    },
  ]);
  const [index, setIndex] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const words: Promise<TSprintGameWord[] | void> = page
      ? getPageSprintWords(parseFloat(difficultyLevel), page)
      : getAllSprintWords(parseFloat(difficultyLevel));
    words.then((words) => setWords(words)).finally(() => setLoading(false));
  }, []);

  const checkAnswer = (answer: boolean) => {
    const rightAnswer = wordsList[index].translate === wordsList[index].rightTranslate;
    if (answer === rightAnswer) {
      handleScore(score + 10);
      handleRightAnswer();
    } else {
      handleScore(score);
    }
    const nextIndex = page ? getRandomIndex(20) : getRandomIndex(120);
    setIndex(nextIndex);
  };

  const handleUserAnswer = (answer: boolean) => {
    return () => {
      handleAnswer();
      checkAnswer(answer);
    };
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className={classes.container}>
      <h5>Score: {score}</h5>
      <h5>
        {wordsList[index].word} это {wordsList[index].translate} ?
      </h5>
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
