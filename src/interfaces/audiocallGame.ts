import IGame from './game';

interface IAudiocallProps extends IGame {
  difficultyLevel: string;
  page?: number;
  score: number;
  handleAnswer: () => void;
  handleRightAnswer: () => void;
  handleCorrectAnswersListRus: (word: string) => void;
  handleWrongAnswersListRus: (word: string) => void;
  handleCorrectAnswersListEng: (word: string) => void;
  handleWrongAnswersListEng: (word: string) => void;
  correctAnswerListRus: string[];
  wrongAnswerListRus: string[];
  correctAnswerListEng: string[];
  wrongAnswerListEng: string[];
}

export default IAudiocallProps;
