import React, { FC } from 'react';

const GameStatistics: FC<{ score: number }> = ({ score }) => {
  return <h1>{score}</h1>;
};

export default GameStatistics;
