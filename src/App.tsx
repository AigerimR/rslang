import { getWord } from './apiHelpers/words/wordsController';
import React, { FC } from 'react';
import './styles/index.scss';
import classes from './app.module.scss';
import Header from './components/Header/Header';

const App: FC = () => {
  getWord('5e9f5ee35eb9e72bc21af4a0').then((word) => console.log(word));
  return (
    <div className={classes.wrapper} >
      <Header />
    </div >
  )
};
export default App;
