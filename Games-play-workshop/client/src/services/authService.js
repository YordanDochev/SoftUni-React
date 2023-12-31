import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
  const response = await request.post(`${baseUrl}/login`, {
    email,
    password,
  });

  return response;
};

export const register = async (email, password) => {
  const response = await request.post(`${baseUrl}/register`, {
    email,
    password,
  });
  return response;
};

export const logout = async () => await request.get(`${baseUrl}/logout`);
