import React, { FC } from 'react';

interface Props {
  currentSeries: number;
}

const GameSeries: FC<Props> = ({ currentSeries }) => {
  return <div>{currentSeries}</div>;
};

export default GameSeries;
