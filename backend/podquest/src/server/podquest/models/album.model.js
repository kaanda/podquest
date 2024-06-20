export class AlbumModel{
    constructor({
        id,
        name,
        artists, 
        release_date,
        total_tracks,
        external_urls, 
        images,
    }) 
    {
        this.id = id;
        this.name_album = name;
        this.artists = artists.name;
        this.release_date = release_date;
        this.total_tracks = total_tracks;
        this.url_album = external_urls.spotify;
        this.images = images[0];
    }
}


