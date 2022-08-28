import React, { FC, useEffect, useState } from 'react';
import classes from './audiocall.module.scss';
import { TAudiocallWord } from '../../../@types/words';
import { getAllAudiocallWords, getPageAudiocallWords } from '../../../apiHelpers/words/wordsController';
import IAudiocallProps from '../../../interfaces/audiocallGame';

const AudioGame: FC<IAudiocallProps> = ({
  difficultyLevel,
  score,
  page,
  handleFinishGame,
  handleScore,
  handleAnswer,
  handleRightAnswer,
  handleCorrectAnswersList,
  handleWrongAnswersList,
}) => {
  const [wordsList, setWords] = useState<TAudiocallWord[] | void>([
    {
      id: '',
      word: '',
      image: '',
      audio: '',
      rightTranslate: '',
      translate: [],
    },
  ]);
  let [index, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [isVolumeUp, setVolumeUp] = useState<boolean>(true);
  const [isAnswerSelected, setAnswerSelected] = useState<boolean>(false);
  const [live, brokenLive]: string[] = ['favorite', 'heart_broken'];
  const [items, setClassName] = useState(new Array(5).fill(classes.audioList_item));
  const [hearts, setBrokenLive] = useState(new Array(5).fill(live));
  const [livesCount, setCount] = useState<number>(0);
  const [missSetBtn, nextSetBtn] = ['Не знаю', 'Следующая']
  const [nextButton, setNextButton] = useState<string>(missSetBtn);
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);

  useEffect(() => {
    const words: Promise<TAudiocallWord[] | void> = page
      ? getPageAudiocallWords(parseFloat(difficultyLevel), page)
      : getAllAudiocallWords(parseFloat(difficultyLevel));
    words.then((words) => {
      new Audio(words[0].audio).play();
      setWords(words)
    })
      .finally(() => setLoading(false))
  }, []);

  const audio = new Audio(wordsList[index].audio);
  const [w0, w1, w2, w3, w4]: string[] = wordsList[index].translate;

  const setNewClasse = (answer: string, word: string, status: boolean) => {
    let correctIndex, wrongIndex: number;
    if (status) {
      [w0, w1, w2, w3, w4].forEach((w, i) => {
        if (w === word) { correctIndex = i; }
      });
      const newClass = items.map(
        (item, i) => i === correctIndex
          ? item = `${classes.audioList_item} ${classes.correctWord}`
          : item
      );
      setClassName(newClass);
    } else {
      [w0, w1, w2, w3, w4].forEach((w, i) => {
        if (w === word) { correctIndex = i; }
        if (w === answer) { wrongIndex = i; }
      });
      const newClass = items.map(
        (item, i) => i === correctIndex
          ? item = `${classes.audioList_item} ${classes.correctWord}`
          : i === wrongIndex
            ? item = `${classes.audioList_item} ${classes.wrongWord}`
            : item
      );
      setClassName(newClass);
    }
  }

  const brokeHeart = (count: number) => {
    hearts.splice(count, 1, brokenLive);
    setBrokenLive(hearts)
    if (livesCount > 4) {
      handleFinishGame(true);
    }
  }

  const checkAnswer = (answer: string, word: string) => {
    if (answer === word) {
      handleScore(score + 10);
      setCorrectAnswerCount(correctAnswerCount + 1);
      handleRightAnswer();
      handleCorrectAnswersList(wordsList[index]);
      setNewClasse(answer, word, true);
    } else {
      handleScore(score);
      handleWrongAnswersList(wordsList[index]);
      setCount(livesCount + 1);
      brokeHeart(livesCount);
      setNewClasse(answer, word, false);
    }
    setNextButton(nextSetBtn);
    setAnswerSelected(true);
    setDisabled(true);
  }

  const handleUserAnswer = (answer: string) => {
    handleAnswer();
    checkAnswer(answer, wordsList[index].rightTranslate);
  }

  const nextPage = () => {
    if (isAnswerSelected === false) {
      handleAnswer();
      handleScore(score);
      handleWrongAnswersList(wordsList[index]);
      setAnswerSelected(true);
      setDisabled(true);
      setNewClasse(wordsList[index].rightTranslate, wordsList[index].rightTranslate, true);
      brokeHeart(livesCount);
      setCount(livesCount + 1);
      setNextButton(nextSetBtn);
    }
    if (nextButton === nextSetBtn) {
      setAnswerSelected(false);
      setDisabled(false);
      setClassName(new Array(5).fill(classes.audioList_item));
      setNextButton(missSetBtn);
      setIndex(index + 1);
      const audio = new Audio(wordsList[index + 1].audio);
      if (livesCount < 5 && correctAnswerCount < 10) { audio.play(); }
    }
    if (livesCount > 4 || correctAnswerCount > 9) {
      handleFinishGame(true);
    }
  }

  if (loading) return <p>Loading...</p>;
  return (
    <div className={classes.audiocallWrapper}>
      <div className={classes.audiocallContainer}>
        <div className={classes.audiocallLives}>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{hearts[0]}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{hearts[1]}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{hearts[2]}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{hearts[3]}</span>
          <span className={`${'material-icons'} ${classes.audiocallLive}`}>{hearts[4]}</span>
        </div>
        <div className={`${'material-icons'} ${classes.audiocall_sound_btn}`}>{isVolumeUp ? 'volume_up' : 'volume_off'}
        </div>
      </div>
      <div className={classes.audiocallContentWrapper}>
        <div className={classes.audiocallNull}
          style={isAnswerSelected ? { display: 'none' } : { display: 'block' }}
          onClick={() => audio.play()}></div>
        <div className={classes.audioOpenWord}
          style={isAnswerSelected ? { display: 'flex' } : { display: 'none' }}>
          <div className={classes.audioOpenWord_img}
            style={{ backgroundImage: `url(${wordsList[index].image})` }}>
          </div>
          <div className={classes.audioOpenWord_context}>
            <span className={classes.audioOpenWord_context_sound}
              onClick={() => audio.play()}></span>
            <span className={classes.audioOpenWord_context_value}>{wordsList[index].word}</span>
          </div>
        </div>
        <fieldset disabled={isDisabled} className={classes.audioList}>
          <label className={items[0]} onChange={() => { handleUserAnswer(w0) }}>
            <input checked={isDisabled} type="radio" id="w0" name="w0" value={w0}></input>
            {w0}
          </label>
          <label className={items[1]} onChange={() => { handleUserAnswer(w1) }}>
            <input checked={isDisabled} type="radio" id="w1" name="w1" value={w1}></input>
            {w1}
          </label>
          <label className={items[2]} onChange={() => { handleUserAnswer(w2) }}>
            <input checked={isDisabled} type="radio" id="w2" name="w2" value={w2}></input>
            {w2}
          </label >
          <label className={items[3]} onChange={() => { handleUserAnswer(w3) }}>
            <input checked={isDisabled} type="radio" id="w3" name="w3" value={w3}></input>
            {w3}
          </label>
          <label className={items[4]} onChange={() => { handleUserAnswer(w4) }}>
            <input checked={isDisabled} type="radio" id="w4" name="w4" value={w4}></input>
            {w4}
          </label>
        </fieldset>
        <button className={classes.audiocallBtn}
          onClick={() => { nextPage() }}> {nextButton}</button>
        <div className={classes.correctAnswerTotal}>
          <div className={classes.correctAnswerPercent}
            style={{ width: `${correctAnswerCount}0%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default AudioGame;
