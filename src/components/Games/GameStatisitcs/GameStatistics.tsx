import React, { FC } from 'react';

const GameStatistics: FC<{ score: number; accuracy: number }> = ({ score, accuracy }) => {
  const beautifyAccuracy = (accuracy: number): string => {
    const beautifullAccuracy = Math.floor(accuracy * 100);
    if (Number.isNaN(beautifullAccuracy)) return '0%';
    return `${beautifullAccuracy} %`;
  };

  return (
    <>
      <h1>Score: {score}</h1>
      <h1>Accuracy: {beautifyAccuracy(accuracy)}</h1>
    </>
  );
};

export default GameStatistics;
