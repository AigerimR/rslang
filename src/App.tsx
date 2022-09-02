import React, { FC, useEffect, useState } from 'react';
import { deleteUserWord, getAllUserWords, getUserComplexWords, getUserLearnedWords } from './apiHelpers/users/usersController';
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

const App: FC = () => {
  // getWord('5e9f5ee35eb9e72bc21af4a0').then((word) => console.log(word));
  const [userLogged, setUserLogged] = useState<boolean>((localStorage.getItem('userId') === null) ? false : true);
  const [complexWords, setComplexWords] = useState<TWord[]>([]);
  const [learnedWords, setLearnedWords] = useState<TWord[]>([]);

  //to set initial context to userwords
  const getComplexWords = async (): Promise<void> => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const res = await getUserComplexWords(userId, token);
    setComplexWords(res);
  }
  useEffect(()=>{userLogged ? getComplexWords() : setComplexWords([])}, [userLogged]);

  const getLearnedWords = async (): Promise<void> => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const res = await getUserLearnedWords(userId, token);
    setLearnedWords(res);    
  }
  
  useEffect(()=>{userLogged ? getLearnedWords() : setLearnedWords([])}, [userLogged]);

    // to delete user words
  // getAllUserWords ({userId: localStorage.getItem("userId"), token: localStorage.getItem("token")  })
  // .then(
  //   res=> {
  //     console.log(res);
  //     res.forEach(el=>{
  //   deleteUserWord ({ userId:localStorage.getItem("userId"), wordId: el.wordId, word: { 'difficulty': 'hard', 'optional': {'learned': 'true'} }, token:localStorage.getItem("token") });
  // }
  // )});
  
  return (
    <CommonContext.Provider value={{userLogged, setUserLogged}}>
       <ComplexWordsContext.Provider value={{ complexWords, setComplexWords}}>
        <LearnedWordsContext.Provider value={{ learnedWords, setLearnedWords}}>
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
        </LearnedWordsContext.Provider>
       </ComplexWordsContext.Provider>
    </CommonContext.Provider>
  )
};

export default App;
