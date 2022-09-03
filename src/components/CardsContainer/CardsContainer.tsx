import React from 'react';
import { TWord } from '../../@types/words';
import WordCard from './WordCards/WordCard';
import classes from './CardsContainer.module.scss'
import { Link } from 'react-router-dom';
import { useLearnedWordsContext } from '../Context/LearnedWordsContext';


const CardsContainer: React.FC<{data:TWord[], unitColor:string, inComplexComponent?:boolean, inTextbook?:boolean}> = (props) => {
  const LearnedWordsContext  = useLearnedWordsContext();

  const pageIsLearned = props.data?.every(word => LearnedWordsContext.learnedWords.filter(el=> el.id === word.id).length>0)? true : false;
  
  const wordCard = props.data?.map(el=>{    
    return (
        <WordCard id={el.id} key={el.id} unitColor = {props.unitColor} inComplexComponent = {props.inComplexComponent}/>
    );
  });

  return(
    <div className={classes.main}>
        <div className={`${props.inTextbook ? classes.textbook_games : classes.none}`}>
          <Link to="/sprint-game"><button className={ `${classes.game_sprint} ${pageIsLearned ? classes.faded : ''}` } disabled = {pageIsLearned ? true : false}>Спринт</button></Link>
          <Link to="/audio-game"><button className={`${classes.game_audio} ${pageIsLearned ? classes.faded : ''}` } disabled = {pageIsLearned ? true : false}>Аудиовызов</button></Link>
        </div>
      {/* if it is a textbook and all the words on the page are learned */}
      {(props.inTextbook && pageIsLearned) ? 
        <h2>ALL WORDS ARE LEARNED</h2> : 
        <div className={classes.cards_container}> 
          {wordCard}
        </div>
      }
    </div>
  )
}

export default CardsContainer;