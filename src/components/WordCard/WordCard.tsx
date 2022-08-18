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

const WordCard: FC = () => {
  let [data, setData] = useState<TWord>();
  const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';
  let id = '5e9f5ee35eb9e72bc21af4a0';
  useEffect(()=>{getData(id)}, []);
// console.log(this.props);

  const getData = async (id) => {
    const res = await getWord(id);
    setData(res);
    // return res;
  }
  
  if(data === undefined){
    return  <div>
    </div>
  }
  return (
    <div className={classes.card}>
      <div className={classes.card_header}>
        <div>
          <h3 className={classes.card_word}>{data.word}</h3>
          <h5 className={classes.card_trans}>{data.wordTranslate}</h5>
        </div>
      <button className={classes.btn_round}>
        <svg className={classes.btn_icon} fill='$color-charm-pink'>
        {/* <svg className={classes.btn_icon} fill="data.color"> */}
          <use href={`${soundIcon}#sound`} />
        </svg>
      </button>
      </div>
      {/* ${BASE_URL}/words/${id} */}
      <img src={`${BASE_URL}/${data.image}`} alt="img" className={classes.card_img}/>
      {/* <audio src={data.audio} controls /> */}
      {/* audio: "files/01_0002.mp3"
      audioExample: "files/01_0002_example.mp3"
      audioMeaning: "files/01_0002_meaning.mp3" */}
      <div className={classes.innerContent}>
        <p>{data.transcription}</p>
        <h3>Значение</h3>
        <h4>{data.textMeaning}</h4>
        <p>{data.textMeaningTranslate}</p>
        <h3>Пример</h3>
        <h4>{data.textExample}</h4>
        <p>{data.textExampleTranslate}</p>
      </div>
      <div className={classes.card_action}>
      <button className={classes.btn_round}>
        <svg className={classes.btn_icon} fill='$color-charm-pink'>
          <use href={`${plusIcon}#plus`} />
        </svg>
        {/* icon for toggling */}
        {/* <svg className={classes.btn_icon} fill='$color-charm-pink'>
          <use href={`${tickIcon}#tick`} />
        </svg> */}
      </button>
      <button className={classes.btn_round}>
        <svg className={classes.btn_icon} fill='$color-charm-pink'>
          <use href={`${crossIcon}#cross`} />
        </svg>
      </button>
      </div>
    </div>
  );
}

export default WordCard;