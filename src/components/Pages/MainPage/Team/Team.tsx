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
          <span>&#129395; </span>
          Давайте знакомится?
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
              <p className={classes.team_card_name}>Айгерим Раисова</p>
              <p className={classes.team_card_status}>Team Lead / Developer</p>
              <p className={classes.team_card_work}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quia pariatur sunt nemo repellat ullam, tempore similique repellendus beatae nisi corrupti quis ducimus rem dolorem eius, reiciendis eaque non modi.</p>
            </div>
          </div>
          <div className={classes.team_card}>
            <div className={classes.team_card_avatar}>
              <img src={ice} alt='Solomon avatar' />
            </div>
            <div className={classes.team_card_info}>
              <p className={classes.team_card_name}>Соломон Хан</p>
              <p className={classes.team_card_status}>Developer</p>
              <p className={classes.team_card_work}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quia pariatur sunt nemo repellat ullam, tempore similique repellendus beatae nisi corrupti quis ducimus rem dolorem eius, reiciendis eaque non modi.</p>
            </div>
          </div>
          <div className={classes.team_card}>
            <div className={classes.team_card_avatar}>
              <img src={panda} alt='Lazzat avatar' />
            </div>
            <div className={classes.team_card_info}>
              <p className={classes.team_card_name}>Лаззат Мухаметалинова</p>
              <p className={classes.team_card_status}>Designer / Developer</p>
              <p className={classes.team_card_work}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quia pariatur sunt nemo repellat ullam, tempore similique repellendus beatae nisi corrupti quis ducimus rem dolorem eius, reiciendis eaque non modi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Team;
