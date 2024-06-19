import { ArtistModel } from "./models/artist.model.js";
import { ShowModel } from "./models/show.model.js";
import { AlbumModel } from "./models/album.model.js";
import { TracksByAlbumModel } from "./models/tracksByAlbum.model.js";

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

//5CG9X521RDFWCuAhlo6QoR
export const artistInfo = async (artist_id) => {
    const { access_token } = await getToken();
    const response = await fetch(`https://api.spotify.com/v1/artists/${artist_id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${access_token}` },
    });

    const artist = await response.json();
    // add model do artist
    return new ArtistModel(artist);
}

//2p0Vx75OmfsXktyLBuLuSf
export const getShow = async (show_id) => {
    const { access_token } = await getToken();
    const response = await fetch(`https://api.spotify.com/v1/shows/${show_id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${access_token}` },    
    });

    const show = await response.json();
    return new ShowModel(show);
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

//3b4E89rxzZQ9zkhgKpj8N4
export const getAlbumId = async (album_id) => {
    const { access_token } = await getToken();
    const response = await fetch(`https://api.spotify.com/v1/albums/${album_id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${access_token}` },
    });

    const album = await response.json();
    return new AlbumModel(album);
}

//3b4E89rxzZQ9zkhgKpj8N4
const getTracksByAlbumId = async (album_id) => {
    const { access_token } = await getToken();
    const response = await fetch(`https://api.spotify.com/v1/albums/${album_id}/tracks`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${access_token}` },
    });
    const tracks = await response.json();
    return tracks.items.map(track => new TracksByAlbumModel(track));
}

//5CG9X521RDFWCuAhlo6QoR
export const getAlbumByArtistId = async (artist_id) => {
    const { access_token } = await getToken();
    const response = await fetch(`https://api.spotify.com/v1/artists/${artist_id}/albums`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${access_token}` },
    });
    const albumsItems = await response.json();
    // const albumsItems = response.items;
    console.log('albumsItem', albumsItems)
    const mountAlbums = await Promise.all(albumsItems.items.map(async (album) => {
        const albumTracks = await getTracksByAlbumId(album.id);
        return { name: album.name, id: album.id, tracks: albumTracks };
}));
    return mountAlbums
}


