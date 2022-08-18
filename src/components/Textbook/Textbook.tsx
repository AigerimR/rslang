import React, { FC, useEffect, useState } from "react";
import { TWord } from "../../@types/words";
import WordCard from "../WordCard/WordCard";
import { getWords } from "../../apiHelpers/words/wordsController";



const Textbook: FC = () => {
  let [data, setData] = useState<TWord[]>();
  // const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';
  // let id = '5e9f5ee35eb9e72bc21af4a0';
  useEffect(()=>{getData()}, []);

  const getData = async () => {
    const res = await getWords(1,1);
    setData(res);
    // return res;
  }
  
  if(data === undefined){
    return  <div>
    </div>
  }
  else{
    data.forEach(el=>{
      return (
        <div>
          {/* <WordCard id={el.id} /> */}
          {/* <button>AIKA</button> */}
        </div>
      );
    })
  }
  return(
    <div>
      <h2>aika</h2>
    </div>
  )
}

export default Textbook;