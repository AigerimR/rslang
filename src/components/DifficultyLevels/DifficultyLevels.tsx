import React, { FC } from 'react';

import classes from './difficultyLevels.module.scss';
import { v4 as uuidv4 } from 'uuid';

const DifficultyLevels: FC = () => {
  const levels: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <ul className={classes.list}>
      {levels.map((level) => {
        return (
          <li className={classes.item} key={uuidv4()}>
            <label className={classes.label}>
              <input type='radio' className={classes.radio} name='difficulty-level' />
              {level}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default DifficultyLevels;
