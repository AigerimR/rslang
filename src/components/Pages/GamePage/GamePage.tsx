import { IGamesPageProps } from '../../../@types/gamesPage';
import React, { FC, PropsWithChildren } from 'react';
import DifficultyLevels from '../../../components/DifficultyLevels/DifficultyLevels';

const GamePage: FC<PropsWithChildren<IGamesPageProps>> = ({ title, description, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </>
  );
};

export default GamePage;
