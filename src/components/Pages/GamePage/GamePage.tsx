import { IGamesPageProps } from '../../../@types/gamesPage';
import React, { FC, PropsWithChildren, useState } from 'react';
import classes from './gamePage.module.scss';
import DifficultyLevels from '../../../components/DifficultyLevels/DifficultyLevels';
import Modal from '../../../components/Modal/Modal';
import Game from '../../../components/Games/Game/Game';

const GamePage: FC<PropsWithChildren<IGamesPageProps>> = ({ title, description, game }) => {
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [difficultyLevel, setDifficultyLevel] = useState<string>('');

  const startGame = () => setIsGameStart(true);

  const stopGame = () => setIsGameStart(false);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>Уровень сложности</h2>
        <DifficultyLevels setLevel={setDifficultyLevel} />
        <button onClick={startGame} disabled={difficultyLevel === ''}>
          Начать
        </button>
      </div>
      <Modal isOpen={isGameStart} handleClose={stopGame}>
        <Game difficultyLevel={difficultyLevel} game={game} />
      </Modal>
    </section>
  );
};

export default GamePage;
