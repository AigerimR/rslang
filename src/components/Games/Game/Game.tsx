import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import GameStatistics from '../GameStatisitcs/GameStatistics';
import SprintGame from '../SprintGame/SprintGame';
import AudiocGame from '../AudioGame/Audiocall';

const Game: FC<{ difficultyLevel: string; game: string; page?: number }> = ({
  difficultyLevel,
  game,
  page,
}) => {
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [answersCount, setAnswersCount] = useState<number>(0);
  const [rightAnswersCount, setRightAnswersCount] = useState<number>(0);
  const [correctAnswerListRus, setCorrectAnswerRus] = useState<string[]>([]);
  const [wrongAnswerListRus, setWrongAnswerRus] = useState<string[]>([]);
  const [correctAnswerListEng, setCorrectAnswerEng] = useState<string[]>([]);
  const [wrongAnswerListEng, setWrongAnswerEng] = useState<string[]>([]);

  useEffect(() => {
    const updatedAccuracy = rightAnswersCount / answersCount;
    setAccuracy(updatedAccuracy);
  }, [answersCount, rightAnswersCount]);

  const memoziedHandleCorrectAnswersListRus = useCallback((word: string) => {
    const copy = JSON.parse(JSON.stringify(correctAnswerListRus));
    setCorrectAnswerRus(() => [...copy, word]);
  }, [correctAnswerListRus]);

  const memoziedHandleWrongAnswersListRus = useCallback((word: string) => {
    const copy = JSON.parse(JSON.stringify(wrongAnswerListRus));
    setWrongAnswerRus(() => [...copy, word]);
  }, [wrongAnswerListRus]);

  const memoziedHandleCorrectAnswersListEng = useCallback((word: string) => {
    const copy = JSON.parse(JSON.stringify(correctAnswerListEng));
    setCorrectAnswerEng(() => [...copy, word]);
  }, [correctAnswerListEng]);

  const memoziedHandleWrongAnswersListEng = useCallback((word: string) => {
    const copy = JSON.parse(JSON.stringify(wrongAnswerListEng));
    setWrongAnswerEng(() => [...copy, word]);
  }, [wrongAnswerListEng]);

  const memoziedHandleAnswer = useCallback(() => {
    setAnswersCount((prevAnswersCount) => prevAnswersCount + 1);
  }, [answersCount]);

  const memoziedHandleRightAnswer = useCallback(() => {
    setRightAnswersCount((prevRightAnswersCount) => prevRightAnswersCount + 1);
  }, [rightAnswersCount]);

  const memoziedHandleScore = useCallback(
    (score) => {
      setScore(score);
    },
    [score],
  );

  const memoziedHandleFinishGame = useCallback(() => {
    setIsGameFinished(true);
  }, [isGameFinished]);

  const games = {
    sprint: (
      <SprintGame
        page={page}
        difficultyLevel={difficultyLevel}
        score={score}
        handleFinishGame={memoziedHandleFinishGame}
        handleScore={memoziedHandleScore}
        handleAnswer={memoziedHandleAnswer}
        handleRightAnswer={memoziedHandleRightAnswer}
      />
    ),
    audiocall: (
      <AudiocGame
        page={page}
        difficultyLevel={difficultyLevel}
        score={score}
        handleFinishGame={memoziedHandleFinishGame}
        handleScore={memoziedHandleScore}
        handleAnswer={memoziedHandleAnswer}
        handleRightAnswer={memoziedHandleRightAnswer}
        handleCorrectAnswersListRus={memoziedHandleCorrectAnswersListRus}
        handleWrongAnswersListRus={memoziedHandleWrongAnswersListRus}
        handleCorrectAnswersListEng={memoziedHandleCorrectAnswersListEng}
        handleWrongAnswersListEng={memoziedHandleWrongAnswersListEng}
        correctAnswerListRus={[]}
        wrongAnswerListRus={[]}
        correctAnswerListEng={[]}
        wrongAnswerListEng={[]}
      />
    ),
  };

  const answerArray = [correctAnswerListRus, correctAnswerListEng, wrongAnswerListRus, wrongAnswerListEng];

  const Game: ReactNode = games[game];

  if (isGameFinished) return <GameStatistics score={score} accuracy={accuracy} answerArray={answerArray}/>;

  return <>{Game}</>;
};

export default Game;
