import IGame from './game';
import { TAudiocallWord } from '../@types/words';

interface IAudiocallProps extends IGame {
  difficultyLevel: string;
  page?: number;
  score: number;
  handleAnswer: () => void;
  handleRightAnswer: () => void;
  handleCorrectAnswersList: (word: TAudiocallWord) => void;
  handleWrongAnswersList: (word: TAudiocallWord) => void;
  correctAnswerList: TAudiocallWord[];
  wrongAnswerList: TAudiocallWord[];
}

export default IAudiocallProps;
