import React, { FC, useState } from 'react';
import classes from './gameStatistics.scss'

const GameStatistics: FC<{ score: number; accuracy: number }> = ({ score, accuracy }) => {
  const beautifyAccuracy = (accuracy: number): string => {
    const beautifullAccuracy = Math.floor(accuracy * 100);
    if (Number.isNaN(beautifullAccuracy)) return '0%';
    return `${beautifullAccuracy}%`;
  };

  const resultGrade = {
    high: [90, 100],
    medium: [50, 80],
    low: [0, 40]
  }

  const resultСomment = {
    high: 'Поздравляем, отличный результат!',
    medium: 'Неплохо, но есть над чем поработать!',
    low: 'В этот раз не получилость, но продолжай тренироваться!'
  }

  const [isResultPage, setIsResultPage] = useState<boolean>(true);

  return (
    <section className={classes.statisticWrapper}>
      <div className={classes.statisticBtns}>
        <button className={classes.statisticBtnResult} style={isResultPage ? { backgroundColor: '#0f4c5c' } : { backgroundColor: '#231f20' }} onClick={() => setIsResultPage(true)}>Результат</button>
        <button className={classes.statisticBtnWords} style={isResultPage ? { backgroundColor: '#231f20' } : { backgroundColor: '#0f4c5c' }} onClick={() => setIsResultPage(false)}>Слова</button>
      </div>
      <h3 className={classes.statisticСomment}>{resultСomment.low}</h3>
      <div className={classes.statisticPages}>
        <div className={classes.statisticResultPage} style={isResultPage ? { display: 'block' } : { display: 'none' }}>
          <div className={classes.statisticScoreContainer}>
            <p className={classes.statisticScore}> Счёт: +{score}</p>
            <p className={classes.statisticScoreWords}> Изучено слов: {score} </p>
            <p className={classes.statisticScoreWords}> На изучении слов: {score} </p>
          </div>
          <div className={classes.statisticAccuracyWrapper}>
            <div className={classes.statisticAccuracyContainer}>
              <div className={classes.statisticAccuracyCover} style={{ height: `calc(100% - ${beautifyAccuracy(accuracy)})` }}></div>
              <div className={classes.statisticAccuracyCoverShadow}></div>
              <div className={classes.statisticAccuracyResult}>
                <div className={classes.statisticAccuracyInner}>
                  <p className={classes.statisticAccuracyScore}>{beautifyAccuracy(accuracy)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.statisticWordsPage} style={isResultPage ? { display: 'none' } : { display: 'block' }}>
          <ul className={classes.statisticWrongList}>
            <p className={classes.statisticWrongList_title}>
              <span>Не знаю: </span>
              <span className={classes.statisticWrongList_count}>{score}</span>
            </p>
            <li className={classes.statisticList_item}>
              <div className={classes.statisticList_word}>
                <div className={classes.statisticList_word_sound}></div>
                <span className={classes.statisticList_word_eng}>bite</span>
                <span className={classes.statisticList_word_hyphen}>&#8212;</span>
                <span className={classes.statisticList_word_rus}>кусать</span>
              </div>
            </li>
            <li className={classes.statisticList_item}>
              <div className={classes.statisticList_word}>
                <div className={classes.statisticList_word_sound}></div>
                <span className={classes.statisticList_word_eng}>grape</span>
                <span className={classes.statisticList_word_hyphen}>&#8212;</span>
                <span className={classes.statisticList_word_rus}>виноград</span>
              </div>
            </li>
          </ul>
          <ul className={classes.statisticCorrectList}>
            <p className={classes.statisticCorrectList_title}>
              <span>Знаю: </span>
              <span className={classes.statisticCorrectList_count}>{score}</span>
            </p>
            <li className={classes.statisticList_item}>
              <div className={classes.statisticList_word}>
                <div className={classes.statisticList_word_sound}></div>
                <span className={classes.statisticList_word_eng}>salad</span>
                <span className={classes.statisticList_word_hyphen}>&#8212;</span>
                <span className={classes.statisticList_word_rus}>салат</span>
              </div>
            </li>
            <li className={classes.statisticList_item}>
              <div className={classes.statisticList_word}>
                <div className={classes.statisticList_word_sound}></div>
                <span className={classes.statisticList_word_eng}>liter</span>
                <span className={classes.statisticList_word_hyphen}>&#8212;</span>
                <span className={classes.statisticList_word_rus}>литр</span>
              </div>
            </li>
            <li className={classes.statisticList_item}>
              <div className={classes.statisticList_word}>
                <div className={classes.statisticList_word_sound}></div>
                <span className={classes.statisticList_word_eng}>liter</span>
                <span className={classes.statisticList_word_hyphen}>&#8212;</span>
                <span className={classes.statisticList_word_rus}>литр</span>
              </div>
            </li>
            <li className={classes.statisticList_item}>
              <div className={classes.statisticList_word}>
                <div className={classes.statisticList_word_sound}></div>
                <span className={classes.statisticList_word_eng}>liter</span>
                <span className={classes.statisticList_word_hyphen}>&#8212;</span>
                <span className={classes.statisticList_word_rus}>литр</span>
              </div>
            </li>
            <li className={classes.statisticList_item}>
              <div className={classes.statisticList_word}>
                <div className={classes.statisticList_word_sound}></div>
                <span className={classes.statisticList_word_eng}>liter</span>
                <span className={classes.statisticList_word_hyphen}>&#8212;</span>
                <span className={classes.statisticList_word_rus}>литр</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GameStatistics;
