import { TGameWord } from '../@types/words';
import IGame from './game';

interface ISprintGameProps extends IGame {
  difficultyLevel: string;
  page?: number;
  score: number;
  handleCorrectAnswersList: (word: TGameWord) => void;
  handleWrongAnswersList: (word: TGameWord) => void;
}

export default ISprintGameProps;
