import { IGamesPageProps } from '../../../@types/gamesPage';
import React, { FC, PropsWithChildren, useState } from 'react';
import classes from './gamePage.module.scss';
import DifficultyLevels from '../../../components/DifficultyLevels/DifficultyLevels';
import SprintGame from '../../Games/SprintGame/SprintGame';
import Modal from '../../../components/Modal/Modal';

const GamePage: FC<PropsWithChildren<IGamesPageProps>> = ({ title, description, game }) => {
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [difficultyLevel, setDifficultyLevel] = useState<string>('');

  const games = {
    sprint: <SprintGame difficultyLevel={difficultyLevel} />,
  };

  const gameComponent = games[game];

  const startGame = () => setIsGameStart(true);

  return (
    <>
      <section className={classes.section}>
        <div className={classes.container}>
          <h1>{title}</h1>
          <p>{description}</p>
          <h2>Уровень сложности</h2>
          <DifficultyLevels setLevel={setDifficultyLevel} />
          <button onClick={startGame}>Начать</button>
        </div>
        <Modal
          isOpen={isGameStart}
          handleClose={() => {
            setIsGameStart(false);
          }}
        >
          {gameComponent}
        </Modal>
      </section>
    </>
  );
};

export default GamePage;
