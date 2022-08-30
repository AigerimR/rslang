import React, { createContext, FC } from 'react';

const CommonContext = createContext({
  userLogged: false,
  setUserLogged: (userLogged)=>{},
});

export default CommonContext;