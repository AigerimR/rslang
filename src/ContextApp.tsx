import { getWord } from './apiHelpers/words/wordsController';
import { createUser, loginUser, createUserWord, getUserComplexWords, getUserLearnedWords } from './apiHelpers/users/usersController';
import React, { createContext, FC, useContext, useEffect, useState } from 'react';
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
import CommonContext from './components/Context/CommonContext';
import ComplexWordsContext from './components/Context/ComplexWordsContext';
import Dictionary from './components/Pages/Dictionary/Dictionary';
import GamePage from './components/Pages/GamePage/GamePage';
import { TWord } from './@types/words';
import LearnedWordsContext from './components/Context/LearnedWordsContext';

const ContextApp: FC = () => {
  // getWord('5e9f5ee35eb9e72bc21af4a0').then((word) => console.log(word));
  const [userLogged, setUserLogged] = useState<boolean>((localStorage.getItem('userId') === null) ? false : true);
  // const [complexWords, setComplexWords] = useState<TWord[]>([]);
  // const [learnedWords, setLearnedWords] = useState<TWord[]>([]);

  const { complexWords, setComplexWords} = useContext(ComplexWordsContext);
  const { learnedWords, setLearnedWords} = useContext(LearnedWordsContext);

  // console.log(complexWords);
  // const getComplexWords = async (): Promise<void> => {
  //   const userId = localStorage.getItem("userId");
  //   const token = localStorage.getItem("token");

  //   const res = await getUserComplexWords(userId, token);
  //   setComplexWords(res);
  // }
  // useEffect(()=>{userLogged ? getComplexWords() : setComplexWords([])}, [userLogged]);

  // const getLearnedWords = async (): Promise<void> => {
  //   const userId = localStorage.getItem("userId");
  //   const token = localStorage.getItem("token");

  //   const res = await getUserLearnedWords(userId, token);
  //   setLearnedWords(res);    
  // }
  
  // useEffect(()=>{userLogged ? getLearnedWords() : setLearnedWords([])}, [userLogged]);

  return (
    // <CommonContext.Provider value={{userLogged, setUserLogged}}>
    //    <ComplexWordsContext.Provider value={{ complexWords, setComplexWords}}>
    //     <LearnedWordsContext.Provider value={{ learnedWords, setLearnedWords}}>
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
    //     </LearnedWordsContext.Provider>
    //    </ComplexWordsContext.Provider>
    // </CommonContext.Provider>
  )
};

export default ContextApp;
