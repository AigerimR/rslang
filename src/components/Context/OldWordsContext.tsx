import { createUserWord, getUserLearnedWords, getUserOldWords, updateUserWord } from '../../apiHelpers/users/usersController';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { TWord } from '../../@types/words';
import UserContext from './UserContext';

export const OldWordsContext = createContext(
  {
    oldWords: [{ 
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
    // getLearnedWords: ()=>{},
    // addLearnedWord: (wordId)=>{},
    // updateLearnedWord: (wordId)=>{},
}
);

function OldWordsProvider (props) {
  
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const { userLogged, setUserLogged } = useContext(UserContext);

  const [oldWords, setOldWords] = useState<TWord[]>([]);

  //to set initial values
  const getOldWords = async (): Promise<void> => {
    const res = await getUserOldWords(userId, token);
    setOldWords(res);
  }

  useEffect(()=>{ userLogged ? getOldWords() : setOldWords([]) }, [userLogged]);

  const OldWordsData = { oldWords};
  return <OldWordsContext.Provider value={OldWordsData} {...props} />;
}


function useOldWordsContext() {
  return useContext(OldWordsContext);
}

export { OldWordsProvider, useOldWordsContext };