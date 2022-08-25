import React, { createContext, FC } from 'react';

const CommonContext = createContext({
  userLogged: false,
  setUserLogged: (userLogged)=>{},
  // toggleUserLogged: (userLogged: boolean) => {return userLogged = !userLogged},
});
// const CommonContext = createContext({
//   userLogged: false,
//   toggleUserLogged: (userLogged: boolean) => {return userLogged = !userLogged},
// });

export default CommonContext;


// export const LoginContext = createContext({ loggedIn: false, setLoggedIn: (loggedIn: false) => { } })