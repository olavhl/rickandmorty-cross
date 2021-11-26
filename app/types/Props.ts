export type Character = {
    id: number;
    name: string;
    species: string;
    status: string;
    image: string;
    origin: {
        name: string;
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