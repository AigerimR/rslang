import { getUserComplexWords } from '../../apiHelpers/users/usersController';
import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { TWord } from '../../@types/words';
import CommonContext from './CommonContext';

const LearnedWordsContext = createContext(
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
    setLearnedWords: (learnedWords)=>{},
    // LearnedWords: userLearnedWords,
    // setLearnedWords: (LearnedWords)=>{},
});


export default LearnedWordsContext;