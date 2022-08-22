import { TWord } from "../../@types/words";
import React, { FC, useEffect, useState} from "react";
import { getWord } from "../../apiHelpers/words/wordsController";
// import usePromise from "react-promise";
import classes from "./WordCard.module.scss"
import plusIcon from '../../assets/icons/plus.svg';
import tickIcon from '../../assets/icons/tick.svg';
import crossIcon from '../../assets/icons/cross.svg';
import playIcon from '../../assets/icons/play.svg';
import expandIcon from '../../assets/icons/expand.svg';
import expand2Icon from '../../assets/icons/expand2.svg';
import pauseIcon from '../../assets/icons/pause.svg';



// async function getData

const WordCard = (props: {id:string}) => {
  const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';
  let id = props.id;
  
  let [btnSoundOn, setSoundBtn] = useState<Boolean>(true);
  let [btnExpandOn, setExpandBtn] = useState<Boolean>(true);
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
     setSoundBtn(false);
      let audio1 = new Audio (`${BASE_URL}/${data?.audio}`);
      let audio2 = new Audio (`${BASE_URL}/${data?.audioMeaning}`);
      let audio3 = new Audio (`${BASE_URL}/${data?.audioExample}`);
      btn.disabled = true;
      audio1.play();
      audio1.addEventListener('ended', () => audio2.play());
      audio2.addEventListener('ended', () => audio3.play());
      audio3.addEventListener('ended', () => {btn.disabled = false; setSoundBtn(true);
      })
    }
  }

 const playOnIcon = <svg className={classes.btn_icon} fill='black'><use href={`${playIcon}#play`} /></svg>;
 const playOffIcon = <svg className={classes.btn_icon} fill='grey'> <use href={`${playIcon}#play`} /></svg>;
 const expandOnIcon = <svg className={classes.btn_icon} fill='black'><use href={`${expandIcon}#expand`} /></svg>
 const expandOffIcon = <svg className={classes.btn_icon} fill='black'><use href={`${expand2Icon}#expand2`} /></svg>
  // const handleCardExpansion = (e) => {
  //   setExpandBtn(!btnExpandOn);
  // }

  // const handleCaptureExpansion = (e) =>{
  //   console.log(btnExpandOn);
    
  //   // if(btnExpandOn === true || btnSoundOn === true || btnExpandOn && btnSoundOn) {
  //   //   e.currentTarget.style.gridRow = "span 6";  
  //   //   e.currentTarget.style.height= "100%";  
  //   // }
  //   if (btnExpandOn === false && btnSoundOn === false){
  //     e.currentTarget.style.gridRow = "span 1";  
  //     e.currentTarget.style.height = "70px";  
  //   }
  //   else if (btnExpandOn === false){
  //     e.currentTarget.style.gridRow = "span 1";  
  //     e.currentTarget.style.height = "70px";  
  //   }
  //   else if (btnSoundOn === true ||btnExpandOn === true){
  //     e.currentTarget.style.gridRow = "span 6";  
  //     e.currentTarget.style.height= "100%";  
  //   }

  // }

  // const handleExp =(e)=>{
  //   console.log(e.currentTarget);
  //     setExpandBtn(!btnExpandOn);
    
  //   if(btnExpandOn === true) {
  //     e.currentTarget.style.gridRow = "span 6";  
  //     e.currentTarget.style.height= "100%";  
  //   }
  //   else{
  //     e.currentTarget.style.gridRow = "span 1";  
  //     e.currentTarget.style.height = "70px";  
  //   }
    
  // }
  if(data === undefined){
    return  <div>
    </div>
  }
  return (
    <div className={classes.card} key={id}>
    {/* <div className={classes.card} key={id} onClickCapture={handleCaptureExpansion}> */}
      <div>
        <h3 className={classes.card_word}>{data.word}</h3>
        <p className={classes.card_transcript}>{data.transcription}</p>
        {/* <button className={`${classes.btn_round} ${classes.btn_expand}`} id = {id} onClick={handleCardExpansion}>
        { btnExpandOn ? expandOnIcon : expandOffIcon }
        </button> */}
      </div>
      {/* {btnExpandOn ? <div></div> :  */}
      <div>
        <div className={classes.card_header}>
        <h4 className={classes.card_trans}>{data.wordTranslate}</h4>
          <button className={classes.btn_round} onClick={handleAudio}>
            { btnSoundOn ? playOnIcon : playOffIcon }
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
      {/* } */}
    </div>
  );
}

export default WordCard;