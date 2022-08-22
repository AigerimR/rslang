import IGame from './game';

interface ISprintGameProps extends IGame {
  difficultyLevel: string;
  page: number;
  score: number;
}

export default ISprintGameProps;
