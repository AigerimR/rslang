import { getWords } from './apiHelpers/words/wordsController';
import React, { FC } from 'react';
import './styles/index.scss';
import classes from './app.module.scss';
import logo from './assets/icons/rs-logo.svg';

const App: FC = () => {
  getWords(3, 4).then((words) => console.log(words));

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>RS Lang, React 17.0.2 and TypeScript 4 App!🚀</h1>
      <img src={logo} alt='' style={{ width: '200px', height: '100px' }} />
    </div>
  );
};
export default App;
