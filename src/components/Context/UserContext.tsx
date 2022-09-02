import { createContext } from 'react';

const UserContext = createContext({
  userLogged: false,
  setUserLogged: (userLogged)=>{},
});

export default UserContext;