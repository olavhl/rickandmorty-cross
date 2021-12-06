export type Character = {
    id: number,
    name: string,
    species: string,
    status: string,
    image: string,
    origin: {
        name: string,
    }
}

export type ApiProps = {
    results: [{
        id: number,
        name: string,
        species: string,
        status: string,
        image: string,
        origin: {
            name: string,
        }
    }
    ]
}

export type Episode = {
    id: number,
    name: string,
    air_date: string
    episode: string;
    characters: [string]
}

export type ApiEpisodeProps = {
    results: [{
        id: number,
        name: string,
        air_date: string
        episode: string;
        characters: [string]
    }
    ]
}