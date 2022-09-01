import React, { useContext, useEffect, useState } from 'react';
import { TWord } from '../../@types/words';
import WordCard from './WordCards/WordCard';
import classes from './CardsContainer.module.scss'
import LearnedWordsContext from '../Context/LearnedWordsContext';
import { Link } from 'react-router-dom';


const CardsContainer: React.FC<{data:TWord[], unitColor:string, inComplexComponent?:boolean, inTextbook?:boolean}> = (props) => {
  const { learnedWords, setLearnedWords} = useContext(LearnedWordsContext);
  const pageIsLearned = props.data?.every(word => learnedWords.filter(el=> el.id === word.id).length>0)? true : false;
//   const [pageIsLearned, setPageIsLearned] = useState<boolean>(false);

//   const checkPage = () =>{
//     if(props.data?.every(word => learnedWords.filter(el=> el.id === word.id).length>0)){
//       setPageIsLearned(true);
//     }
//     else setPageIsLearned(false);
//   }

//   useEffect(()=>{checkPage()}, [learnedWords]);
// console.log(pageIsLearned);

  
  const wordCard = props.data?.map(el=>{    
    return (
        <WordCard id={el.id} key={el.id} unitColor = {props.unitColor} inComplexComponent = {props.inComplexComponent}/>
        // <WordCard id={el.id} key={el.id} unitColor = {props.unitColor} wordIsComplex = {complexWords.filter(word => word.id === el.id).length > 0 ? true : false}/>
    );
  });

  return(
    <div className={classes.main}>
        <div className={`${props.inTextbook ? classes.textbook_games : classes.none}`}>
          {/* <Link to="/sprint-game"><button className={classes.game_sprint} disabled = {props.data?.every(word => learnedWords.filter(el=> el.id === word.id).length>0) ? true : false}>Спринт</button></Link>
          <Link to="/audio-game"><button className={classes.game_audio} disabled = {props.data?.every(word => learnedWords.filter(el=> el.id === word.id).length>0) ? true : false}>Аудиовызов</button></Link> */}
          {/* `${styles.description} ${styles.yellow}` */}
          <Link to="/sprint-game"><button className={`${pageIsLearned ? classes.game_sprint : classes.game_sprint}` } disabled = {pageIsLearned ? true : false}>Спринт</button></Link>
          <Link to="/audio-game"><button className={classes.game_audio} disabled = {pageIsLearned ? true : false}>Аудиовызов</button></Link>
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