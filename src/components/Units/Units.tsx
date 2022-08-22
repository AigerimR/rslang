import React, { FC, useEffect, useState } from "react";
import classes from "./Units.module.scss"

const Units: React.FC< {updateUnit: (x: number) => number} >  = (props) => {
// export default function Units(props) {
  const [unit, setUnit] = useState(0);
  
  const handleChange =(e)=>{
    setUnit(e.target.id);
  }

  const {updateUnit} = props;

  useEffect(() => {
     updateUnit(unit)
  }, [unit]);

  return(
    <div className={classes.units} onClick = {handleChange}>
      <button className={classes.btn_unit} id="0">Unit 1</button>
      <button className={classes.btn_unit} id="1">Unit 2</button>
      <button className={classes.btn_unit} id="2">Unit 3</button>
      <button className={classes.btn_unit} id="3">Unit 4</button>
      <button className={classes.btn_unit} id="4">Unit 5</button>
      <button className={classes.btn_unit} id="5">Unit 6</button>
    </div>
  );
}

export default Units;