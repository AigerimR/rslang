import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import StatisticsPage from '../StatisticsPage/StatisticsPage';
import AudioGame from '../AudioGame/AudioGame';
import SprintGame from '../SprintGame/SprintGame';
import ComplexWords from '../ComplexWords/ComplexWords';
import Textbook from '../Textbook/Textbook';
import Authorization from '../Authorization/Authorization';

function Header() {
  return (
    <Router>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/textbook">Учебник</Link>
      <Link to="/audio-game">Аудиовызов</Link>
      <Link to="/sprint-game">Спринт</Link>
      <Link to="/complex-words">Сложные слова</Link>
      <Link to="/statistics">Статистика</Link>
      <Link to="/authorization">Aвторизация</Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/textbook" element={<Textbook/>} />
        <Route path="/audio-game" element={<AudioGame />} />
        <Route path="/sprint-game" element={<SprintGame />} />
        <Route path="/complex-words" element={<ComplexWords />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </Router>
  );
}

export default Header;