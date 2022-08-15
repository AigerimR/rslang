import React from 'react';
import classes from './style.module.scss';
import img from './assets/rs.jpeg';

const App: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>React 17.0.2 and TypeScript 4 App!🚀</h1>
      <img src={img} alt='' />
      <div className={classes.some}></div>
    </div>
  );
};
export default App;
