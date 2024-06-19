//criando um objeto com as informações de autenticação da API do Spotify
const api = {
    client_id: "e738b44aa0234547aa3318e89e682bf8",
    client_secret: "ea5d7963f2bf49ae8071c030f0818f3c"
}

//criando um token para autenticação na API
const getToken = async () => {
    //pegando as informações de autenticação do objeto api
    const { client_id, client_secret } = api;

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
          }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        },
    });   
    return await response.json(); 
}

//função para pegar informações de uma música
export const getTrackInfo = async () => {
    //pegando o token de autenticação que vem da função getToken
    //access_token é uma var que já existe implicitamente no JS e é usada para acessar o token de autenticação
    const { access_token } = await getToken();
    const response = await fetch("https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
    });
  
    return await response.json();
  }
//função que busca playlist pelo ID -- id válido: 21JZCrPnPEotX1JlZErtTa ou 2GqwbW1lrE5Np2tenmefaB
export const getAudiobookId = async (audiobook_id) => {
    const { access_token } = await getToken();
    const response = await fetch(`https://api.spotify.com/v1/episodes/${audiobook_id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${access_token}` },
    });
    const audiobook = await response.json();
    console.log('audiobook', audiobook);
    return { name: audiobook.name, id: audiobook.id };
}

export const artistInfo = async (artist_id) => {
    const { access_token } = await getToken();
    const response = await fetch(`https://api.spotify.com/v1/artists/${artist_id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${access_token}` },
    });

    const artist = await response.json();
    return { name: artist.name, id: artist.id };
}

//2p0Vx75OmfsXktyLBuLuSf
export const getShow = async (show_id) => {
    const { access_token } = await getToken();
    const response = await fetch(`https://api.spotify.com/v1/shows/${show_id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${access_token}` },    
    });

    const show = await response.json();
    return { description: show.description, 
        id: show.id, 
        name: show.name, 
        publisher: show.publisher, 
        episodes: show.episodes.items.map(episode => ({
            name: episode.name, 
            external_urls: episode.external_urls.spotify,
            id: episode.id
        })     
    )}
}

export const getGenres = async () => {
    const {access_token} = await getToken();
    const response = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds',{
        method: 'GET',
        headers: { 'Authorization': `Bearer ${access_token}` },
    });
    const genres = await response.json();
    return { genres };
}

