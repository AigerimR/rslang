import React, { useEffect, useRef, useState } from 'react';
import classes from "./authorization.module.scss"
import { Avatar, Box, Button, TextField } from '@mui/material';
import avatarIcon from '../../../assets/svg/enter.svg';
import { grey } from '@mui/material/colors';

const Login: React.FC = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  }
  
  // useEffect(() => {userRef.current.focus()}, []);
  useEffect(() => {setErrorMessage('')}, [password, email, name]);

  return (
    <>
      {/* <p ref={errorRef}>{errorMessage}</p> */}

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { mb: 1, mt: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
      {/* <LoginBtnBtn className={classes.auth_avatar}/> */}
        </div>
        {/* <Avatar>H</Avatar> */}

      {/* <img src={avatarIcon} alt="" className={classes.auth_avatar}/> */}
      {/* <TextField required id="outlined-required" label="имя" value={name} onChange={handleNameChange}/> */}
      <TextField required id="outlined-required" label="email" />
      <TextField required id="outlined-basic" label="пароль" variant="outlined" />
      {/* <TextField required id="outlined-basic" label="подтвердите пароль" variant="outlined" /> */}
      <Button variant="contained" sx={{width: '100%'}} >Войти</Button>
      </Box>
    </>
  );
}

export default Login;