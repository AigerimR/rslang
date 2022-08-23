import { TWord, TSprintGameWord } from './../../../@types/words';

const isRightAnswer = () => Math.floor(Math.random() * 10) > 4;

const getSprintWord = (gettedWord: TWord, randomWord: TWord): TSprintGameWord => {
  const { id, word, wordTranslate } = gettedWord;

  const sprintWord: TSprintGameWord = {
    id,
    word,
    translate: isRightAnswer() ? wordTranslate : randomWord.wordTranslate,
    rightTranslate: wordTranslate,
  };

  return sprintWord;
};

export default getSprintWord;
