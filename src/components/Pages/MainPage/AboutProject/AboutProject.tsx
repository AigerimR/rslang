import React from 'react';
import classes from './aboutProject.module.scss';

const AboutProject = () => {
  return (
    <section className={classes.description}>
      <div className={`${classes.container} ${classes.description_container}`}>
        <h2 className={classes.description_title}>Возможности и преимущества приложения</h2>
        <p className={classes.description_notice}>
          <span>&#128578; </span>
          Чтобы использовать все возможности приложения, пройди, пожалуйста, регистрацию.
        </p>
        <div className={classes.description_cards}>
          <div className={classes.description_card}>
            <p className={classes.description_card_title}>Учебник</p>
            <p className={classes.description_card_info}>Коллекция состоит из 3600 часто употребляемых английских слов. Слова в коллекции отсортированы от более простых и известных к более сложным. Вся коллекция разбита на шесть разделов.</p>
          </div>
          <div className={classes.description_card}>
            <p className={classes.description_card_title}>Игры</p>
            <p className={classes.description_card_info}>Твоему вниманию представлены две игры "Аудиовызов" и "Спринт", которые сделают твое обучение увлекательным и эффективным. Теперь учить слова - это интерересно.</p>
          </div>
          <div className={classes.description_card}>
            <p className={classes.description_card_title}>Сложные слова</p>
            <p className={classes.description_card_info}>В этот раздел ты складываешь сложные слова, которым ты хочешь уделить особое внимание. После того, как слово выучено, можешь удалить его из своего словаря.</p>
          </div>
          <div className={classes.description_card}>
            <p className={classes.description_card_title}>Статистики</p>
            <p className={classes.description_card_info}>Отслеживай свой прогресс обучения. Анализируй статистику. Улучшай результат и вдохновляйся своими достижениями.</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutProject;
