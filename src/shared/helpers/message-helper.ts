export const PROVIDER_MESSAGES = {
  authContextFail: 'useAutentication must be used inside a AuthenticationProvider',
  authStateFail: 'useAutenticationState must be used inside a AutenticationProvider',
};

export const AUTH_MESSAGES = {
  createAccountSuccess: 'Cadastro realizado!',
  createAccountFail: 'Ocorreu um erro ao realizar o cadastro!',

  loginFail: 'Ocorreu um erro ao realizar o login',

  updateSuccess: 'Cadastro atualizado com sucesso',
  updateFail: 'Falha ao atualizar cadastro.',
};

export const CONTEXT_MESSAGES = {
  actionNotIdentified: 'Action not identified:',
};

export const SEARCH_MESSAGES = {
  minValue: 'Digite no minimo 3 caracteres.',
};

export const COMIC_MESSAGES = {
  searchFail: '',

  addFavorite: 'Comic adicionada como favorita.',
  failFavorite: 'Falha ao favoritar comic.',

  removeSucess: 'Comic removida dos favoritos.',
  removeFail: 'Falha ao remover comic dos favoritos.',
};

export const CHARACTER_MESSAGES = {
  searchFail: 'Falha ao buscar personagens.',

  addFavorite: 'Personagem adicionado como favorito.',
  failFavorite: 'Falha ao favoritar personagem.',

  removeSucess: 'Personagem removido dos favoritos.',
  removeFail: 'Falha ao remover personagem dos favoritos.',
};
