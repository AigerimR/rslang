import React, { FC, useEffect } from 'react';
import classes from './sprintGame.module.scss';

const SprintGame: FC<{ difficultyLevel: string }> = ({ difficultyLevel }) => {
  useEffect(() => {
    console.log(difficultyLevel);
  }, [difficultyLevel]);

  return (
    <>
      <h2 className={classes.title}>THIS IS SPRINT</h2>
      <h2 className={classes.title}>Difficulty level {difficultyLevel}</h2>
    </>
  );
};

export default SprintGame;
