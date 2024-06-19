export class ShowModel{
    constructor({
        id,
        name,
        description,
        publisher,
        episodes
    }) 
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.publisher = publisher;
        this.episodes = episodes.items.map(episode => ({
            name: episode.name,
            external_urls: episode.external_urls.spotify,
            id: episode.id
        }));
    }
}
