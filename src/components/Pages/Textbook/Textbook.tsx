import React, { useEffect, useState } from 'react';
import { TWord } from "../../../@types/words";
import { getWords } from "../../../apiHelpers/words/wordsController";
import Units from "./Units/Units";
import Paginationmui from './Pagination/Paginationmui';
import CardsContainer from "../../CardsContainer/CardsContainer";
import classes from "./Textbook.module.scss"

const Textbook: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const updatePage = (page:number): void => { setPage(page);};

  const [unit, setUnit] = useState(0);
  const [unitColor, setUnitColor] = useState('#bbd66c');
  const updateUnit = (unit:number, unitColor: string): void => { setUnit(unit); setUnitColor(unitColor);};  

  let [data, setData] = useState<TWord[]>();
  const getData = async () => {
    const res = await getWords(unit, page);
    setData(res);
  }

  useEffect(()=>{getData()}, [page, unit]);
  
  return(
    <div className={classes.textbook}>
      <Units updateUnit={updateUnit}/>
      <Paginationmui updatePage={updatePage} />
      <CardsContainer data={data!} unitColor = {unitColor}/>
    </div>
  );
}

export default Textbook;