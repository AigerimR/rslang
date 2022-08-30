interface IGame {
  handleScore: (score: number) => void;
  handleFinishGame: (isFinish: boolean) => void;
  handleAnswer: () => void;
  handleRightAnswer: () => void;
}

export default IGame;
