import React, { useEffect, useState } from 'react';
import classes from './complexWords.module.scss';
import Units from '../../Textbook/Units/Units';
import { TWord, TWordUser } from '../../../../@types/words';
import CardsContainer from '../../../CardsContainer/CardsContainer';
import { useComplexWordsContext } from '../../../Context/ComplexWordsContext';
import Footer from '../../../Footer/Footer';

const ComplexWords: React.FC = () => {
  const [unit, setUnit] = useState(0);
  const [unitColor, setUnitColor] = useState('#bbd66c');
  const [data, setData] = useState<TWord[]>();

  const updateUnit = (unit: number, unitColor: string): void => { setUnit(unit); setUnitColor(unitColor); };

  const ComplexWordsContext = useComplexWordsContext();

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const getData = () => {
    const res = ComplexWordsContext.complexWords?.filter((word) => word.group === unit);
    setData(res);
  }

  useEffect(() => { getData() }, [ComplexWordsContext.complexWords, unit]);

  return (
    <section className={classes.complexW_main}>
      <div className={classes.container}>
        <h2 className={classes.containerTitle}>Сложные слова</h2>
        <Units updateUnit={updateUnit} />
        <br />
        <br />
        {data?.length === 0 ? <p className={classes.complexW_info}>No words yet</p> : <CardsContainer data={data!} unitColor={unitColor} inComplexComponent={true} />}
        <br />
      </div>
      <Footer />
    </section>
  );
}

export default ComplexWords;
