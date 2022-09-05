import React, { useState } from 'react';
import { TWord } from '../../@types/words';
import WordCard from './WordCards/WordCard';
import classes from './CardsContainer.module.scss';
import { Link } from 'react-router-dom';
import { useLearnedWordsContext } from '../Context/LearnedWordsContext';
import Modal from '../Modal/Modal';
import Game from '../Games/Game/Game';

const CardsContainer: React.FC<{
  data: TWord[];
  unitColor: string;
  inComplexComponent?: boolean;
  inTextbook?: boolean;
  unit?: string;
  page?: number;
}> = (props) => {
  const LearnedWordsContext = useLearnedWordsContext();

  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [game, setGame] = useState<string>('');

  const pageIsLearned = props.data?.every(
    (word) => LearnedWordsContext.learnedWords.filter((el) => el.id === word.id).length > 0,
  )
    ? true
    : false;

  const wordCard = props.data?.map((el) => {
    return (
      <WordCard
        id={el.id}
        key={el.id}
        unitColor={props.unitColor}
        inComplexComponent={props.inComplexComponent}
      />
    );
  });

  return (
    <>
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={`${props.inTextbook ? classes.textbook_games : classes.none}`}>
            <button
              className={`${classes.game_sprint} ${pageIsLearned ? classes.faded : ''}`}
              disabled={pageIsLearned ? true : false}
              onClick={() => {
                setGame('sprint');
                setIsGameStart(true);
              }}
            >
              Спринт
            </button>
            <button
              className={`${classes.game_audio} ${pageIsLearned ? classes.faded : ''}`}
              disabled={pageIsLearned ? true : false}
              onClick={() => {
                setGame('audiocall');
                setIsGameStart(true);
              }}
            >
              Аудиовызов
            </button>
            <button className={classes.fakeGame}></button>
          </div>
          {/* if it is a textbook and all the words on the page are learned */}
          {props.inTextbook && pageIsLearned ? (
            <p className={classes.allLearned}>Все слова выучены</p>
          ) : (
            <div className={classes.cards_container}>
              {wordCard}
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={isGameStart}
        handleClose={() => {
          setIsGameStart(false);
        }}
      >
        <Game difficultyLevel={props.unit!} game={game} page={props.page} />
      </Modal>
    </>
  );
};

export default CardsContainer;
