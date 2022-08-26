import React from "react";
import Modal from "react-modal";
import { TWord } from "../../@types/words";
import WordCard from "./WordCards/WordCard";
import classes from "./CardsContainer.module.scss"

const CardsContainer: React.FC<{data:TWord[], unitColor:string}> = (props) => {
  let wordCard = props.data?.map(el=>{
    return (
        <WordCard id={el.id} key={el.id} unitColor = {props.unitColor}/>
    );
  });

  return(
    <>
    {/* <div > */}
        {/* <Modal isOpen = {true} className={classes.Modal}><h2>AIKA</h2></Modal> */}
        {/* </div> */}
      <div className={classes.cards_container}>
        
        {wordCard}
      </div>
      </>
  )
}

export default CardsContainer;