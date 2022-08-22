import CountdownTimer from '../../../components/CountdownTimer/CountdownTime';
import React, { FC, useEffect, useState } from 'react';
import classes from './sprintGame.module.scss';
import { TSprintGameWord } from '../../../@types/words';
import { getSprintGameWords } from '../../../apiHelpers/words/wordsController';
import getRandomPage from '../../../apiHelpers/words/utils/getRandomPage';

const SprintGame: FC<{ difficultyLevel: string; page?: number }> = ({
  difficultyLevel,
  page = getRandomPage(),
}) => {
  const [wordsList, setWords] = useState<TSprintGameWord[]>([
    {
      id: '',
      word: '',
      translate: '',
      rightTranslate: '',
    },
  ]);

  useEffect(() => {
    getSprintGameWords(parseFloat(difficultyLevel), page).then((words) => {
      setWords(words);
    });
  }, []);

  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);

  const [score, setScore] = useState<number>(0);

  const [index, setIndex] = useState<number>(0);

  const checkAnswer = (answer: boolean) => {
    const rightAnswer = wordsList[index].translate === wordsList[index].rightTranslate;
    answer === rightAnswer
      ? setScore((prevScore) => prevScore + 10)
      : setScore((prevScore) => prevScore - 10);
    setIndex(getRandomPage());
  };

  if (!isGameFinished) {
    return (
      <div>
        <h2 className={classes.title}>THIS IS SPRINT</h2>
        <h2 className={classes.title}>Difficulty level {difficultyLevel}</h2>
        <CountdownTimer
          time={10}
          cb={(intervalId) => {
            clearInterval(intervalId);
            setIsGameFinished(true);
          }}
        />
        <h5>{score}</h5>
        <h5>{wordsList[index].word}</h5>
        <h5>{wordsList[index].translate}</h5>
        <div className={classes.buttonsContainer}>
          <button
            onClick={() => {
              checkAnswer(true);
            }}
          >
            Верно
          </button>
          <button
            onClick={() => {
              checkAnswer(false);
            }}
          >
            Неверно
          </button>
        </div>
      </div>
    );
  }

  return <h1>{score}</h1>;
};

export default SprintGame;
