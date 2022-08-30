import { getWord } from './apiHelpers/words/wordsController';
import { createUser, loginUser, createUserWord } from './apiHelpers/users/usersController';
import React, { createContext, FC, useState } from 'react';
import './styles/index.scss';
import classes from './app.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';
import StatisticsPage from './components/Pages/StatisticsPage/StatisticsPage';
import ComplexWords from './components/Pages/Dictionary/ComplexWords/ComplexWords';
import Textbook from './components/Pages/Textbook/Textbook';
import Authorization from './components/Pages/Authorization/Authorization';
import CommonContext from './components/Context/Context';
import Dictionary from './components/Pages/Dictionary/Dictionary';
import GamePage from './components/Pages/GamePage/GamePage';

const App: FC = () => {
// getWord('5e9f5ee35eb9e72bc21af4a0').then((word) => console.log(word));
//   createUserWord({
//   userId:       localStorage.getItem('userId'),
//   wordId: "5e9f5ee35eb9e72bc21af716",
//   word: { "difficulty": "hard", "optional": {} },
//   token: localStorage.getItem('token')

// });
  const [userLogged, setUserLogged] = useState<boolean>(false);
    
  return (
    <CommonContext.Provider value={{userLogged, setUserLogged}}>
    {/* <CommonContext.Provider value={{userLogged: false, toggleUserLogged: (userLogged: boolean) => {return userLogged = !userLogged}}}> */}
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
    </CommonContext.Provider>
  )
};

export default App;
