export type TUser = {
    name:	string;
    email:	string;
    password:	string;
}
export type TUserLogIn = {
    email:	string;
    password:	string;
}
export type TUserRes = {
    id: string;
    email: string; 
}
export type TUserToken = {
    userId: string;
    refreshToken: string; 
}