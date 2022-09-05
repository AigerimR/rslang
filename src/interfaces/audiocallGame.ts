import IGame from './game';
import { TGameWord } from '../@types/words';

interface IAudiocallProps extends IGame {
  difficultyLevel: string;
  page?: number;
  correctAnswerList: TGameWord[];
  wrongAnswerList: TGameWord[];
}

export default IAudiocallProps;
