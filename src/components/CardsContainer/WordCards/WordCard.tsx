import { TWord } from "../../../@types/words";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { getWord } from "../../../apiHelpers/words/wordsController";
import classes from "./WordCard.module.scss"
import plusIcon from '../../../assets/svg/plus.svg';
import tickIcon from '../../../assets/svg/tick.svg';
import crossIcon from '../../../assets/svg/cross.svg';
import playIcon from '../../../assets/svg/play.svg';


const WordCard: React.FC<{id: string, unitColor:string}> = (props) => {
  const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';
  let id = props.id;
  let unitColor = props.unitColor;  
  
  let [btnSoundOn, setSoundBtn] = useState<Boolean>(true);
  let [data, setData] = useState<TWord>();
  let [modalIsOpen, setModalIsOpen] = useState<Boolean>(false);

  useEffect(()=>{getData(id)}, []);

  const getData = async (id: string): Promise<void> => {
    const res = await getWord(id);
    setData(res);
  }

  const handleAudio = (e: React.MouseEvent<HTMLButtonElement>):void => {
    let btn = e.currentTarget;
    if (btn.disabled === true) return;
    else {
     setSoundBtn(false);
      let audio1 = new Audio (`${BASE_URL}/${data?.audio}`);
      let audio2 = new Audio (`${BASE_URL}/${data?.audioMeaning}`);
      let audio3 = new Audio (`${BASE_URL}/${data?.audioExample}`);
      btn.disabled = true;
      audio1.play();
      audio1.addEventListener('ended', () => audio2.play());
      audio2.addEventListener('ended', () => audio3.play());
      audio3.addEventListener('ended', () => {btn.disabled = false; setSoundBtn(true);})
    }
  }

 const playOnIcon = <svg className={classes.btn_icon} fill='black'><use href={`${playIcon}#play`} /></svg>;
 const playOffIcon = <svg className={classes.btn_icon} fill='grey'> <use href={`${playIcon}#play`} /></svg>;

  if(data === undefined){
    return  <div>
    </div>
  }
  return (<>
    <Modal isOpen = {modalIsOpen} className={classes.Modal} onRequestClose = {()=> setModalIsOpen(false)}>
      {/* <button onClick={() => setModalIsOpen(false)}>close modal</button> */}
      {/* <div className={classes.card}> */}
   
      <div>
        <div className={classes.card_header}>
          <div>
            <h3 className={classes.card_word}>{data.word}</h3>
            <p className={classes.card_transcript}>{data.transcription}</p>
            <h4 className={classes.card_trans}>{data.wordTranslate}</h4>
          </div>
          <button className={classes.btn_round} onClick={handleAudio}>
            { btnSoundOn ? playOnIcon : playOffIcon }
          </button>
        </div>
        <div className={classes.innerContent}>
          <img src={`${BASE_URL}/${data.image}`} alt="img" className={classes.card_img}/>
          <div>
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
          </div>
          
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
    {/* </div> */}
     </Modal>
 
    <div className={classes.card_small} key={id} style={{ backgroundColor: `${unitColor}` }} onClick = {() => setModalIsOpen(true)}>
      <div>
        <h3 className={classes.card_small_word}>{data.word}</h3>
        <p className={classes.card_small_transcript}>{data.transcription}</p>
      </div>
    </div>
    </>
  );
}

export default WordCard;