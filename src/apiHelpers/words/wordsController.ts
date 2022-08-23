import { EStatusCode } from './../../enums/serverStatusCode';
import { TWord, TSprintGameWord } from './../../@types/words';
import axios, { AxiosResponse } from 'axios';
import getRandomIndex from '../../utils/getRandomIndex';

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
    const sprintWords: TSprintGameWord[] = words.map((word) => {
      const index = getRandomIndex(20);
      const sprintWord: TSprintGameWord = {
        id: words[index].id,
        word: word[index].word,
        translate: words[getRandomIndex(20)].wordTranslate,
        rightTranslate: word[index].wordTranslate,
      };
      return sprintWord;
    });
    return sprintWords;
  });
};

export const getAllSprintWords = (group: number): Promise<TSprintGameWord[] | void> => {
  const promisesWords: Promise<Response>[] = [];
  for (let index = 0; index <= 5; index++) {
    const words = fetch(
      `https://team99-rslang-jsfe2022q1.herokuapp.com/words/?page=${index}&group=${group}`,
    );
    promisesWords.push(words);
  }

  return Promise.all(promisesWords)
    .then((responses) => responses.map((res) => (res.ok ? res.json() : Promise.reject(res))))
    .then((words) => {
      return Promise.all(words).then((words) => words.flat(2));
    })
    .then((words) => {
      const sprintWords: TSprintGameWord[] = words.map((word) => {
        const sprintWord = {
          id: word.id,
          word: word.word,
          translate: words[getRandomIndex(120)].wordTranslate,
          rightTranslate: word.wordTranslate,
        };
        return sprintWord;
      });
      return sprintWords;
    })
    .catch((res) => console.error(res));
};
