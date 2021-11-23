export type CharacterListProps = { characters: [Character] };

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

export type CharacterProps = {
    character: Character
}