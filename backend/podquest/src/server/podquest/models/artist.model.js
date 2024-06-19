export class ArtistModel{
    constructor({
        id,
        name,
        external_urls,
        images
    }) 
    {
        this.id = id;
        this.name = name;
        this.url = external_urls.spotify;
        this.images = images[0];
    }
}