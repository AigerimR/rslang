import { TWord } from "../../@types/words";
import React, { FC, useEffect, useState} from "react";
import { getWord } from "../../apiHelpers/words/wordsController";
// import usePromise from "react-promise";
import classes from "./WordCard.module.scss"
import plusIcon from '../../assets/icons/plus.svg';
import tickIcon from '../../assets/icons/tick.svg';
import crossIcon from '../../assets/icons/cross.svg';
import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';


// async function getData

const WordCard = (props: {id:string}) => {
  const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';
  let id = props.id;
  
  let [btnOn, setBtn] = useState<Boolean>(true);
  let [data, setData] = useState<TWord>();

  useEffect(()=>{getData(id)}, []);

  const getData = async (id) => {
    const res = await getWord(id);
    setData(res);
  }

  const handleAudio=(e):void=>{
    let btn = e.currentTarget;
    if(btn.disabled === true) return
    else{
      setBtn(false);
      let audio1 = new Audio (`${BASE_URL}/${data?.audio}`);
      let audio2 = new Audio (`${BASE_URL}/${data?.audioMeaning}`);
      let audio3 = new Audio (`${BASE_URL}/${data?.audioExample}`);
      btn.disabled = true;
      audio1.play();
      audio1.addEventListener('ended', () => audio2.play());
      audio2.addEventListener('ended', () => audio3.play());
      audio3.addEventListener('ended', () => {btn.disabled = false; setBtn(true);
      })
    }
  }

 const playOnIcon = <svg className={classes.btn_icon} fill='black'><use href={`${playIcon}#play`} /></svg>;
 const playOffIcon = <svg className={classes.btn_icon} fill='grey'> <use href={`${playIcon}#play`} /></svg>;
  const handleCardExpansion = () => {
    if(data === undefined){
      return  <div>
      </div>
    }
    return(
      <div className={classes.innerContent}>
        <h4 className={classes.card_trans}>{data.wordTranslate}</h4>
        <img src={`${BASE_URL}/${data.image}`} alt="img" className={classes.card_img}/>
        <h3>Значение</h3>
        <p dangerouslySetInnerHTML={{ __html: data.textMeaning }}></p>
        <p>{data.textMeaningTranslate}</p>
        <h3>Пример</h3>
        <h4>{data.textExample}</h4>
        <p>{data.textExampleTranslate}</p>
        {/* <div className={classes.card_action}>
          <button className={classes.btn_normal}>
            <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${plusIcon}#plus`} />
            </svg>
            В сложные */}
            {/* icon for toggling */}
            {/* <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${tickIcon}#tick`} />
            </svg> */}
          {/* </button>
          <button className={classes.btn_normal}>
            <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${crossIcon}#cross`} />
            </svg>
            Удалить
          </button> */}
        {/* </div> */}
      </div>
    )
  }
  if(data === undefined){
    return  <div>
    </div>
  }
  return (
    <div className={classes.card} key={id}>
    {/* <div className={classes.card} key={id} onMouseEnter={handleCardExpansion}> */}
        <div>
          <h3 className={classes.card_word}>{data.word}</h3>
          <h4 className={classes.card_trans}>{data.wordTranslate}</h4>
        </div>
      <div className={classes.card_header}>
        <p className={classes.card_transcript}>{data.transcription}</p>
        <button className={classes.btn_round} onClick={handleAudio}>
          { btnOn ? playOnIcon : playOffIcon }
        </button>
      </div>
      <div className={classes.innerContent}>
        <img src={`${BASE_URL}/${data.image}`} alt="img" className={classes.card_img}/>
        <h4>Значение</h4>
        <div className={classes.innerContent_text}>
          <h3 dangerouslySetInnerHTML={{ __html: data.textMeaning }}></h3>
          <p>{data.textMeaningTranslate}</p>
        </div>
        <h4>Пример</h4>
        <div className={classes.innerContent_text}>
          <h3 dangerouslySetInnerHTML={{ __html: data.textExample }}></h3>
          <p>{data.textExampleTranslate}</p>
        </div>
        {/* <div className={classes.card_action}>
          <button className={classes.btn_normal}>
            <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${plusIcon}#plus`} />
            </svg>
            В сложные */}
            {/* icon for toggling */}
            {/* <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${tickIcon}#tick`} />
            </svg> */}
          {/* </button>
          <button className={classes.btn_normal}>
            <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${crossIcon}#cross`} />
            </svg>
            Удалить
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default WordCard;