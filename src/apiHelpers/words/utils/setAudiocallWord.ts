import { TWord, TAudiocallWord, TGameWord } from '../../../@types/words';

const URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';

const setAudiocallWord = (settedWord: TWord, list: TGameWord[], length: number): TAudiocallWord => {
  const { id, word, image, audio, wordTranslate } = settedWord;
  const audiocallWord: TAudiocallWord = {
    id,
    word,
    image: `${URL}/${image}`,
    audio: `${URL}/${audio}`,
    rightTranslate: wordTranslate,
    gameList: list,
    total: length,
  };
  return audiocallWord;
};

export default setAudiocallWord;
