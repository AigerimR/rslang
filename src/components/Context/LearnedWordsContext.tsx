import { createUserWord, getUserLearnedWords, updateUserWord } from '../../apiHelpers/users/usersController';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { TWord } from '../../@types/words';
import UserContext from './UserContext';

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
}
);

function LearnedWordsProvider (props) {
  
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const { userLogged, setUserLogged } = useContext(UserContext);

  const [learnedWords, setLearnedWords] = useState<TWord[]>([]);

  //to set initial values
  const getLearnedWords = async (): Promise<void> => {
    const res = await getUserLearnedWords(userId, token);
    setLearnedWords(res);
  }

  useEffect(()=>{ userLogged ? getLearnedWords() : setLearnedWords([]) }, [userLogged]);

  const addLearnedWord = async (wordId: string) => {
    await createUserWord({
      userId: userId,
      wordId: wordId,
      word: { 'difficulty': 'weak', 'optional': {'learned': 'true'} },
      token: token
    });
    getLearnedWords();  
  }

  const updateLearnedWord = async (wordId) => {
    await updateUserWord({
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