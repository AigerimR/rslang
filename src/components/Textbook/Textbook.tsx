import React, { FC, useEffect, useState } from "react";
import { TWord } from "../../@types/words";
import WordCard from "../WordCard/WordCard";
import { getWords } from "../../apiHelpers/words/wordsController";
// import { ClassNames } from "@emotion/react";
// import { collapseClasses } from "@mui/material";
import classes from "./CardsContainer.module.scss"
import arrowRIcon from '../../assets/icons/arrowR.svg';
import arrowLIcon from '../../assets/icons/arrowL.svg';
// import Pagination from '../Pagination/Pagination';
import Paginationmui from '../Pagination/Paginationmui';
import CardsContainer from "../CardsContainer/CardsContainer";
import Units from "../Units/Units";




const Textbook: FC = () => {
  const [page, setPage] = useState<number>(0);
  const updatePage = (x:number): number => { setPage(x); return x};

  const [unit, setUnit] = useState(0);
  const updateUnit = (u:number): number => { setUnit(u); return u};  

  let [data, setData] = useState<TWord[]>();
  const getData = async () => {
    const res = await getWords(unit, page);
    setData(res);
  }
  useEffect(()=>{getData()}, [page, unit]);

  return(
    <div>
      <Units updateUnit={updateUnit}/>
      <Paginationmui updatePage={updatePage} />
      <CardsContainer data={data!} />
      
    </div>
  );
}

export default Textbook;