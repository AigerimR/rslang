import React, { useState } from 'react';
import ComplexWords from './ComplexWords/ComplexWords';
import classes from './dictionary.module.scss';
import LearnedWords from './LearnedWords/LearnedWords';

const Dictionary: React.FC = () => {
  const [state, setState] = useState<string>('complex-words');

  return (
    <div className = {classes.dictionary_main}>
      <h2>ТВОЙ СЛОВАРЬ</h2>
      <div className={classes.dictionary_header}>
        <button className = {`${classes.btn_link} ${state === 'complex-words' ? classes.btn_active : ''}`} onClick={()=>setState('complex-words')}>Сложные слова</button>
        <button className = {`${classes.btn_link} ${state === 'learned' ? classes.btn_active : ''}`} onClick={()=>setState('learned')}>Изученные слова</button>
      </div>
      {(state === 'complex-words') ? <ComplexWords /> : <LearnedWords />}
    </div>
  );
}

export default Dictionary;