import { createUserWord, getUserComplexWords, getUserLearnedWords, updateUserWord } from '../../apiHelpers/users/usersController';
import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { TWord } from '../../@types/words';

export const LearnedWordsContext = createContext(
  {
    learnedWords: [{ 
    "id": "string",
    "group": 0,
    "page": 0,
    "word": "string",
    "image": "string",
    "audio": "string",
    "audioMeaning": "string",
    "audioExample": "string",
    "textMeaning": "string",
    "textExample": "string",
    "transcription": "string",
    "wordTranslate": "string",
    "textMeaningTranslate": "string",
    "textExampleTranslate": "string"}],
    getLearnedWords: ()=>{},
    addLearnedWord: (wordId)=>{},
    updateLearnedWord: (wordId)=>{},
    // LearnedWords: userLearnedWords,
    // setLearnedWords: (LearnedWords)=>{},
}
);

function LearnedWordsProvider (props) {
  
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [userLogged, setUserLogged] = useState<boolean>(userId === null ? false : true);
  const [learnedWords, setLearnedWords] = useState<TWord[]>([]);

  //to set initial values
  const getLearnedWords = async (): Promise<void> => {
    const res = await getUserLearnedWords(userId, token);
    setLearnedWords(res);
  }
  userLogged ? getLearnedWords() : setLearnedWords([]);

  function addLearnedWord (wordId: string) {
    createUserWord({
      userId: userId,
      wordId: wordId,
      word: { 'difficulty': 'weak', 'optional': {'learned': 'true'} },
      token: token
    });
    getLearnedWords();  
  }

  const updateLearnedWord = (wordId) => {
    updateUserWord({
      userId: userId,
      wordId: wordId,
      word: { 'difficulty': 'weak', 'optional': {'learned': 'true'} },
      token: token
    });
    getLearnedWords();  
  }

  const LearnedWordsData = { learnedWords, addLearnedWord, updateLearnedWord };
  return <LearnedWordsContext.Provider value={LearnedWordsData} {...props} />;
}


function useLearnedWordsContext() {
  return useContext(LearnedWordsContext);
}

export { LearnedWordsProvider, useLearnedWordsContext };