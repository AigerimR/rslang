import { createUserWord, deleteUserWord, getUserComplexWords } from '../../apiHelpers/users/usersController';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { TWord } from '../../@types/words';

export const ComplexWordsContext = createContext(
  {
    complexWords: [{ 
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
    getComplexWords: ()=>{},
    addComplexWord: (wordId)=>{},
    deleteComplexWord: (wordId)=>{},
    // complexWords: userComplexWords,
    // setComplexWords: (complexWords)=>{},
});

function ComplexWordsProvider (props) {
  
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [userLogged, setUserLogged] = useState<boolean>(userId === null ? false : true);
  const [complexWords, setComplexWords] = useState<TWord[]>([]);

  //to set initial values
  const getComplexWords = async (): Promise<void> => {
    const res = await getUserComplexWords(userId, token);
    setComplexWords(res);
  }
  useEffect(()=>{userLogged ? getComplexWords() : setComplexWords([])}, [userLogged]);

  const addComplexWord = (wordId: string) => {
    createUserWord({
      userId: userId,
      wordId: wordId,
      word: { 'difficulty': 'hard', 'optional': {} },
      token: token
    });
    getComplexWords();  
  }

  const deleteComplexWord = (wordId: string) => {
    deleteUserWord({
      userId: userId,
      wordId: wordId,
      word: { 'difficulty': 'hard', 'optional': {} },
      token: token
    });
    getComplexWords();  
  }

  const ComplexWordsData = { complexWords, addComplexWord, deleteComplexWord };
  return <ComplexWordsContext.Provider value={ComplexWordsData} {...props} />;
}


function useComplexWordsContext() {
  return useContext(ComplexWordsContext);
}

export { ComplexWordsProvider, useComplexWordsContext };