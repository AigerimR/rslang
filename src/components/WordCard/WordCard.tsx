import { TWord } from "../../@types/words";
import React, { FC, useEffect, useState } from "react";
import { getWord } from "../../apiHelpers/words/wordsController";
// import usePromise from "react-promise";
import classes from "./WordCard.module.scss"

// async function getData

const WordCard: FC = () => {
  let [data, setData] = useState<TWord>();
  let id = '5e9f5ee35eb9e72bc21af4a0';
  useEffect(()=>{getData(id)}, []);

  const getData = async (id) => {
    const res = await getWord(id);
    setData(res);
    // return res;
  }
  // const wordEx = (
  //   <><h6>{data.textExample}</h6><p>{data.textExampleTranslate}</p><h6>{data.textMeaning}</h6><p>{data.textMeaningTranslate}</p></>
  // );
  if(data === undefined){
    return  <div>
    </div>
  }
  return (
    <div className={classes.card}>
      <img src={data.image} alt="img" className={classes.img}/>
      <h4 className={classes.card_word}>{data.word}</h4>
      <h5 className={classes.card_trans}>{data.wordTranslate}</h5>
      <p>{data.transcription}</p>
      <button>Play</button>
      {/* <audio src={data.audio} controls /> */}
      {/* audio: "files/01_0002.mp3"
      audioExample: "files/01_0002_example.mp3"
      audioMeaning: "files/01_0002_meaning.mp3" */}
      <div className={classes.innerContent}>
        <h6>{data.textExample}</h6>
        <p>{data.textExampleTranslate}</p>
        <h6>{data.textMeaning}</h6>
        <p>{data.textMeaningTranslate}</p>
      </div>
      <button>add to</button>
      <button>add to</button>
    </div>
  );
}

export default WordCard;