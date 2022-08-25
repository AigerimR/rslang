import React from 'react';
import classes from './mainPage.module.scss';
import WaveHeader from '../../Waves/WaveHeader';
import WaveFooter from '../../Waves/WaveFooter';
import Introduction from './Introduction/Introduction';
import AboutProject from './AboutProject/AboutProject';
import Team from './Team/Team';

const MainPage = () => {
  return (
    <div className={classes.main_page_wrapper}>
      <WaveHeader />
      <main className={classes.main_page}>
        <Introduction />
        <AboutProject />
        <Team />
      </main>
      <WaveFooter />
    </div>
  )
};

export default MainPage;
