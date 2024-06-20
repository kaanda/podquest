import express from "express"
import { getTrackInfo, artistInfo, getGenresMusic, getShow, getAlbumId, getAlbumsByArtistId } from "./podquest-service.js"

const podquestRouter = express.Router()

//criando uma rota para pegar informações de uma música- https://localhost:3000/podquest/track-info
podquestRouter.get('/track-info', async (req, res) => {
    const trackInfo = await getTrackInfo();
    console.log('trackInfo', trackInfo);
    res.json(trackInfo)
})

podquestRouter.get('/album/:album_id', async (req, res) => {
    const { album_id } = req.params;
    if (!album_id) {
        res.status(400).send('Precisa ser passado o id do album');
    }
    const album = await getAlbumId(album_id);
    res.json(album);
});

podquestRouter.get('/artist-info/:artist_id', async (req, res) => {
    const { artist_id } = req.params;
    
    if (!artist_id) {
      res.status(400).send('Add um id válido do artista')
    }

    const artist = await artistInfo(artist_id);
    res.json(artist);
});

podquestRouter.get('/show/:show_id', async (req, res) => {
    const {show_id} = req.params // criei essa const pq o show_id é um parâmetro da rota e preciso pegar ele para passar para a função getShow
    if (!show_id){
        res.status(400).send('Add um id válido para o podcast desejado')
    }
    const show = await getShow(show_id);
    res.json(show);
})

podquestRouter.get('/genresMusic', async (req, res) => {
    const genresMusic = await getGenresMusic();
    if (!genresMusic) {
        res.status(404).send('Nenhum gênero encontrado');
    }
    res.json(genresMusic);
})

podquestRouter.get('/albums-artist/:artist_id', async (req, res) => {
    const { artist_id } = req.params;
    
    if (!artist_id) {
      res.status(400).send('Add um id válido do artista')
    }

    const artist = await getAlbumsByArtistId(artist_id);
    res.json(artist);
});

export { podquestRouter }