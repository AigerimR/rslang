import React, { useState } from 'react';
import classes from '../audioControlButton.module.scss';
import WarningPopup from '../../WarningPopup/WarningPopup';

const FullScreenButton = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <span className={`${'material-icons'} ${classes.audio_control_btn}`} onClick={() => setModalActive(true)}> fullscreen</span>
      <WarningPopup active={modalActive} setActive={setModalActive} />
    </div>
  )
};

export default FullScreenButton;
