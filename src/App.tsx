import { getWord } from './apiHelpers/words/wordsController';
import React, { FC } from 'react';
import './styles/index.scss';

const App: FC = () => {
  getWord('5e9f5ee35eb9e72bc21af4a0').then((word) => console.log(word));
  return <div></div>;
};
export default App;
