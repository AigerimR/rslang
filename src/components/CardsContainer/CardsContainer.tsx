import React, { FC, useEffect, useState } from "react";
import { TWord } from "../../@types/words";
import WordCard from "../WordCard/WordCard";
import { getWords } from "../../apiHelpers/words/wordsController";
import { ClassNames } from "@emotion/react";
import { collapseClasses } from "@mui/material";
import classes from "./CardsContainer.module.scss"




const CardsContainer: FC = () => {
  let [data, setData] = useState<TWord[]>();
  // const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';
  // let id = '5e9f5ee35eb9e72bc21af4a0';
  useEffect(()=>{getData()}, []);

  const getData = async () => {
    const res = await getWords(1,2);
    setData(res);
    // return res;
  }
  
    let wordCard = data?.map(el=>{
      return (
        // <div>
          <WordCard id={el.id} key={el.id}/>
        // </div>
      );
    })
    // wordCard.addEventListener()
  return(
    <div className={classes.cards_container}>
      {wordCard}
    </div>
  )
}

export default CardsContainer;