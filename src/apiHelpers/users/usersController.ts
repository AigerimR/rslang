import { EStatusCode } from './../../enums/serverStatusCode';
import { TUser } from './../../@types/users';
import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://team99-rslang-jsfe2022q1.herokuapp.com';

// export const getWords = (group: number, page: number): Promise<TWord[]> => {
//   return axios
//     .get(`${BASE_URL}/words/?page=${page}&group=${group}`)
//     .then((response) =>
//       response.status === EStatusCode.Ok ? response.data : Promise.reject(response),
//     )
//     .catch((repsonse) => console.log(repsonse));
// };

export const createUser = async (user) => {
  // createUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });

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
  // return await rawResponse.json();
};
// export const createUser = async (user) => {
//   return await fetch(`${BASE_URL}/users`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   })
//   .then((response) =>{
//     if(response.status === EStatusCode.Ok) {return response.json()}
//     else if (response.status === EStatusCode.ExistingUser) {return 'Такой пользователь уже существует'}
//     // else if (response.status === EStatusCode.ExistingUser) {throw( new Error ('Такой пользователь уже существует'))}
//     else Promise.reject(response);
//   }
    
//         // response.status === EStatusCode.Ok ? response.json() : Promise.reject(response),
//       )
//       .catch((e) => console.log(e.message));
//   // return await rawResponse.json();
// };

// createUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });
// -------------------------------------------------------------------
// Console: {
// id: "5ec993df4ca9d600178740ae", 
// email: "hello@user.com"
// }


export const loginUser = async (user) => {
  // loginUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });

  const rawResponse = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();

  return(content);
};

export const getUserToken = async (id) => {
  
  const rawResponse = await fetch(`${BASE_URL}/users/${id}/tokens`, {
    method: 'GET',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // },
    // body: JSON.stringify(user)
  });
  const content = await rawResponse.json();

  return(content);
};

// loginUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });
// -------------------------------------------------------------------
// Console: 
// {
//   "message":"Authenticated",
//   "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzk5M2RmNGNhOWQ2MDAxNzg3NDBhZSIsImlhdCI6MTU5MDI2OTE1OCwiZXhwIjoxNTkwMjgzNTU4fQ.XHKmdY_jk1R7PUbgCZfqH8TxH6XQ0USwPBSKNHMdF6I",
//   "userId":"5ec993df4ca9d600178740ae"
// }
