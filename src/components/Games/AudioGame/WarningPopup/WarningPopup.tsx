import React from 'react';
import classes from './warningPopup.scss';

const WarningPopup = ({ active, setActive }) => {
  return (
    <div className={classes.warningPopup_wrapper} style={active ? { display: 'flex' } : { display: 'none' }} onClick={() => setActive(false)}>
      <div className={`${classes.container} ${classes.warningPopup_container}`} onClick={e => e.stopPropagation()}>
        <p className={classes.warningPopup_title}>Тренировка не закончена!</p>
        <p className={classes.warningPopup_note}>Если вы выйдете из игры, ваши результаты не будут сохранены</p>
        <div className={classes.warningPopup_btns}>
          <button className={classes.warningPopup_btn}>Закрыть</button>
          <button className={classes.warningPopup_btn} onClick={() => setActive(false)}>Отмена</button>
        </div>
      </div>
    </div>
  )
};

export default WarningPopup;
