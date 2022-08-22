import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import classes from "./Pagination.module.scss";
import arrowRIcon from '../../assets/icons/arrowR.svg';
import arrowLIcon from '../../assets/icons/arrowL.svg';


const Pagination: FC = (props) => {
  let currentPage = 1;
  return(
    // <div>Aika</div>
    <div className={classes.cards_pagination}>
        <button className={classes.btn_round}> 
          <svg className={classes.btn_icon} fill='$color-charm-pink'>
            <use href={`${arrowLIcon}#arrowL`} />
          </svg>
        </button>
        {/* className={`${styles.description} ${styles.yellow}`} */}

        <button className={`${classes.btn_round} ${classes.currentPage}`}>{currentPage}</button>
        <button className={classes.btn_round}>2</button>
        <button className={classes.btn_round}>3</button>
        <button className={classes.btn_round}>...</button>
        <button className={classes.btn_round}>28</button>
        <button className={classes.btn_round}>29</button>
        <button className={classes.btn_round}>30</button>
        <button className={classes.btn_round}> 
          <svg className={classes.btn_icon} fill='$color-charm-pink'>
            <use href={`${arrowRIcon}#arrowR`} />
          </svg>
        </button>
      </div>
  );
};

export default Pagination;
