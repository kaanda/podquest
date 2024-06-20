import { post } from '../http.service.js';

// -> aqui farei toda a parte do spotify header, que é a parte de autenticação e autorização para acessar a API do spotify

//criando um objeto com as informações de autenticação
const api = {
    client_id: 'e738b44aa0234547aa3318e89e682bf8',
    client_secret: 'ea5d7963f2bf49ae8071c030f0818f3c'
}

//criando um token para autenticação na API
const getToken = async () => {
    //pegando as informações de autenticação do objeto api
    const { client_id, client_secret } = api;
    const options = {
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
          }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
        },
    }
    //fazendo a requisição para pegar o token utilizando o post e não o fetch
    const response = await post('https://accounts.spotify.com/api/token', options);  
    //retornando o token em formato json pq no post esse retorno é um objeto e no fetch é uma promise que retorna um objeto, por isso não precisa do .json()
    return response;
}

let token = null;
//essa função serve para pegar o token de autenticação e retornar ele, caso ele não exista, ou retornar o token que já existe
// ela também verifica se o token já expirou, se sim, ela chama a função refreshToken
export const spotifyHeaders = async () => {
  if (!token) {
    const { access_token } = await getToken();
    token = {
      headers: {
        'Authorization': `Bearer ${ access_token }`
      }
    }
  } else {
    const { expires_in, created_at } = token;
    const now = new Date().getTime();
    const diff = (now - created_at) / 1000;
    if (diff > expires_in) {
      refreshToken()
    }
  }  
  return token
}

const refreshToken = async () => {
  token = null;
  return await spotifyHeaders();
}