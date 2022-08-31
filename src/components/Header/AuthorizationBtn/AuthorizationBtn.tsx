import React, { useContext, useEffect } from 'react';
import classes from './authorizationBtn.module.scss';
import { Link } from 'react-router-dom';
import CommonContext from '../../Context/CommonContext';
import { deleteUserWord, getAllUserWords, getUserComplexWords, getUserLearnedWords } from '../../../apiHelpers/users/usersController';
import ComplexWordsContext from '../../Context/ComplexWordsContext';
import LearnedWordsContext from '../../Context/LearnedWordsContext';

const AuthorizationBtn = () => {
  const { userLogged, setUserLogged } = useContext(CommonContext);
  const handleLogOut = () => {
    setUserLogged(false);
    localStorage.clear();
  }

  const { complexWords, setComplexWords} = useContext(ComplexWordsContext);
  const { learnedWords, setLearnedWords} = useContext(LearnedWordsContext);
  // console.log(complexWords);

  const getComplexWords = async (): Promise<void> => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const res = await getUserComplexWords(userId, token);
    setComplexWords(res);
  }
  useEffect(()=>{userLogged ? getComplexWords() : setComplexWords([])}, [userLogged]);
  //to delete user words
  // getAllUserWords ({userId: localStorage.getItem("userId"), token: localStorage.getItem("token")  })
  // .then(res=> console.log(res)
  // )

  // .then(
  //   res=> {
  //     console.log(res);
      
  //     res.forEach(el=>{

  //   deleteUserWord ({ userId:localStorage.getItem("userId"), wordId: el.wordId, word: { 'difficulty': 'hard', 'optional': {'learned': 'true'} }, token:localStorage.getItem("token") });
  // }
  // )});

  const getLearnedWords = async (): Promise<void> => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const res = await getUserLearnedWords(userId, token);
    setLearnedWords(res);
    // console.log(res);
    
  }
  // console.log(learnedWords);
  
  useEffect(()=>{userLogged ? getLearnedWords() : setLearnedWords([])}, [userLogged]);
  
  return (
    userLogged ? (
      <div>
        <Link to="/authorization" onClick={handleLogOut}><button className={classes.logout_btn}></button></Link>
      </div>
      ) : (
      <div>
        <Link to="/authorization"><button className={classes.enter_btn}></button></Link>
      </div>
      )
  )
};

export default AuthorizationBtn;
