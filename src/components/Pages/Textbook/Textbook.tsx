import React, { useContext, useEffect, useState } from 'react';
import { TWord } from '../../../@types/words';
import { getWords } from '../../../apiHelpers/words/wordsController';
import Units from './Units/Units';
import Paginationmui from './Pagination/Paginationmui';
import CardsContainer from '../../CardsContainer/CardsContainer';
import classes from './Textbook.module.scss'
import { Link } from 'react-router-dom';
import starIcon from '../../../assets/svg/star.svg';
import CommonContext from '../../Context/CommonContext';
import ComplexWordsContext from '../../Context/ComplexWordsContext';
import { getUserComplexWords } from '../../../apiHelpers/users/usersController';


const Textbook: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);

  const [page, setPage] = useState<number>(localStorage.getItem('page') === null ? 0 : +localStorage.getItem('page')!);
  const updatePage = (page:number): void => { setPage(page); localStorage.setItem('page', `${page}`)};

  const [unit, setUnit] = useState(localStorage.getItem('unit') === null ? 0 : +localStorage.getItem('unit')!);
  const [unitColor, setUnitColor] = useState( localStorage.getItem('unitColor') === null ? '#bbd66c' :  localStorage.getItem('unitColor')!);
  const updateUnit = (unit:number, unitColor: string): void => { setUnit(unit); setUnitColor(unitColor); localStorage.setItem('unitColor', `${unitColor}`), localStorage.setItem('unit', `${unit}`);  };  

  const [data, setData] = useState<TWord[]>();
  const getData = async () => {
    const res = await getWords(unit, page).finally(()=>setLoading(false));
    setData(res);
  }

  useEffect(()=>{getData()}, [page, unit]);
  // useEffect(()=>{ localStorage.setItem('page', `${page}`) }, [page]);

  const { userLogged, setUserLogged } = useContext(CommonContext);
  if(loading) return <h2>Loading...</h2>
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
      <CardsContainer data={data!} unitColor = {unitColor} inTextbook = {true}/>
    </div>
  );
}

export default Textbook;