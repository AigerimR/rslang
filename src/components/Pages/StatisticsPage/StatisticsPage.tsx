import React, { FC } from 'react';
import classes from './statisticsPage.scss'
import statisticsGirl from '../../../assets/img/report-girl.png';

const accuracNum = (newWords, learnedWords) => {
  const accuracy = Math.floor(learnedWords / newWords * 100);
  if (isNaN(accuracy)) return 0;
  else return accuracy;
}

const [newWordsDay, learnedWordsDay] = [0, 0];
const accuracyGeneralNum = accuracNum(newWordsDay, learnedWordsDay);
const accuracyGeneral = `${accuracyGeneralNum}%`;

const [newWordsAudiocall, learnedWordsAudiocall, longSeriesAudiocall] = [0, 0, 0];
const accuracyAudiocall = `${accuracNum(newWordsAudiocall, learnedWordsAudiocall)}%`;

const [newWordsSprint, learnedWordsSprint, longSeriesSprint] = [0, 0, 0];
const accuracySprint = `${accuracNum(newWordsSprint, learnedWordsSprint)}%`;

const StatisticsPage: FC = () => {
  return (
    <div className={classes.statistics_wrapper}>
      <section className={classes.statistics}>
        <div className={classes.container}>
          <h2 className={classes.statistics_title}>Общая статистика</h2>
          <div className={classes.statistics_сontainer}>
            <div className={classes.chart_content}>
              <div className={classes.wordsToday}>
                <p className={classes.wordsToday_chartTitle}>Новые&emsp;слова</p>
                <div className={classes.wordsToday_chart}>
                  <p className={classes.wordsToday_count}>{newWordsDay}</p>
                  <div className={classes.newWordsToday_block} style={{ height: '380px' }}></div>
                </div>
              </div>
              <div className={classes.wordsToday}>
                <p className={classes.wordsToday_chartTitle}>Изученные&emsp;слова</p>
                <div className={classes.wordsToday_chart}>
                  <p className={classes.wordsToday_count}>{learnedWordsDay}</p>
                  <div className={classes.learnedWordsToday_block} style={{ height: `${learnedWordsDay / newWordsDay * 380}px` }}></div>
                </div>
              </div>
            </div>
            <div className={classes.diagram_content}>
              <div className={classes.diagram_shape}>
                <div className={classes.diagram_masked}>
                </div>
                <div className={classes.diagram_cover}
                  style={accuracyGeneralNum ? { height: `${100 - accuracyGeneralNum}%` } : { height: '100%' }}></div>
                <div className={classes.diagram_shadow}>
                  <p className={classes.diagram_score}>{accuracyGeneral}</p>
                </div>
              </div>
              <p className={classes.diagram_title}>Правильных ответов</p>
            </div>
            <img className={classes.statistics_girl}
              src={statisticsGirl} alt='Statistics Girl' />
          </div>
          <div className={classes.statistics_gamesContainer}>
            <h2 className={classes.statistics_gamesTitle}>Статистика по мини-играм</h2>
            <div className={classes.statistics_games}>
              <div className={classes.statistics_game}>
                <p className={classes.statistics_gameTitle}>Аудиовызов</p>
                <ol className={classes.statistics_gameList}>
                  <li className={classes.statistics_gameItem}>
                    Количество новых слов: {newWordsAudiocall}
                  </li>
                  <li className={classes.statistics_gameItem}>
                    Процент правильных ответов: {accuracyAudiocall}
                  </li>
                  <li className={classes.statistics_gameItem}>
                    Самая длинная серия правильных ответов: {longSeriesAudiocall}
                  </li>
                </ol>
              </div>
              <div className={classes.statistics_game}>
                <p className={classes.statistics_gameTitle}>Спринт</p>
                <ol className={classes.statistics_gameList}>
                  <li className={classes.statistics_gameItem}>
                    Количество новых слов: {newWordsSprint}
                  </li>
                  <li className={classes.statistics_gameItem}>
                    Процент правильных ответов: {accuracySprint}
                  </li>
                  <li className={classes.statistics_gameItem}>
                    Самая длинная серия правильных ответов: {longSeriesSprint}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default StatisticsPage;
