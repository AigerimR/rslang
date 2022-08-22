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




const CardsContainer = (props: {data:TWord[]}) => {

  // let [data, setData] = useState<TWord[]>();
  // const getData = async () => {
  //   const res = await getWords(1,props.page);
  //   setData(res);
  // }
  // useEffect(()=>{getData()}, []);


    let wordCard = props.data?.map(el=>{
      return (
        // <div>
          <WordCard id={el.id} key={el.id}/>
        // </div>
      );
    })
    // wordCard.addEventListener()
  return(
    <div>
      <div className={classes.cards_container}>
        {wordCard}
      </div>
      {/* <Paginationmui updatePage={updatePage} /> */}
      
    </div>
  )
}

export default CardsContainer;