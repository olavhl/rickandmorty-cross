import Axios from 'axios';

Axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

export type CharacterListType = {
    results: [
        character: Character
    ]
}

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

const getAllCharacters = async () => {
    try {
        const res = await Axios.get<CharacterListType>("character")
        return res.data
    } catch (e) {
        throw "Error fetching characters from API " + e
    }
}

const getCharacter = async (character: number | string) => {
    try {
        const res = await Axios.get<CharacterListType>("character")
        return res.data
    } catch (e) {
        throw "Error fetching characters from API " + e
    }
}

export default { getAllCharacters, getCharacter };