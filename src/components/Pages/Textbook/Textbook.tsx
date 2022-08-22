import React, { useEffect, useState } from 'react';
import { TWord } from "../../../@types/words";
import { getWords } from "../../../apiHelpers/words/wordsController";
import Units from "./Units/Units";

const Textbook: React.FC = () => {

  const [unit, setUnit] = useState(0);
  const updateUnit = (u:number): number => { setUnit(u); return u};  

  let [data, setData] = useState<TWord[]>();
  const getData = async () => {
    const res = await getWords(unit, 1);
    setData(res);
  }

  return(
    <div>
      <Units updateUnit={updateUnit}/>
    </div>
  );
}

export default Textbook;