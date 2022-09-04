import React, { useContext, useEffect, useState } from 'react';
import { TWord } from '../../../@types/words';
import { getWords } from '../../../apiHelpers/words/wordsController';
import Units from './Units/Units';
import Paginationmui from './Pagination/Paginationmui';
import CardsContainer from '../../CardsContainer/CardsContainer';
import classes from './Textbook.module.scss'
import { Link } from 'react-router-dom';
import starIcon from '../../../assets/svg/star.svg';
import UserContext from '../../Context/UserContext';
import Footer from '../../Footer/Footer';

const Textbook: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);

  const [page, setPage] = useState<number>(localStorage.getItem('page') === null ? 0 : +localStorage.getItem('page')!);
  const updatePage = (page: number): void => { setPage(page); localStorage.setItem('page', `${page}`) };

  const [unit, setUnit] = useState(localStorage.getItem('unit') === null ? 0 : +localStorage.getItem('unit')!);
  const [unitColor, setUnitColor] = useState(localStorage.getItem('unitColor') === null ? '#bbd66c' : localStorage.getItem('unitColor')!);
  const updateUnit = (unit: number, unitColor: string): void => { setUnit(unit); setUnitColor(unitColor); localStorage.setItem('unitColor', `${unitColor}`), localStorage.setItem('unit', `${unit}`); };

  const [data, setData] = useState<TWord[]>();
  const getData = async () => {
    const res = await getWords(unit, page).finally(() => setLoading(false));
    setData(res);
  }

  useEffect(() => { getData() }, [page, unit]);

  const { userLogged, setUserLogged } = useContext(UserContext);
  if (loading) return (
    <section>
      <h2 className={classes.main}>Loading...</h2>
      <Footer />
    </section>
  );

  return (
    <section className={classes.textbook}>
      <div className={classes.container}>
        <h2 className={classes.containerTitle}>Учебник</h2>
        <div className={classes.textbook_header}>
          <div></div>
          <div className={classes.textbook_levels}>
            <Units updateUnit={updateUnit} />
            <Paginationmui updatePage={updatePage} />
          </div>
          <div>
            <Link to="/dictionary" className={userLogged ? classes.item_show : classes.item_none}>
              <button className={classes.game_words}>
                Словарь
                <svg className={classes.btn_icon}>
                  <use href={`${starIcon}#star`} />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <CardsContainer data={data!} unitColor={unitColor} inTextbook={true} />
      </div>
      <Footer />
    </section>
  );
}

export default Textbook;
