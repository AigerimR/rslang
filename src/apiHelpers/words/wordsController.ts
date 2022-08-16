import { EStatusCode } from './../../enums/serverStatusCode';
import { TWord } from './../../@types/words';
import axios from 'axios';

const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';

export const getWords = (group: number, page: number): Promise<TWord[]> => {
  return axios
    .get(`${BASE_URL}/words/?page=${page}&group=${group}`)
    .then((response) =>
      response.status === EStatusCode.Ok ? response.data : Promise.reject(response),
    )
    .catch((repsonse) => console.log(repsonse));
};
