import React from 'react';
import classes from './footer.module.scss';
import logoRSSchool from '../../assets/svg/rsschool.svg';
import logoGitHub from '../../assets/svg/github.svg';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.rsschool_group}>
          <a className={classes.rsschool_link} href='https://rs.school/' target='_blank'>
            <img className={classes.rsschool_logo} src={logoRSSchool} alt='RSSchool Logo' />
          </a>
          <p className={classes.year}>2022</p>
        </div>
        <div className={classes.github_group}>
          <a className={classes.github_link} href='https://github.com/solomonya' target='_blank'>
            <img className={`${classes.github_logo} ${classes.aigerim}`} src={logoGitHub} alt='GitHub' />
            <p className={classes.github_name} >Айгерим</p>
          </a>
          <a className={classes.github_link} href='https://github.com/AigerimR' target='_blank'>
            <img className={`${classes.github_logo} ${classes.solomon}`} src={logoGitHub} alt='GitHub' />
            <p className={classes.github_name} >Соломон</p>
          </a>
          <a className={classes.github_link} href='https://github.com/2248lm' target='_blank'>
            <img className={`${classes.github_logo} ${classes.lazzat}`} src={logoGitHub} alt='GitHub' />
            <p className={classes.github_name} >Лаззат</p>
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
