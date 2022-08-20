import React from 'react';
import classes from './aboutProject.module.scss';

const AboutProject = () => {
  return (
    <section className={classes.aboutProject}>
      <div className={`${classes.container} ${classes.aboutProject_container}`}>
        <h2 className={classes.aboutProject_title}>Возможности и преимущества приложения</h2>
        <p className={classes.aboutProject_notice}>
          <span>&#128578; </span>
          Чтобы использовать все возможности приложения, пожалуйста, пройди регистрацию.
        </p>
        <div className={classes.aboutProject_cards}>
          <div className={classes.aboutProject_card}>
            <p className={classes.aboutProject_card_title}>Учебник</p>
            <p className={classes.aboutProject_card_info}>Коллекция состоит из 3600 часто употребляемых английских слов. Слова в коллекции отсортированы от более простых и известных к более сложным. Вся коллекция разбита на шесть разделов.</p>
          </div>
          <div className={classes.aboutProject_card}>
            <p className={classes.aboutProject_card_title}>Игры</p>
            <p className={classes.aboutProject_card_info}>Твоему вниманию представлены две игры Аудиовызов и Спринт, которые сделают твое обучение увлекательным и эффективным. Теперь учить слова - это интерересно.</p>
          </div>
          <div className={classes.aboutProject_card}>
            <p className={classes.aboutProject_card_title}>Сложные слова</p>
            <p className={classes.aboutProject_card_info}>В этот раздел ты складываешь сложные слова, которым ты хочешь уделить особое внимание. После того, как слово выучено, можешь удалить его из своего словаря.</p>
          </div>
          <div className={classes.aboutProject_card}>
            <p className={classes.aboutProject_card_title}>Статистика</p>
            <p className={classes.aboutProject_card_info}>Отслеживай свой прогресс обучения. Анализируй статистику. Улучшай результат и вдохновляйся своими достижениями.</p>
          </div>
        </div>
      </div>
      <svg className={classes.aboutProject_wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fillOpacity="1" d="M0,96L48,101.3C96,107,192,117,288,133.3C384,149,480,171,576,160C672,149,768,107,864,96C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  )
};

export default AboutProject;
