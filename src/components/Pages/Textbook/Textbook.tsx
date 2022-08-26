import React, { useContext, useEffect, useState } from 'react';
import { TWord } from "../../../@types/words";
import { getWords } from "../../../apiHelpers/words/wordsController";
import Units from "./Units/Units";
import Paginationmui from './Pagination/Paginationmui';
import CardsContainer from "../../CardsContainer/CardsContainer";
import classes from "./Textbook.module.scss"
import { Link } from 'react-router-dom';
import starIcon from "../../../assets/svg/star.svg";
import CommonContext from '../../Context/Context';


const Textbook: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const updatePage = (page:number): void => { setPage(page);};

  const [unit, setUnit] = useState(0);
  const [unitColor, setUnitColor] = useState('#bbd66c');
  const updateUnit = (unit:number, unitColor: string): void => { setUnit(unit); setUnitColor(unitColor);};  

  let [data, setData] = useState<TWord[]>();
  const getData = async () => {
    const res = await getWords(unit, page);
    setData(res);
  }

  useEffect(()=>{getData()}, [page, unit]);

  const { userLogged, setUserLogged } = useContext(CommonContext);
  
  return(
    <div className={classes.textbook}>
      <div className={classes.textbook_header}>
        <div className={classes.textbook_games}>
          <Link to="/sprint-game"><button className={classes.game_sprint}>Спринт</button></Link>
          <Link to="/audio-game"><button className={classes.game_audio}>Аудиовызов</button></Link>
        </div>
        <div>
          <Units updateUnit={updateUnit}/>
          <Paginationmui updatePage={updatePage} />
        </div>
        <Link to="/dictionary" className={userLogged ? classes.item_show : classes.item_none}>
        {/* <Link to="/dictionary"> */}
        {/* <Link to="/complex-words"> */}
          <button className={classes.game_words}>
            Словарь
            <svg className={classes.btn_icon}>
                <use href={`${starIcon}#star`} />
            </svg>
          </button>
        </Link>
      </div>
      <CardsContainer data={data!} unitColor = {unitColor}/>
    </div>
  );
}

export default Textbook;