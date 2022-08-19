import React from 'react';
import classes from './introduction.module.scss';
import introductionGirl from '../../../../assets/img/read-girl.png';

const Introduction = () => {
  return (
    <section className={classes.introduction}>
      <div className={`${classes.container} ${classes.introduction_container}`}>
        <div className={classes.introduction_content}>
          <div className={classes.introduction_blockquote}>
            <h2 className={classes.introduction_title}>
              Кто владеет информацией - тот владеет миром!
            </h2>
            <p>- Натан Ротшильд</p>
          </div>
          <div className={classes.introduction_info}>
            <p className={classes.introduction_friend}>Дорогой друг!</p>
            <p>Перед тобой уникальное приложение, которое поможет тебе выучить английский язык.</p>
            <p className={classes.introduction_question}>
              <span>Зачем мне иностранный язык?</span> Вероятно спросишь ты?
            </p>
            <ul className={classes.introduction_list}>
              <p className={classes.introduction_list_mark}>Английский язык поможет тебе:</p>
              <li className={classes.introduction_item}>Чувствовать себя свободно в путешествиях.</li>
              <li className={classes.introduction_item}>Заводить новых друзей со всех уголков Земли.</li>
              <li className={classes.introduction_item}>Получить образование в лучших университетах мира.</li>
              <li className={classes.introduction_item}>Иметь интересную и высокооплачиваемую работу.</li>
              <li className={classes.introduction_item}>Смотреть любимые фильмы в оригинале, ведь при переводе иногда теряется реальный смысл слов.</li>
              <li className={classes.introduction_item}>И это только малая часть того, что может дать тебе знание английског языка...</li>
              <p className={classes.introduction_list_invitation}>Открой же для себя волшебную дверь в наш удивительный мир!</p>
            </ul>
          </div>
        </div>
        <div className={classes.introduction_girl}>
          <img src={introductionGirl} alt='Reading Girl' />
        </div>
      </div>
      <svg className={classes.introduction_wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,170.7C480,171,600,149,720,154.7C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </section>
  )
};

export default Introduction;
