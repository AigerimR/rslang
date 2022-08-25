import { EStatusCode } from './../../enums/serverStatusCode';
import { TWord, TSprintGameWord, TAudiocallWord } from './../../@types/words';
import axios, { AxiosResponse } from 'axios';
import getRandomIndex from '../../utils/getRandomIndex';
import getSprintWord from './utils/getSprintWord';
import setAudiocallWord from './utils/setAudiocallWord';

const WORDS_PER_PAGE = 20;
const WORDS_PER_GROUP = 120;
const PAGES_PER_GROUP = 6;

const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';
export const getWords = (group: number, page: number): Promise<TWord[]> => {
  return axios
    .get(`${BASE_URL}/words/?page=${page}&group=${group}`)
    .then((response) =>
      response.status === EStatusCode.Ok ? response.data : Promise.reject(response),
    )
    .catch((repsonse) => console.log(repsonse));
};

export const getWord = (id: string): Promise<TWord> => {
  return axios
    .get(`${BASE_URL}/words/${id}`)
    .then((response) =>
      response.status === EStatusCode.Ok ? response.data : Promise.reject(response),
    )
    .catch((response: AxiosResponse) => console.error(response.statusText));
};

export const getPageSprintWords = (group: number, page: number): Promise<TSprintGameWord[]> => {
  return getWords(group, page).then((words) => {
    const sprintWords: TSprintGameWord[] = words.map(() => {
      const index = getRandomIndex(WORDS_PER_PAGE);
      const word = words[index];
      const randomWord = words[getRandomIndex(WORDS_PER_PAGE)];
      const sprintWord: TSprintGameWord = getSprintWord(word, randomWord);
      return sprintWord;
    });
    return sprintWords;
  });
};

export const getAllSprintWords = (group: number): Promise<TSprintGameWord[] | void> => {
  const promisesWords: Promise<Response>[] = new Array(PAGES_PER_GROUP)
    .fill(0)
    .map((el, index) => fetch(`${BASE_URL}/words/?page=${index}&group=${group}`));

  return Promise.all(promisesWords)
    .then((responses) => responses.map((res) => (res.ok ? res.json() : Promise.reject(res))))
    .then((words) => {
      return Promise.all(words).then((words) => words.flat(2));
    })
    .then((words) => {
      const sprintWords: TSprintGameWord[] = words.map(() => {
        const index = getRandomIndex(WORDS_PER_GROUP);
        const word = words[index];
        const randomWord = words[getRandomIndex(WORDS_PER_GROUP)];
        const sprintWord: TSprintGameWord = getSprintWord(word, randomWord);
        return sprintWord;
      });
      return sprintWords;
    })
    .catch((res) => console.error(res));
};

export const getPageAudiocallWords = (group: number, page: number): Promise<TAudiocallWord[]> => {
  return getWords(group, page).then((words) => {
    const audiocallWords: TAudiocallWord[] = words.map(() => {
      const index = getRandomIndex(120);
      const word = words[index];
      const wordsList: string[] = [word.wordTranslate];
      for (let n = 0; n < 4; n += 1) {
        const i = getRandomIndex(120);
        if (i !== index) {
          const randomWord = words[i].wordTranslate;
          wordsList.push(randomWord);
        }
      }
      const audiocallWord: TAudiocallWord = setAudiocallWord(word, wordsList);
      return audiocallWord;
    });
    return audiocallWords;
  });
};

export const getAllAudiocallWords = (group: number): Promise<TAudiocallWord[] | void> => {
  const promisesWords: Promise<Response>[] = new Array(6)
    .fill(0)
    .map((el, index) => fetch(`${BASE_URL}/words/?page=${index}&group=${group}`));

  return Promise.all(promisesWords)
    .then((responses) => responses.map((res) => (res.ok ? res.json() : Promise.reject(res))))
    .then((words) => Promise.all(words).then((words) => words.flat(2)))
    .then((words) => {
      const audiocallWords: TAudiocallWord[] = words.map(() => {
        const index = getRandomIndex(120);
        const word = words[index];
        const wordsList: string[] = [word.wordTranslate];
        for (let n = 0; n < 4; n += 1) {
          const i = getRandomIndex(120);
          if (i !== index) {
            const randomWord = words[i].wordTranslate;
            wordsList.push(randomWord);
          }
        }
        const audiocallWord: TAudiocallWord = setAudiocallWord(word, wordsList);
        return audiocallWord;
      });
      return audiocallWords;
    })
    .catch((res) => console.error(res));
};
