import { EStatusCode } from './../../enums/serverStatusCode';
import { TUser, TUserLogIn } from './../../@types/users';
// import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';

export const createUser = async (user: TUser) => {
  // "name": name, "email": email, "password": password 
  return await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then((response) =>{return response})
      .catch((e) => console.log(e.message));
};

export const loginUser = async (user: TUserLogIn) => {
  // loginUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });

  const content = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then((response) =>
        response.status === EStatusCode.Ok ? response.json() : "Неверно указан пароль или email",
      )
      .catch((repsonse) => console.log(repsonse));
  return(content);
};

// export const getUserToken = async (id) => {
  
//   const rawResponse = await fetch(`${BASE_URL}/users/${id}/tokens`, {
//     method: 'GET',
//     // headers: {
//     //   'Accept': 'application/json',
//     //   'Content-Type': 'application/json'
//     // },
//     // body: JSON.stringify(user)
//   });
//   const content = await rawResponse.json();

//   return(content);
// };
