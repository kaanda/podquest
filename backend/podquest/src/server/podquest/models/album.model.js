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
        this.name = name;
        this.artists = artists.name;
        this.release_date = release_date;
        this.total_tracks = total_tracks;
        this.url = external_urls.spotify;
        this.images = images[0];
    }
}

