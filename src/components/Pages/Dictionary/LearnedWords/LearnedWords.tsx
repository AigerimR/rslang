import { getAllUserWords, getUserComplexWords } from '../../../../apiHelpers/users/usersController';
import React, { useContext, useEffect, useState } from 'react';
import classes from './learnedWords.module.scss';
import Units from '../../Textbook/Units/Units';
import { TWord, TWordUser } from '../../../../@types/words';
import { getWord } from '../../../../apiHelpers/words/wordsController';
import CardsContainer from '../../../CardsContainer/CardsContainer';
import { useLearnedWordsContext } from '../../../Context/LearnedWordsContext';

const LearnedWords: React.FC = () => {
  const [unit, setUnit] = useState(0);
  const [unitColor, setUnitColor] = useState('#bbd66c');
  const [data, setData] = useState<TWord[]>();
  // const [dataAll, setDataAll] = useState<TWord[]>();

  const updateUnit = (unit:number, unitColor: string): void => { setUnit(unit); setUnitColor(unitColor);};  

  // const { learnedWords, setLearnedWords} = useContext(LearnedWordsContext);
  const LearnedWordsContext  = useLearnedWordsContext();

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const getData = () => {
    const res = LearnedWordsContext.learnedWords?.filter((word) => word.group === unit);    
    setData(res);
  }
  useEffect(()=>{getData()}, [ LearnedWordsContext.learnedWords, unit]);

  return (
    <div className={classes.learnedW_main}>
      <Units updateUnit={updateUnit}/>
      <br/>
      {data?.length === 0 ? <h2>No words yet</h2> : <CardsContainer data={data!} unitColor = {unitColor}/>}
      <br/>
    </div>
  );
}

export default LearnedWords;