import React, { FC, useState } from 'react';
import classes from './difficultyLevels.module.scss';
import { v4 as uuidv4 } from 'uuid';

const DifficultyLevels: FC<{ setLevel: (level: string) => void }> = ({ setLevel }) => {
  const levels: number[] = [0, 1, 2, 3, 4, 5];
  const [checked, setChecked] = useState<string>('');

  const handleChange = () => (e: React.FormEvent<HTMLUListElement>) => {
    const targetEl = e.target as HTMLInputElement;
    const difficultyValue = targetEl.value;
    setChecked(difficultyValue);
    setLevel(difficultyValue);
  };

  const isChecked = (level: number) => level.toString() === checked;

  const englishLevels = {
    0: 'A1',
    1: 'A2',
    2: 'B1',
    3: 'B2',
    4: 'C1',
    5: 'C2',
  };

  return (
    <ul className={classes.list} onChange={handleChange()}>
      {levels.map((level) => {
        return (
          <li key={uuidv4()}>
            <label
              className={
                isChecked(level) ? ` ${classes.label} ${classes.label__checked}` : classes.label
              }
            >
              <input
                type='radio'
                className={classes.radio}
                name='difficulty-level'
                value={level}
                defaultChecked={isChecked(level)}
              />
              {englishLevels[level]}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default DifficultyLevels;
