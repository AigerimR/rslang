import { IСomment } from '../../../@types/gamesPage';
import React, { FC, useState } from 'react';
import classes from './gameStatistics.scss'
import { TAudiocallWord, TGameWord } from '../../../@types/words';

const GameStatistics: FC<{
  score: number;
  accuracy: number;
  correctAnswerList: TGameWord[];
  wrongAnswerList: TGameWord[];
}> = ({ score, accuracy, correctAnswerList, wrongAnswerList }) => {
  const beautifyAccuracy = (accuracy: number): number => {
    const beautifyAccuracy = Math.floor(accuracy * 100);
    if (Number.isNaN(beautifyAccuracy)) return 0;
    return beautifyAccuracy;
  };

  const [isResultPage, setIsResultPage] = useState<boolean>(true);
  const numberAccuracy: number = beautifyAccuracy(accuracy);
  const stringAccuracy: string = String(numberAccuracy) + '%';

  const resultСomment: IСomment = {
    high: [100, 'Поздравляем, отличный результат!'],
    medium: [80, 'Неплохо, но есть над чем поработать!'],
    low: [40, 'В этот раз не получилость, но продолжай тренироваться!']
  }

  let comment: string;
  switch (true) {
    case numberAccuracy <= resultСomment.low[0]:
      comment = resultСomment.low[1];
      break;
    case numberAccuracy <= resultСomment.medium[0]:
      comment = resultСomment.medium[1];
      break;
    default:
      comment = resultСomment.high[1];
      break;
  }

  return (
    <section className={classes.statisticWrapper}>
      <div className={classes.statisticBtns}>
        <button className={classes.statisticBtnResult}
          style={isResultPage ? { backgroundColor: '#0f4c5c' } : { backgroundColor: '#231f20' }}
          onClick={() => setIsResultPage(true)}>Результат</button>
        <button className={classes.statisticBtnWords}
          style={isResultPage ? { backgroundColor: '#231f20' } : { backgroundColor: '#0f4c5c' }}
          onClick={() => setIsResultPage(false)}>Слова</button>
      </div>
      <h3 className={classes.statisticСomment}>{comment}</h3>
      <div className={classes.statisticPages}>
        <div className={classes.statisticResultPage}
          style={isResultPage ? { display: 'block' } : { display: 'none' }}>
          <div className={classes.statisticScoreContainer}>
            <p className={classes.statisticScore}> Счёт: +{score}</p>
            <p className={classes.statisticScoreWords}> Изучено слов: {correctAnswerList.length} </p>
            <p className={classes.statisticScoreWords}> На изучении слов: {wrongAnswerList.length} </p>
          </div>
          <div className={classes.statisticAccuracyWrapper}>
            <div className={classes.statisticAccuracyContainer}>
              <div className={classes.statisticAccuracyCover}
                style={{ height: `calc(100% - ${stringAccuracy})` }}></div>
              <div className={classes.statisticAccuracyCoverShadow}></div>
              <div className={classes.statisticAccuracyResult}>
                <div className={classes.statisticAccuracyInner}>
                  <p className={classes.statisticAccuracyScore}>{stringAccuracy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.statisticWordsPage}
          style={isResultPage ? { display: 'none' } : { display: 'block' }}>
          <ul className={classes.statisticWrongList}>
            <p className={classes.statisticWrongList_title}>
              <span>Не знаю: </span>
              <span>{wrongAnswerList.length}</span>
            </p>
            {wrongAnswerList.map((word) => {
              return (
                <li>
                  <div className={classes.statisticList_word}>
                    <div className={classes.statisticList_word_sound} onClick={() => { new Audio(word.audio).play() }}></div>
                    <span className={classes.statisticList_word_eng}>{word.wordTranslate}</span>
                    <span>&#8212;</span>
                    <span className={classes.statisticList_word_rus}>{word.word}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className={classes.statisticCorrectList}>
            <p className={classes.statisticCorrectList_title}>
              <span>Знаю: </span>
              <span>{correctAnswerList.length}</span>
            </p>
            {correctAnswerList.map((word) => {
              return (
                <li>
                  <div className={classes.statisticList_word}>
                    <div className={classes.statisticList_word_sound} onClick={() => { new Audio(word.audio).play() }}></div>
                    <span className={classes.statisticList_word_eng}>{word.wordTranslate}</span>
                    <span>&#8212;</span>
                    <span className={classes.statisticList_word_rus}>{word.word}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GameStatistics;
