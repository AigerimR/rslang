import { TGameWord } from '../@types/words';

interface IGame {
  handleFinishGame: (isFinish: boolean) => void;
  handleAnswer: (isCorrect: boolean) => void;
  handleCorrectAnswersList: (word: TGameWord) => void;
  handleWrongAnswersList: (word: TGameWord) => void;
}

export default IGame;
