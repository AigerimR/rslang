type TSprintGameProps = {
  difficultyLevel: string;
  page: number;
  score: number;
  handleScore: (score: number) => void;
  handleFinishGame: (isFinish: boolean) => void;
  handleAnswer: () => void;
  handleRightAnswer: () => void;
};

export default TSprintGameProps;
