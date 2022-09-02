import React from 'react';
import classes from './statisticsPage.scss'
import statisticsGirl from '../../../assets/img/report-girl.png';

const totalWordsDay = 30;
const learnedWordsDay = 15;
const accuracyDay = `${Math.floor(learnedWordsDay / totalWordsDay * 100)}%`;

const StatisticsPage = () => {
  return (
    <div className={classes.statistics_wrapper}>
      <section className={classes.statistics}>
        <div className={classes.container}>
          <h2 className={classes.statistics_title}>Статистика за этот день</h2>
          <div className={classes.statistics_сontainer}>
            <div className={classes.chart_content}>
              <div className={classes.wordsToday}>
                <p className={classes.wordsToday_chartTitle}>Новые&emsp;слова</p>
                <div className={classes.wordsToday_chart}>
                  <p className={classes.wordsToday_count}>{totalWordsDay}</p>
                  <div className={classes.newWordsToday_block} style={{ height: '380px' }}></div>
                </div>
              </div>
              <div className={classes.wordsToday}>
                <p className={classes.wordsToday_chartTitle}>Изученные&emsp;слова</p>
                <div className={classes.wordsToday_chart}>
                  <p className={classes.wordsToday_count}>{learnedWordsDay}</p>
                  <div className={classes.learnedWordsToday_block} style={{ height: `${learnedWordsDay / totalWordsDay * 380}px` }}></div>
                </div>
              </div>
            </div>
            <div className={classes.diagram_content}>
              <div className={classes.diagram_shape}>
                <div className={classes.diagram_masked}>
                </div>
                <div className={classes.diagram_cover} style={{ height: `calc(100% - ${accuracyDay})` }}></div>
                <div className={classes.diagram_shadow}>
                  <p className={classes.diagram_score}>{accuracyDay}</p>
                </div>
              </div>
              <p className={classes.diagram_title}>Правильных ответов</p>
            </div>
            <img className={classes.statistics_girl}
              src={statisticsGirl} alt='Statistics Girl' />
          </div>
        </div>
      </section >
    </div >
  )
}

export default StatisticsPage;
