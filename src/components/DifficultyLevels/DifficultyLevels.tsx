import React, { FC } from 'react';
import classes from './difficultyLevels.module.scss';
import { v4 as uuidv4 } from 'uuid';

const DifficultyLevels: FC<{ setLevel: (level: string) => void; difficultyLevel: string }> = ({
  setLevel,
  difficultyLevel,
}) => {
  const levels: number[] = [0, 1, 2, 3, 4, 5];

  const handleChange = () => (e: React.FormEvent<HTMLUListElement>) => {
    const targetEl = e.target as HTMLInputElement;
    const difficultyValue = targetEl.value;
    setLevel(difficultyValue);
  };

  const isChecked = (level: number) => level.toString() === difficultyLevel;

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
              <input type='radio' className={classes.radio} name='difficulty-level' value={level} />
              {englishLevels[level]}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default DifficultyLevels;
