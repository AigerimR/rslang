import React, { useState } from 'react';
import classes from '../audioControlButtons.module.scss';
import WarningPopup from '../../../Popups/WarningPopup/WarningPopup';

const SoundButton = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <span className={`${'material-icons'} ${classes.audio_control_btn}`} onClick={() => setModalActive(true)}> volume_up {/* volume_off */}</span>
      <WarningPopup active={modalActive} setActive={setModalActive} />
    </div>
  )
};

export default SoundButton;
