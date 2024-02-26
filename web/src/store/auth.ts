// Importando a função 'create' do Zustand para criar um store
import { create } from "zustand";
// Importando o middleware 'persist' do Zustand para persistir o estado
import { persist } from "zustand/middleware";

// Definindo o tipo de estado
type State = {
  token: string;
  profile: any;
  isAuth: boolean;
};

// Definindo o tipo de ações que podem ser executadas no estado
type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
  logout: () => void;
};

// Criando o store Zustand com persistência
export const useAuthStore = create(
  // Utilizando o middleware 'persist' para persistir o estado
  persist<State & Actions>(
    // Função que define o estado inicial e as ações disponíveis
    (set) => ({
      token: "", // Token de autenticação
      profile: null, // Dados do perfil do usuário
      isAuth: false, // Indica se o usuário está autenticado
      // Ação para definir o token e indicar que o usuário está autenticado
      setToken: (newToken: string) => {
        set({ token: newToken, isAuth: true });
      },
      // Ação para definir os dados do perfil do usuário
      setProfile: (profileData: any) => {
        set({ profile: profileData });
      },
      // Ação para realizar o logout, limpando o token, dados do perfil e indicando que o usuário não está autenticado
      logout: () =>
        set(() => ({
          token: "",
          isAuth: false,
          profile: null,
        })),
    }),
    // Configuração do middleware 'persist'
    {
      name: "auth", // Nome do persistor
    }
  )
);
