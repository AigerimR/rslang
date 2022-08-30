import { getAllUserWords, getUserComplexWords } from '../../../../apiHelpers/users/usersController';
import React, { useContext, useEffect, useState } from 'react';
import classes from './complexWords.module.scss';
import Units from '../../Textbook/Units/Units';
import { TWord, TWordUser } from '../../../../@types/words';
import { getWord } from '../../../../apiHelpers/words/wordsController';
import CardsContainer from '../../../CardsContainer/CardsContainer';
import ComplexWordsContext from '../../../Context/ComplexWordsContext';

const ComplexWords: React.FC = () => {
  const [unit, setUnit] = useState(0);
  const [unitColor, setUnitColor] = useState('#bbd66c');
  const [data, setData] = useState<TWord[]>();
  const [dataAll, setDataAll] = useState<TWord[]>();

  const updateUnit = (unit:number, unitColor: string): void => { setUnit(unit); setUnitColor(unitColor);};  

  const { complexWords, setComplexWords} = useContext(ComplexWordsContext);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  // const getDataAll = async (): Promise<void> => {
  //   const res = await getUserComplexWords(userId, token);
  //   setDataAll(res);
  // }
  // console.log(complexWords);
  // console.log(dataAll);
  

  const getData = () => {
    const res = complexWords?.filter((word) => word.group === unit);    
    // const res = dataAll?.filter((word) => word.group === unit);    
    setData(res);
  }
  // useEffect(()=>{getDataAll()}, [complexWords]);
  useEffect(()=>{getData()}, [complexWords, unit]);

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