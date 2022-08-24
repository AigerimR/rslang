import { IGamesPageProps } from '../../../@types/gamesPage';
import React, { FC, PropsWithChildren, useState } from 'react';
import classes from './gamePage.module.scss';
import DifficultyLevels from '../../../components/DifficultyLevels/DifficultyLevels';
import Modal from '../../../components/Modal/Modal';
import Game from '../../../components/Games/Game/Game';

const GamePage: FC<PropsWithChildren<IGamesPageProps>> = ({ title, gameDescription, ruleDescription, game }) => {
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [difficultyLevel, setDifficultyLevel] = useState<string>('');

  const startGame = () => setIsGameStart(true);

  const stopGame = () => setIsGameStart(false);

  return (
    <main className={classes.page}>
      <div className={classes.container}>
        <section className={classes.gameWrapper}>
          <div className={classes.gameContainer}>
            <h2 className={classes.gameTitle}>{title}</h2>
            <p className={classes.gameInfo}>{gameDescription}</p>
            <p className={classes.gameRule}>{ruleDescription}</p>
            <p className={classes.gameLevelName}>Уровень сложности</p>
            <DifficultyLevels setLevel={setDifficultyLevel} />
            <button className={classes.gameStart} onClick={startGame} disabled={difficultyLevel === ''}>
              Начать
            </button>
          </div>
          <Modal isOpen={isGameStart} handleClose={stopGame}>
            <Game difficultyLevel={difficultyLevel} game={game} />
          </Modal>
        </section>
      </div>
    </main>
  );
};

export default GamePage;
