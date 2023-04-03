import http from "./http";

export const userService = {
  userListService,
  createUserService
};

function userListService(payload : {perPage: string, page: string}) {
  return http.get(`${process.env.REACT_APP_BASE_URL}/user/?perPage=${payload.perPage}&page=${payload.page}`, );
}

function createUserService(payload : { firstName: string, lastName: string, email: string, password: string, userRole: string}) {
  return http.post(`${process.env.REACT_APP_BASE_URL}/user/`, {
    ...payload
  });
}

 

