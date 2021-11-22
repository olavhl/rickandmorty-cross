import Axios from 'axios';

Axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const getAllCharacters = async () => {
    try {
        const res = await Axios.get("character")
        return res.data
    } catch (e) {
        console.log("Error fetching characters from API")
    }
}

const getCharacter = async (character: number | string) => {
    try {
        const res = await Axios.get("character")
        return res.data
    } catch (e) {
        console.log("Error fetching characters from API")
    }
}

export default { getAllCharacters, getCharacter };