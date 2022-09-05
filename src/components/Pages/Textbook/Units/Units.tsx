import React, { useEffect, useState } from 'react';
import classes from './Units.module.scss'

const Units: React.FC<{ updateUnit: (unit: number, unitColor: string) => void }> = (props) => {
  const [unit, setUnit] = useState(localStorage.getItem('unit') === null ? 0 : +localStorage.getItem('unit')!);
  const [unitColor, setUnitColor] = useState(localStorage.getItem('unitColor') === null ? '#bbd66c' : localStorage.getItem('unitColor')!);

  const handleChange = (e: React.MouseEvent<HTMLElement>): void => {
    if (e.target instanceof HTMLButtonElement) {
      setUnit(+(e.target as HTMLButtonElement).id);
      const cardColor = window.getComputedStyle((e.target as HTMLButtonElement), null).getPropertyValue('background-color');
      setUnitColor(cardColor);
    }
  }

  const { updateUnit } = props;

  useEffect(() => {
    updateUnit(unit, unitColor)
  }, [unit, unitColor]);

  return (
    <div className={classes.units_block}>
      <div className={classes.units} onClick={handleChange}>
        <button className={`${classes.btn_unit} ${classes.btn_a1} ${unit === 0 ? classes.btn_active : ''}`} id="0">A1</button>
        <button className={`${classes.btn_unit} ${classes.btn_a2} ${unit === 1 ? classes.btn_active : ''}`} id="1">A2</button>
        <button className={`${classes.btn_unit} ${classes.btn_b1} ${unit === 2 ? classes.btn_active : ''}`} id="2">B1</button>
        <button className={`${classes.btn_unit} ${classes.btn_b2} ${unit === 3 ? classes.btn_active : ''}`} id="3">B2</button>
        <button className={`${classes.btn_unit} ${classes.btn_c1} ${unit === 4 ? classes.btn_active : ''}`} id="4">C1</button>
        <button className={`${classes.btn_unit} ${classes.btn_c2} ${unit === 5 ? classes.btn_active : ''}`} id="5">C2</button>
      </div>
    </div>
  );
}

export default Units;