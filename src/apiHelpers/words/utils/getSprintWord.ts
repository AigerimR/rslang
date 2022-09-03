import { TWord, TSprintGameWord } from './../../../@types/words';

const isRightAnswer = () => Math.floor(Math.random() * 10) > 4;

const getSprintWord = (gettedWord: TWord, randomWord: TWord): TSprintGameWord => {
  const { id, word, wordTranslate, audio } = gettedWord;

  const sprintWord: TSprintGameWord = {
    id,
    word,
    audio,
    translate: isRightAnswer() ? wordTranslate : randomWord.wordTranslate,
    wordTranslate: wordTranslate,
  };

  return sprintWord;
};

export default getSprintWord;
