import { TWord, TAudiocallWord } from '../../../@types/words';

const URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';

const setAudiocallWord = (settedWord: TWord, list: string[]): TAudiocallWord => {
  const { id, word, image, audio, wordTranslate } = settedWord;
  const audiocallWord: TAudiocallWord = {
    id,
    word,
    image: `${URL}/${image}`,
    audio: `${URL}/${audio}`,
    rightTranslate: wordTranslate,
    translate: list,
  };
  return audiocallWord;
};

export default setAudiocallWord;
