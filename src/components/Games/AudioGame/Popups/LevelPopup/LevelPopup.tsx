import React from 'react';
import classes from './levelPopup.module.scss';

const LevelPopup = ({ active, setActive }) => {
  return (
    <div className={classes.levelPopup_wrapper} style={active ? { display: 'flex' } : { display: 'none' }} onClick={() => setActive(false)}>
      <div className={classes.levelPopup_container} onClick={e => e.stopPropagation()}>
        <p className={classes.levelPopup_title}>Выбери уровень</p>
        <div className={classes.levelPopup_btns}>
          <button className={`${classes.levelPopup_btn} ${classes.level_1}`}>A1</button>
          <button className={`${classes.levelPopup_btn} ${classes.level_2}`}>A2</button>
          <button className={`${classes.levelPopup_btn} ${classes.level_3}`}>B1</button>
          <button className={`${classes.levelPopup_btn} ${classes.level_4}`}>B2</button>
          <button className={`${classes.levelPopup_btn} ${classes.level_5}`}>C1</button>
          <button className={`${classes.levelPopup_btn} ${classes.level_6}`}>C2</button>
        </div>
        <button className={classes.levelPopup_play_btn}>Играть</button>
      </div>
    </div>
  )
};

export default LevelPopup;
