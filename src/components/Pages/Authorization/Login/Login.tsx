import React, { useContext, useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { createUser, loginUser } from '../../../../apiHelpers/users/usersController';
import { EStatusCode } from '../../../../enums/serverStatusCode';
import tickIcon from '../../../../assets/svg/tick.svg';


import classes from "./login.module.scss"
import { Box, Button, colors, TextField } from '@mui/material';
import { green, grey } from '@mui/material/colors';
import CommonContext from '../../../Context/Context';

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const [success, setSuccess] = useState<Boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {setErrorMessage('')}, [email, password]);
  useEffect(() => {<Navigate to="/" />}, [ success ]);

  const { userLogged, setUserLogged } = useContext(CommonContext);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    loginUser({"email": email, "password": password} ).then(resp=> {
      if(resp === "Неверно указан пароль или email") {setErrorMessage('Неверно указан пароль или email')}
      else{
        setSuccess(true); 
        localStorage.setItem('userId', resp.userID);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('refreshToken', resp.refreshToken);
        localStorage.setItem('userId', resp.userID);
        localStorage.setItem('name', resp.name);
        setUserLogged(true);
      }
    })
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
      {/* <Button type="submit" variant="contained" sx={{width: '100%', mt: '20px', mb: '20px'}} disabled = {(!email || !password) ? true : false}>Войти</Button> */}
      <Button type="submit" variant="contained" sx={{width: '100%', mt: '20px', mb: '20px', backgroundColor: "#ffc300", "&:hover":{backgroundColor: "#f6cf57"} }} disabled = {(!email || !password) ? true : false}>Войти</Button>
      </Box>
    </>
  );
}

export default Login;