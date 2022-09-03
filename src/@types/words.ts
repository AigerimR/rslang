export type TWord = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  wordTranslate: string;
};

export type TSprintGameWord = {
  id: string;
  word: string;
  translate: string;
  wordTranslate: string;
  audio: string;
};

export type TGameWord = {
  id: string;
  word: string;
  image: string;
  audio: string;
  wordTranslate: string;
};

export type TAudiocallWord = {
  id: string;
  word: string;
  image: string;
  audio: string;
  rightTranslate: string;
  gameList: TGameWord[];
  total: number;
};

export type TWordUser = {
  difficulty: string;
  id: string;
  wordId: string;
};
