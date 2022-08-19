import { IGamesPageProps } from '../../../@types/gamesPage';
import React, { FC, PropsWithChildren } from 'react';
import DifficultyLevels from '../../../components/DifficultyLevels/DifficultyLevels';
import classes from './gamePage.module.scss';

const GamePage: FC<PropsWithChildren<IGamesPageProps>> = ({ title, description, children }) => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.description}>{description}</p>
        <h2 className={classes.title}>Уровень сложности</h2>
        <DifficultyLevels />
        <button>Начать игру</button>
        {children}
      </div>
    </section>
  );
};

export default GamePage;
