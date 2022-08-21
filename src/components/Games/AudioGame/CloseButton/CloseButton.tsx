import React, { useState } from 'react';
import classes from './closeButton.scss';
import WarningPopup from '../WarningPopup/WarningPopup';

const CloseButton = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <span className={`${'material-icons'} ${classes.audiogame_close_btn}`} onClick={() => setModalActive(true)}> close</span>
      <WarningPopup active={modalActive} setActive={setModalActive} />
    </div>
  )
};

export default CloseButton;
