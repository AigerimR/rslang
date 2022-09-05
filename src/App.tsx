import React, { FC, useState } from 'react';
import './styles/index.scss';
import classes from './app.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';
import StatisticsPage from './components/Pages/StatisticsPage/StatisticsPage';
import ComplexWords from './components/Pages/Dictionary/ComplexWords/ComplexWords';
import Textbook from './components/Pages/Textbook/Textbook';
import Authorization from './components/Pages/Authorization/Authorization';
import UserContext from './components/Context/UserContext';
import { ComplexWordsProvider } from './components/Context/ComplexWordsContext';
import Dictionary from './components/Pages/Dictionary/Dictionary';
import GamePage from './components/Pages/GamePage/GamePage';
import { LearnedWordsProvider } from './components/Context/LearnedWordsContext';

const App: FC = () => {
  // getWord('5e9f5ee35eb9e72bc21af4a0').then((word) => console.log(word));
  const [userLogged, setUserLogged] = useState<boolean>((localStorage.getItem('userId') === null) ? false : true);
  
  return (
    <UserContext.Provider value={{userLogged, setUserLogged}}>
       <ComplexWordsProvider>
        <LearnedWordsProvider>
          <div className={classes.wrapper} >
            <Router>
              <Header />
                <Routes>
                  <Route path='/' element={<MainPage />} />
                  <Route path='/textbook' element={<Textbook />} />
                  <Route
                    path='/audio-game'
                    element={
                      <GamePage
                        title='Аудиовызов'
                        gameDescription='Тренировка улучшает восприятие на слух'
                        ruleDescription='В этой игре нужно выбрать перевод услышанного слова.'
                        keysDescription='Для управления игрой с клавиатуры используй следующие клавиши: пробел - повторить аудио, цифры 1, 2, 3, 4, 5 - для выбора ответа, Enter - не знаю ответ или перейти к следующему слову. Либо можешь просто кликать мышью.'
                        game='audiocall'
                      />
                    }
                  />
                  <Route
                    path='/sprint-game'
                    element={
                      <GamePage
                        title='Спринт'
                        gameDescription='Спринт - это игра на скорость'
                        ruleDescription='Даны слово на английском и его перевод, отметь правильно ли указан перевод для слова и набери как можно больше баллов.'
                        game='sprint'
                      />
                    }
                  />
                  <Route path='/complex-words' element={<ComplexWords />} />
                  <Route path='/dictionary' element={<Dictionary />} />
                  <Route path='/statistics' element={<StatisticsPage />} />
                  <Route path='/authorization' element={<Authorization />} />
                </Routes>
              <Footer />
            </Router>
          </div >
        </LearnedWordsProvider>
       </ComplexWordsProvider>
    </UserContext.Provider>
  )
};

export default App;
