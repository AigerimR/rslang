import React, { useContext, useEffect, useState } from 'react';
import { TWord } from '../../../@types/words';
import { getWords } from '../../../apiHelpers/words/wordsController';
import Units from './Units/Units';
import Paginationmui from './Pagination/Paginationmui';
import CardsContainer from '../../CardsContainer/CardsContainer';
import classes from './Textbook.module.scss';
import { Link } from 'react-router-dom';
import starIcon from '../../../assets/svg/star.svg';
import UserContext from '../../Context/UserContext';

const Textbook: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [page, setPage] = useState<number>(() => {
    const currentPage = localStorage.getItem('page');
    if (currentPage !== null) return parseFloat(currentPage);
    return 0;
  });

  const updatePage = (page: number): void => {
    setPage(page);
    localStorage.setItem('page', `${page}`);
  };

  const [unit, setUnit] = useState(() => {
    const currentUnit = localStorage.getItem('unit');
    if (currentUnit !== null) return parseFloat(currentUnit);
    return 0;
  });

  const [unitColor, setUnitColor] = useState(() => {
    const currentColor = localStorage.getItem('color');
    if (currentColor !== null) return currentColor;
    return '#bbd66c';
  });

  const updateUnit = (unit: number, unitColor: string): void => {
    setUnit(unit);
    setUnitColor(unitColor);
    localStorage.setItem('unitColor', `${unitColor}`), localStorage.setItem('unit', `${unit}`);
  };

  const [data, setData] = useState<TWord[]>();
  const getData = async () => {
    const res = await getWords(unit, page).finally(() => setLoading(false));
    setData(res);
  };

  useEffect(() => {
    getData();
  }, [page, unit]);

  const { userLogged, setUserLogged } = useContext(UserContext);
  if (loading) return <h2 className={classes.main}>Loading...</h2>;
  return (
    <section className={classes.textbook}>
      <div className={classes.container}>
        <h2 className={classes.containerTitle}>Учебник</h2>
        <div className={classes.textbook_header}>
          <div></div>
          <div>
            <Units updateUnit={updateUnit} />
            <Paginationmui updatePage={updatePage} />
          </div>
          <Link to='/dictionary' className={userLogged ? classes.item_show : classes.item_none}>
            <button className={classes.game_words}>
              Словарь
              <svg className={classes.btn_icon}>
                <use href={`${starIcon}#star`} />
              </svg>
            </button>
          </Link>
        </div>
        <CardsContainer
          data={data!}
          unitColor={unitColor}
          inTextbook={true}
          unit={unit.toString()}
          page={page}
        />
      </div>
    </section >
  );
};

export default Textbook;
