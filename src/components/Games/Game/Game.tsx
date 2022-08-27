import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import GameStatistics from '../GameStatisitcs/GameStatistics';
import SprintGame from '../SprintGame/SprintGame';
import AudiocGame from '../AudioGame/Audiocall';

const Game: FC<{ difficultyLevel: string; game: string; page?: number }> = ({
  difficultyLevel,
  game,
  page,
}) => {
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [answersCount, setAnswersCount] = useState<number>(0);
  const [rightAnswersCount, setRightAnswersCount] = useState<number>(0);
  const [correctAnswerList, setCorrectAnswer] = useState<string[]>([]);
  const [wrongAnswerList, setWrongAnswer] = useState<string[]>([]);

  useEffect(() => {
    const updatedAccuracy = rightAnswersCount / answersCount;
    setAccuracy(updatedAccuracy);
  }, [answersCount, rightAnswersCount]);

  const memoziedHandleCorrectAnswersList = useCallback((word: string) => {
    const copy = JSON.parse(JSON.stringify(correctAnswerList));
    setCorrectAnswer(() => [...copy, word]);
  }, [correctAnswerList]);

  const memoziedHandleWrongAnswersList = useCallback((word: string) => {
    const copy = JSON.parse(JSON.stringify(wrongAnswerList));
    setWrongAnswer(() => [...copy, word]);
  }, [wrongAnswerList]);

  const memoziedHandleAnswer = useCallback(() => {
    setAnswersCount((prevAnswersCount) => prevAnswersCount + 1);
  }, [answersCount]);

  const memoziedHandleRightAnswer = useCallback(() => {
    setRightAnswersCount((prevRightAnswersCount) => prevRightAnswersCount + 1);
  }, [rightAnswersCount]);

  const memoziedHandleScore = useCallback(
    (score) => {
      setScore(score);
    },
    [score],
  );

  const memoziedHandleFinishGame = useCallback(() => {
    setIsGameFinished(true);
  }, [isGameFinished]);

  const games = {
    sprint: (
      <SprintGame
        page={page}
        difficultyLevel={difficultyLevel}
        score={score}
        handleFinishGame={memoziedHandleFinishGame}
        handleScore={memoziedHandleScore}
        handleAnswer={memoziedHandleAnswer}
        handleRightAnswer={memoziedHandleRightAnswer}
      />
    ),
    audiocall: (
      <AudiocGame
        page={page}
        difficultyLevel={difficultyLevel}
        score={score}
        handleFinishGame={memoziedHandleFinishGame}
        handleScore={memoziedHandleScore}
        handleAnswer={memoziedHandleAnswer}
        handleRightAnswer={memoziedHandleRightAnswer}
        handleCorrectAnswersList={memoziedHandleCorrectAnswersList}
        handleWrongAnswersList={memoziedHandleWrongAnswersList}
        correctAnswerList={[]}
        wrongAnswerList={[]}      />
    ),
  };

  const Game: ReactNode = games[game];

  if (isGameFinished) return <GameStatistics score={score} accuracy={accuracy} correctAnswerList={correctAnswerList} wrongAnswerList={wrongAnswerList} />;

  return <>{Game}</>;
};

export default Game;
