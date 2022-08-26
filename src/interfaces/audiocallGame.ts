import IGame from './game';

interface IAudiocallProps extends IGame {
  difficultyLevel: string;
  page?: number;
  score: number;
  handleAnswer: () => void;
  handleRightAnswer: () => void;
  handleCorrectAnswersList: (word: string) => void;
  handleWrongAnswersList: (word: string) => void;
  correctAnswerList: string[];
  wrongAnswerList: string[];
}

export default IAudiocallProps;
