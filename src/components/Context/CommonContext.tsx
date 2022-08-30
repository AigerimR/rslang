import { createContext } from 'react';

const CommonContext = createContext({
  userLogged: false,
  setUserLogged: (userLogged)=>{},
});

export default CommonContext;