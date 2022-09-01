import React, { useContext, useEffect, useState } from 'react';
import { TWord } from '../../@types/words';
import WordCard from './WordCards/WordCard';
import classes from './CardsContainer.module.scss'
import LearnedWordsContext from '../Context/LearnedWordsContext';

const CardsContainer: React.FC<{data:TWord[], unitColor:string, inComplexComponent?:boolean, inTextbook?:boolean}> = (props) => {
  const { learnedWords, setLearnedWords} = useContext(LearnedWordsContext);
  
  const wordCard = props.data?.map(el=>{    
    return (
        <WordCard id={el.id} key={el.id} unitColor = {props.unitColor} inComplexComponent = {props.inComplexComponent}/>
        // <WordCard id={el.id} key={el.id} unitColor = {props.unitColor} wordIsComplex = {complexWords.filter(word => word.id === el.id).length > 0 ? true : false}/>
    );
  });

  return(
    <div className={classes.main}>
      {/* if it is a textbook and all the words on the page are learned */}
      {(props.inTextbook && props.data?.every(word => learnedWords.filter(el=> el.id === word.id).length>0)) ? 
        <h2>ALL WORDS ARE LEARNED</h2> : 
        <div className={classes.cards_container}> 
          {wordCard}
        </div>
      }
    </div>
  )
}

export default CardsContainer;