import React from 'react';
import classes from './mainPage.module.scss';
import Introduction from './Introduction/Introduction';
import Description from './Description/Description';
import WaveHeader from '../../Waves/WaveHeader';
import WaveFooter from '../../Waves/WaveFooter';

const MainPage = () => {
  return (
    <div className={classes.main_page_wrapper}>
      <WaveHeader />
      <main className={classes.main_page}>
        <Introduction />
        <Description />
      </main>
      <WaveFooter />
    </div>
  )
};

export default MainPage;
