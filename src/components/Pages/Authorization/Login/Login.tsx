import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { loginUser, refreshUserToken } from '../../../../apiHelpers/users/usersController';

import classes from './login.module.scss'
import { Box, Button, TextField } from '@mui/material';
import UserContext from '../../../Context/UserContext';

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const [success, setSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { userLogged, setUserLogged } = useContext(UserContext);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    loginUser({'email': email, 'password': password} ).then(async(resp)=> {
      if(resp === 'Неверно указан пароль или email') {setErrorMessage('Неверно указан пароль или email')}
      else{
        setSuccess(true); 
        localStorage.setItem('userId', resp.userId);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('refreshToken', resp.refreshToken);
        localStorage.setItem('name', resp.name);
        setUserLogged(true);
        // setInterval(
        //   await refreshUserToken( {'userId': resp.userId, 'refreshToken': resp.refreshToken}),
        //   4*60*60
        // )
      }
    });
    
  }
  
  if(success) { return <Navigate to="/" />}

  return (
    <>
      <p className={classes.err}>{errorMessage}</p>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mb: 1, mt: 1, width: '100%' },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      > 
      <TextField id="email"  label="email" value={email} onChange={(e) => {setEmail(e.target.value);}}/>
      <TextField id="password" label="пароль" value={password} onChange={(e) => {setPassword(e.target.value);}}/>
      <Button type="submit" variant="contained" sx={{width: '100%', mt: '20px', mb: '20px', backgroundColor: '#7bbbc6', '&:hover':{backgroundColor: '#9cd2b4'} }} disabled = {(!email || !password) ? true : false}>Войти</Button>
      </Box>
    </>
  );
}

export default Login;