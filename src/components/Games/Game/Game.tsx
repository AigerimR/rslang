import React, { FC, ReactNode, useEffect, useState } from 'react';
import GameStatistics from '../GameStatisitcs/GameStatistics';
import SprintGame from '../SprintGame/SprintGame';

const Game: FC<{ difficultyLevel: string; game: string }> = ({ difficultyLevel, game }) => {
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [answersCount, setAnswersCount] = useState<number>(0);
  const [rightAnswersCount, setRightAnswersCount] = useState<number>(0);

  useEffect(() => {
    const updatedAccuracy = rightAnswersCount / answersCount;
    setAccuracy(updatedAccuracy);
  }, [answersCount, rightAnswersCount]);

  const games = {
    sprint: (
      <SprintGame
        difficultyLevel={difficultyLevel}
        score={score}
        handleFinishGame={() => {
          setIsGameFinished(true);
        }}
        handleScore={(score) => {
          setScore(score);
        }}
        handleAnswer={() => {
          setAnswersCount((prevAnswersCount) => prevAnswersCount + 1);
        }}
        handleRightAnswer={() => {
          setRightAnswersCount((prevRightAnswersCount) => prevRightAnswersCount + 1);
        }}
      />
    ),
  };

  const Game: ReactNode = games[game];

  if (isGameFinished) return <GameStatistics score={score} accuracy={accuracy} />;

  return <>{Game}</>;
};

export default Game;
