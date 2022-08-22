import React, { useEffect, useState } from "react";
import classes from "./Units.module.scss"

const Units: React.FC <{updateUnit: (x: number) => number}>  = (props) => {
  const [unit, setUnit] = useState(0);
  
  const handleChange = (e: React.MouseEvent<HTMLElement>): void => {
    setUnit(+(e.target as HTMLDivElement).id);
  }

  const {updateUnit} = props;

  useEffect(() => {
     updateUnit(unit)
  }, [unit]);

  return(
    <div className={classes.units_block}>
    <h4>РАЗДЕЛЫ</h4>
    <div className={classes.units} onClick = {handleChange}>
      <button className={classes.btn_unit} id="0">A1</button>
      <button className={classes.btn_unit} id="1">A2</button>
      <button className={classes.btn_unit} id="2">B1</button>
      <button className={classes.btn_unit} id="3">B2</button>
      <button className={classes.btn_unit} id="4">C1</button>
      <button className={classes.btn_unit} id="5">C2</button>
    </div>
    </div>
  );
}

export default Units;