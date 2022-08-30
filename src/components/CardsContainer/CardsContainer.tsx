import React from 'react';
import { TWord } from '../../@types/words';
import WordCard from './WordCards/WordCard';
import classes from './CardsContainer.module.scss'

const CardsContainer: React.FC<{data:TWord[], unitColor:string, inComplexComponent?:boolean}> = (props) => {

  const wordCard = props.data?.map(el=>{    

    return (
        <WordCard id={el.id} key={el.id} unitColor = {props.unitColor} inComplexComponent = {props.inComplexComponent}/>
        // <WordCard id={el.id} key={el.id} unitColor = {props.unitColor} wordIsComplex = {complexWords.filter(word => word.id === el.id).length > 0 ? true : false}/>
    );
  });

  return(
    <>
      <div className={classes.cards_container}>     
        {wordCard}
      </div>
      </>
  )
}

export default CardsContainer;