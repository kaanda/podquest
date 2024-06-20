import { spotifyHeaders } from '../services/headers/spotify.headers.js';
import { get } from '../services/http.service.js';
import { ArtistModel } from "./models/artist.model.js";
import { ShowModel } from "./models/show.model.js";
import { AlbumModel } from "./models/album.model.js";
import { TracksByAlbumModel } from "./models/tracksByAlbum.model.js";

//5EGJ7e7frJjYja6H4afzoT - bonobo
export const getTrackInfo = async () => {
    //o access_token está dentro do objeto headers e é retornado pela função spotifyHeaders para ser utilizado na requisição
    const headers = await spotifyHeaders();
    const trackInfo = await get("https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", headers);
    return trackInfo
}

//5CG9X521RDFWCuAhlo6QoR
export const artistInfo = async (artist_id) => {
    const headers = await spotifyHeaders();
    const artistInfo = await get(`https://api.spotify.com/v1/artists/${artist_id}`, headers);
    return new ArtistModel(artistInfo);
}

//2p0Vx75OmfsXktyLBuLuSf
export const getShow = async (show_id) => {
    const headers = await spotifyHeaders();
    const show = await get(`https://api.spotify.com/v1/shows/${show_id}`, headers);
    return new ShowModel(show);
}

export const getGenresMusic = async () => {
    const headers = await spotifyHeaders();
    const genresMusic = await get('https://api.spotify.com/v1/recommendations/available-genre-seeds', headers);
    return genresMusic;
}

//3b4E89rxzZQ9zkhgKpj8N4
export const getAlbumId = async (album_id) => {
    const headers = await spotifyHeaders();
    const album = await get(`https://api.spotify.com/v1/albums/${album_id}`, headers);
    return new AlbumModel(album);
}

//3b4E89rxzZQ9zkhgKpj8N4
const getTracksByAlbumId = async (album_id) => {
    const headers = await spotifyHeaders();
    const trackByAlbum = await get(`https://api.spotify.com/v1/albums/${album_id}/tracks`, headers);
    const tracks = trackByAlbum;
    //await response.json(); esse response era o que vinha do fetch, mas como estou usando o get, ele já retorna um json
    return tracks.items.map(track => new TracksByAlbumModel(track));
}

//5CG9X521RDFWCuAhlo6QoR ou 7Brxri4l1ATShikyHXsEr6
export const getAlbumsByArtistId = async (artist_id) => {
    const headers = await spotifyHeaders();
    const albumsByArtist = await get(`https://api.spotify.com/v1/artists/${artist_id}/albums`, headers);
    const albumsItems = albumsByArtist;
    const mountAlbums = await Promise.all(albumsItems.items.map(async (album) => {
        const albumTracks = await getTracksByAlbumId(album.id);
        const albumInfo = new AlbumModel(album);
        return { album_info: albumInfo, tracks_album: albumTracks };
}));
    return mountAlbums
}
