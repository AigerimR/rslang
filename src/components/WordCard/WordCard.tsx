import { TWord } from "../../@types/words";
import React, { FC, useEffect, useState } from "react";
import { getWord } from "../../apiHelpers/words/wordsController";
// import usePromise from "react-promise";
import classes from "./WordCard.module.scss"
import plusIcon from '../../assets/icons/plus.svg';
import tickIcon from '../../assets/icons/tick.svg';
import crossIcon from '../../assets/icons/cross.svg';
import soundIcon from '../../assets/icons/sound.svg';


// async function getData

const WordCard = (props: {id:string}) => {
  

  let [data, setData] = useState<TWord>();
  const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';
  let id = props.id;
  // let id = '5e9f5ee35eb9e72bc21af4a0';
  useEffect(()=>{getData(id)}, []);
// console.log(this.props);

  const getData = async (id) => {
    const res = await getWord(id);
    setData(res);
  }
  const meaning = <div>{data?.textMeaning}</div>;
  // console.log(meaning);
  
  const handleCardSound = () =>{
    let audio1 = new Audio (`${BASE_URL}/${data?.audio}`);
    let audio2 = new Audio (`${BASE_URL}/${data?.audioMeaning}`);
    let audio3 = new Audio (`${BASE_URL}/${data?.audioExample}`);
    audio1.play();
    audio1.addEventListener('ended', () => audio2.play());
    audio2.addEventListener('ended', () => audio3.play());
  }
  const handleCardExpansion = () => {
    if(data === undefined){
      return  <div>
      </div>
    }
    return(
      <div className={classes.innerContent}>
        <h4 className={classes.card_trans}>{data.wordTranslate}</h4>
        {/* ${BASE_URL}/words/${id} */}
        <img src={`${BASE_URL}/${data.image}`} alt="img" className={classes.card_img}/>
        {/* <audio src={data.audio} controls /> */}
        {/* audio: "files/01_0002.mp3"
        audioExample: "files/01_0002_example.mp3"
        audioMeaning: "files/01_0002_meaning.mp3" */}
        <h3>Значение</h3>
        {meaning}
        <h4>{data.textMeaning}</h4>
        {/* <div dangerouslySetInnerHTML={{_html: data.textMeaning}} /> */}
        <p>{data.textMeaningTranslate}</p>
        <h3>Пример</h3>
        <h4>{data.textExample}</h4>
        <p>{data.textExampleTranslate}</p>
        <div className={classes.card_action}>
          <button className={classes.btn_normal}>
            <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${plusIcon}#plus`} />
            </svg>
            В сложные
            {/* icon for toggling */}
            {/* <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${tickIcon}#tick`} />
            </svg> */}
          </button>
          <button className={classes.btn_normal}>
            <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${crossIcon}#cross`} />
            </svg>
            Удалить
          </button>
        </div>
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
      <div className={classes.card_header}>
        <div>
          {/* <div className={classes.card_read}> */}
            <h3 className={classes.card_word}>{data.word}</h3>
            <p className={classes.card_transcript}>{data.transcription}</p>
          {/* </div> */}
        </div>
        <button className={classes.btn_round} onClick={handleCardSound}>
        
          <svg className={classes.btn_icon} fill='$color-charm-pink'>
          {/* <svg className={classes.btn_icon} fill="data.color"> */}
            <use href={`${soundIcon}#sound`} />
          </svg>
        </button>
      </div>
      <div className={classes.innerContent}>
        <h4 className={classes.card_trans}>{data.wordTranslate}</h4>
        {/* ${BASE_URL}/words/${id} */}
        <img src={`${BASE_URL}/${data.image}`} alt="img" className={classes.card_img}/>
        {/* <audio src={data.audio} controls /> */}
        {/* audio: "files/01_0002.mp3"
        audioExample: "files/01_0002_example.mp3"
        audioMeaning: "files/01_0002_meaning.mp3" */}
        <h3>Значение</h3>
        <h4>{data.textMeaning}</h4>
        <p>{data.textMeaningTranslate}</p>
        <h3>Пример</h3>
        <h4>{data.textExample}</h4>
        <p>{data.textExampleTranslate}</p>
        <div className={classes.card_action}>
          <button className={classes.btn_normal}>
            <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${plusIcon}#plus`} />
            </svg>
            В сложные
            {/* icon for toggling */}
            {/* <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${tickIcon}#tick`} />
            </svg> */}
          </button>
          <button className={classes.btn_normal}>
            <svg className={classes.btn_icon} fill='$color-charm-pink'>
              <use href={`${crossIcon}#cross`} />
            </svg>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default WordCard;