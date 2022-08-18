import { getWord } from './apiHelpers/words/wordsController';
import React, { FC } from 'react';
import './styles/index.scss';
import WordCard from './components/WordCard/WordCard';

const App: FC = () => {
  getWord('5e9f5ee35eb9e72bc21af4a0').then((word) => console.log(word));
  return <div><WordCard /></div>;
};
export default App;
