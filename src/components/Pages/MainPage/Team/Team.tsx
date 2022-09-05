import React from 'react';
import classes from './team.module.scss';
import grizz from '../../../../assets/gif/grizz.gif';
import ice from '../../../../assets/gif/ice.gif';
import panda from '../../../../assets/gif/panda.gif';

const Team = () => {
  return (
    <section className={classes.team}>
      <div className={`${classes.container} ${classes.description_team}`}>
        <h2 className={classes.team_title}>Команда разработчиков</h2>
        <p className={classes.team_notice}>
          Давайте знакомиться?
        </p>
        <p className={classes.team_location}>
          Наша команда #99 из г. Алматы (Республика Казахстан)
        </p>
        <div className={classes.team_cards}>
          <div className={classes.team_card}>
            <div className={classes.team_card_avatar}>
              <img src={grizz} alt='Aigerim avatar' />
            </div>
            <div className={classes.team_card_info}>
              <div className={classes.team_card_member}>
                <a className={classes.team_card_member_git} href='https://github.com/AigerimR' target='_blank' rel="noreferrer"></a>
                <p className={classes.team_card_member_name}>Айгерим Раисова</p>
              </div>
              <p className={classes.team_card_status}>Team Lead / Frontend Developer</p>
              <p className={classes.team_card_work}>
                Привет!
              </p>
              <p className={classes.team_card_work}>
                Я инженер-энергетик. Сейчас меняю свою карьеру и активно учусь как в школе, так и самостоятельно. Свой выбор остановила на веб-разработке.
              </p>
              <p className={classes.team_card_work}>
                В RSLang разработала учебник, словарь сложных слов, авторизацию пользователей приложения, настроила роутер между страницами.
              </p>
            </div>
          </div>
          <div className={classes.team_card}>
            <div className={classes.team_card_avatar}>
              <img src={ice} alt='Solomon avatar' />
            </div>
            <div className={classes.team_card_info}>
              <div className={classes.team_card_member}>
                <a className={classes.team_card_member_git} href='https://github.com/solomonya' target='_blank' rel="noreferrer"></a>
                <p className={classes.team_card_member_name}>Соломон Хан</p>
              </div>
              <p className={classes.team_card_status}>Backend / Frontend Developer</p>
              <p className={classes.team_card_work}>
                Привет!
              </p>
              <p className={classes.team_card_work}>
                Я студент 3 курса. Учусь по специальности Вычислительная техника и программное обеспечение. Изучая, параллельно с университетскими занятиями, программирование самостоятельно, выбрал для себя frontend.
              </p>
              <p className={classes.team_card_work}>
                В RSLang подключил бэк, сделал все начальные настройки проекта, подключил ESLint, Webpack, Typescript и т.д. Разработал логику игр, написал игру Спринт.
              </p>
            </div>
          </div>
          <div className={classes.team_card}>
            <div className={classes.team_card_avatar}>
              <img src={panda} alt='Lazzat avatar' />
            </div>
            <div className={classes.team_card_info}>
              <div className={classes.team_card_member}>
                <a className={classes.team_card_member_git} href='https://github.com/2248lm' target='_blank' rel="noreferrer"></a>
                <p className={classes.team_card_member_name}>Лаззат Мухаметалинова</p>
              </div>
              <p className={classes.team_card_status}>Designer / Frontend Developer</p>
              <p className={classes.team_card_work}>
                Привет!
              </p>
              <p className={classes.team_card_work}>
                Я инженер-технолог нефти и газа. Программированием баловалась еще в школе. С годами интерес победил и привел меня в IT. Это приложение писали на React, который я в глаза раньше не видела, поэтому параллельно с разработкой еще и учила новый для себя синтаксис.
              </p>
              <p className={classes.team_card_work}>
                В RSLang разработала дизайн и оформила приложение. Сделала верстку главной страницы, включительно header и footer, верстку страницы статистики. Разработала игру Аудиовызов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Team;
