import { EStatusCode } from './../../enums/serverStatusCode';
import { TUser, TUserLogIn, TUserToken } from './../../@types/users';
import { getWord } from '../words/wordsController';
import { TWord } from './../../@types/words';
import { useComplexWordsContext } from '../../components/Context/ComplexWordsContext';
import { useLearnedWordsContext } from '../../components/Context/LearnedWordsContext';
import { createUserWord, getUserWord, updateUserWord } from './usersController';
import { useOldWordsContext } from '../../components/Context/OldWordsContext';

const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';

// correctAnswerList: TGameWord[]; => pass to checkGameWords (listType = correct/wrong)
// wrongAnswerList: 

export const checkGameWord = async (listType, arrayOfWords) => {
  arrayOfWords.map((el)=>{
    checkNewWord(el.id, listType)
  })

}

export const checkNewWord = async (wordId, listType) => {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const OldWordsContext  = useOldWordsContext();

  if(OldWordsContext.oldWords.filter(word => word.id === wordId).length > 0){
    if(listType === "correct"){
      checkWins(wordId);
    } else if (listType === "wrong"){
      await updateUserWord({
        userId: userId,
        wordId: wordId,
        word: { 'difficulty': 'weak', 'optional': {'learned': 'false', 'wins': '0'} },
        token: token
      });
    }
  }
  else{
    checkComplexOrLearned(wordId);
  }
};


export const checkComplexOrLearned = async (wordId) => {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const LearnedWordsContext  = useLearnedWordsContext();
  const ComplexWordsContext  = useComplexWordsContext();
  counter +=1; // counterForNewWordsInGame durin gthe day
  if(ComplexWordsContext.complexWords.filter(word => word.id === wordId).length > 0 || 
  LearnedWordsContext.learnedWords.filter(word => word.id === wordId).length > 0 ){
    await updateUserWord({
      userId: userId,
      wordId: wordId,
      word: { 'optional': {'new': 'false'} },
      token: token
    });
  }
  else{
    await createUserWord({
      userId: userId,
      wordId: wordId,
      word: { 'optional': {'new': 'false'} },
      token: token
    });
  }
};


export const checkWins = async (wordId) => {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const wordUserData = await getUserWord({
    userId: userId,
    wordId: wordId,
    token: token
  });
  if(wordUserData.optional?.wins < 2){
    await updateUserWord({
      userId: userId,
      wordId: wordId,
      word: { 'optional': {'wins': `${wordUserData.optional?.wins + 1}`} },
      token: token
    });
  }
  else{
    await updateUserWord({
      userId: userId,
      wordId: wordId,
      word: { 'difficulty': 'weak', 'optional': {'learned': 'true', 'wins': '3'} },
      token: token
    });
  }
};