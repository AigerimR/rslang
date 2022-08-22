import React, { FC } from 'react';
import './styles/index.scss';
import classes from './app.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/Pages/MainPage/MainPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import StatisticsPage from './components/Pages/StatisticsPage/StatisticsPage';
import AudioGame from './components/Games/AudioGame/AudioGame';
import ComplexWords from './components/Pages/ComplexWords/ComplexWords';
import Textbook from './components/Pages/Textbook/Textbook';
import Authorization from './components/Pages/Authorization/Authorization';
import GamePage from './components/Pages/GamePage/GamePage';

const App: FC = () => {
  return (
    <div className={classes.wrapper}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/textbook' element={<Textbook />} />
          <Route path='/audio-game' element={<AudioGame />} />
          <Route
            path='/sprint-game'
            element={
              <GamePage
                title='Спринт'
                description='Спринт - это игра на скорость. Даны слово на английском, и его перевод, отметь правильно ли указан перевод для слова, и набери как можно больше баллов'
                game='sprint'
              />
            }
          />
          <Route path='/complex-words' element={<ComplexWords />} />
          <Route path='/statistics' element={<StatisticsPage />} />
          <Route path='/authorization' element={<Authorization />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
