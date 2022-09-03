import React, { useEffect, useState } from 'react';
import classes from './complexWords.module.scss';
import Units from '../../Textbook/Units/Units';
import { TWord, TWordUser } from '../../../../@types/words';
import CardsContainer from '../../../CardsContainer/CardsContainer';
import { useComplexWordsContext } from '../../../Context/ComplexWordsContext';

const ComplexWords: React.FC = () => {
  const [unit, setUnit] = useState(0);
  const [unitColor, setUnitColor] = useState('#bbd66c');
  const [data, setData] = useState<TWord[]>();

  const updateUnit = (unit:number, unitColor: string): void => { setUnit(unit); setUnitColor(unitColor);};  

  const ComplexWordsContext  = useComplexWordsContext();

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const getData = () => {
    const res = ComplexWordsContext.complexWords?.filter((word) => word.group === unit);    
    setData(res);
  }
  
  useEffect(()=>{getData()}, [ComplexWordsContext.complexWords, unit]);

  return (
    <div className={classes.complexW_main}>
      <Units updateUnit={updateUnit}/>
      <br/>
      {data?.length === 0 ? <h2>No words yet</h2> : <CardsContainer data={data!} unitColor = {unitColor} inComplexComponent = {true}/>}
      <br/>
    </div>
  );
}

export default ComplexWords;