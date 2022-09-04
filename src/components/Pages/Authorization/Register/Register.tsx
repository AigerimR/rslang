import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import classes from './register.module.scss'
import { Box, Button, TextField } from '@mui/material';
import tickIcon from '../../../../assets/svg/tick.svg';
import { createUser, loginUser, refreshUserToken } from '../../../../apiHelpers/users/usersController';
import { EStatusCode } from '../../../../enums/serverStatusCode';
import UserContext from '../../../Context/UserContext';

const Register: React.FC = () => {
  const USER_CHECK = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
  const PASSWORD_CHECK = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).{8,20}$/;
  const EMAIL_CHECK = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  const [name, setName] = useState<string>('');
  const [nameValid, setNameValid] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
 
  const [passwordMatch, setPasswordMatch] = useState<string>('');
  const [passwordMatchValid, setPasswordMatchValid] = useState<boolean>(false);

  const [success, setSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const res = USER_CHECK.test(name);
    setNameValid(res);
  }, [name]);

  useEffect(() => {
    const res = EMAIL_CHECK.test(email);
    setEmailValid(res);
  }, [email]);
 
  useEffect(() => {
    const res = PASSWORD_CHECK.test(password);
    setPasswordValid(res);
    const match = password === passwordMatch;
    setPasswordMatchValid(match);
  }, [password, passwordMatch]);

  const { userLogged, setUserLogged } = useContext(UserContext);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    // console.log(name, email, password);
    createUser({'name': name, 'email': email, 'password': password }).then(async (res) => {
      if(res?.status === EStatusCode.Ok) {
        const user = await res.json(); 
        setSuccess(true); 
        loginUser({'email': email, 'password': password} ).then( async (resp)=> {
          localStorage.setItem('userId', resp.userId);
          localStorage.setItem('token', resp.token);
          localStorage.setItem('refreshToken', resp.refreshToken);
          localStorage.setItem('name', resp.name);
          setUserLogged(true);
          // setInterval(
          //   await refreshUserToken( {'userId': resp.userId, 'refreshToken': resp.refreshToken}),
          //   4*60*60
          // )
        })
       return user}
      else if (res?.status === EStatusCode.ExistingUser) {setErrorMessage('Такой пользователь уже существует')}
      else Promise.reject(res);
    });
  }
  if(success) {return (
      <Navigate to="/" />
  )}

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
      <TextField 
        id="name" 
        label={<p>имя <svg className={nameValid ? classes.approved : classes.offscreen}>
                  <use href={`${tickIcon}#tick`} />
                </svg>
              </p>} 
        value={name} 
        onChange={(e) => {setName(e.target.value);}}/>
      <p className = { (name && !nameValid) ? classes.instractions : classes.offscreen}>Не менее 3 символов латинского алфавита</p>

      <TextField id="email"  label={<p>email <svg className={emailValid ? classes.approved : classes.offscreen}>
                  <use href={`${tickIcon}#tick`} />
                </svg>
              </p>} 
        value={email} 
        onChange={(e) => {setEmail(e.target.value);}}/>
      <p className = { (email && !emailValid) ? classes.instractions : classes.offscreen}>Не верный email</p>

      <TextField id="password" 
        label={<p>пароль <svg className={passwordValid ? classes.approved : classes.offscreen}>
                  <use href={`${tickIcon}#tick`} />
                </svg>
              </p>} 
        value={password}
        onChange={(e) => {setPassword(e.target.value);}}/>
      <p className = { (password && !passwordValid) ? classes.instractions : classes.offscreen}>Пароль должен содержать не менее 8 символов; иметь в составе заглавные и строчные буквы, цифру и специальный символ</p>

      <TextField id="passwordMatch" 
        label={<p>подтвердите пароль <svg className={(passwordMatch && passwordMatchValid) ? classes.approved : classes.offscreen}>
                  <use href={`${tickIcon}#tick`} />
                </svg>
              </p>} 
        value={passwordMatch}
        onChange={(e) => {setPasswordMatch(e.target.value);}}
         />
      <p className = { (passwordMatch && !passwordMatchValid) ? classes.instractions : classes.offscreen}>Пароль не совпадает</p>
      <Button type="submit" variant="contained" sx={{width: '100%', mt: '20px', mb: '20px', backgroundColor: '#7bbbc6', '&:hover':{backgroundColor: '#9cd2b4'}}} disabled = {(!nameValid || !emailValid || !passwordValid || !passwordMatchValid) ? true : false}>Зарегистрироваться</Button>
      </Box>
    </>
  );
}

export default Register;