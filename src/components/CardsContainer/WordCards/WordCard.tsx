import { TWord } from '../../../@types/words';
import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { getWord } from '../../../apiHelpers/words/wordsController';
import classes from './WordCard.module.scss'
import playIcon from '../../../assets/svg/play.svg';
import starIcon from '../../../assets/svg/star.svg';
import UserContext from '../../Context/UserContext';
import { useComplexWordsContext } from '../../Context/ComplexWordsContext';
import { useLearnedWordsContext } from '../../Context/LearnedWordsContext';


const WordCard: React.FC<{ id: string, unitColor: string, inComplexComponent?: boolean }> = (props) => {
  const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';
  const id = props.id;
  const unitColor = props.unitColor;

  const [btnSoundOn, setSoundBtn] = useState<boolean>(true);
  const [data, setData] = useState<TWord>();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [wordIsComplex, setWordIsComplex] = useState<boolean>(false);
  const [wordIsLearned, setWordIsLearned] = useState<boolean>(false);
  const [deleteWord, setDeleteWord] = useState<boolean>(false);

  const { userLogged, setUserLogged } = useContext(UserContext);

  const LearnedWordsContext = useLearnedWordsContext();
  const ComplexWordsContext = useComplexWordsContext();


  useEffect(() => { getData(id) }, []);
  useEffect(() => { setWordIsComplex(ComplexWordsContext.complexWords.filter(word => word.id === id).length > 0 && userLogged ? true : false) }, [ComplexWordsContext.complexWords]);
  useEffect(() => { setWordIsLearned(LearnedWordsContext.learnedWords.filter(word => word.id === id).length > 0 && userLogged ? true : false) }, [LearnedWordsContext.learnedWords]);

  const getData = async (id: string): Promise<void> => {
    const res = await getWord(id);
    setData(res);
  }

  const handleAudio = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const btn = e.currentTarget;
    if (btn.disabled === true) return;
    else {
      setSoundBtn(false);
      const audio1 = new Audio(`${BASE_URL}/${data?.audio}`);
      const audio2 = new Audio(`${BASE_URL}/${data?.audioMeaning}`);
      const audio3 = new Audio(`${BASE_URL}/${data?.audioExample}`);
      btn.disabled = true;
      audio1.play();
      audio1.addEventListener('ended', () => audio2.play());
      audio2.addEventListener('ended', () => audio3.play());
      audio3.addEventListener('ended', () => { btn.disabled = false; setSoundBtn(true); })
    }
  }

  const playOnIcon = <svg className={classes.btn_icon} fill='black'><use href={`${playIcon}#play`} /></svg>;
  const playOffIcon = <svg className={classes.btn_icon} fill='grey'><use href={`${playIcon}#play`} /></svg>;

  const addToComplexWords = async (wordId: string) => {
    setWordIsComplex(true);
    ComplexWordsContext.addComplexWord(wordId);
  }

  const removeFromComplexWords = async (wordId: string) => {
    setWordIsComplex(false);
    ComplexWordsContext.deleteComplexWord(wordId);
    if (props.inComplexComponent === true) { setDeleteWord(true) }
  }

  const addToLearnedWords = async (wordId: string) => {
    setWordIsLearned(true);
    if (wordIsComplex) {
      await ComplexWordsContext.deleteComplexWord(wordId);
      LearnedWordsContext.addLearnedWord(wordId);
    } else {
      LearnedWordsContext.addLearnedWord(wordId);
    }
  }

  if (data === undefined) {
    return <div>
    </div>
  }

  const body = document.body;
  modalIsOpen ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';

  return (
    <>
      {!deleteWord ?
        <>
          <Modal ariaHideApp={false} isOpen={modalIsOpen} className={classes.Modal} onRequestClose={() => setModalIsOpen(false)}>
            <div className={classes.innerContent}>
              <div>
                <div className={classes.card_header}>
                  <div>
                    <h2 className={classes.card_word}>{data.word}</h2>
                    <p className={classes.card_transcript}>{data.transcription}</p>
                    <h3 className={classes.card_trans}>{data.wordTranslate}</h3>
                  </div>
                  <button className={classes.btn_round} onClick={handleAudio}>
                    {btnSoundOn ? playOnIcon : playOffIcon}
                  </button>
                </div>
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
              <div>
                <img src={`${BASE_URL}/${data.image}`} alt="img" className={classes.card_img} />
                <div className={userLogged ? classes.card_action : classes.card_none}>
                  {wordIsComplex ?
                    <button className={classes.btn_normal} onClick={(e) => removeFromComplexWords(data!.id)}>
                      Вернуть из сложных
                    </button> : <button className={classes.btn_normal} disabled={wordIsLearned ? true : false} onClick={() => addToComplexWords(data!.id)}>
                      В сложные
                    </button>}

                  <button className={classes.btn_normal} disabled={wordIsLearned ? true : false} onClick={() => addToLearnedWords(data!.id)}>
                    В изученные
                  </button>
                </div>
              </div>
            </div>
          </Modal>

          <div className={classes.card_small} key={id} style={{ backgroundColor: `${unitColor}` }} onClick={() => setModalIsOpen(true)}>
            <div className={classes.card_small_header}>
              {wordIsComplex ?
                <p className={classes.card_small_sign}>
                  <svg className={classes.btn_icon}>
                    <use href={`${starIcon}#star`} />
                  </svg>
                </p> : <p className={classes.card_small_sign}></p>}
              <div className={`${wordIsLearned ? classes.faded : ''}`}>
                <h3 className={classes.card_small_word}>{data.word}</h3>
                <p className={classes.card_small_transcript}>{data.transcription}</p>
              </div>
            </div>
          </div>
        </>
        :
        <></>}
    </>
  );
}

export default WordCard;
