import React, { FC, ReactNode, useState } from 'react';
import GameStatistics from '../GameStatisitcs/GameStatistics';
import SprintGame from '../SprintGame/SprintGame';

const Game: FC<{ difficultyLevel: string; game: string }> = ({ difficultyLevel, game }) => {
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const games = {
    sprint: <SprintGame difficultyLevel={difficultyLevel} />,
  };

  const gameComponent: ReactNode = games[game];

  if (isGameFinished) return <GameStatistics score={score} />;

  return <>{gameComponent}</>;
};

export default Game;
