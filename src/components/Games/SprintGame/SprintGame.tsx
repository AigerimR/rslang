import React, { FC, useEffect } from 'react';

const SprintGame: FC<{ difficultyLevel: string }> = ({ difficultyLevel }) => {
  useEffect(() => {
    console.log(difficultyLevel);
  }, [difficultyLevel]);

  return (
    <>
      <h2>THIS IS SPRINT</h2>
      <h2>Difficulty level {difficultyLevel}</h2>
    </>
  );
};

export default SprintGame;
