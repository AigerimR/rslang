import { EStatusCode } from './../../enums/serverStatusCode';
import { TUser, TUserLogIn } from './../../@types/users';
import { getWord } from '../words/wordsController';
import { TWord } from './../../@types/words';
// import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';

export const createUser = async (user: TUser) => {
  // "name": name, "email": email, "password": password 
  return await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then((response) =>{return response})
      .catch((e) => console.log(e.message));
};

export const loginUser = async (user: TUserLogIn) => {
  // loginUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });

  const content = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then((response) =>
        response.status === EStatusCode.Ok ? response.json() : "Неверно указан пароль или email",
      )
      .catch((repsonse) => console.log(repsonse));
  return(content);
};

// export const getUserToken = async (id) => {
  
//   const rawResponse = await fetch(`${BASE_URL}/users/${id}/tokens`, {
//     method: 'GET',
//     // headers: {
//     //   'Accept': 'application/json',
//     //   'Content-Type': 'application/json'
//     // },
//     // body: JSON.stringify(user)
//   });
//   const content = await rawResponse.json();

//   return(content);
// };


export const createUserWord = async ({ userId, wordId, word, token }) => {
  const rawResponse = await fetch(`${BASE_URL}/users/${userId}/words/${wordId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word)
  });
  const content = await rawResponse.json();

  // console.log(content.optional.learned);
};
export const deleteUserWord = async ({ userId, wordId, word, token }) => {
  return await fetch(`${BASE_URL}/users/${userId}/words/${wordId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word)
  });
  // const content = await rawResponse.json();

  // console.log(content);
};
export const updateUserWord = async ({ userId, wordId, word, token }) => {
  const rawResponse = await fetch(`${BASE_URL}/users/${userId}/words/${wordId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word)
  });
  const content = await rawResponse.json();

  console.log(content);
};

export const getAllUserWords = async ({ userId, token }) => {
  const rawResponse = await fetch(`${BASE_URL}/users/${userId}/words`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    }
  });
  const content = await rawResponse.json();
  // console.log(content);
  return content;
};

export const getUserComplexWords = async (userId, token) => {
  const allHardWords = await getAllUserWords({ userId, token }).then(
        (words)=>{return words.filter(word => word.difficulty === "hard").filter(word => word.optional?.complex === 'true');});
       
  const allHardWordsData:[Promise<TWord>] = allHardWords.map(async (word) => { 
    return  await getWord(word.wordId);
  });
  return  Promise.all(allHardWordsData).then(val=> {return val});
}

export const getUserLearnedWords = async (userId, token) => {
  const allLearnedWords = await getAllUserWords({ userId, token }).then(
        (words)=>{return words.filter(word => word.difficulty === "hard").filter(word => word.optional?.learned === 'true');});      
       
  const allLearnedWordsData:[Promise<TWord>] = allLearnedWords.map(async (word) => { 
    return  await getWord(word.wordId);
  });
  return  Promise.all(allLearnedWordsData).then(val=> {return val});
}