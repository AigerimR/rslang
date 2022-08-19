import { getWord } from './apiHelpers/words/wordsController';
import React, { FC } from 'react';
import './styles/index.scss';
import classes from './app.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import AboutPage from './components/AboutPage/AboutPage';
import StatisticsPage from './components/StatisticsPage/StatisticsPage';
import AudioGame from './components/AudioGame/AudioGame';
import SprintGame from './components/SprintGame/SprintGame';
import ComplexWords from './components/ComplexWords/ComplexWords';
import Textbook from './components/Textbook/Textbook';
import Authorization from './components/Authorization/Authorization';


const App: FC = () => {
  getWord('5e9f5ee35eb9e72bc21af4a0').then((word) => console.log(word));
  return (
    <div className={classes.wrapper} >
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/textbook" element={<Textbook />} />
            <Route path="/audio-game" element={<AudioGame />} />
            <Route path="/sprint-game" element={<SprintGame />} />
            <Route path="/complex-words" element={<ComplexWords />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/authorization" element={<Authorization />} />
          </Routes>
        <Footer />
      </Router>
    </div >
  )
};

export default App;
