import http from "./http";

export const rolesService = {
  getRolesService,
  createRolesService
};

function getRolesService(payload : {perPage: string, page: string}) {
  return http.get(`${process.env.REACT_APP_BASE_URL}/role/?perPage=${payload.perPage}&page=${payload.page}`, );
}

function createRolesService(payload : { name: string, permissions: any }) {
  return http.post(`${process.env.REACT_APP_BASE_URL}/role/`, {
    ...payload
  });
}

 

