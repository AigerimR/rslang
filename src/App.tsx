import { getWord } from './apiHelpers/words/wordsController';
import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './styles/index.scss';
import MainPage from './components/MainPage/MainPage';
import AboutPage from './components/AboutPage/AboutPage';
import StatisticsPage from './components/StatisticsPage/StatisticsPage';
import AudioGame from './components/AudioGame/AudioGame';
import SprintGame from './components/SprintGame/SprintGame';
import ComplexWords from './components/ComplexWords/ComplexWords';
import Textbook from './components/Textbook/Textbook';


const App: FC = () => {
  getWord('5e9f5ee35eb9e72bc21af4a0').then((word) => console.log(word));
  return (
    <Router>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/textbook">Учебник</Link>
      <Link to="/audio-game">Аудиовызов</Link>
      <Link to="/sprint-game">Спринт</Link>
      <Link to="/complex-words">Сложные слова</Link>
      <Link to="/statistics">Статистика</Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/textbook" element={<Textbook/>} />
        <Route path="/audio-game" element={<AudioGame />} />
        <Route path="/sprint-game" element={<SprintGame />} />
        <Route path="/complex-words" element={<ComplexWords />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </Router>
  );
};
export default App;
