import React from "react";
import { TWord } from "../../@types/words";
import WordCard from "./WordCards/WordCard";
import classes from "./CardsContainer.module.scss"

const CardsContainer: React.FC<{data:TWord[]}> = (props) => {
  let wordCard = props.data?.map(el=>{
    return (
        <WordCard id={el.id} key={el.id}/>
    );
  });

  return(
      <div className={classes.cards_container}>
        {wordCard}
      </div>
  )
}

export default CardsContainer;