import React from 'react';
import classes from './mainPage.module.scss';
import WaveHeader from '../../Waves/WaveHeader';
import WaveFooter from '../../Waves/WaveFooter';
import Introduction from './Introduction/Introduction';
import AboutProject from './AboutProject/AboutProject';
import AboutTeam from './AboutTeam/AboutTeam';

const MainPage = () => {
  return (
    <div className={classes.main_page_wrapper}>
      <WaveHeader />
      <main className={classes.main_page}>
        <Introduction />
        <AboutProject />
        <AboutTeam />
      </main>
      <WaveFooter />
    </div>
  )
};

export default MainPage;
