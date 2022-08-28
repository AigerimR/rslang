import IGame from './game';
import { TGameWord } from '../@types/words';

interface IAudiocallProps extends IGame {
  difficultyLevel: string;
  page?: number;
  score: number;
  handleAnswer: () => void;
  handleRightAnswer: () => void;
  handleCorrectAnswersList: (word: TGameWord) => void;
  handleWrongAnswersList: (word: TGameWord) => void;
  correctAnswerList: TGameWord[];
  wrongAnswerList: TGameWord[];
}

export default IAudiocallProps;
