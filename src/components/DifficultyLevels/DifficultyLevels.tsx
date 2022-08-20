import React, { FC, useState } from 'react';

import classes from './difficultyLevels.module.scss';
import { v4 as uuidv4 } from 'uuid';

const DifficultyLevels: FC<{ setLevel: (level: string) => void }> = ({ setLevel }) => {
  const levels: number[] = [1, 2, 3, 4, 5, 6];
  const [checked, setChecked] = useState<string>('');

  const handleChange = (e: React.FormEvent<HTMLUListElement>) => {
    const targetEl = e.target as HTMLInputElement;
    const difficultyValue = targetEl.value;
    setChecked(difficultyValue);
    setLevel(difficultyValue);
  };

  const isChecked = (level: number) => level.toString() === checked;

  return (
    <ul
      className={classes.list}
      onChange={(e) => {
        handleChange(e);
      }}
    >
      {levels.map((level) => {
        return (
          <li className={classes.item} key={uuidv4()}>
            <label className={isChecked(level) ? classes.label__checked : ''}>
              <input
                type='radio'
                className={classes.radio}
                name='difficulty-level'
                value={level}
                defaultChecked={isChecked(level)}
              />
              {level}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default DifficultyLevels;
