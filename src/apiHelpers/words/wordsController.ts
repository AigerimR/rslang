import { EStatusCode } from './../../enums/serverStatusCode';
import { TWord, TSprintGameWord } from './../../@types/words';
import axios, { AxiosResponse } from 'axios';
import getRandomPage from './utils/getRandomPage';

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

export const getSprintGameWords = (
  group: number,
  page: number = getRandomPage(),
): Promise<TSprintGameWord[]> => {
  return getWords(group, page).then((words) => {
    const sprintWords: TSprintGameWord[] = [];
    words.forEach((word) => {
      const sprintWord: TSprintGameWord = {
        id: word.id,
        word: word.word,
        translate: words[getRandomPage()].wordTranslate,
        rightTranslate: word.wordTranslate,
      };
      sprintWords.push(sprintWord);
    });
    return sprintWords;
  });
};
