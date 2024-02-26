import axios from "axios";
//vamos pegar o token  do localstorage e colocar no header da requisição, esse token esta na aplicação geral pelo zustand
import { useAuthStore } from "../store/auth";

const authApi = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

//enviando credencial do usuario no header da requisição
authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default authApi;
