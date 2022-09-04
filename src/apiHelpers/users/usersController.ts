import { EStatusCode } from './../../enums/serverStatusCode';
import { TUser, TUserLogIn, TUserToken } from './../../@types/users';
import { getWord } from '../words/wordsController';
import { TWord } from './../../@types/words';

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

export const refreshUserToken = async (user: TUserToken) => {
  const rawResponse = await fetch(`${BASE_URL}/users/${user.userId}/tokens`, {
    method: 'GET',
    headers: {
    'Authorization': `Bearer ${user.refreshToken}`,
    'Accept': 'application/json',
    },
  });
  const content = await rawResponse.json();
  // console.log(content);
  localStorage.setItem('token', content.token);
  localStorage.setItem('refreshToken', content.refreshToken);
  return(content);
};


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

  // console.log(content);
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
        (words)=>{return words.filter(word => word.difficulty === "hard")});
       
  const allHardWordsData:[Promise<TWord>] = allHardWords.map(async (word) => { 
    return  await getWord(word.wordId);
  });
  return  Promise.all(allHardWordsData).then(val=> {return val});
}

export const getUserLearnedWords = async (userId, token) => {
  const allLearnedWords = await getAllUserWords({ userId, token }).then(
        (words)=>{return words.filter(word => word.difficulty === "weak").filter(word => word.optional?.learned === 'true');});
        
  const allLearnedWordsData:[Promise<TWord>] = allLearnedWords.map(async (word) => { 
    return  await getWord(word.wordId);
  });
  return  Promise.all(allLearnedWordsData).then(val=> {return val});
}


export const aggregateUserWords = async (userId, token) => {
  //filter to get all userHardWords & nonUserWords
  const filter = {
    	"$or": [
    	{"userWord.difficulty":"hard"},
    	{"userWord":null}
    	]
    }
  
  const rawResponse = await fetch(`${BASE_URL}/users/${userId}/aggregatedWords?wordsPerPage=3600&filter=${encodeURIComponent(JSON.stringify(filter))}`, {
  // const rawResponse = await fetch(`${BASE_URL}/users/${userId}/aggregatedWords?wordsPerPage=3600&filter={"userWord":null}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const content = await rawResponse.json();

  console.log(content);
};